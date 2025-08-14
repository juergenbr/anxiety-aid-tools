<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <footer class="py-8 px-4 border-t border-gray-300 bg-gray-50">
    <div class="sektion">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ $t('footer.title') }}</h3>
          <p class="text-sm text-gray-600">{{ $t('footer.description') }}</p>
        </div>
        
        <div class="text-center">
          <h4 class="text-sm font-medium text-gray-700 mb-2">{{ $t('footer.contribute.title') }}</h4>
          <div class="flex justify-center space-x-4">
            <a 
              href="https://github.com/alvinunreal/anxiety-aid-tools" 
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="flex items-center text-sm text-[#0000EE] hover:underline"
            >
              <Icon name="mdi:github" class="text-base mr-1" />
              {{ $t('footer.contribute.github') }}
            </a>
            <a 
              href="https://github.com/alvinunreal/anxiety-aid-tools/discussions" 
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="flex items-center text-sm text-[#0000EE] hover:underline"
            >
              <Icon name="mdi:chat" class="text-base mr-1" />
              {{ $t('footer.contribute.discussions') }}
            </a>
          </div>
        </div>
        
        <div class="text-center md:text-right">
          <a 
            href="https://www.reddit.com/user/alvinunreal/" 
            rel="noopener noreferrer nofollow"
            target="_blank"
            class="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Alvin Unreal
          </a>
        </div>
      </div>
      
      <div class="py-4 border-t border-gray-200">
        <div class="flex justify-center">
          <div class="flex space-x-1 text-xs">
            <NuxtLink 
              v-for="loc in locales" 
              :key="loc.code"
              :to="switchLocalePath(loc.code)"
              class="px-2 py-1 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100 uppercase font-mono"
              :class="{ 'text-gray-800 bg-gray-200 font-medium': locale === loc.code }"
            >
              {{ loc.code }}
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="pt-4 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p class="text-xs text-gray-500 text-center md:text-left max-w-2xl">
            {{ $t('footer.disclaimer') }}
          </p>
          <p class="text-xs text-gray-500">
            Open Source • GPL License
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>