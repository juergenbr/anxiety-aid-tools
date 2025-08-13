// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'

export default withNuxt(
  // Your custom configs here
  ...vueI18n.configs.recommended,
  {
    settings: {
      'vue-i18n': {
        localeDir: './i18n/locales/**/*.json',
        messageSyntaxVersion: '^9.0.0'
      }
    },
    rules: {
      '@intlify/vue-i18n/no-dynamic-keys': 'off',
      '@intlify/vue-i18n/no-unused-keys': [
        'error',
        {
          ignores: [
            '/grounding.exercise.steps.*/',
            '/.*.whenToPractice.*/',
            '/.*.whatYoullNotice.*/',
            '/progressiveMuscleRelaxation.whatYoullNotice.items.*/',
            '/peacefulVisualization.scenes.*/',
            '/soundTherapy.modulation.*/',
            '/soundTherapy.frequency.*/',
            '/soundTherapy.frequencies.*/',
            '/soundTherapy.binauralBeats.*/',
            '/about.tips.items.*/',
            '/resources.professional.signs.*/',
            '/resources.organizations.list.*/',
            '/techniques.*/',
            '/.*/',
            '/.*/',

          ],
          extensions: ['.js', '.vue']
        }
      ],
      '@intlify/vue-i18n/no-v-html': 'off'
    }
  }
)
