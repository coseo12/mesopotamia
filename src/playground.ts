//@ts-ignore
// import BABYLON from "http://localhost:3000/core.js";
const BABYLON = window.BABYLON;

const canvas = document.querySelector("#renderCanvas");

const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;

const url = window.location.href;

const sp = url.split("?")[1].split("=");
const t = sp[1];

BABYLON.SceneLoader.Append("./assets/", `${t}.glb`, scene, function (scene) {
  // Create a default arc rotate camera and light.
  // scene.createDefaultCameraOrLight(true, true, true);
  // The default camera looks at the back of the asset.
  // Rotate the camera by 180 degrees to the front of the asset.
  // scene.activeCamera.alpha += Math.PI;
});

const camera = new BABYLON.ArcRotateCamera(
  "camera",
  -Math.PI / 2,
  Math.PI / 2.5,
  500, // zoom in out
  new BABYLON.Vector3(0, 0, 0)
);

camera.attachControl(canvas, true);

const light = new BABYLON.HemisphericLight(
  "light",
  new BABYLON.Vector3(1, 1, 0)
);

// const box = BABYLON.MeshBuilder.CreateBox("box", {});
// box.position.y = 0.5;

// const ground = BABYLON.MeshBuilder.CreateGround("ground", {
//   width: 10,
//   height: 10,
// });

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
