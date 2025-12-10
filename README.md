# 🚜 Farming Game

A simple and fun farming simulation game built with React and TypeScript!

## 🎮 Features

### Core Features (Implemented)
- **🎒 Inventory System**: Seeds are stored in a visual inventory after purchase
- **🖱️ Drag & Drop**: Intuitive drag and drop interface to plant seeds
- **🌱 Planting System**: Drag seeds from inventory to farm plots
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

1. **Buy Seeds**: Click on seeds in the shop - they'll go to your inventory
2. **Plant**: Drag seeds from your inventory and drop them on empty farm plots
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
- **TypeScript 5.x**: Static typing and enhanced developer experience
- **Vite 7.2.4**: Build tool and dev server
- **CSS3**: Styling and animations
- **HTML5 Drag and Drop API**: For interactive seed planting

## 📁 Project Structure

```
farming-game/
├── src/
│   ├── components/
│   │   ├── FarmGrid.tsx       # Farm grid container
│   │   ├── FarmGrid.css
│   │   ├── PlotCell.tsx       # Individual plot cell
│   │   ├── PlotCell.css
│   │   ├── Shop.tsx           # Seed shop component
│   │   ├── Shop.css
│   │   ├── Inventory.tsx      # Inventory display component
│   │   ├── Inventory.css
│   │   ├── GameStats.tsx      # Game statistics display
│   │   └── GameStats.css
│   ├── App.tsx                # Main game logic
│   ├── App.css                # Global styles
│   ├── types.ts               # TypeScript type definitions
│   ├── main.tsx               # App entry point
│   └── index.css              # Base styles
├── tsconfig.json              # TypeScript configuration
├── tsconfig.node.json         # TypeScript config for build tools
├── package.json
└── README.md
```

## 🎨 Customization

### Adding New Plant Types

Edit `src/App.tsx` and add a new entry to `PLANT_TYPES`:

```typescript
export const PLANT_TYPES: PlantTypes = {
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

### Type Definitions

All TypeScript types are defined in `src/types.ts`. Key interfaces include:
- `PlantType`: Defines plant properties
- `Plot`: Farm plot state
- `Seed`: Inventory seed item
- Component prop types for type-safe development

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
- Implement local storage for game saves
- Add more plant varieties and special crops

### Development

This project uses TypeScript for type safety and better developer experience. All components are fully typed, and the drag-and-drop functionality uses native HTML5 APIs with proper TypeScript event types.

---

Happy Farming! 🌾
