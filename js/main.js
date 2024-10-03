import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera ( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild (renderer.domElement);

const cubegeometry = new THREE.BoxGeometry (1,1,1);
const greenmaterial = new THREE.MeshStandardMaterial ({color: 0X00ff00});
const cube = new THREE.Mesh (cubegeometry, greenmaterial);

const planegeometry = new THREE.PlaneGeometry (15,15);
const bluematerial = new THREE.MeshStandardMaterial ({color: 0X488fdb, side: THREE.DoubleSide});
const plane = new THREE.Mesh (planegeometry, bluematerial);

const torusgeometry = new THREE.TorusGeometry (2, .3, 5, 69 );
const redmaterial = new THREE.MeshStandardMaterial( { color: 0xff2424 } );
const torus = new THREE.Mesh (torusgeometry, redmaterial)


const light = new THREE.AmbientLight( 0x404040 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);

scene.add(cube);
scene.add(plane);
scene.add(torus);
scene.add(light);
scene.add(directionalLight);

camera.position.set(2,2,2);
directionalLight.position.set(10,1,5);
camera.lookAt (cube.position);


function animate(){

  plane.rotation.x = Math.PI / 2;
  plane.position.y = -.5;

  torus.rotation.x = Math.PI / 2;
  
  //cube.rotation.x += 0.01;
 //cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}

