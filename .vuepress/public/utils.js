export default {
  reloadIfVisible () {
    window.addEventListener('visibilitychange', function () {
      console.log(document.visibilityState)

      if (document.visibilityState === 'visible') {
        location.reload()
      }
    })
  }
}
