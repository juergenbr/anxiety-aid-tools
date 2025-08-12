<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
    <Breadcrumb duration="3-5 min" />

    <!-- Exercise Component -->
    <GuidedBreathingExercise />
    <!-- Why It Works Section -->
    <section>
      <!-- Technique Overview -->
      <div class="mb-6 grid gap-6 md:grid-cols-2">
        <div class="border border-blue-200 bg-blue-50 p-6">
          <div>
            <div class="flex items-center justify-start gap-2 mb-2">
              <Icon name="ph:squares-four" class="flex-shrink-0 text-2xl text-blue-600" />
              <h2 class="font-semibold text-gray-800">Box Breathing (4-4-4-4)</h2>
            </div>
            <div class="px-1">
              <p class="mb-3 text-sm leading-relaxed text-gray-700">
                Equal timing for all phases creates mental clarity and focus. Used by Navy SEALs and
                emergency responders to maintain calm under pressure. The symmetrical pattern helps
                regulate your nervous system and improve concentration.
              </p>
              <div class="text-xs font-medium text-blue-600">
                Best for: Focus, concentration, stress management
              </div>
            </div>
          </div>
        </div>

        <div class="border border-purple-200 bg-purple-50 p-6">
          <div>
            <div class="flex items-center justify-start gap-2 mb-2">
              <Icon name="ph:moon-stars" class="flex-shrink-0 text-2xl text-purple-600" />
              <h2 class="font-semibold text-gray-800">4-7-8 Calming</h2>
            </div>
            <div class="px-1">
              <p class="mb-3 text-sm leading-relaxed text-gray-700">
                Extended hold allows oxygen to fully saturate your blood, while the long exhale
                activates your parasympathetic nervous system. This technique is particularly
                effective for reducing anxiety and preparing for sleep.
              </p>
              <div class="text-xs font-medium text-purple-600">
                Best for: Anxiety relief, sleep preparation, deep relaxation
              </div>
            </div>
          </div>
        </div>

        <div class="border border-green-200 bg-green-50 p-6">
          <div>
            <div class="flex items-center justify-start gap-2 mb-2">
              <Icon name="ph:lightning" class="flex-shrink-0 text-2xl text-green-600" />
              <h2 class="font-semibold text-gray-800">4-4-6 Energizing</h2>
            </div>
            <div class="px-1">
              <p class="mb-3 text-sm leading-relaxed text-gray-700">
                Balanced pattern that increases oxygen flow while maintaining control. The moderate
                exhale helps clear mental fog and boost alertness without causing hyperventilation.
              </p>
              <div class="text-xs font-medium text-green-600">
                Best for: Mental clarity, energy boost, midday reset
              </div>
            </div>
          </div>
        </div>

        <div class="border border-orange-200 bg-orange-50 p-6">
          <div>
            <div class="flex items-center justify-start gap-2 mb-2">
              <Icon name="ph:clock" class="flex-shrink-0 text-2xl text-orange-600" />
              <h2 class="font-semibold text-gray-800">3-3-3 Quick Reset</h2>
            </div>
            <div class="px-1">
              <p class="mb-3 text-sm leading-relaxed text-gray-700">
                Faster rhythm for immediate stress relief when you only have a minute or two.
                Perfect for moments of acute anxiety or when you need quick emotional regulation.
              </p>
              <div class="text-xs font-medium text-orange-600">
                Best for: Quick stress relief, emergency calm, busy schedules
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- How It Works -->
      <div class="border border-gray-200 bg-white/60 p-6">
        <div>
          <SectionHeader icon="ph:brain" color="gray">
            How guided breathing works
          </SectionHeader>
          <div class="px-1">
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              Structured breathing patterns give your mind something specific to focus on,
              interrupting anxious thoughts. The timing cues help regulate your autonomic nervous
              system - the part that controls stress responses automatically.
            </p>
            <p class="mb-3 text-sm leading-relaxed text-gray-700">
              Each technique targets different aspects of relaxation. Longer exhales activate your
              body's "rest and digest" mode, while controlled holds optimize oxygen exchange and
              build mental resilience.
            </p>
            <div class="mt-4 grid gap-4 md:grid-cols-3">
              <div class="border border-gray-200 bg-white/60 p-3">
                <div class="mb-1 flex items-center">
                  <Icon name="ph:target" class="mr-2 text-gray-600" />
                  <span class="text-xs font-medium text-gray-800">Focused Attention</span>
                </div>
                <p class="text-xs text-gray-600">
                  Counting and timing keeps your mind occupied and present
                </p>
              </div>
              <div class="border border-gray-200 bg-white/60 p-3">
                <div class="mb-1 flex items-center">
                  <Icon name="ph:activity" class="mr-2 text-gray-600" />
                  <span class="text-xs font-medium text-gray-800">Nervous System</span>
                </div>
                <p class="text-xs text-gray-600">
                  Different patterns activate different relaxation responses
                </p>
              </div>
              <div class="border border-gray-200 bg-white/60 p-3">
                <div class="mb-1 flex items-center">
                  <Icon name="ph:repeat" class="mr-2 text-gray-600" />
                  <span class="text-xs font-medium text-gray-800">Skill Building</span>
                </div>
                <p class="text-xs text-gray-600">
                  Regular practice improves your natural stress resilience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scientific Background -->
    <section>
      <div class="border border-gray-200 bg-white/60 p-6">
        <SectionHeader icon="ph:flask" color="purple">
          {{ $t("guidedBreathing.science.title") }}
        </SectionHeader>
        
        <div class="mb-4">
          <p class="text-sm leading-relaxed text-gray-700" v-html="$t('guidedBreathing.science.description')"></p>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <div class="border border-purple-200 bg-purple-50 p-4">
            <div class="mb-2 flex items-center">
              <Icon name="ph:trend-up" class="mr-2 text-purple-600" />
              <span class="text-sm font-medium text-gray-800">{{ $t("guidedBreathing.science.research.effectiveness.title") }}</span>
            </div>
            <p class="text-xs text-gray-600" v-html="$t('guidedBreathing.science.research.effectiveness.description')"></p>
          </div>
          
          <div class="border border-purple-200 bg-purple-50 p-4">
            <div class="mb-2 flex items-center">
              <Icon name="ph:hospital" class="mr-2 text-purple-600" />
              <span class="text-sm font-medium text-gray-800">{{ $t("guidedBreathing.science.research.clinical.title") }}</span>
            </div>
            <p class="text-xs text-gray-600" v-html="$t('guidedBreathing.science.research.clinical.description')"></p>
          </div>
          
          <div class="border border-purple-200 bg-purple-50 p-4">
            <div class="mb-2 flex items-center">
              <Icon name="ph:calendar-plus" class="mr-2 text-purple-600" />
              <span class="text-sm font-medium text-gray-800">{{ $t("guidedBreathing.science.research.longterm.title") }}</span>
            </div>
            <p class="text-xs text-gray-600" v-html="$t('guidedBreathing.science.research.longterm.description')"></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="grid gap-8 md:grid-cols-2">
        <!-- When to Use -->
        <div class="border border-gray-200 bg-white/60 p-6">
          <SectionHeader icon="ph:calendar-check" color="blue">
            When to practice
          </SectionHeader>
          <ul class="space-y-3 text-sm text-gray-700">
            <li class="flex items-start">
              <Icon name="ph:sun" class="mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
              <span>Start your day with energizing 4-4-6 breathing</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:briefcase" class="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
              <span>Use box breathing before important meetings or presentations</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:clock-afternoon" class="mr-2 mt-0.5 flex-shrink-0 text-orange-400" />
              <span>Quick reset breathing during stressful moments</span>
            </li>
            <li class="flex items-start">
              <Icon name="ph:moon" class="mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
              <span>4-7-8 technique 30 minutes before bedtime</span>
            </li>
          </ul>
        </div>

        <!-- What You'll Experience -->
        <div class="border border-gray-200 bg-white/60 p-6">
          <SectionHeader icon="ph:trend-up" color="green">
            What you'll notice
          </SectionHeader>
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
              <Icon name="ph:heart" class="mr-2 mt-0.5 flex-shrink-0 text-red-400" />
              <span>Slower heart rate and reduced muscle tension</span>
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
            <div class="mb-1 font-medium text-indigo-600">Posture</div>
            <p class="text-gray-600">
              Sit or stand straight to allow full lung expansion. Shoulders relaxed, not hunched.
            </p>
          </div>
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Environment</div>
            <p class="text-gray-600">
              Find a quiet space where you won't be interrupted. Comfortable temperature helps
              focus.
            </p>
          </div>
          <div class="text-center">
            <div class="mb-1 font-medium text-indigo-600">Consistency</div>
            <p class="text-gray-600">
              Practice the same technique for a week before switching. Building familiarity improves
              effectiveness.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Techniques -->
    <RelatedTechniques current-technique-id="guided-breathing" />
  </div>
</template>

<script setup>
const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.guidedBreathing.title"),
  description: () => t("meta.guidedBreathing.description"),
  ogTitle: () => t("meta.guidedBreathing.title"),
  ogDescription: () => t("meta.guidedBreathing.description"),
  ogType: "website",
  ogSiteName: "Anxiety Aid Tools",
  twitterCard: "summary_large_image",
});
</script>
