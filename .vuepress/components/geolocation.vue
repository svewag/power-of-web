<template>
  <div>
    <button @click="start">start watch</button>
    <button @click="end">end watch</button>
    <div>{{ coords }}</div>
  </div>
</template>

<script>
export default {
  name: 'geolocation',
  data () {
    return {
      latitude: null,
      longitude: null,
      watchID: null,
    }
  },
  computed: {
    coords () {
      if (this.latitude && this.longitude) {
        return [this.latitude, this.longitude].join(' / ')
      }

      return ''
    }
  },
  methods: {
    syncCoords (position) {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
    },
    start () {
      if ('geolocation' in window.navigator) {
        navigator.geolocation.getCurrentPosition(this.syncCoords)
        this.watchID = window.navigator.geolocation.watchPosition(this.syncCoords)
      }
    },
    end () {
      navigator.geolocation.clearWatch(this.watchID)
    }
  }
}
</script>
