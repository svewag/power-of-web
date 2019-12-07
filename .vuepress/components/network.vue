<template>
  <ClientOnly>
    <div>
      <h2>online*</h2>
      <p>{{ online }}</p>

      <h2>Data-Saver</h2>
      <p>{{ navigator.connection.saveData }}</p>

      <h2>Type</h2>
      <p>{{ navigator.connection.effectiveType }}</p>

      <h2>Downlink</h2>
      <p>{{ navigator.connection.downlink }}</p>

      <h2>RTT</h2>
      <p>{{ navigator.connection.rtt }}</p>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'network',
  data () {
    return {
      navigator: window.navigator,
      online: navigator.onLine
    }
  },
  mounted () {
    const getOnlineStatus = () => {
      this.online = navigator.onLine
    }

    window.addEventListener('online', getOnlineStatus)
    window.addEventListener('offline', getOnlineStatus)
  }
}
</script>
