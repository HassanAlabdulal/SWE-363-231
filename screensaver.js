
let timeout;
let scene, camera, renderer;
let shapes = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('screensaver').appendChild(renderer.domElement);

    // OrbitControls allow a camera to orbit around the object
    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Geometrical shapes
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    const geometries = [
        new THREE.TorusGeometry(5, 3, 16, 100),
        new THREE.SphereGeometry(4, 32, 32),
        new THREE.BoxGeometry(5, 5, 5)
    ];

    geometries.forEach(geometry => {
        const shape = new THREE.Mesh(geometry, material);
        shapes.push(shape);
        scene.add(shape);
    });

    camera.position.z = 15;
}

function animate() {
    requestAnimationFrame(animate);

    shapes.forEach(shape => {
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
    });

    renderer.render(scene, camera);
}

function startScreensaver() {
    document.getElementById('screensaver').style.display = 'block';
    init();
    animate();
}

function stopScreensaver() {
    document.getElementById('screensaver').style.display = 'none';
    if (renderer) {
        renderer.domElement.remove();
        renderer = null;
        scene = null;
        camera = null;
        shapes = [];
    }
}

document.addEventListener('mousemove', () => {
    clearTimeout(timeout);

    if (renderer) {
        stopScreensaver();
    }

    timeout = setTimeout(() => {
        startScreensaver();
    }, 10000); // 1 minute of no activity
});

// Initial trigger to start the screensaver timeout
document.dispatchEvent(new Event('mousemove'));
