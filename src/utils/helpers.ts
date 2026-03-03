export const isEqual = (a: TileType, b: TileType) => {
  return a.row === b.row && a.col === b.col;
};
  
export const isRowColEqual = (row: number, col: number, tile: TileType) => {
  return row === tile.row && col === tile.col;
};
  
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
  
export const getRandInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};