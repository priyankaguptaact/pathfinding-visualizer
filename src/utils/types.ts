type AlgorithmType =
  | "DIJKSTRA"
  | "A_STAR"
  | "BFS"
  | "DFS";

type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

type TileType = {
    row: number;
    col: number;
    isEnd: boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    isStart: boolean;
    isTraversal: boolean;   
    parent: TileType | null;
}

type GridType = TileType[][];

export type {GridType, TileType, MazeType, AlgorithmType};