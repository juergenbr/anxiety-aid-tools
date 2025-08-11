<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-light text-gray-900 mb-4">Sound Therapy</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Immerse yourself in healing frequencies and calming tones for deep relaxation and meditation.
      </p>
    </div>

    <!-- Main Control Panel -->
    <div class="bg-white border border-gray-100 shadow-sm p-8 mb-8">
      <!-- Frequency Selection -->
      <div class="mb-8">
        <h3 class="text-xl font-medium text-gray-900 mb-6">Healing Frequency</h3>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            v-for="freq in frequencies"
            :key="freq.value"
            @click="selectFrequency(freq)"
            :class="[
              'p-4 text-left border transition-all duration-200 hover:border-blue-300',
              selectedFrequency?.value === freq.value
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-white'
            ]"
          >
            <div class="font-semibold text-gray-900 text-sm">{{ freq.name }}</div>
            <div class="text-xs text-gray-500 mt-1 leading-tight">{{ freq.description }}</div>
          </button>
        </div>
      </div>

      <!-- Settings Row -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <!-- Binaural Beats -->
        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-4">Binaural Beats</h4>
          <div class="space-y-2">
            <button
              v-for="beat in binauralBeats"
              :key="beat.value"
              @click="selectBinauralBeat(beat.value)"
              :class="[
                'w-full p-3 text-left border transition-all duration-200 text-sm hover:border-green-300',
                selectedBeat === beat.value
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white'
              ]"
            >
              <div class="font-medium text-gray-900">{{ beat.name }}</div>
              <div class="text-xs text-gray-500 mt-1">{{ beat.description }}</div>
            </button>
          </div>
        </div>

        <!-- Modulation -->
        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-4">Modulation</h4>
          <div class="space-y-2">
            <button
              v-for="preset in lfoPresets"
              :key="preset.name"
              @click="selectLfoPreset(preset)"
              :class="[
                'w-full p-3 text-left border transition-all duration-200 text-sm hover:border-purple-300',
                selectedLfoPreset?.name === preset.name
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 bg-white'
              ]"
            >
              <div class="font-medium text-gray-900">{{ preset.name }}</div>
              <div class="text-xs text-gray-500 mt-1">{{ preset.description }}</div>
            </button>
          </div>
        </div>

        <!-- Volume -->
        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-4">Volume</h4>
          <div class="bg-gray-50 p-4 border border-gray-200">
            <div class="flex items-center gap-4">
              <Icon name="heroicons:speaker-wave" class="text-gray-500 flex-shrink-0" />
              <div class="flex-1">
                <input
                  type="range"
                  min="0"
                  max="100"
                  v-model="volume"
                  class="w-full h-2 bg-gray-300 appearance-none slider cursor-pointer"
                />
                <div class="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0%</span>
                  <span class="font-medium">{{ volume }}%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Play Button -->
      <div class="text-center">
        <button
          @click="toggleSession"
          :disabled="!selectedFrequency"
          :class="[
            'px-12 py-4 text-lg font-medium transition-all duration-200 shadow-sm',
            !selectedFrequency
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : isPlaying
              ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-200'
              : 'bg-blue-500 hover:bg-blue-600 text-white shadow-blue-200'
          ]"
        >
          <Icon :name="isPlaying ? 'heroicons:pause' : 'heroicons:play'" class="inline mr-3" />
          {{ isPlaying ? 'Stop Session' : 'Start Sound Therapy' }}
        </button>
      </div>
    </div>

    <!-- Playing State -->
    <div v-if="isPlaying" class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-8 text-center mb-8">
      <div class="mb-6">
        <h3 class="text-2xl font-light text-gray-900 mb-2">
          {{ selectedFrequency.name }}
        </h3>
        <p class="text-gray-600">
          <span v-if="selectedBeat > 0">{{ selectedBeat }}Hz Binaural Beat • </span>
          {{ selectedLfoPreset.name }} Modulation
        </p>
      </div>
      
      <div class="max-w-2xl mx-auto text-gray-700 leading-relaxed">
        <p class="mb-4 text-lg">
          <strong>Focus on the sound.</strong> Let the healing frequencies wash over you, releasing tension with each gentle tone.
        </p>
        <p class="text-base opacity-90">
          Close your eyes and allow the vibrations to penetrate deeply, bringing peace to your mind and body.
        </p>
      </div>
    </div>

    <!-- Benefits -->
    <div class="bg-blue-50 border border-blue-100 p-6">
      <h4 class="font-semibold text-blue-900 mb-4 text-center">Benefits of Sound Therapy</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl mx-auto">
        <div class="flex items-start gap-3">
          <div class="w-2 h-2 bg-blue-500 mt-2 flex-shrink-0"></div>
          <span class="text-sm text-blue-800">Reduces stress and anxiety through sound vibrations</span>
        </div>
        <div class="flex items-start gap-3">
          <div class="w-2 h-2 bg-blue-500 mt-2 flex-shrink-0"></div>
          <span class="text-sm text-blue-800">Promotes deep relaxation and mental clarity</span>
        </div>
        <div class="flex items-start gap-3">
          <div class="w-2 h-2 bg-blue-500 mt-2 flex-shrink-0"></div>
          <span class="text-sm text-blue-800">Helps synchronize brainwaves for meditative states</span>
        </div>
        <div class="flex items-start gap-3">
          <div class="w-2 h-2 bg-blue-500 mt-2 flex-shrink-0"></div>
          <span class="text-sm text-blue-800">Can improve sleep quality and emotional balance</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'

