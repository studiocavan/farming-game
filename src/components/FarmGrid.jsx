import PlotCell from './PlotCell'
import './FarmGrid.css'

function FarmGrid({ plots, onPlantSeed, onWater, onHarvest, selectedSeed }) {
  return (
    <div className="farm-grid">
      {plots.map(plot => (
        <PlotCell
          key={plot.id}
          plot={plot}
          onPlantSeed={() => onPlantSeed(plot.id)}
          onWater={() => onWater(plot.id)}
          onHarvest={() => onHarvest(plot.id)}
          selectedSeed={selectedSeed}
        />
      ))}
    </div>
  )
}

export default FarmGrid
