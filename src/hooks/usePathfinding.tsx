import { useContext } from "react";
import { PathfindingContext } from "../context/PathfindingContextInterface";

export const usePathfinding = () => {
    const context = useContext(PathfindingContext)

    if(!context) {
        throw new Error("usePathfinding must be used within a PathfindingProvider")
    }


    return  context;
}