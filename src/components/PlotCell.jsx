import { PLANT_TYPES } from '../App'
import './PlotCell.css'

function PlotCell({ plot, onPlantSeed, onWater, onHarvest, selectedSeed }) {
  const handleClick = () => {
    if (plot.isGrown) {
      onHarvest()
    } else if (plot.plant) {
      onWater()
    } else if (selectedSeed) {
      onPlantSeed()
    }
  }

  const getPlotContent = () => {
    if (!plot.plant) {
      return <span className="empty-plot">🟫</span>
    }

    const plantType = PLANT_TYPES[plot.plant]
    const progress = plot.waterLevel / plantType.waterNeeded

    if (plot.isGrown) {
      return (
        <div className="plant grown">
          <span className="plant-emoji">{plantType.emoji}</span>
          <span className="status">✨ Ready!</span>
        </div>
      )
    }

    return (
      <div className="plant growing">
        <span className="plant-emoji seedling">🌱</span>
        <div className="water-bar">
          <div
            className="water-progress"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="water-count">
          💧 {plot.waterLevel}/{plantType.waterNeeded}
        </span>
      </div>
    )
  }

  const getPlotClass = () => {
    let className = 'plot-cell'
    if (selectedSeed && !plot.plant) className += ' selectable'
    if (plot.isGrown) className += ' harvestable'
    if (plot.plant && !plot.isGrown) className += ' waterable'
    return className
  }

  return (
    <div className={getPlotClass()} onClick={handleClick}>
      {getPlotContent()}
    </div>
  )
}

export default PlotCell
