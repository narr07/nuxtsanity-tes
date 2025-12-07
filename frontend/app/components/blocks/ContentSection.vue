<script setup lang="ts">
defineProps({
  block: {
    type: Object as PropType<any>,
    required: true
  }
})
</script>

<template>
  <UPageSection v-if="block.heading || block.content">
    <UContainer>
      <h2 v-if="block.heading" class="text-3xl font-bold mb-6">
        {{ block.heading }}
      </h2>
      <div class="prose prose-lg max-w-none dark:prose-invert">
        <SanityContent v-if="block.content" :value="block.content" />
      </div>
    </UContainer>
  </UPageSection>
</template>
