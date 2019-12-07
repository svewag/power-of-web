<template>

  <div>
    <h2>RAM</h2>
    <p>{{ navigator.deviceMemory }}</p>

    <h2>CPU</h2>
    <p>{{ navigator.hardwareConcurrency }}</p>
  </div>
</template>

<script>
export default {
  name: 'device',
  data () {
    return {
      navigator: window ? window.navigator : null,
    }
  },
}
</script>
