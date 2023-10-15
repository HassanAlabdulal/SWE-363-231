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
    const geometry1 = new THREE.TorusGeometry(5, 3, 16, 100);
    const geometry2 = new THREE.SphereGeometry(4, 32, 32);
    const geometry3 = new THREE.BoxGeometry(5, 5, 5);

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    shapes.push(new THREE.Mesh(geometry1, material));
    shapes.push(new THREE.Mesh(geometry2, material));
    shapes.push(new THREE.Mesh(geometry3, material));

    shapes.forEach(shape => {
        scene.add(shape);
    });

    camera.position.z = 15;
}

function animate() {
    requestAnimationFrame(animate);

    shapes[0].rotation.x += 0.005;
    shapes[0].rotation.y += 0.005;
    shapes[1].rotation.y += 0.005;
    shapes[2].rotation.x += 0.005;

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
