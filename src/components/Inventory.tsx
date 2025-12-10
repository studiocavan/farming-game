import './Inventory.css'
import { InventoryProps, Seed } from '../types'

function Inventory({ inventory, plantTypes }: InventoryProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, seed: Seed): void => {
    e.dataTransfer.setData('seedId', seed.id.toString())
    e.dataTransfer.setData('plantType', seed.plantType)
    e.dataTransfer.effectAllowed = 'move'
  }

  // Group seeds by plant type and count them
  const groupedSeeds = inventory.reduce<Record<string, Seed[]>>((acc, seed) => {
    if (!acc[seed.plantType]) {
      acc[seed.plantType] = []
    }
    acc[seed.plantType].push(seed)
    return acc
  }, {})

  return (
    <div className="inventory">
      <h2>🎒 Inventory</h2>
      {inventory.length === 0 ? (
        <div className="empty-inventory">
          <p>No seeds yet!</p>
          <p>Buy some from the shop above</p>
        </div>
      ) : (
        <div className="inventory-grid">
          {Object.entries(groupedSeeds).map(([plantType, seeds]) => {
            const plant = plantTypes[plantType]
            return (
              <div key={plantType} className="inventory-group">
                <div className="inventory-group-header">
                  <span className="inventory-emoji">{plant.emoji}</span>
                  <span className="inventory-name">{plant.name}</span>
                  <span className="inventory-count">x{seeds.length}</span>
                </div>
                <div className="seed-items">
                  {seeds.map(seed => (
                    <div
                      key={seed.id}
                      className="inventory-seed"
                      draggable
                      onDragStart={(e) => handleDragStart(e, seed)}
                    >
                      <span className="seed-emoji-large">{plant.emoji}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
      <div className="inventory-hint">
        💡 Drag seeds to plots to plant
      </div>
    </div>
  )
}

export default Inventory
