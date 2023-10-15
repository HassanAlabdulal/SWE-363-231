let timeout;
let scene, camera, renderer, geometry, material, mesh;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('screensaverCanvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    geometry = new THREE.BoxGeometry();
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

document.addEventListener('mousemove', resetTimer, false);
document.addEventListener('mousedown', resetTimer, false);
document.addEventListener('keypress', resetTimer, false);
document.addEventListener('touchmove', resetTimer, false);

function resetTimer() {
    clearTimeout(timeout);
    document.getElementById('screensaverCanvas').style.display = 'none';
    timeout = setTimeout(showScreensaver, 60000);
}

function showScreensaver() {
    document.getElementById('screensaverCanvas').style.display = 'block';
    animate();
}

init();
resetTimer();
