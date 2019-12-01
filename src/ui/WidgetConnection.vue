<template>
  <BaseWidget link="" :status="connected ? 'good' : 'unsure'">
    Connection:
    {{ connected ? 'Connected' : "Not connected. Can't find a scuttlebutt client on this machine to connect to. Please start one if you haven't. Note that sometimes, clients that are busy indexing don't accept incoming connections." }}
  </BaseWidget>
</template>

<script>
import BaseWidget from './BaseWidget'

export default {
  components: {
    BaseWidget,
  },
  data () {
    return {
    }
  },
  computed: {
      connected () {
          return this.$store.getters.connected
      },
  },
}
</script>

<style scoped>
</style>