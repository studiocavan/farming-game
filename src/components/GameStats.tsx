import './GameStats.css'
import { GameStatsProps } from '../types'

function GameStats({ money }: GameStatsProps) {
  return (
    <div className="game-stats">
      <div className="stat-item">
        <span className="stat-icon">💰</span>
        <span className="stat-label">Money:</span>
        <span className="stat-value">${money}</span>
      </div>
    </div>
  )
}

export default GameStats
