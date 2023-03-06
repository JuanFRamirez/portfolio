//import NormalMap from './textures/NormalMap.png';

// canvas
const canvas = document.querySelector('.shape');

// loader

const textureLoader = new THREE.TextureLoader();

// geometry
const geometry = new THREE.SphereGeometry(1.2, 64, 64);

// material
const material = new THREE.MeshStandardMaterial({
  roughness: 0,
  metalness: 1,
  normalMap: textureLoader.load('./img/textures/NormalMap.png'),
});

// scene
const scene = new THREE.Scene();
// figure
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

//lights
const pointLight = new THREE.PointLight('purple', 0.8, 80);
pointLight.position.x = 5;
pointLight.position.y = 10;
pointLight.position.z = 10;
scene.add(pointLight);

const pointLight2 = new THREE.PointLight('yellow', 0.8, 50);
pointLight2.position.x = -10;
pointLight2.position.y = 0;
pointLight2.position.z = 2;
//scene.add(pointLight2);

const ambienLight = new THREE.AmbientLight('pink', 1);
scene.add(ambienLight);

const sizes = {
  width: 300,
  height: 300,
};

//camera
const camera = new THREE.PerspectiveCamera(
  100,
  sizes.width / sizes.height,
  0.1,
  100
);
(camera.position.x = 0), (camera.position.y = 0), (camera.position.z = 2);
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);

const clock = new THREE.Clock();

window.addEventListener('resize', () => {
  sizes.width = 300;
  sizes.height = 300;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const present = () => {
  sphere.rotation.y = 0.5 * clock.getElapsedTime();
  renderer.render(scene, camera);
  window.requestAnimationFrame(present);
};

present();
