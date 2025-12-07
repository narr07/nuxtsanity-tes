export function useSanityVisualEditingState() {
  const route = useRoute()
  const enabled = computed(() => route.query.preview === 'true')
  const inFrame = computed(() => {
    if (process.client) {
      return window.self !== window.top
    }
    return false
  })

  return {
    enabled,
    inFrame
  }
}