const frequencies = [
  { name: '396Hz', value: 396, description: 'Liberation from fear and guilt' },
  { name: '417Hz', value: 417, description: 'Undoing situations, facilitating change' },
  { name: '528Hz', value: 528, description: 'Transformation and DNA repair' },
  { name: '639Hz', value: 639, description: 'Connecting relationships and love' },
  { name: '741Hz', value: 741, description: 'Awakening intuition and expression' },
  { name: '852Hz', value: 852, description: 'Returning to spiritual order' },
  { name: 'Alpha 10Hz', value: 10, description: 'Relaxed awareness and creativity' },
  { name: 'Theta 6Hz', value: 6, description: 'Deep meditation and healing' }
]

const binauralBeats = [
  { name: 'Off', value: 0, description: 'No binaural beat' },
  { name: 'Delta 2Hz', value: 2, description: 'Deep sleep state' },
  { name: 'Theta 4Hz', value: 4, description: 'Deep meditation' },
  { name: 'Alpha 8Hz', value: 8, description: 'Relaxed focus' },
  { name: 'Beta 15Hz', value: 15, description: 'Alert awareness' }
]

// LFO presets with different rates and depths
const lfoPresets = [
  { 
    name: 'Off', 
    description: 'No modulation',
    frequencyDepth: 0,
    amplitudeDepth: 0,
    freqRate: 0,
    ampRate: 0
  },
  { 
    name: 'Very Subtle', 
    description: 'Barely perceptible',
    frequencyDepth: 3.0,
    amplitudeDepth: 10.0,
    freqRate: 0.05, // 20 second cycles - very slow
    ampRate: 0.04   // 25 second cycles - very slow
  },
  { 
    name: 'Subtle', 
    description: 'Gentle waves',
    frequencyDepth: 8.0,
    amplitudeDepth: 25.0,
    freqRate: 0.1,  // 10 second cycles
    ampRate: 0.08   // 12.5 second cycles
  },
  { 
    name: 'Deep', 
    description: 'Rich movement',
    frequencyDepth: 20.0,
    amplitudeDepth: 50.0,
    freqRate: 0.3,  // 3.3 second cycles
    ampRate: 0.4    // 2.5 second cycles
  }
]

const selectedFrequency = ref(null)
const selectedBeat = ref(0)
const volume = ref(50)
const isPlaying = ref(false)

const selectedLfoPreset = ref(lfoPresets[2]) // Default to Subtle (index 2 now)

const audioContext = ref(null)
const oscillator = ref(null)
const oscillator2 = ref(null)
const gainNode = ref(null)

// LFO oscillators
const lfoFrequency = ref(null)
const lfoAmplitude = ref(null)
const lfoGainFreq = ref(null)
const lfoGainAmp = ref(null)

function selectFrequency(freq) {
  selectedFrequency.value = freq
  if (isPlaying.value) {
    updateAudioFrequency()
  }
}

function selectBinauralBeat(value) {
  selectedBeat.value = value
  if (isPlaying.value) {
    updateAudioFrequency()
  }
}

function selectLfoPreset(preset) {
  selectedLfoPreset.value = preset
  if (isPlaying.value) {
    // Restart audio with new LFO settings
    stopAudio()
    setTimeout(() => startAudio(), 50)
  }
}

