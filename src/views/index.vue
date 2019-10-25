<template>
  <div class="wrapper">
    hello
    {{ test }}
    <StatusIndexing class="status-item"></StatusIndexing>
  </div>
</template>

<script>
import StatusIndexing from "../components/StatusIndexing"

export default {
  name: 'App',
  components: {
    StatusIndexing,
  },
  data () {
    return {
      test: 'butt',
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

.status-item {
  margin: 2rem;
}
</style>
