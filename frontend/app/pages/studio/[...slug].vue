<template>
  <div id="sanity-studio" ref="studioRef"></div>
</template>

<script setup lang="ts">
import { renderStudio } from 'sanity'

const { $sanityStudioConfig } = useNuxtApp()
const studioRef = ref<HTMLElement>()

onMounted(() => {
  if (studioRef.value) {
    renderStudio(studioRef.value, $sanityStudioConfig)
  }
})
</script>

<style>
/* Full height for studio */
#sanity-studio {
  height: 100vh;
  max-height: 100dvh;
  overscroll-behavior: none;
  -webkit-font-smoothing: antialiased;
  overflow: auto;
}

/* Fix for Tailwind CSS conflicts */
*:not([data-ui='Popover__arrow']):not([data-ui='Tooltip__arrow']) > svg {
  display: inline;
}
</style>
