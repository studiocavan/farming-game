import { useState, useEffect } from 'react'
import './App.css'
import FarmGrid from './components/FarmGrid'
import Shop from './components/Shop'
import GameStats from './components/GameStats'
import Inventory from './components/Inventory'

// Plant types configuration
export const PLANT_TYPES = {
  wheat: {
    name: 'Wheat',
    cost: 10,
    growthTime: 5000, // 5 seconds
    sellPrice: 25,
    waterNeeded: 1,
    emoji: '🌾'
  },
  carrot: {
    name: 'Carrot',
    cost: 15,
    growthTime: 8000, // 8 seconds
    sellPrice: 40,
    waterNeeded: 2,
    emoji: '🥕'
  },
  tomato: {
    name: 'Tomato',
    cost: 25,
    growthTime: 12000, // 12 seconds
    sellPrice: 70,
    waterNeeded: 3,
    emoji: '🍅'
  },
  corn: {
    name: 'Corn',
    cost: 30,
    growthTime: 15000, // 15 seconds
    sellPrice: 90,
    waterNeeded: 3,
    emoji: '🌽'
  }
}

function App() {
  // Game state
  const [money, setMoney] = useState(100)
  const [inventory, setInventory] = useState([])
  const [farmPlots, setFarmPlots] = useState(
    Array(25).fill(null).map((_, i) => ({
      id: i,
      plant: null,
      plantedAt: null,
      waterLevel: 0,
      isGrown: false
    }))
  )

  // Update plant growth
  useEffect(() => {
    const interval = setInterval(() => {
      setFarmPlots(plots =>
        plots.map(plot => {
          if (plot.plant && !plot.isGrown) {
            const elapsed = Date.now() - plot.plantedAt
            const plantType = PLANT_TYPES[plot.plant]

            if (elapsed >= plantType.growthTime && plot.waterLevel >= plantType.waterNeeded) {
              return { ...plot, isGrown: true }
            }
          }
          return plot
        })
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleBuySeed = (plantType) => {
    const plant = PLANT_TYPES[plantType]
    if (money >= plant.cost) {
      setMoney(money - plant.cost)
      // Add seed to inventory
      setInventory([...inventory, {
        id: Date.now() + Math.random(), // Unique ID for each seed
        plantType: plantType
      }])
    }
  }

  const handlePlantSeed = (plotId, seedId, plantType) => {
    const plot = farmPlots[plotId]
    if (plot.plant) return // Already has a plant

    // Plant the seed
    setFarmPlots(plots =>
      plots.map(p =>
        p.id === plotId
          ? { ...p, plant: plantType, plantedAt: Date.now(), waterLevel: 0, isGrown: false }
          : p
      )
    )

    // Remove seed from inventory
    setInventory(inventory.filter(seed => seed.id !== seedId))
  }

  const handleWaterPlant = (plotId) => {
    setFarmPlots(plots =>
      plots.map(p =>
        p.id === plotId && p.plant && !p.isGrown
          ? { ...p, waterLevel: p.waterLevel + 1 }
          : p
      )
    )
  }

  const handleHarvest = (plotId) => {
    const plot = farmPlots[plotId]
    if (!plot.isGrown) return

    const plantType = PLANT_TYPES[plot.plant]
    setMoney(money + plantType.sellPrice)

    setFarmPlots(plots =>
      plots.map(p =>
        p.id === plotId
          ? { ...p, plant: null, plantedAt: null, waterLevel: 0, isGrown: false }
          : p
      )
    )
  }

  return (
    <div className="game-container">
      <h1>🚜 Farming Game</h1>

      <GameStats money={money} />

      <div className="main-game">
        <div className="left-panel">
          <Shop
            plantTypes={PLANT_TYPES}
            onBuySeed={handleBuySeed}
            money={money}
          />
          <Inventory
            inventory={inventory}
            plantTypes={PLANT_TYPES}
          />
        </div>

        <div className="farm-area">
          <FarmGrid
            plots={farmPlots}
            onPlantSeed={handlePlantSeed}
            onWater={handleWaterPlant}
            onHarvest={handleHarvest}
          />
        </div>
      </div>

      <div className="instructions">
        <h3>How to Play:</h3>
        <ul>
          <li>💰 Buy seeds from the shop - they go to your inventory</li>
          <li>🌱 Drag seeds from inventory and drop on empty plots to plant</li>
          <li>💧 Water plants to help them grow (click on planted seeds)</li>
          <li>🌾 Harvest grown plants by clicking them</li>
          <li>💵 Sell harvested crops automatically for profit!</li>
        </ul>
      </div>
    </div>
  )
}

export default App
