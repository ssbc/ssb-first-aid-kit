<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  created () {
    document.title = 'Scuttlebutt First Aid Kit'

    this.$store.dispatch('poll')
    window.setInterval(() => {
      this.$store.dispatch('poll')
    }, 1000)
  },
}
</script>

<style scoped>
.wrapper {
  text-align: center;
  margin: auto;
  max-width: 40rem;
}
</style>
