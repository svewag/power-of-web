<template>
  <div>
    <form
      v-if="!loggedin"
      @submit.prevent="login"
      id="login"
    >
      <input
        v-model="user"
        type="text"
        name="user"
        autocomplete="username"
        placeholder="user"
      >
      <input
        v-model="password"
        type="password"
        name="password"
        autocomplete="new-password"
        placeholder="password"
      >
      <input
        type="submit"
        value="login"
      >
      <button @click="access">access password manager</button>
    </form>
    <div v-else>
      logged in as <mark>{{ this.user }}</mark> with <mark>{{ this.password }}</mark>
      <button @click="logout">logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'credentials',
  data () {
    return {
      loggedin: false,
      user: '',
      password: '',
    }
  },
  methods: {
    async login () {
      if (this.user && this.password) {
        this.loggedin = true
        await navigator.credentials.store(new PasswordCredential(document.querySelector('\#login')))
      }
    },
    logout () {
      this.loggedin = false
      this.user = this.password = ''
    },
    async access () {
      const credential = await navigator.credentials.get({ password: true })
      if (credential) {
        console.log(credential)
        this.user = credential.id
        this.password = credential.password
        this.$nextTick(() => this.login())
      }
    }
  }
}
</script>
