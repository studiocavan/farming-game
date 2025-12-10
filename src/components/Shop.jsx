import './Shop.css'

function Shop({ plantTypes, onBuySeed, money }) {
  return (
    <div className="shop">
      <h2>🏪 Seed Shop</h2>
      <div className="seed-list">
        {Object.entries(plantTypes).map(([key, plant]) => {
          const canAfford = money >= plant.cost

          return (
            <div
              key={key}
              className={`seed-item ${!canAfford ? 'disabled' : ''}`}
              onClick={() => canAfford && onBuySeed(key)}
            >
              <div className="seed-emoji">{plant.emoji}</div>
              <div className="seed-info">
                <div className="seed-name">{plant.name}</div>
                <div className="seed-stats">
                  <span>💰 ${plant.cost}</span>
                  <span>⏱️ {plant.growthTime / 1000}s</span>
                  <span>💧 {plant.waterNeeded}</span>
                </div>
                <div className="seed-profit">
                  Sells for: ${plant.sellPrice}
                  <span className="profit-margin">
                    (+${plant.sellPrice - plant.cost})
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="shop-hint">
        💡 Click to buy seeds - they'll go to your inventory below
      </div>
    </div>
  )
}

export default Shop
