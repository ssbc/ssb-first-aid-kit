<template>
  <BaseWidget link="" :status="connected ? 'good' : 'unsure'">
    Connection:
    {{ connected ? 'Connected' : "Not connected. Can't find a scuttlebutt client on this machine to connect to. Please start one if you haven't." }}
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
          return this.$store.state.sbot !== null
      },
  },
}
</script>

<style scoped>
</style>