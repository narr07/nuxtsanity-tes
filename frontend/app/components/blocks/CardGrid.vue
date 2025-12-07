<script setup lang="ts">
defineProps({
  block: {
    type: Object as PropType<any>,
    required: true
  }
})
</script>

<template>
  <UPageSection v-if="block.cards && block.cards.length">
    <UContainer>
      <h2 v-if="block.heading" class="text-3xl font-bold mb-8 text-center">
        {{ block.heading }}
      </h2>
      <div
        class="grid gap-6"
        :class="{
          'grid-cols-1 md:grid-cols-2': block.columns === 2,
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': block.columns === 3,
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': block.columns === 4
        }"
      >
        <UCard
          v-for="(card, index) in block.cards"
          :key="index"
          :to="card.link"
        >
          <template #header>
            <div v-if="card.icon" class="flex items-center gap-3">
              <UIcon :name="card.icon" class="w-6 h-6" />
              <h3 class="text-xl font-semibold">{{ card.title }}</h3>
            </div>
            <h3 v-else class="text-xl font-semibold">{{ card.title }}</h3>
          </template>

          <p class="text-muted">{{ card.description }}</p>
        </UCard>
      </div>
    </UContainer>
  </UPageSection>
</template>
