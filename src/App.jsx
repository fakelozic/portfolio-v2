import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>{!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}</>
  );
}

export default App;
