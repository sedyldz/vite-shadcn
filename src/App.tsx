import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Shadcn/ui</h1>
      <div className="card flex  gap-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          Default Button: Count is {count}
        </Button>
        <Button
          variant="destructive"
          onClick={() => setCount((count) => count - 1)}
        >
          Destructive Button
        </Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
        <Button size="sm">Small Button</Button>
        <Button size="lg">Large Button</Button>
        <Button size="icon">
          <span>🔔</span>
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
