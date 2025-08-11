<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8">
    <Breadcrumb duration="10-12 min" />

    <!-- Exercise Component -->
    <PeacefulVisualizationExercise />

    <!-- Educational Content -->
    <section>
      <div class="border border-gray-200 bg-white/60 p-6">
        <div>
          <div class="flex items-center justify-start gap-2 mb-2">
            <Icon name="ph:brain" class="flex-shrink-0 text-2xl text-gray-600" />
            <h2 class="font-semibold text-gray-800">How guided visualization works</h2>
          </div>
          <div class="px-1">
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              Guided visualization leverages your brain's natural ability to create vivid mental
              experiences that feel real to your nervous system. When you imagine peaceful scenes in
              detail, your brain activates the same neural pathways as if you were actually
              experiencing those environments, triggering the relaxation response and reducing
              stress hormones.
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              The multisensory nature of visualization - imagining sights, sounds, smells, and
              physical sensations - creates a comprehensive calming experience. Regular practice
              builds neural pathways that make relaxation more accessible, giving you a portable
              tool for managing anxiety and stress.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Scientific Background -->
    <section>
      <div class="border border-gray-200 bg-white/60 p-6">
        <div class="flex items-center justify-start gap-2 mb-4">
          <div class="flex h-8 w-8 items-center justify-center bg-purple-100">
            <Icon name="ph:flask" class="text-lg text-purple-600" />
          </div>
          <h2 class="text-lg font-semibold text-gray-800">The Science Behind Visualization</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Clinical Research</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              Research published in the Journal of Clinical Psychology demonstrates that guided
              imagery significantly reduces anxiety symptoms and cortisol levels by up to 25% within
              minutes.
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              Studies show that visualization activates the same brain regions as real experiences,
              making it a powerful tool for stress management and emotional regulation.
            </p>
          </div>
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Therapeutic Use</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              Visualization techniques are widely used in therapy for anxiety, PTSD, and
              stress-related disorders as evidence-based interventions.
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              Regular practice improves overall emotional regulation and builds resilience against
              future stressors.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="grid gap-8 md:grid-cols-2">
        <!-- When to Use -->
        <div class="border border-gray-200 bg-white/60 p-6">
          <div class="flex items-center justify-start gap-2 mb-4">
            <div class="flex h-8 w-8 items-center justify-center bg-blue-100">
              <Icon name="ph:calendar-check" class="text-lg text-blue-600" />
            </div>
            <h2 class="text-lg font-semibold text-gray-800">When to practice</h2>
          </div>
          <ul class="space-y-3 text-sm text-gray-700">
            <li class="flex items-start">
              <Icon name="ph:sun" class="mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
              <span>Start your morning with peaceful visualization to set a calm tone</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:briefcase" class="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
              <span>Before stressful events to build confidence and inner peace</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:clock-afternoon" class="mr-2 mt-0.5 flex-shrink-0 text-orange-400" />
              <span>During lunch breaks for mental reset and stress relief</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:moon" class="mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
              <span>Before bedtime to unwind and prepare for restful sleep</span>
            </li>
          </ul>
        </div>

        <!-- What You'll Experience -->
        <div class="border border-gray-200 bg-white/60 p-6">
          <div class="flex items-center justify-start gap-2 mb-4">
            <div class="flex h-8 w-8 items-center justify-center bg-green-100">
              <Icon name="ph:trend-up" class="text-lg text-green-600" />
            </div>
            <h2 class="text-lg font-semibold text-gray-800">What you'll notice</h2>
          </div>
          <ul class="space-y-3 text-sm text-gray-700">
            <li class="flex items-start">
              <Icon name="ph:brain" class="mr-2 mt-0.5 flex-shrink-0 text-purple-400" />
              <span>Mind becomes calm and focused on peaceful imagery</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:heart" class="mr-2 mt-0.5 flex-shrink-0 text-red-400" />
              <span>Heart rate slows as stress melts away</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:wind" class="mr-2 mt-0.5 flex-shrink-0 text-cyan-400" />
              <span>Breathing becomes deeper and more natural</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:shield-check" class="mr-2 mt-0.5 flex-shrink-0 text-green-400" />
              <span>Whole body relaxes as you mentally "visit" peaceful places</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Tips Section -->
    <section>
      <div class="border border-indigo-200 bg-indigo-50 p-6">
        <div class="mb-4 text-center">
          <Icon name="ph:lightbulb" class="mx-auto mb-2 text-2xl text-indigo-600" />
          <h2 class="font-semibold text-gray-800">Tips for deeper visualization</h2>
        </div>
        <div class="grid gap-4 text-sm md:grid-cols-3">
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Preparation</div>
            <p class="text-gray-600">
              Find a comfortable position where you won't be disturbed. Close your eyes or soften
              your gaze.
            </p>
          </div>
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Engagement</div>
            <p class="text-gray-600">
              Engage all five senses - see, hear, feel, smell, taste. The more vivid, the more
              effective.
            </p>
          </div>
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Patience</div>
            <p class="text-gray-600">
              Don't worry if your mind wanders - gently return to the scene. Allow yourself to be
              creative.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Techniques -->
    <RelatedTechniques current-technique-id="peaceful-visualization" />
  </div>
</template>

<script setup>
const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.peacefulVisualization.title"),
  description: () => t("meta.peacefulVisualization.description"),
  ogTitle: () => t("meta.peacefulVisualization.title"),
  ogDescription: () => t("meta.peacefulVisualization.description"),
  ogType: "website",
  ogSiteName: "Anxiety Aid Tools",
  twitterCard: "summary_large_image",
});
</script>
