<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-8">
    <Breadcrumb duration="5-10 min" />

    <!-- Exercise Component -->
    <ThoughtLabelingExercise />

    <!-- Educational Content -->
    <section class="mt-12 space-y-8">
      <!-- How It Works -->
      <div class="border border-gray-200 bg-white/60 p-6">
        <div class="mb-4 flex items-center">
          <div class="mr-3 flex h-8 w-8 items-center justify-center bg-indigo-100">
            <Icon name="ph:brain" class="text-lg text-indigo-600" />
          </div>
          <h2 class="text-lg font-semibold text-gray-800">How Thought Labeling Works</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Cognitive Awareness</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              When we're anxious, thoughts can feel overwhelming and all-consuming. Labeling creates
              psychological distance by helping you observe thoughts as mental events rather than
              absolute truths.
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              This technique is rooted in cognitive behavioral therapy (CBT) and mindfulness
              practices, helping you develop metacognitive awareness—the ability to think about your
              thinking.
            </p>
          </div>
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Pattern Recognition</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              By categorizing your thoughts, you begin to notice patterns in your thinking. Do you
              often engage in catastrophic thinking? Self-doubt? Perfectionism?
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              Recognizing these patterns is the first step toward developing healthier thought
              habits and reducing the emotional impact of anxious thinking.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Scientific Background -->
    <section>
      <div class="border border-gray-200 bg-white/60 p-6">
        <div class="mb-4 flex items-center">
          <div class="mr-3 flex h-8 w-8 items-center justify-center bg-purple-100">
            <Icon name="ph:flask" class="text-lg text-purple-600" />
          </div>
          <h2 class="text-lg font-semibold text-gray-800">The Science Behind Thought Labeling</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Neurological Benefits</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              Research shows that labeling emotions and thoughts activates the prefrontal cortex
              while reducing activity in the amygdala—the brain's alarm system.
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              This process, called "affect labeling," literally helps calm your nervous system and
              creates space between you and your emotional reactions.
            </p>
          </div>
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Therapeutic Applications</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              Thought labeling is a core component of several evidence-based therapies, including
              Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT).
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              Studies demonstrate its effectiveness in reducing anxiety, depression, and emotional
              reactivity while improving emotional regulation skills.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="grid gap-8 md:grid-cols-2">
        <!-- When to Use -->
        <div class="border border-gray-200 bg-white/60 p-6">
          <div class="mb-4 flex items-center">
            <div class="mr-3 flex h-8 w-8 items-center justify-center bg-blue-100">
              <Icon name="ph:calendar-check" class="text-lg text-blue-600" />
            </div>
            <h2 class="text-lg font-semibold text-gray-800">When to practice</h2>
          </div>
          <ul class="space-y-3 text-sm text-gray-700">
            <li class="flex items-start">
              <Icon name="ph:cloud-lightning" class="mr-2 mt-0.5 flex-shrink-0 text-amber-500" />
              <span>When your mind is spinning with racing thoughts</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:warning" class="mr-2 mt-0.5 flex-shrink-0 text-red-500" />
              <span>During catastrophic thinking or worst-case scenarios</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:arrow-clockwise" class="mr-2 mt-0.5 flex-shrink-0 text-blue-500" />
              <span>When stuck ruminating on past events</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:question" class="mr-2 mt-0.5 flex-shrink-0 text-purple-500" />
              <span>During moments of self-doubt or questioning your worth</span>
            </li>
          </ul>
        </div>

        <!-- What You'll Experience -->
        <div class="border border-gray-200 bg-white/60 p-6">
          <div class="mb-4 flex items-center">
            <div class="mr-3 flex h-8 w-8 items-center justify-center bg-green-100">
              <Icon name="ph:trend-up" class="text-lg text-green-600" />
            </div>
            <h2 class="text-lg font-semibold text-gray-800">What you'll notice</h2>
          </div>
          <ul class="space-y-3 text-sm text-gray-700">
            <li class="flex items-start">
              <Icon name="ph:eye" class="mr-2 mt-0.5 flex-shrink-0 text-indigo-400" />
              <span>Greater distance from overwhelming thoughts</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:chart-bar" class="mr-2 mt-0.5 flex-shrink-0 text-purple-400" />
              <span>Recognition of recurring thought patterns</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:shield-check" class="mr-2 mt-0.5 flex-shrink-0 text-green-400" />
              <span>Reduced emotional reactivity to anxious thoughts</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:lightbulb" class="mr-2 mt-0.5 flex-shrink-0 text-yellow-400" />
              <span>Improved metacognitive awareness over time</span>
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
          <h2 class="font-semibold text-gray-800">Tips for effective thought labeling</h2>
        </div>
        <div class="grid gap-4 text-sm md:grid-cols-3">
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Stay Non-Judgmental</div>
            <p class="text-gray-600">
              Label thoughts without criticism. There are no "bad" thoughts—only thoughts that may
              not be serving you well.
            </p>
          </div>
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Observe, Don't Engage</div>
            <p class="text-gray-600">
              The goal is to notice and categorize thoughts, not to solve or analyze them deeply in
              the moment.
            </p>
          </div>
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Practice Regularly</div>
            <p class="text-gray-600">
              Like any skill, thought labeling becomes more effective with practice. Use it daily
              for best results.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Techniques -->
    <RelatedTechniques current-technique-id="thought-labeling" />
  </div>
</template>

<script setup>
const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.thoughtLabeling.title"),
  description: () => t("meta.thoughtLabeling.description"),
  ogTitle: () => t("meta.thoughtLabeling.title"),
  ogDescription: () => t("meta.thoughtLabeling.description"),
  ogType: "website",
  ogSiteName: "Anxiety Aid Tools",
  twitterCard: "summary_large_image",
});
</script>
