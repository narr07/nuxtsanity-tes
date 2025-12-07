<script setup lang="ts">
const props = defineProps({
  block: {
    type: Object as PropType<any>,
    required: true
  }
})

const { urlFor } = useImageUrl()

function getButtonColor(style: string) {
  switch (style) {
    case 'primary': return 'primary'
    case 'secondary': return 'neutral'
    case 'outline': return 'neutral'
    default: return 'primary'
  }
}

function getButtonVariant(style: string) {
  return style === 'outline' ? 'outline' : 'solid'
}

function useImageUrl() {
  const projectId = 'kdwtvkc2'
  const dataset = 'production'

  const urlFor = (source: any) => {
    if (!source) return null
    const { asset } = source
    if (!asset) return null

    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`
  }

  return { urlFor }
}
</script>

<template>
  <UPageHero
    :title="block.title"
    :description="block.subtitle"
    :links="block.buttons?.map((btn: any) => ({
      label: btn.text,
      to: btn.url,
      color: getButtonColor(btn.style),
      variant: getButtonVariant(btn.style),
      size: 'xl'
    }))"
  />
</template>
