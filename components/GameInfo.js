import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/gameConstants';

const GameInfo = ({ score, highScore, isPlaying, isPaused, onStart, onPause, onResume }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreLabel}>Score</Text>
          <Text style={styles.scoreValue}>{score}</Text>
        </View>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreLabel}>High Score</Text>
          <Text style={styles.scoreValue}>{highScore}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {!isPlaying ? (
          <TouchableOpacity style={styles.startButton} onPress={onStart}>
            <Text style={styles.buttonText}>
              {score > 0 ? 'Play Again' : 'Start Game'}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.pauseButton}
            onPress={isPaused ? onResume : onPause}
          >
            <Text style={styles.buttonText}>
              {isPaused ? 'Resume' : 'Pause'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  scoreBox: {
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    padding: 15,
    borderRadius: 10,
    minWidth: 120,
    borderWidth: 2,
    borderColor: COLORS.SNAKE,
  },
  scoreLabel: {
    color: COLORS.TEXT,
    fontSize: 14,
    marginBottom: 5,
  },
  scoreValue: {
    color: COLORS.SNAKE,
    fontSize: 28,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
  },
  startButton: {
    backgroundColor: COLORS.SNAKE,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#66BB6A',
  },
  pauseButton: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFB74D',
  },
  buttonText: {
    color: COLORS.TEXT,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GameInfo;
