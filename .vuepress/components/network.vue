<template>
  <ClientOnly>
    <div>
      <h2>online*</h2>
      <p>{{ online }}</p>

      <h2>Data-Saver</h2>
      <p>{{ window.navigator.connection.saveData }}</p>

      <h2>Type</h2>
      <p>{{ window.navigator.connection.effectiveType }}</p>

      <h2>Downlink</h2>
      <p>{{ window.navigator.connection.downlink }}</p>

      <h2>RTT</h2>
      <p>{{ window.navigator.connection.rtt }}</p>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'network',
  data () {
    return {
      online: navigator.onLine
    }
  },
  mounted () {
    const getOnlineStatus = () => {
      this.online = window.navigator.onLine
    }

    window.addEventListener('online', getOnlineStatus)
    window.addEventListener('offline', getOnlineStatus)
  }
}
</script>
