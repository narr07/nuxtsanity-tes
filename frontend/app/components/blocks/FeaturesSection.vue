<script setup lang="ts">
defineProps({
  block: {
    type: Object as PropType<any>,
    required: true
  }
})
</script>

<template>
  <UPageSection
    v-if="block.features && block.features.length"
    :title="block.heading"
    :description="block.description"
    :features="block.features.map((feature: any) => ({
      icon: feature.icon,
      title: feature.title,
      description: feature.description
    }))"
  />
</template>
