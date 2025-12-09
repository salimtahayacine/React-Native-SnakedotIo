import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GAME_CONFIG, COLORS } from '../constants/gameConstants';

const GameBoard = ({ snake, food }) => {
  const renderCell = (x, y) => {
    const isSnake = snake.some(segment => segment.x === x && segment.y === y);
    const isFood = food.x === x && food.y === y;
    const isHead = snake[0].x === x && snake[0].y === y;

    let backgroundColor = COLORS.BACKGROUND;
    if (isSnake) {
      backgroundColor = isHead ? '#66BB6A' : COLORS.SNAKE;
    } else if (isFood) {
      backgroundColor = COLORS.FOOD;
    }

    return (
      <View
        key={`${x}-${y}`}
        style={[
          styles.cell,
          {
            backgroundColor,
            width: GAME_CONFIG.CELL_SIZE,
            height: GAME_CONFIG.CELL_SIZE,
          },
        ]}
      />
    );
  };

  const renderRow = (y) => {
    const cells = [];
    for (let x = 0; x < GAME_CONFIG.GRID_SIZE; x++) {
      cells.push(renderCell(x, y));
    }
    return (
      <View key={y} style={styles.row}>
        {cells}
      </View>
    );
  };

  const rows = [];
  for (let y = 0; y < GAME_CONFIG.GRID_SIZE; y++) {
    rows.push(renderRow(y));
  }

  return <View style={styles.board}>{rows}</View>;
};

const styles = StyleSheet.create({
  board: {
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 2,
    borderColor: COLORS.SNAKE,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 0.5,
    borderColor: COLORS.GRID,
  },
});

export default GameBoard;
