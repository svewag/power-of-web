<template>
  <ClientOnly>
    <div>
      <button @click="getVideo">open camera</button>
      <button @click="flip">flip camera</button>
      <button @click="takePhoto">take a photo</button>
      <br>
      <video
        autoplay
        ref="video"
      ></video>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'camera',
  data () {
    return {
      front: false,
    }
  },
  methods: {
    flip () {
      this.front = !this.front
      this.getVideo()
    },
    takePhoto () {
      const canvas = document.createElement('canvas')
      canvas.setAttribute('height', 1200)
      canvas.setAttribute('width', 1200)
      canvas.getContext("2d").drawImage(this.$refs.video, 0, 0, 1200, 1200, 0, 0, 1200, 1200)
      var img = canvas.toDataURL('image/png')

      const saveImg = document.createElement('a')
      saveImg.href = img
      saveImg.download = 'imagename.png'
      saveImg.click()
    },
    async getVideo () {
      const constraints = {
        audio: true,
        video: {
          width: 1200,
          height: 1200,
          facingMode: (this.front ? "user" : "environment"),
        }
      }
      const stream = await window.navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      this.$refs.video.srcObject = stream
    }
  }
}
</script>
