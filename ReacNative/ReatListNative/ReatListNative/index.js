import { registerRootComponent } from "expo";
import App from "./src/App";
import { TaskProvider } from "./src/context/TaskContext";

function Root() {
  return (
    <TaskProvider>
      <App />
    </TaskProvider>
  );
}

registerRootComponent(Root);