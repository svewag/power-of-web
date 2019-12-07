<template>
  <ClientOnly>
    <div>
      <h2>Cookie enabled?</h2>
      <p>{{ navigator.cookieEnabled }}</p>

      <h2>App-Version</h2>
      <p>{{ navigator.appVersion }}</p>

      <h2>Platform</h2>
      <p>{{ navigator.platform }}</p>

      <h2>Vendor</h2>
      <p>{{ this.vendor }}</p>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'browser',
  data () {
    return {
      navigator: window.navigator,
    }
  },
  computed: {
    vendor () {
      return [
        this.navigator.vendor,
        this.navigator.vendorSub]
        .filter(Boolean)
        .join(', ')
    }
  },
}
</script>
