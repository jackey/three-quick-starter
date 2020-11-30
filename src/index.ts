import {Scene, 
    PerspectiveCamera, 
    WebGLRenderer, 
    MeshBasicMaterial,
    Mesh,
    BoxGeometry} from 'three';

const scene = new Scene();

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const render = new WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);

const geometry = new BoxGeometry();
const meterial = new MeshBasicMaterial({color: 0x00ff00});
const cube = new Mesh(geometry, meterial);
scene.add(cube);

camera.position.z = 5;

document.getElementById('render').appendChild(render.domElement);

function animate() {
    requestAnimationFrame(animate);
    render.render(scene, camera);

    cube.position.x += 0.01;
    cube.position.y += 0.01;

}
animate();



