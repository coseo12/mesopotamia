//@ts-ignore
import BABYLON from "http://localhost:3000/core.js";

const canvas = document.createElement("canvas");
canvas.setAttribute("id", "renderCanvas");
document.body.appendChild(canvas);

const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

// BABYLON.SceneLoader.ImportMeshAsync(
//   "",
//   "https://assets.babylonjs.com/meshes/",
//   "box.babylon"
// );

const camera = new BABYLON.ArcRotateCamera(
  "camera",
  -Math.PI / 2,
  Math.PI / 2.5,
  10,
  new BABYLON.Vector3(0, 0, 0)
);

camera.attachControl(canvas, true);

const light = new BABYLON.HemisphericLight(
  "light",
  new BABYLON.Vector3(1, 1, 0)
);

const box = BABYLON.MeshBuilder.CreateBox("box", {});
box.position.y = 0.5;

const ground = BABYLON.MeshBuilder.CreateGround("ground", {
  width: 10,
  height: 10,
});

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
