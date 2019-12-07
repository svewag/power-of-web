<template>
  <ClientOnly>
    <div>
      <button @click="scan">scan for devices</button>
      <div v-if="device">
        <button @click="connect">connect to {{ deviceName }}</button>
      </div>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'bluetooth',
  data () {
    return {
      device: null,
    }
  },
  computed: {
    deviceName () {
      if (this.device) {
        if (this.device.name) {
          return this.device.name
        } else {
          return this.device.id
        }
      } else {
        return ''
      }
    }
  },
  methods: {
    async scan () {
      this.device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true })
    },

    async connect () {
      if (this.device) {
        const server = await this.device.gatt.connect()
        console.log(server)
      }
    }
  }
}
</script>
