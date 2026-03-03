import { AlgorithmType, GridType, TileType } from "./types";
  
export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithm) {
    case "BFS":
      return; // TODO: call BFS implementation
    default:
      return; // TODO: handle other algorithms
  }
};
