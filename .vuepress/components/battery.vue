<template>
  <ClientOnly>
    <div v-if="mounted">
      <h2>Battery Level*</h2>
      <p>{{ level }}</p>

      <h2>is charging*</h2>
      <p>{{ charging }}</p>

      <h2>chargingTime*</h2>
      <p>{{ chargingTime }}</p>

      <h2>dischargingTime*</h2>
      <p>{{ dischargingTime }}</p>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'battery',
  data () {
    return {
      mounted: false,
      chargingTime: null,
      dischargingTime: null,
      level: null,
      charging: null,
    }
  },
  async mounted () {
    const battery = await window.navigator.getBattery()

    this.chargingTime = battery.chargingTime
    battery.onchargingtimechange = () => {
      this.chargingTime = battery.chargingTime
    }

    this.dischargingTime = battery.dischargingTime
    battery.ondischargingtimechange = () => {
      this.dischargingTime = battery.dischargingTime
    }

    this.charging = battery.charging
    battery.onchargingchange = () => {
      this.charging = battery.charging
    }

    this.level = battery.level
    battery.onlevelchange = () => {
      this.level = battery.level
    }

    this.mounted = true
  }
}
</script>
