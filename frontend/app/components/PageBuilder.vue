<script setup lang="ts">
defineProps({
  blocks: {
    type: Array as PropType<any[]>,
    required: true
  }
})
</script>

<template>
  <div v-for="block in blocks" :key="block._key">
    <BlocksHeroSection v-if="block._type === 'heroSection'" :block="block" />
    <BlocksContentSection v-else-if="block._type === 'contentSection'" :block="block" />
    <BlocksCtaSection v-else-if="block._type === 'ctaSection'" :block="block" />
    <BlocksCardGrid v-else-if="block._type === 'cardGrid'" :block="block" />
    <BlocksFeaturesSection v-else-if="block._type === 'featuresSection'" :block="block" />
  </div>
</template>