function initAudio() {
  if (!audioContext.value) {
    audioContext.value = new AudioContext()
    
    // Resume context immediately to reduce delay
    if (audioContext.value.state === 'suspended') {
      audioContext.value.resume()
    }
    
    gainNode.value = audioContext.value.createGain()
    gainNode.value.connect(audioContext.value.destination)
  }
}

function createLFOs() {
  if (selectedLfoPreset.value.frequencyDepth === 0 && selectedLfoPreset.value.amplitudeDepth === 0) {
    return // No LFO needed for 'Off' preset
  }
  
  // Frequency modulation LFO - uses preset-specific rate
  if (selectedLfoPreset.value.frequencyDepth > 0) {
    lfoFrequency.value = audioContext.value.createOscillator()
    lfoFrequency.value.type = 'sine'
    lfoFrequency.value.frequency.value = selectedLfoPreset.value.freqRate
    
    lfoGainFreq.value = audioContext.value.createGain()
    lfoGainFreq.value.gain.value = selectedLfoPreset.value.frequencyDepth // Direct Hz deviation
    
    lfoFrequency.value.connect(lfoGainFreq.value)
    lfoFrequency.value.start()
  }
  
  // Amplitude modulation LFO - uses preset-specific rate 
  if (selectedLfoPreset.value.amplitudeDepth > 0) {
    lfoAmplitude.value = audioContext.value.createOscillator()
    lfoAmplitude.value.type = 'sine'
    lfoAmplitude.value.frequency.value = selectedLfoPreset.value.ampRate
    
    lfoGainAmp.value = audioContext.value.createGain()
    lfoGainAmp.value.gain.value = selectedLfoPreset.value.amplitudeDepth / 100 * 0.8
    
    lfoAmplitude.value.connect(lfoGainAmp.value)
    lfoAmplitude.value.start()
  }
}

function stopLFOs() {
  if (lfoFrequency.value) {
    lfoFrequency.value.stop()
    lfoFrequency.value = null
  }
  if (lfoAmplitude.value) {
    lfoAmplitude.value.stop()
    lfoAmplitude.value = null
  }
}

function startAudio() {
  initAudio()
  createLFOs()
  
  // Resume audio context if suspended (fixes delay on some browsers)
  if (audioContext.value.state === 'suspended') {
    audioContext.value.resume()
  }
  
  // Create master gain node for overall volume control
  const masterGain = audioContext.value.createGain()
  masterGain.connect(audioContext.value.destination)
  
  // Start with zero gain to prevent clicks, then fade in
  masterGain.gain.setValueAtTime(0, audioContext.value.currentTime)
  
  // Main frequency oscillator
  oscillator.value = audioContext.value.createOscillator()
  oscillator.value.type = 'sine'
  oscillator.value.frequency.value = selectedFrequency.value.value
  
  // Connect frequency LFO to main oscillator frequency
  if (lfoGainFreq.value && selectedLfoPreset.value.frequencyDepth > 0) {
    lfoGainFreq.value.connect(oscillator.value.frequency)
  }
  
  const mainGain = audioContext.value.createGain()
  mainGain.gain.value = 0.5
  
  // Connect amplitude LFO to main oscillator gain
  if (lfoGainAmp.value && selectedLfoPreset.value.amplitudeDepth > 0) {
    // Create a constant source for the base gain
    const baseGain = audioContext.value.createConstantSource()
    baseGain.offset.value = 0.5
    baseGain.connect(mainGain.gain)
    baseGain.start()
    
    lfoGainAmp.value.connect(mainGain.gain)
  }
  
  oscillator.value.connect(mainGain)
  mainGain.connect(masterGain)
  
  // Binaural beat oscillator
  if (selectedBeat.value > 0) {
    oscillator2.value = audioContext.value.createOscillator()
    oscillator2.value.type = 'sine'
    oscillator2.value.frequency.value = selectedFrequency.value.value + selectedBeat.value
    
    // Apply same LFO modulation to binaural beat
    if (lfoGainFreq.value && selectedLfoPreset.value.frequencyDepth > 0) {
      lfoGainFreq.value.connect(oscillator2.value.frequency)
    }
    
    const binauralGain = audioContext.value.createGain()
    binauralGain.gain.value = 0.5
    
    if (lfoGainAmp.value && selectedLfoPreset.value.amplitudeDepth > 0) {
      const baseGain2 = audioContext.value.createConstantSource()
      baseGain2.offset.value = 0.5
      baseGain2.connect(binauralGain.gain)
      baseGain2.start()
      
      lfoGainAmp.value.connect(binauralGain.gain)
    }
    
    oscillator2.value.connect(binauralGain)
    binauralGain.connect(masterGain)
    oscillator2.value.start()
  }
  
  // Store master gain for volume control
  gainNode.value = masterGain
  
  // Start oscillators
  oscillator.value.start()
  
  // Short delay to let everything settle, then smooth fade-in
  setTimeout(() => {
    if (masterGain && audioContext.value) {
      // Use linearRampToValueAtTime for smoother fade-in (exponential can cause issues)
      masterGain.gain.linearRampToValueAtTime(volume.value / 100 * 0.3, audioContext.value.currentTime + 1.5)
    }
  }, 10)
}

