<script setup lang="ts">
defineProps({
  block: {
    type: Object as PropType<any>,
    required: true
  }
})
</script>

<template>
  <UPageSection>
    <UPageCTA
      :title="block.heading"
      :description="block.text"
      :variant="block.variant || 'subtle'"
      :links="block.buttonText ? [{
        label: block.buttonText,
        to: block.buttonUrl,
        size: 'xl'
      }] : []"
    />
  </UPageSection>
</template>
