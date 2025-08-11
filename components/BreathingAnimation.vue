<template>
  <div class="mb-4 h-72 w-72">
    <canvas ref="threeCanvas" class="h-full w-full"></canvas>
  </div>
</template>

<script setup>
import * as THREE from "three";

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  breathingPhase: {
    type: String,
    default: 'inhale' // 'inhale' | 'exhale' | 'hold_in' | 'hold_out'
  },
  phaseDuration: {
    type: Number,
    default: 4000
  },
  color: {
    type: String,
    default: '#0891b2' // cyan-600
  }
});

const threeCanvas = ref(null);
let scene, camera, renderer, particleSystem;
let animationId = null;
let sphereAnimationId = null;

const initThreeJS = () => {
  if (!threeCanvas.value) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({
    canvas: threeCanvas.value,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(288, 288);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // Create sharp, geometric sphere with precise structure
  const particleCount = 4800;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  // Create precise geometric sphere using fibonacci spiral for perfect distribution
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  // Convert hex color to RGB
  const hex = props.color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    // Fibonacci sphere distribution for perfect uniformity
    const y = 1 - (i / (particleCount - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    const radius = 0.9;

    positions[i3] = radius * Math.cos(theta) * radiusAtY;
    positions[i3 + 1] = radius * y;
    positions[i3 + 2] = radius * Math.sin(theta) * radiusAtY;

    // Use the provided color
    colors[i3] = r;
    colors[i3 + 1] = g;
    colors[i3 + 2] = b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.008,
    transparent: false,
    opacity: 1.0,
    sizeAttenuation: true,
    vertexColors: true,
    alphaTest: 0.1,
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  // Start in exhaled state (small sphere)
  particleSystem.scale.setScalar(0.4);
  particleSystem.material.opacity = 0.8;
  particleSystem.material.size = 0.008;

  // Static positioning - no initial rotation
  camera.position.z = 2.2;
  animate();

  // If already active, start animation
  if (props.isActive) {
    nextTick(() => {
      animateSphere(props.breathingPhase, props.phaseDuration);
    });
  }
};

const animate = () => {
  if (!renderer || !scene || !camera) return;

  animationId = requestAnimationFrame(animate);

  // Rotate sphere during hold phases
  if (particleSystem && props.isActive && (props.breathingPhase === 'hold_in' || props.breathingPhase === 'hold_out')) {
    particleSystem.rotation.y += 0.005; // Slow rotation
  }

  renderer.render(scene, camera);
};

const animateSphere = (phase, duration) => {
  if (!particleSystem) return;

  if (sphereAnimationId) {
    cancelAnimationFrame(sphereAnimationId);
  }

  // For hold phases, don't animate scale/opacity - just rotate
  if (phase === "hold_in" || phase === "hold_out") {
    return; // Rotation is handled in animate() function
  }

  const targetScale = phase === "inhale" ? 1.4 : 0.4;
  const startScale = particleSystem.scale.x;
  const startTime = Date.now();

  // Enhanced breathing visualization with brightness changes
  const startOpacity = particleSystem.material.opacity;
  const targetOpacity = phase === "inhale" ? 1.0 : 0.8;
  const startSize = particleSystem.material.size;
  const targetSize = phase === "inhale" ? 0.012 : 0.008;

  const updateAnimation = () => {
    if (!props.isActive) return;

    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);

    const currentScale = startScale + (targetScale - startScale) * easeProgress;
    const currentOpacity = startOpacity + (targetOpacity - startOpacity) * easeProgress;
    const currentSize = startSize + (targetSize - startSize) * easeProgress;

    particleSystem.scale.setScalar(currentScale);
    particleSystem.material.opacity = currentOpacity;
    particleSystem.material.size = currentSize;

    if (progress < 1 && props.isActive) {
      sphereAnimationId = requestAnimationFrame(updateAnimation);
    }
  };

  updateAnimation();
};

// Watch for phase changes
watch(() => props.breathingPhase, (newPhase) => {
  if (props.isActive && particleSystem) {
    animateSphere(newPhase, props.phaseDuration);
  }
});

// Watch for active state changes
watch(() => props.isActive, (isActive) => {
  if (particleSystem) {
    if (isActive) {
      // Start with current phase animation
      animateSphere(props.breathingPhase, props.phaseDuration);
    } else {
      // Reset to default state
      particleSystem.scale.setScalar(1.4);
      particleSystem.material.opacity = 1.0;
      particleSystem.material.size = 0.012;
      particleSystem.rotation.y = 0; // Reset rotation

      if (sphereAnimationId) {
        cancelAnimationFrame(sphereAnimationId);
        sphereAnimationId = null;
      }
    }
  }
});

onMounted(() => {
  nextTick(() => {
    initThreeJS();
  });
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  if (sphereAnimationId) {
    cancelAnimationFrame(sphereAnimationId);
  }
  if (renderer) {
    renderer.dispose();
  }
  if (particleSystem?.geometry) {
    particleSystem.geometry.dispose();
  }
  if (particleSystem?.material) {
    particleSystem.material.dispose();
  }
});
</script>