function stopAudio() {
  // Smooth fade-out to prevent clicks
  if (gainNode.value && audioContext.value) {
    gainNode.value.gain.linearRampToValueAtTime(0, audioContext.value.currentTime + 0.1)
    
    // Stop oscillators after fade-out completes
    setTimeout(() => {
      if (oscillator.value) {
        try {
          oscillator.value.stop()
        } catch (e) {
          // Oscillator might already be stopped
        }
        oscillator.value = null
      }
      if (oscillator2.value) {
        try {
          oscillator2.value.stop()
        } catch (e) {
          // Oscillator might already be stopped
        }
        oscillator2.value = null
      }
      stopLFOs()
    }, 150) // Slightly longer than fade-out time
  } else {
    // Fallback if no gain node
    if (oscillator.value) {
      try {
        oscillator.value.stop()
      } catch (e) {
        // Handle error silently
      }
      oscillator.value = null
    }
    if (oscillator2.value) {
      try {
        oscillator2.value.stop()
      } catch (e) {
        // Handle error silently
      }
      oscillator2.value = null
    }
    stopLFOs()
  }
}

function updateVolume() {
  if (gainNode.value && audioContext.value) {
    gainNode.value.gain.setTargetAtTime(volume.value / 100 * 0.3, audioContext.value.currentTime, 0.1)
  }
}

function updateAudioFrequency() {
  if (oscillator.value && selectedFrequency.value && audioContext.value) {
    // Smooth frequency transition to avoid clicks
    oscillator.value.frequency.setTargetAtTime(selectedFrequency.value.value, audioContext.value.currentTime, 0.05)
  }
  if (oscillator2.value && selectedBeat.value > 0 && audioContext.value) {
    oscillator2.value.frequency.setTargetAtTime(selectedFrequency.value.value + selectedBeat.value, audioContext.value.currentTime, 0.05)
  } else if (oscillator2.value && selectedBeat.value === 0) {
    // Fade out binaural beat before stopping to prevent click
    const tempGain = audioContext.value.createGain()
    tempGain.gain.value = 1
    tempGain.gain.linearRampToValueAtTime(0, audioContext.value.currentTime + 0.05)
    
    oscillator2.value.disconnect()
    oscillator2.value.connect(tempGain)
    tempGain.connect(gainNode.value)
    
    setTimeout(() => {
      try {
        oscillator2.value.stop()
      } catch (e) {
        // Handle error silently
      }
      oscillator2.value = null
    }, 60)
  } else if (!oscillator2.value && selectedBeat.value > 0 && isPlaying.value && selectedFrequency.value) {
    oscillator2.value = audioContext.value.createOscillator()
    oscillator2.value.type = 'sine'
    oscillator2.value.frequency.value = selectedFrequency.value.value + selectedBeat.value
    
    const gainNode2 = audioContext.value.createGain()
    gainNode2.gain.value = 0
    gainNode2.gain.linearRampToValueAtTime(0.5, audioContext.value.currentTime + 0.05) // Fade in
    
    oscillator2.value.connect(gainNode2)
    gainNode2.connect(gainNode.value)
    oscillator2.value.start()
  }
}

function toggleSession() {
  if (isPlaying.value) {
    stopSession()
  } else {
    startSession()
  }
}

function startSession() {
  if (!selectedFrequency.value) return
  
  isPlaying.value = true
  startAudio()
}

function stopSession() {
  isPlaying.value = false
  stopAudio()
}

watch(volume, updateVolume)
watch(selectedBeat, () => {
  if (isPlaying.value) {
    updateAudioFrequency()
  }
})

onUnmounted(() => {
  stopSession()
  if (audioContext.value) {
    audioContext.value.close()
  }
})
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.slider::-webkit-slider-track {
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
}

.slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.slider::-moz-range-track {
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
  border: none;
}
</style>