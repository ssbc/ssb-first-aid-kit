<template>
  <div>
    status
    <div class="code">
      {{ formattedStatus }}
    </div>
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
  computed: {
    formattedStatus () {
      console.log('dastore', this.$store.state.status)
      return JSON.stringify(this.$store.state.status, null, 2)
    },
  },
}
</script>

<style scoped>
.code {
  font-family: monospace;
  text-align: left;
  overflow: auto;
  white-space: pre;
}
</style>
