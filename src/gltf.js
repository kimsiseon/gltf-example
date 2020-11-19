import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true);

class CustomLoadingScreen {
	displayLoadingUI () {}
	hideLoadingUI () {}
}

engine.loadingScreen = new CustomLoadingScreen();

canvas.style.width = window.innerWidth + 'px';
canvas.style.height = window.innerHeight + 'px';

const createScene = function () {

	var scene = new BABYLON.Scene(engine);

	new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 200, new BABYLON.Vector3(5,30,5), scene);
	// 카메라 움직임 표시
	//camera.attachControl(canvas, true);

	// Add lights to the scene
	new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
	new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

	BABYLON.SceneLoader.Append("/", "Fox.gltf", scene, function () {
		// do something with the scene
	});

	scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

	return scene;
};

var scene = createScene();

engine.runRenderLoop(() => {
	scene.render();
});

engine.resize();

window.addEventListener("resize", function () {
	canvas.style.width = window.innerWidth + 'px';
	canvas.style.height = window.innerHeight + 'px';
	engine.resize();
});