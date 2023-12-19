import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Stage from "./Stage.jsx";
import { ColorContextProvider } from "./context/color";
import { RangeContextProvider } from "./context/range.jsx";
import { BodyContextProvider } from "./context/body.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <ColorContextProvider>
    <RangeContextProvider>
      <BodyContextProvider>
        <Canvas shadows>
          <Stage />
        </Canvas>
      </BodyContextProvider>
    </RangeContextProvider>
  </ColorContextProvider>
);
