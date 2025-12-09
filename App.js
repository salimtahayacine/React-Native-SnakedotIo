import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, Alert } from 'react-native';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import GameInfo from './components/GameInfo';
import { GAME_CONFIG, DIRECTIONS, COLORS } from './constants/gameConstants';
import {
  generateFood,
  moveSnake,
  growSnake,
  checkSelfCollision,
  checkWallCollision,
  positionEqual,
} from './utils/gameUtils';

export default function App() {
  // Game state
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(GAME_CONFIG.INITIAL_SPEED);

  const gameLoopRef = useRef(null);
  const directionQueueRef = useRef([]);

  // Initialize game
  const initializeGame = () => {
    const initialSnake = [{ x: 10, y: 10 }];
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setDirection(DIRECTIONS.RIGHT);
    setScore(0);
    setGameSpeed(GAME_CONFIG.INITIAL_SPEED);
    directionQueueRef.current = [];
  };

  // Start game
  const startGame = () => {
    initializeGame();
    setIsPlaying(true);
    setIsPaused(false);
  };

  // Pause game
  const pauseGame = () => {
    setIsPaused(true);
  };

  // Resume game
  const resumeGame = () => {
    setIsPaused(false);
  };

  // Handle direction change
  const handleDirectionChange = (newDirection) => {
    if (!isPlaying || isPaused) return;

    const newDir = DIRECTIONS[newDirection];
    const currentDir = directionQueueRef.current.length > 0
      ? directionQueueRef.current[directionQueueRef.current.length - 1]
      : direction;

    // Prevent 180-degree turns
    if (
      (currentDir === DIRECTIONS.UP && newDir !== DIRECTIONS.DOWN) ||
      (currentDir === DIRECTIONS.DOWN && newDir !== DIRECTIONS.UP) ||
      (currentDir === DIRECTIONS.LEFT && newDir !== DIRECTIONS.RIGHT) ||
      (currentDir === DIRECTIONS.RIGHT && newDir !== DIRECTIONS.LEFT)
    ) {
      directionQueueRef.current.push(newDir);
    }
  };

  // Game over
  const gameOver = () => {
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
    }
    Alert.alert(
      'Game Over!',
      `Your score: ${score}\nHigh Score: ${Math.max(score, highScore)}`,
      [{ text: 'OK' }]
    );
  };

  // Main game loop
  useEffect(() => {
    if (!isPlaying || isPaused) {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
      return;
    }

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        // Get next direction from queue or use current
        let nextDirection = direction;
        if (directionQueueRef.current.length > 0) {
          nextDirection = directionQueueRef.current.shift();
          setDirection(nextDirection);
        }

        // Calculate new position
        const newSnake = moveSnake(prevSnake, nextDirection);
        const head = newSnake[0];

        // Check collisions
        if (checkWallCollision(head) || checkSelfCollision(head, prevSnake)) {
          gameOver();
          return prevSnake;
        }

        // Check if food is eaten
        if (positionEqual(head, food)) {
          const grownSnake = growSnake(prevSnake, nextDirection);
          setFood(generateFood(grownSnake));
          setScore((prevScore) => prevScore + 10);
          
          // Increase speed slightly
          setGameSpeed((prevSpeed) => 
            Math.max(GAME_CONFIG.MIN_SPEED, prevSpeed - GAME_CONFIG.SPEED_INCREMENT)
          );
          
          return grownSnake;
        }

        return newSnake;
      });
    }, gameSpeed);

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [isPlaying, isPaused, direction, food, gameSpeed]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>Snake.io</Text>
      </View>

      <GameInfo
        score={score}
        highScore={highScore}
        isPlaying={isPlaying}
        isPaused={isPaused}
        onStart={startGame}
        onPause={pauseGame}
        onResume={resumeGame}
      />

      <View style={styles.gameContainer}>
        <GameBoard snake={snake} food={food} />
      </View>

      <GameControls
        onDirectionChange={handleDirectionChange}
        disabled={!isPlaying || isPaused}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.SNAKE,
    textShadowColor: 'rgba(76, 175, 80, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  gameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
