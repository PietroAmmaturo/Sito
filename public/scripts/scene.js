var element = document.getElementById("myScene")
var positionInfo = element.getBoundingClientRect();

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, positionInfo.width / positionInfo.height, 0.1, 1000);

var renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize(positionInfo.width, positionInfo.height);
document.getElementById("myScene").appendChild(renderer.domElement);

var cubes = []

// Sphere Geometry 1
var sphereGeometry1 = new THREE.SphereBufferGeometry(1, 30, 30);

// Sphere Material 1
var sphereMaterial1 = new THREE.MeshBasicMaterial({
    color: 0xffffff
});

var sphereMesh1 = new THREE.Mesh(sphereGeometry1, sphereMaterial1);
sphereMesh1.receiveShadow = true;
sphereMesh1.castShadow = true;
sphereMesh1.position.set(0, 0, 0);
var sphere = new THREE.Object3D();
sphere.add(sphereMesh1)

for (let i = 0; i < 100; i++) {
    var color = Math.random();
    const cubeColor = new THREE.Color(color, color, color);
    const cubeGeometry = new THREE.BoxGeometry(Math.random() * 2, Math.random() * 2, Math.random() * 2)
    const cubeMaterial = new THREE.MeshStandardMaterial({
        color: cubeColor,
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.receiveShadow = true;
    cube.castShadow = true;
    cubes[i] = new THREE.Object3D();
    cubes[i].add(cube);
    cubes[i].position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10)
    cubes[i].rotation.x = Math.random() * Math.PI;
    cubes[i].rotation.y = Math.random() * Math.PI;
    cubes[i].rotation.z = Math.random() * Math.PI;
    cubes[i].scale.set(Math.random(), Math.random(), Math.random());
    cubes[i].control = { x: 1, y: 1, z: 1, width: 1, height: 1, depth: 1 }
    cubes[i].rotationSpeed = { x: Math.random(), y: Math.random(), z: Math.random() }
    cubes[i].positionSpeed = { x: Math.random() * 2, y: Math.random() * 2, z: Math.random() * 2 }
    cubes[i].morphingSpeed = { width: Math.random(), height: Math.random(), depth: Math.random() }
    scene.add(cubes[i])
}

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 0
pointLight.position.y = 0
pointLight.position.z = 0
pointLight.distance = 50;
pointLight.decay = 2;
pointLight.castShadow = true;
//Set up shadow properties for the light
pointLight.shadow.mapSize.width = 512; // default
pointLight.shadow.mapSize.height = 512; // default
pointLight.shadow.camera.near = 1; // default
pointLight.shadow.camera.far = 500; // default
pointLight.shadow.bias = -0.005
sphere.add(pointLight)
scene.add(sphere)

var lights = []
for (let i = 0; i < 10; i++) {
    const lightColor = new THREE.Color(1, 1, 1);
    const lightGeometry = new THREE.SphereBufferGeometry(0.2, 30, 30)
    const lightMaterial = new THREE.MeshBasicMaterial({
        color: lightColor,
    })
    const lightMesh = new THREE.Mesh(lightGeometry, lightMaterial);
    lightMesh.castShadow = true;
    lights[i] = new THREE.Object3D();
    lights[i].add(lightMesh);
    lights[i].position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10)
    lights[i].control = { x: 1, y: 1, z: 1 }
    lights[i].positionSpeed = { x: Math.random() * 5, y: Math.random() * 5, z: Math.random() * 5 }

    const lightSource = new THREE.PointLight(lightColor, 2)
    lightSource.position.x = 0
    lightSource.position.y = 0
    lightSource.position.z = 0
    lightSource.distance = 4;
    lightSource.decay = 2;
    lightSource.castShadow = false;
    //Set up shadow properties for the light
    lightSource.shadow.mapSize.width = 512; // default
    lightSource.shadow.mapSize.height = 512; // default
    lightSource.shadow.camera.near = 1; // default
    lightSource.shadow.camera.far = 500; // default
    lights[i].add(lightSource);

    scene.add(lights[i])
}

window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    },
    false
)

var clock = new THREE.Clock();
var delta = 0;

function animate() {
    requestAnimationFrame(animate)

    delta = clock.getDelta();

    for (let i = 0; i < 100; i++) {

        if (cubes[i].position.x > 10)
            cubes[i].control.x = -1;
        if (cubes[i].position.x < -10)
            cubes[i].control.x = 1;

        if (cubes[i].position.y > 10)
            cubes[i].control.y = -1;
        if (cubes[i].position.y < -10)
            cubes[i].control.y = 1;

        if (cubes[i].position.z > 10)
            cubes[i].control.z = -1;
        if (cubes[i].position.z < -10)
            cubes[i].control.z = 1;


        if (cubes[i].scale.x > 1)
            cubes[i].control.width = -1;
        if (cubes[i].scale.x < 0)
            cubes[i].control.width = 1;

        if (cubes[i].scale.y > 1)
            cubes[i].control.height = -1;
        if (cubes[i].scale.y < 0)
            cubes[i].control.height = 1;

        if (cubes[i].scale.z > 1)
            cubes[i].control.depth = -1;
        if (cubes[i].scale.z < 0)
            cubes[i].control.depth = 1;


        cubes[i].rotation.x += cubes[i].rotationSpeed.x * delta;
        cubes[i].rotation.y += cubes[i].rotationSpeed.y * delta;
        cubes[i].rotation.z += cubes[i].rotationSpeed.z * delta;

        cubes[i].position.x += cubes[i].positionSpeed.x * delta * cubes[i].control.x;
        cubes[i].position.y += cubes[i].positionSpeed.y * delta * cubes[i].control.y;
        cubes[i].position.z += cubes[i].positionSpeed.z * delta * cubes[i].control.z;

        cubes[i].scale.set(cubes[i].scale.x + cubes[i].morphingSpeed.width * delta * cubes[i].control.width,
            cubes[i].scale.y + cubes[i].morphingSpeed.height * delta * cubes[i].control.height,
            cubes[i].scale.z + cubes[i].morphingSpeed.depth * delta * cubes[i].control.depth);
    }

    for (let i = 0; i < 10; i++) {

        if (lights[i].position.x > 10)
            lights[i].control.x = -1;
        if (lights[i].position.x < -10)
            lights[i].control.x = 1;

        if (lights[i].position.y > 10)
            lights[i].control.y = -1;
        if (lights[i].position.y < -10)
            lights[i].control.y = 1;

        if (lights[i].position.z > 10)
            lights[i].control.z = -1;
        if (lights[i].position.z < -10)
            lights[i].control.z = 1;

        lights[i].position.x += lights[i].positionSpeed.x * delta * lights[i].control.x;
        lights[i].position.y += lights[i].positionSpeed.y * delta * lights[i].control.y;
        lights[i].position.z += lights[i].positionSpeed.z * delta * lights[i].control.z;
    }
    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()
