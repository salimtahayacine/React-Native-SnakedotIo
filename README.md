# React Native Snake.io 🐍

A classic Snake game built with React Native and Expo. Control the snake, eat food, grow longer, and try to beat your high score without hitting walls or yourself!

## Features

- 🎮 Classic Snake gameplay
- 📱 Mobile-optimized touch controls
- 🏆 Score tracking with high score
- ⚡ Progressive difficulty (speed increases as you grow)
- 🎨 Clean, modern UI with dark theme
- ⏸️ Pause/Resume functionality

## Screenshots

The game features:
- A 20x20 grid game board
- Directional arrow button controls
- Score and high score display
- Start, pause, and resume controls

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (installed automatically with npx)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/salimtahayacine/React-Native-SnakedotIo.git
cd React-Native-SnakedotIo
```

2. Install dependencies:
```bash
npm install
```

## Running the App

### Start the development server:
```bash
npm start
```

This will open Expo Dev Tools in your browser.

### Run on specific platforms:

**iOS (requires macOS):**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

**Web:**
```bash
npm run web
```

### Using Expo Go App (Recommended for quick testing)

1. Install the Expo Go app on your iOS or Android device
2. Scan the QR code shown in the terminal or Expo Dev Tools
3. The app will load on your device

## How to Play

1. Press **Start Game** to begin
2. Use the directional arrow buttons to control the snake:
   - ▲ Move Up
   - ▼ Move Down
   - ◀ Move Left
   - ▶ Move Right
3. Eat the red food blocks to grow and score points
4. Avoid hitting the walls or yourself
5. The game gets faster as you grow longer
6. Use **Pause** to take a break
7. Try to beat your high score!

## Game Rules

- Each food eaten gives you **10 points**
- The snake grows by one segment for each food eaten
- Game speed increases progressively as you score
- Collision with walls or your own body ends the game
- You cannot reverse 180 degrees (e.g., if moving right, you can't go directly left)

## Project Structure

```
React-Native-SnakedotIo/
├── App.js                    # Main app component with game logic
├── components/
│   ├── GameBoard.js         # Renders the game grid, snake, and food
│   ├── GameControls.js      # Touch controls for snake movement
│   └── GameInfo.js          # Score display and game controls
├── constants/
│   └── gameConstants.js     # Game configuration and constants
├── utils/
│   └── gameUtils.js         # Game logic utilities
├── assets/                  # App assets
└── package.json             # Dependencies and scripts
```

## Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **JavaScript (ES6+)** - Programming language
- **React Hooks** - State management

## Configuration

You can modify game settings in `constants/gameConstants.js`:

```javascript
export const GAME_CONFIG = {
  GRID_SIZE: 20,           // Grid dimensions (20x20)
  CELL_SIZE: 15,           // Size of each cell in pixels
  INITIAL_SPEED: 150,      // Initial game speed in ms
  MIN_SPEED: 50,           // Maximum speed (fastest)
  SPEED_INCREMENT: 5,      // Speed increase per food eaten
};
```

## Development

### Making Changes

1. Edit the source files
2. Changes will automatically reload in Expo
3. Check the console for any errors

### Building for Production

**iOS:**
```bash
expo build:ios
```

**Android:**
```bash
expo build:android
```

For detailed build instructions, see the [Expo documentation](https://docs.expo.dev/build/setup/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

Created by Salim Tahayacine

## Acknowledgments

- Inspired by the classic Snake game
- Built with React Native and Expo
- Special thanks to the React Native community

---

Enjoy playing Snake.io! 🐍🎮
