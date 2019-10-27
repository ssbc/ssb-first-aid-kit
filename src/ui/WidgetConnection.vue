<template>
  <BaseWidget link="" icon="✔">
    Connection:
    {{ connected ? 'Connected' : 'Not connected' }}
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