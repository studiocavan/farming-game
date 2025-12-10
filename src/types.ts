export interface PlantType {
  name: string
  cost: number
  growthTime: number
  sellPrice: number
  waterNeeded: number
  emoji: string
}

export interface PlantTypes {
  [key: string]: PlantType
}

export interface Plot {
  id: number
  plant: string | null
  plantedAt: number | null
  waterLevel: number
  isGrown: boolean
}

export interface Seed {
  id: number
  plantType: string
}

export interface GameStatsProps {
  money: number
}

export interface ShopProps {
  plantTypes: PlantTypes
  onBuySeed: (plantType: string) => void
  money: number
}

export interface InventoryProps {
  inventory: Seed[]
  plantTypes: PlantTypes
}

export interface FarmGridProps {
  plots: Plot[]
  onPlantSeed: (plotId: number, seedId: number, plantType: string) => void
  onWater: (plotId: number) => void
  onHarvest: (plotId: number) => void
}

export interface PlotCellProps {
  plot: Plot
  onPlantSeed: (seedId: number, plantType: string) => void
  onWater: () => void
  onHarvest: () => void
}
