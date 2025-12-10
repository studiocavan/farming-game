import { useState } from 'react'
import { PLANT_TYPES } from '../App'
import './PlotCell.css'

function PlotCell({ plot, onPlantSeed, onWater, onHarvest }) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleClick = () => {
    if (plot.isGrown) {
      onHarvest()
    } else if (plot.plant) {
      onWater()
    }
  }

  const handleDragOver = (e) => {
    if (plot.plant) return // Can't drop if plot has a plant
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDragEnter = (e) => {
    if (plot.plant) return
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)

    if (plot.plant) return // Can't plant if plot already has a plant

    const seedId = parseFloat(e.dataTransfer.getData('seedId'))
    const plantType = e.dataTransfer.getData('plantType')

    if (seedId && plantType) {
      onPlantSeed(seedId, plantType)
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
    if (isDragOver && !plot.plant) className += ' drag-over'
    if (plot.isGrown) className += ' harvestable'
    if (plot.plant && !plot.isGrown) className += ' waterable'
    return className
  }

  return (
    <div
      className={getPlotClass()}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {getPlotContent()}
    </div>
  )
}

export default PlotCell
