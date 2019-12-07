<template>
  <ClientOnly>
    <div>
      <h2>RAM</h2>
      <p>{{ navigator.deviceMemory }}</p>

      <h2>CPU</h2>
      <p>{{ navigator.hardwareConcurrency }}</p>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'device',
  data () {
    return {
      navigator: window.navigator,
    }
  },
}
</script>
