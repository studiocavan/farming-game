import PlotCell from './PlotCell'
import './FarmGrid.css'
import { FarmGridProps } from '../types'

function FarmGrid({ plots, onPlantSeed, onWater, onHarvest }: FarmGridProps) {
  return (
    <div className="farm-grid">
      {plots.map(plot => (
        <PlotCell
          key={plot.id}
          plot={plot}
          onPlantSeed={(seedId, plantType) => onPlantSeed(plot.id, seedId, plantType)}
          onWater={() => onWater(plot.id)}
          onHarvest={() => onHarvest(plot.id)}
        />
      ))}
    </div>
  )
}

export default FarmGrid
