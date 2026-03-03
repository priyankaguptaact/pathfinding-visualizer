import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { initFunctionCost, initHeuristicCost } from "../../../utils/heuristics";
import { GridType, TileType } from "../../../utils/types";
  
export const aStar = (
  grid: GridType,
  startTile: TileType,
  endTile: TileType
) => {
  const traversedTiles = []; // Initialize an array to store traversed tiles
  const heuristicCost = initHeuristicCost(grid, endTile); // Initialize the heuristic cost for each tile
  const functionCost = initFunctionCost(); // Initialize the function cost for each tile
  const base = grid[startTile.row][startTile.col]; // Get the start tile from the grid
  base.distance = 0; // Set the distance of the start tile to 0
  functionCost[base.row][base.col] =
    base.distance + heuristicCost[base.row][base.col]; // Calculate the initial function cost for the start tile
  base.isTraversed = true; // Mark the start tile as traversed
  const untraversedTiles = [base]; // Initialize the queue with the start tile
  
  while (untraversedTiles.length > 0) {
    // Continue while there are untraversed tiles
    untraversedTiles.sort((a, b) => {
      // Sort the queue by function cost
      if (functionCost[a.row][a.col] === functionCost[b.row][b.col]) {
        // In a tie, choose the path which has made the most progress
        // so far, i.e. the one with the shortest heuristic distance
        // remaining.
        return b.distance - a.distance; // Sort by distance if function costs are equal
      }
      return functionCost[a.row][a.col] - functionCost[b.row][b.col]; // Sort by function cost
    });
    const currentTile = untraversedTiles.shift(); // Get the tile with the smallest function cost
    if (currentTile) {
      // If the current tile is valid
      if (currentTile.isWall) continue; // Skip if the tile is a wall
      if (currentTile.distance === Infinity) break; // Break if the tile's distance is infinity
      currentTile.isTraversed = true; // Mark the tile as traversed
      traversedTiles.push(currentTile); // Add the tile to the traversed tiles array
      if (isEqual(currentTile, endTile)) break; // Break if the tile is the end tile
  
      const neighbors = getUntraversedNeighbors(grid, currentTile); // Get untraversed neighbors of the tile
      for (let i = 0; i < neighbors.length; i += 1) {
        // Iterate through each neighbor
        const distanceToNeighbor = currentTile.distance + 1; 
        if (distanceToNeighbor < neighbors[i].distance) {
          
          dropFromQueue(neighbors[i], untraversedTiles);
          neighbors[i].distance = distanceToNeighbor; 
          functionCost[neighbors[i].row][neighbors[i].col] =
            neighbors[i].distance +
            heuristicCost[neighbors[i].row][neighbors[i].col]; 
          neighbors[i].parent = currentTile; 
          untraversedTiles.push(neighbors[i]); 
        }
      }
    }
  }
  
  const path = []; 
  let current = grid[endTile.row][endTile.col]; 
  while (current !== null) {
   
    current.isPath = true; 
    path.unshift(current); 
    current = current.parent!; 
  }
  
  return { traversedTiles, path }; 
};