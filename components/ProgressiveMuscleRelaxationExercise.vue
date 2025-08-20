<template>
  <section class="sektion scroll-offset" ref="exerciseSection" v-auto-animate>
    <!-- Pre-Exercise State -->
    <div v-if="!exerciseStarted && !exerciseCompleted" class="text-center">
      <div class="mb-8">
        <div class="mb-6">
          <Icon name="ph:person-arms-spread-fill" class="mx-auto text-6xl text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 class="ptitle">{{ $t("techniques.progressiveMuscleRelaxation.name") }}</h1>
        <p class="mx-auto mb-6 max-w-2xl leading-relaxed text-gray-600 dark:text-slate-300 transition-colors duration-200">
          {{ $t("techniques.progressiveMuscleRelaxation.description") }}
        </p>

        <button
          @click="startExercise"
          class="mx-auto flex items-center gap-2 bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          <Icon name="ph:play-fill" class="text-xl" />
          <span>{{ $t('progressiveMuscleRelaxation.interface.beginExercise') }}</span>
        </button>
      </div>
    </div>

    <!-- Exercise Interface -->
    <div v-if="exerciseStarted && !exerciseCompleted">
      <!-- Session Header -->
      <SessionHeader
        icon="ph:user-focus"
        :title="$t('progressiveMuscleRelaxation.interface.title')"
        :subtitle="$t('progressiveMuscleRelaxation.interface.subtitle')"
        :display-value="String(currentGroupIndex + 1)"
        :display-label="$t('progressiveMuscleRelaxation.interface.ofGroups', { count: muscleGroups.length })"
        :progress="((currentGroupIndex + 1) / muscleGroups.length) * 100"
        :status-text="currentState === 'tense' ? $t('progressiveMuscleRelaxation.interface.tenseFor10') : currentState === 'relax' ? $t('progressiveMuscleRelaxation.interface.releaseFor10') : $t('progressiveMuscleRelaxation.interface.prepare')"
        :status-type="currentState === 'prepare' ? 'waiting' : 'active'"
        :secondary-info="currentMuscleGroup.short_name"
        theme-color="#4f46e5"
      />

      <!-- Main Exercise Area -->
      <div class="border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 p-6 md:p-8 transition-colors duration-200">
        <div class="mx-auto mb-8 flex md:min-h-[700px] max-w-2xl flex-col gap-4">
          <!-- Large Visual State -->
          <div class="text-center">
            <div
              class="mx-auto mb-6 flex h-32 w-32 items-center justify-center transition-all duration-300"
              :class="[
                currentState === 'prepare'
                  ? 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300'
                  : currentState === 'tense'
                    ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                    : currentState === 'relax'
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                      : 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
              ]"
            >
              <Icon
                :name="
                  currentState === 'prepare'
                    ? currentMuscleGroup.icon
                    : currentState === 'tense'
                      ? 'ph:lightning'
                      : 'ph:hand-peace'
                "
                class="text-6xl"
              />
            </div>

            <!-- Clear Action Text -->
            <div class="mb-6">
              <p v-if="currentState === 'prepare'" class="mb-3 text-2xl font-light text-gray-700 dark:text-slate-200 transition-colors duration-200">
                {{ currentMuscleGroup.name }}
              </p>
              <p v-else-if="currentState === 'tense'" class="mb-3 text-2xl font-light text-gray-700 dark:text-slate-200 transition-colors duration-200">
                {{ $t('progressiveMuscleRelaxation.interface.tense') }}
              </p>
              <p v-else-if="currentState === 'relax'" class="mb-3 text-2xl font-light text-gray-700 dark:text-slate-200 transition-colors duration-200">
                {{ $t('progressiveMuscleRelaxation.interface.relax') }}
              </p>

              <p v-if="currentState === 'prepare'" class="text-lg text-gray-600 dark:text-slate-300 transition-colors duration-200">
                {{ currentMuscleGroup.instruction_title }}
              </p>
            </div>

            <!-- Timer (Only During Active Phases) -->
            <div v-if="currentState !== 'prepare'" class="mb-6">
              <div class="relative mx-auto h-20 w-20">
                <svg class="h-20 w-20 -rotate-90 transform" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="14" stroke="#e5e7eb" stroke-width="3" fill="none" />
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    :stroke="currentState === 'tense' ? '#dc2626' : '#16a34a'"
                    stroke-width="3"
                    fill="none"
                    stroke-dasharray="87.96"
                    :stroke-dashoffset="87.96 - 87.96 * (timerProgress / 100)"
                    class="transition-all duration-100"
                  />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-2xl font-light text-gray-700 dark:text-slate-200 transition-colors duration-200">{{
                    Math.ceil(timeRemaining / 1000)
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step-by-step Action Cue -->
          <div class="mb-6 w-full">
            <div v-if="currentState === 'tense'" class="bg-red-50 dark:bg-red-900/20 p-4 transition-colors duration-200">
              <p class="mb-3 font-semibold text-red-800 dark:text-red-300 transition-colors duration-200">{{ $t('progressiveMuscleRelaxation.interface.tensionSteps') }}</p>
              <ol class="space-y-2 text-red-700 dark:text-red-300 transition-colors duration-200">
                <li
                  v-for="(step, index) in currentMuscleGroup.tension_cue"
                  :key="index"
                  class="flex items-start gap-2"
                >
                  <span
                    class="flex h-5 w-5 flex-shrink-0 items-center justify-center bg-red-200 dark:bg-red-800 text-xs font-bold text-red-800 dark:text-red-200 transition-colors duration-200"
                    >{{ index + 1 }}</span
                  >
                  <span>{{ step }}</span>
                </li>
              </ol>
            </div>

            <div v-if="currentState === 'relax'" class="bg-green-50 dark:bg-green-900/20 p-4 transition-colors duration-200">
              <p class="mb-3 font-semibold text-green-800 dark:text-green-300 transition-colors duration-200">{{ $t('progressiveMuscleRelaxation.interface.relaxationSteps') }}</p>
              <ol class="space-y-2 text-green-700 dark:text-green-300 transition-colors duration-200">
                <li
                  v-for="(step, index) in currentMuscleGroup.relaxation_cue"
                  :key="index"
                  class="flex items-start gap-2"
                >
                  <span
                    class="flex h-5 w-5 flex-shrink-0 items-center justify-center bg-green-200 dark:bg-green-800 text-xs font-bold text-green-800 dark:text-green-200 transition-colors duration-200"
                    >{{ index + 1 }}</span
                  >
                  <span>{{ step }}</span>
                </li>
              </ol>
            </div>
          </div>

          <!-- Progress Section -->
          <div class="mb-6 w-full">
            <!-- Session Progress -->
            <div class="mb-4">
              <div class="mb-2 flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-slate-300 transition-colors duration-200">{{ $t('progressiveMuscleRelaxation.interface.sessionProgress') }}</span>
                <span class="text-sm text-gray-500 dark:text-slate-400 transition-colors duration-200"
                  >{{ currentGroupIndex + 1 }}/{{ muscleGroups.length }}</span
                >
              </div>
              <!-- Stepped progress indicator -->
              <div class="flex gap-1">
                <div
                  v-for="(group, index) in muscleGroups"
                  :key="index"
                  class="h-1.5 flex-1 transition-all duration-100"
                  :style="{
                    backgroundColor: index <= currentGroupIndex ? '#3b82f6' : '#e5e7eb',
                  }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Controls Row -->
          <div class="flex justify-center gap-3">
            <button
              v-if="currentState === 'prepare'"
              @click="startCurrentGroup"
              class="flex items-center gap-2 bg-green-600 px-6 py-3 font-medium text-white transition-colors duration-100 hover:bg-green-700"
            >
              <Icon name="ph:play-fill" class="text-lg" />
              <span>{{ $t('progressiveMuscleRelaxation.interface.start') }}</span>
            </button>

            <button
              v-if="currentState !== 'prepare'"
              @click="isPaused ? resumeExercise() : pauseExercise()"
              class="flex items-center gap-2 px-6 py-3 font-medium text-white transition-colors duration-100"
              :class="isPaused ? 'bg-green-600 hover:bg-green-700' : 'bg-orange-600 hover:bg-orange-700'"
            >
              <Icon :name="isPaused ? 'ph:play-fill' : 'ph:pause-fill'" class="text-lg" />
              <span>{{ isPaused ? $t('progressiveMuscleRelaxation.interface.resume') : $t('progressiveMuscleRelaxation.interface.pause') }}</span>
            </button>

            <button
              v-if="exerciseStarted"
              @click="stopExercise"
              class="flex items-center gap-2 bg-red-600 px-6 py-3 font-medium text-white transition-colors duration-100 hover:bg-red-700"
            >
              <Icon name="ph:stop-fill" class="text-lg" />
              <span>{{ $t('progressiveMuscleRelaxation.interface.stop') }}</span>
            </button>
          </div>
        </div>

        <!-- Navigation Bar -->
        <div class="mx-auto max-w-2xl border-t border-gray-100 dark:border-slate-600 pt-6">
            <div class="flex items-center justify-between">
              <!-- Left: Back Button -->
              <div class="flex flex-1 justify-start">
                <button
                  @click="previousGroup"
                  :disabled="currentGroupIndex === 0"
                  :class="[
                    'flex items-center gap-2 border px-4 py-3 text-sm font-medium transition-all duration-100 touch-manipulation',
                    currentGroupIndex > 0
                      ? 'border-gray-300 dark:border-slate-500 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-600'
                      : 'cursor-default border-transparent bg-transparent text-transparent',
                  ]"
                >
                  <Icon name="ph:arrow-left" class="text-base" />
                  <span>{{ $t('progressiveMuscleRelaxation.interface.back') }}</span>
                </button>
              </div>

              <!-- Center: Progress Dots (hidden on mobile) -->
              <div class="hidden md:flex items-center gap-1">
                <div
                  v-for="(group, index) in muscleGroups"
                  :key="index"
                  class="h-2 w-2 transition-colors duration-100"
                  :class="index <= currentGroupIndex ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-slate-600'"
                ></div>
              </div>

              <!-- Right: Next/Complete Button -->
              <div class="flex flex-1 items-center justify-end">
                <button
                  @click="currentGroupIndex === muscleGroups.length - 1 ? completeExercise() : (currentState !== 'prepare' ? skipCurrentPhase() : nextGroup())"
                  :class="[
                    'flex min-w-[90px] items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-100 touch-manipulation',
                    'bg-indigo-600 text-white hover:bg-indigo-700'
                  ]"
                >
                  <span>{{ currentGroupIndex === muscleGroups.length - 1 ? $t('progressiveMuscleRelaxation.interface.complete') : $t('progressiveMuscleRelaxation.interface.next') }}</span>
                  <Icon :name="currentGroupIndex === muscleGroups.length - 1 ? 'ph:check' : 'ph:arrow-right'" class="text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- Completion State -->
    <div v-if="exerciseCompleted" class="mb-6 border border-green-200 dark:border-green-800/30 bg-green-50 dark:bg-green-900/20 p-8 text-center transition-colors duration-200">
      <Icon name="ph:check-circle-fill" class="mx-auto mb-4 text-4xl text-green-600 dark:text-green-400" />
      <h2 class="mb-2 text-xl font-semibold text-gray-800 dark:text-slate-100">{{ $t('progressiveMuscleRelaxation.completion.title') }}</h2>
      <p class="mb-4 text-gray-600 dark:text-slate-300">
        {{ $t('progressiveMuscleRelaxation.completion.description') }}
      </p>
      <div class="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-slate-400">
        <div class="flex items-center gap-1">
          <Icon name="ph:lightning-slash" class="text-blue-400" />
          <span>{{ $t('progressiveMuscleRelaxation.completion.benefits.tensionReleased') }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="ph:heart" class="text-red-400" />
          <span>{{ $t('progressiveMuscleRelaxation.completion.benefits.bodyRelaxed') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { vAutoAnimate } from '@formkit/auto-animate/vue'
const { t, tm, rt } = useI18n();

const exerciseStarted = ref(false);
const exerciseCompleted = ref(false);
const currentGroupIndex = ref(0);
const currentState = ref("prepare"); // 'prepare', 'tense', 'relax'
const timeRemaining = ref(0);
const timerProgress = ref(0);
const isPaused = ref(false);
let phaseTimer = null;
let progressTimer = null;
let pausedTime = 0;
let pauseStartTime = 0;

// Icon mapping for muscle groups
const muscleGroupIcons = {
  rightHand: "material-symbols:front-hand",
  leftHand: "material-symbols:front-hand",
  rightUpperArm: "material-symbols:fitness-center",
  leftUpperArm: "material-symbols:fitness-center",
  forehead: "material-symbols:face",
  eyesNose: "material-symbols:visibility-off",
  mouthJaw: "ph:tooth-fill",
  neckThroat: "mdi:face-woman-profile",
  shoulders: "material-symbols:keyboard-arrow-up",
  upperBackChest: "material-symbols:open-in-full",
  abdomen: "material-symbols:sports-gymnastics",
  lowerBack: "material-symbols:straighten",
  hipsButtocks: "material-symbols:chair-alt",
  rightThigh: "material-symbols:accessibility",
  leftThigh: "material-symbols:accessibility",
  rightCalfShin: "material-symbols:directions-walk",
  leftCalfShin: "material-symbols:directions-walk",
  rightFoot: "material-symbols:footprint",
  leftFoot: "material-symbols:footprint",
};

// Muscle group order
const muscleGroupOrder = [
  'rightHand', 'leftHand', 'rightUpperArm', 'leftUpperArm', 'forehead',
  'eyesNose', 'mouthJaw', 'neckThroat', 'shoulders', 'upperBackChest',
  'abdomen', 'lowerBack', 'hipsButtocks', 'rightThigh', 'leftThigh',
  'rightCalfShin', 'leftCalfShin', 'rightFoot', 'leftFoot'
];

// Computed property for translated muscle groups
const muscleGroups = computed(() => {
  try {
    return muscleGroupOrder.map(groupKey => {
      try {
        // Use individual t() calls to get each translation
        const name = t(`progressiveMuscleRelaxation.muscleGroups.${groupKey}.name`, groupKey);
        const shortName = t(`progressiveMuscleRelaxation.muscleGroups.${groupKey}.shortName`, groupKey);
        const instructionTitle = t(`progressiveMuscleRelaxation.muscleGroups.${groupKey}.instructionTitle`, 'Exercise');
        const simpleAction = t(`progressiveMuscleRelaxation.muscleGroups.${groupKey}.simpleAction`, 'Follow instructions');
        const instruction = t(`progressiveMuscleRelaxation.muscleGroups.${groupKey}.instruction`, 'Please follow the visual guidance.');
        
        // For arrays, use tm() with rt() to render each item
        const tensionCueRaw = tm(`progressiveMuscleRelaxation.muscleGroups.${groupKey}.tensionCue`);
        const relaxationCueRaw = tm(`progressiveMuscleRelaxation.muscleGroups.${groupKey}.relaxationCue`);
        
        const tensionCue = Array.isArray(tensionCueRaw) 
          ? tensionCueRaw.map(item => rt(item))
          : ['Hold tension'];
          
        const relaxationCue = Array.isArray(relaxationCueRaw) 
          ? relaxationCueRaw.map(item => rt(item))
          : ['Release and relax'];
        
        return {
          key: groupKey,
          name: name,
          short_name: shortName,
          icon: muscleGroupIcons[groupKey] || 'ph:person-arms-spread-fill',
          instruction_title: instructionTitle,
          simple_action: simpleAction,
          instruction: instruction,
          tension_cue: tensionCue,
          relaxation_cue: relaxationCue,
        };
      } catch (groupError) {
        console.warn(`Error loading translation for muscle group ${groupKey}:`, groupError);
        return {
          key: groupKey,
          name: groupKey,
          short_name: groupKey,
          icon: muscleGroupIcons[groupKey] || 'ph:person-arms-spread-fill',
          instruction_title: 'Exercise',
          simple_action: 'Follow instructions',
          instruction: 'Please follow the visual guidance.',
          tension_cue: ['Hold tension'],
          relaxation_cue: ['Release and relax'],
        };
      }
    });
  } catch (error) {
    console.error('Error loading muscle groups:', error);
    return [];
  }
});

const currentMuscleGroup = computed(() => {
  const groups = muscleGroups.value;
  if (!groups || groups.length === 0) {
    return {
      key: 'fallback',
      name: 'Exercise',
      short_name: 'Exercise',
      icon: 'ph:person-arms-spread-fill',
      instruction_title: 'Exercise',
      simple_action: 'Follow instructions',
      instruction: 'Please follow the visual guidance.',
      tension_cue: ['Hold tension'],
      relaxation_cue: ['Release and relax'],
    };
  }
  
  const group = groups[currentGroupIndex.value];
  return group || groups[0]; // Fallback to first group if index is out of bounds
});

const exerciseSection = ref(null);

const startExercise = () => {
  exerciseStarted.value = true;
  exerciseCompleted.value = false;
  currentGroupIndex.value = 0;
  currentState.value = "prepare";
  timeRemaining.value = 0;
  timerProgress.value = 0;
  
  // Scroll to exercise header
  nextTick(() => {
    exerciseSection.value?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

const startCurrentGroup = () => {
  currentState.value = "tense";
  startPhase(10000); // 10 seconds tension
};

const startPhase = (duration) => {
  timeRemaining.value = duration;
  timerProgress.value = 0;
  isPaused.value = false;
  pausedTime = 0;

  // Clear existing timers
  if (phaseTimer) clearTimeout(phaseTimer);
  if (progressTimer) clearInterval(progressTimer);

  // Progress updater
  const startTime = Date.now();
  progressTimer = setInterval(() => {
    if (isPaused.value) return;
    
    const now = Date.now();
    const elapsed = now - startTime - pausedTime;
    const remaining = Math.max(0, duration - elapsed);
    const progress = Math.min(100, (elapsed / duration) * 100);

    timeRemaining.value = remaining;
    timerProgress.value = progress;

    if (remaining <= 0) {
      clearInterval(progressTimer);
      completeCurrentPhase();
    }
  }, 50);

  // Phase completion
  phaseTimer = setTimeout(() => {
    completeCurrentPhase();
  }, duration);
};

const completeCurrentPhase = () => {
  if (currentState.value === "tense") {
    // Move to relaxation phase
    currentState.value = "relax";
    startPhase(10000); // 10 seconds relaxation
  } else if (currentState.value === "relax") {
    // Move to next muscle group or complete
    if (currentGroupIndex.value < muscleGroups.value.length - 1) {
      currentGroupIndex.value++;
      currentState.value = "prepare";
      timeRemaining.value = 0;
      timerProgress.value = 0;
    } else {
      completeExercise();
    }
  }
};

const pauseExercise = () => {
  if (currentState.value !== "prepare" && !isPaused.value) {
    isPaused.value = true;
    pauseStartTime = Date.now();
    if (phaseTimer) clearTimeout(phaseTimer);
  }
};

const resumeExercise = () => {
  if (isPaused.value) {
    isPaused.value = false;
    pausedTime += Date.now() - pauseStartTime;
    
    // Restart the phase timer with remaining time
    const remainingPhaseTime = timeRemaining.value;
    if (remainingPhaseTime > 0) {
      phaseTimer = setTimeout(() => {
        completeCurrentPhase();
      }, remainingPhaseTime);
    }
  }
};

const skipCurrentPhase = () => {
  if (phaseTimer) clearTimeout(phaseTimer);
  if (progressTimer) clearInterval(progressTimer);

  if (currentState.value === "tense") {
    currentState.value = "relax";
    startPhase(10000);
  } else if (currentState.value === "relax") {
    if (currentGroupIndex.value < muscleGroups.value.length - 1) {
      currentGroupIndex.value++;
      currentState.value = "prepare";
      timeRemaining.value = 0;
      timerProgress.value = 0;
    } else {
      completeExercise();
    }
  }
};

const stopExercise = () => {
  exerciseStarted.value = false;
  exerciseCompleted.value = false;
  currentGroupIndex.value = 0;
  currentState.value = "prepare";
  timeRemaining.value = 0;
  timerProgress.value = 0;
  isPaused.value = false;
  pausedTime = 0;

  if (phaseTimer) {
    clearTimeout(phaseTimer);
    phaseTimer = null;
  }
  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }
};

const previousGroup = () => {
  if (currentGroupIndex.value > 0) {
    // Clear current timers
    if (phaseTimer) clearTimeout(phaseTimer);
    if (progressTimer) clearInterval(progressTimer);
    
    currentGroupIndex.value--;
    currentState.value = "prepare";
    timeRemaining.value = 0;
    timerProgress.value = 0;
    isPaused.value = false;
    pausedTime = 0;
  }
};

const nextGroup = () => {
  if (currentGroupIndex.value < muscleGroups.value.length - 1) {
    // Clear current timers
    if (phaseTimer) clearTimeout(phaseTimer);
    if (progressTimer) clearInterval(progressTimer);
    
    currentGroupIndex.value++;
    currentState.value = "prepare";
    timeRemaining.value = 0;
    timerProgress.value = 0;
    isPaused.value = false;
    pausedTime = 0;
  } else {
    completeExercise();
  }
};

const completeExercise = () => {
  exerciseStarted.value = false;
  exerciseCompleted.value = true;

  if (phaseTimer) {
    clearTimeout(phaseTimer);
    phaseTimer = null;
  }
  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }
};

// Cleanup on unmount
onUnmounted(() => {
  if (phaseTimer) clearTimeout(phaseTimer);
  if (progressTimer) clearInterval(progressTimer);
});
</script>
