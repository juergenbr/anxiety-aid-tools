<template>
  <div class="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-8">
    <Breadcrumb duration="2-5 min" />

    <!-- Exercise Component -->
    <section class="sektion">
      <!-- Pre-Exercise State -->
      <div class="text-center">
        <div class="mb-8">
          <div class="mb-6">
            <Icon name="ph:circles-four-fill" class="mx-auto text-6xl text-teal-600" />
          </div>
          <h1 class="ptitle">Stress Relief Bubbles</h1>
          <p class="mx-auto mb-6 max-w-2xl leading-relaxed text-gray-600">
            Pop bubbles to release tension and find calm through satisfying tactile interaction. The
            repetitive popping motion helps redirect anxious energy into a soothing, mindful
            activity.
          </p>

          <!-- Bubble Container -->
          <div class="mb-8 flex flex-col items-center justify-center">
            <!-- Bubble Grid -->
            <div class="mb-6 border border-gray-200 bg-white/60 p-8">
              <div class="bubble-container">
                <div class="bubble-grid">
                  <div
                    v-for="bubble in bubbles"
                    :key="bubble.id"
                    class="bubble"
                    :class="{ popped: bubble.isPopped }"
                    @mousedown="popBubble(bubble.id)"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Reset Button -->
            <button
              @click="resetBubbles"
              class="mx-auto flex items-center gap-2 bg-teal-600 px-8 py-4 text-lg font-medium text-white transition-colors duration-100 hover:bg-teal-700"
            >
              <Icon name="ph:arrow-clockwise" class="text-xl" />
              <span>Reset Bubbles</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Audio Elements -->
    <audio ref="popAudio" preload="auto">
      <source
        src="https://orangefreesounds.com/wp-content/uploads/2021/01/Pop-up-sound-effect.mp3"
        type="audio/mpeg"
      />
    </audio>
  </div>
</template>

<script setup>
const totalBubbles = 64;
const isResetting = ref(false);

// Initialize bubbles
const bubbles = ref([]);
for (let i = 1; i <= totalBubbles; i++) {
  bubbles.value.push({
    id: i,
    isPopped: false,
  });
}

const popAudio = ref(null);

const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.pushPopBubbles.title"),
  description: () => t("meta.pushPopBubbles.description"),
  ogTitle: () => t("meta.pushPopBubbles.title"),
  ogDescription: () => t("meta.pushPopBubbles.description"),
  ogType: "website",
  ogSiteName: "Anxiety Aid Tools",
  twitterCard: "summary_large_image",
});

const getBubble = (id) => {
  return bubbles.value.find((b) => b.id === id) || { isPopped: false };
};

const popBubble = (bubbleId) => {
  const bubble = bubbles.value.find((b) => b.id === bubbleId);
  if (bubble && !bubble.isPopped) {
    bubble.isPopped = true;
    playPopSound();
  }
};

const resetBubbles = () => {
  isResetting.value = true;
  bubbles.value.forEach((bubble) => {
    bubble.isPopped = false;
  });

  setTimeout(() => {
    isResetting.value = false;
  }, 400);
};

const playPopSound = () => {
  if (popAudio.value) {
    popAudio.value.currentTime = 0;
    popAudio.value.play().catch(() => {});
  }
};
</script>

<style scoped>
.bubble-container {
  width: min(80vw, 500px);
  height: min(80vw, 500px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.bubble-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 4px;
  width: 100%;
  height: 100%;
  padding: 8px;
}

.bubble {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  background: linear-gradient(145deg, #6ae7ff, #408bb7);
  border: 2px solid #55b9f3;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.1s ease-out;
  box-shadow: 2px 2px 0px #306989;
}

.bubble:active:not(.popped) {
  transform: scale(2.5);
}

.bubble.popped {
  background: linear-gradient(145deg, rgba(105, 150, 197, 0.49), rgba(101, 220, 255, 0.49));
  box-shadow:
    inset 4px 4px 0px #4da8dd,
    inset -4px -4px 0px rgba(147, 202, 255, 0.49);
  pointer-events: none;
  cursor: default;
}

.animate-flip {
  animation: flip 0.4s ease-in-out;
}

@keyframes flip {
  0% {
    transform: scale(1) rotateY(0);
  }
  50% {
    transform: scale(1.2) rotateY(-90deg);
  }
  100% {
    transform: scale(1) rotateY(-180deg);
  }
}

@media (max-width: 640px) {
  .bubble-container {
    width: min(90vw, 400px);
    height: min(90vw, 400px);
  }

  .bubble-grid {
    gap: 2px;
    padding: 4px;
  }
}
</style>
