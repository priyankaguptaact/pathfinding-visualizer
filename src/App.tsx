import { PathfindingContext, PathfindingProvider } from "./context/PathfindingContextInterface"

function App() {
  return (
    <PathfindingProvider>
    <div className="h-screen flex items-center justify-center bg-black text-white text-3xl">
      Pathfinding Visualizer 🚀
    </div>
    </PathfindingProvider>
  )
}

export default App