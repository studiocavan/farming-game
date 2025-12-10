# 🚜 Farming Game

A simple and fun farming simulation game built with React!

## 🎮 Features

### Core Features (Implemented)
- **🌱 Planting System**: Buy seeds from the shop and plant them in your farm plots
- **💧 Plant Maintenance**: Water your plants to help them grow
- **🌾 Harvesting**: Harvest mature plants for profit
- **💰 Selling**: Automatically sell harvested crops for money

### Game Mechanics
- **5x5 Farm Grid**: 25 plots to manage
- **4 Plant Types**:
  - 🌾 Wheat (cheap, fast-growing)
  - 🥕 Carrot (medium growth time)
  - 🍅 Tomato (longer growth, higher profit)
  - 🌽 Corn (premium crop with best profit margin)
- **Growth System**: Plants need water to grow - each plant type requires different amounts
- **Visual Feedback**: See plant progress with water bars and animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd farming-game
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production
```bash
npm run build
```

## 🎯 How to Play

1. **Buy Seeds**: Click on a seed in the shop (left panel) to purchase it
2. **Plant**: Click on an empty brown plot to plant your selected seed
3. **Water**: Click on planted seedlings to water them (watch the water bar fill up)
4. **Harvest**: When plants are fully grown (sparkle animation), click to harvest them
5. **Profit**: Harvested crops are automatically sold, adding money to your balance
6. **Repeat**: Use your profits to buy more seeds and expand your farm!

## 💡 Strategy Tips

- Wheat is cheap and fast - great for quick profits early game
- Higher-tier plants require more water but offer better profit margins
- Keep multiple plots active to maximize income
- Plan your farm to maintain a steady income stream

## 🔮 Future Features (Planned)

- 👷 **Worker System**: Hire workers to automate planting, watering, and harvesting
- 🌍 **Farm Expansion**: Unlock more plots and different farm areas
- 🏠 **Building System**: Build a house and other structures
- 🎨 **Decorations**: Customize your farm with decorative items
- 🌿 **More Plant Types**: Additional crops with unique mechanics
- 📊 **Statistics**: Track your farming progress and achievements
- 💾 **Save System**: Persistent game state across sessions

## 🛠️ Technology Stack

- **React 19.2.0**: UI framework
- **Vite 7.2.4**: Build tool and dev server
- **CSS3**: Styling and animations
- **JavaScript (ES6+)**: Game logic

## 📁 Project Structure

```
farming-game/
├── src/
│   ├── components/
│   │   ├── FarmGrid.jsx       # Farm grid container
│   │   ├── FarmGrid.css
│   │   ├── PlotCell.jsx       # Individual plot cell
│   │   ├── PlotCell.css
│   │   ├── Shop.jsx           # Seed shop component
│   │   ├── Shop.css
│   │   ├── GameStats.jsx      # Game statistics display
│   │   └── GameStats.css
│   ├── App.jsx                # Main game logic
│   ├── App.css                # Global styles
│   └── main.jsx               # App entry point
├── package.json
└── README.md
```

## 🎨 Customization

### Adding New Plant Types

Edit `src/App.jsx` and add a new entry to `PLANT_TYPES`:

```javascript
export const PLANT_TYPES = {
  // ... existing plants
  newPlant: {
    name: 'New Plant',
    cost: 50,
    growthTime: 20000,  // 20 seconds
    sellPrice: 150,
    waterNeeded: 4,
    emoji: '🌺'
  }
}
```

### Adjusting Game Balance

Modify values in `PLANT_TYPES` to change:
- `cost`: How much the seed costs
- `growthTime`: How long until the plant matures (milliseconds)
- `sellPrice`: How much you get when harvesting
- `waterNeeded`: How many times you need to water the plant

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and add your own features! Some ideas:
- Add sound effects
- Implement seasons and weather
- Add pests and diseases mechanics
- Create an achievement system
- Add multiplayer functionality

---

Happy Farming! 🌾
