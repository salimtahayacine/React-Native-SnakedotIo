import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/gameConstants';

const GameControls = ({ onDirectionChange, disabled }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onDirectionChange('UP')}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>▲</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middleRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onDirectionChange('LEFT')}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>◀</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onDirectionChange('RIGHT')}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>▶</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onDirectionChange('DOWN')}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>▼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.SNAKE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#66BB6A',
  },
  buttonText: {
    color: COLORS.TEXT,
    fontSize: 30,
    fontWeight: 'bold',
  },
  spacer: {
    width: 20,
  },
});

export default GameControls;
