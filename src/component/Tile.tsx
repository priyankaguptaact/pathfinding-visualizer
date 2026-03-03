import { twMerge } from "tailwind-merge";
import {
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  START_TILE_STYLE,
  END_TILE_STYLE,
  WALL_TILE_STYLE,
  PATH_TILE_STYLE,
  MAX_ROWS,
} from "../utils/constants";
  
type Props = {
  row: number;
  column: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
};
  
export function Tile({
  row,
  column,
  isStart,
  isEnd,
  isTraversed,
  isWall,
  isPath,
}: Props) {
  let tileTypeStyle: string;
  if (isStart) tileTypeStyle = START_TILE_STYLE;
  else if (isEnd) tileTypeStyle = END_TILE_STYLE;
  else if (isWall) tileTypeStyle = WALL_TILE_STYLE;
  else if (isPath) tileTypeStyle = PATH_TILE_STYLE;
  else if (isTraversed) tileTypeStyle = TRAVERSED_TILE_STYLE;
  else tileTypeStyle = TILE_STYLE;
  
  // add bottom border on last row; left border on first column
  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : column === 0 ? "border-l" : "";
  
  // (optional) extra edge handling; harmless but explicit
  const edgeStyle =
    row === MAX_ROWS - 1 && column === 0 ? "border-l" : "";
  
  return (
    <div
      id={`${row}-${column}`}
      className={twMerge(tileTypeStyle, borderStyle, edgeStyle)}
    />
  );
}