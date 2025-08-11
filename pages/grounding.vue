<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8">
    <Breadcrumb duration="3-5 min" />

    <!-- Exercise Component -->
    <GroundingExercise />

    <!-- Educational Content -->
    <!-- How It Works -->
    <section>
      <div class="border border-gray-200 bg-white/60 p-6">
        <div class="mb-4 flex items-center">
          <div class="mr-3 flex h-8 w-8 items-center justify-center bg-green-100">
            <Icon name="ph:brain" class="text-lg text-green-600" />
          </div>
          <h2 class="text-lg font-semibold text-gray-800">How Grounding Works</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Neurological Impact</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              The 5-4-3-2-1 technique redirects attention from internal anxious thoughts to external
              sensory experiences. This engages your prefrontal cortex while calming the
              amygdala—your brain's alarm system.
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              By systematically using your five senses, you activate present-moment awareness and
              break the cycle of anxious thinking patterns.
            </p>
          </div>
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Immediate Stability</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              The structured sequence (5 things to see, 4 to touch, etc.) gives your mind a concrete
              focus during chaotic mental states, preventing further spiraling into anxiety.
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              This technique provides immediate grounding by connecting you with your physical
              environment and current reality.
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
          <h2 class="text-lg font-semibold text-gray-800">The Science Behind Grounding</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Clinical Research</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              Research published in the Journal of Clinical Psychology demonstrates that
              sensory-based grounding techniques significantly reduce acute anxiety symptoms within
              3-5 minutes.
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              The 5-4-3-2-1 method specifically engages the brain's attentional networks, helping
              regulate emotional responses during stress.
            </p>
          </div>
          <div>
            <h3 class="mb-2 font-semibold text-gray-800">Therapeutic Use</h3>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              Grounding techniques are widely used in trauma therapy, anxiety treatment, and panic
              disorder management as evidence-based interventions.
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              Studies show regular practice improves overall emotional regulation and reduces the
              frequency of panic attacks.
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
              <Icon name="ph:lightning-fill" class="mr-2 mt-0.5 flex-shrink-0 text-red-500" />
              <span>During panic attacks or overwhelming anxiety</span>
            </li>
            <li class="flex items-start">
              <Icon
                name="ph:cloud-lightning-fill"
                class="mr-2 mt-0.5 flex-shrink-0 text-orange-500"
              />
              <span>When racing thoughts won't stop</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:ghost-fill" class="mr-2 mt-0.5 flex-shrink-0 text-purple-500" />
              <span>Feeling disconnected from reality</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:warning-fill" class="mr-2 mt-0.5 flex-shrink-0 text-blue-500" />
              <span>When situations feel overwhelming</span>
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
              <Icon name="ph:timer" class="mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
              <span>Immediate calming effect within the first minute</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:brain" class="mr-2 mt-0.5 flex-shrink-0 text-purple-400" />
              <span>Clearer thinking and improved decision-making</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:eye" class="mr-2 mt-0.5 flex-shrink-0 text-green-400" />
              <span>Enhanced present-moment awareness</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:shield-check" class="mr-2 mt-0.5 flex-shrink-0 text-green-400" />
              <span>Better stress resilience with regular practice</span>
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
          <h2 class="font-semibold text-gray-800">Tips for best results</h2>
        </div>
        <div class="grid gap-4 text-sm md:grid-cols-3">
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Timing</div>
            <p class="text-gray-600">
              Don't rush through the steps. Spend time really observing each sense.
            </p>
          </div>
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Detail</div>
            <p class="text-gray-600">
              Notice details like colors, textures, temperatures, and specific sounds.
            </p>
          </div>
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Practice</div>
            <p class="text-gray-600">
              Use this technique even when calm to build familiarity for anxious moments.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Techniques -->
    <RelatedTechniques current-technique-id="grounding" />
  </div>
</template>

<script setup>
const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.grounding.title"),
  description: () => t("meta.grounding.description"),
  ogTitle: () => t("meta.grounding.title"),
  ogDescription: () => t("meta.grounding.description"),
  ogType: "website",
  ogSiteName: "Anxiety Aid Tools",
  twitterCard: "summary_large_image",
});
</script>
