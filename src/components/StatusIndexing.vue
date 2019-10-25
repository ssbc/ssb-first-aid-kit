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
      rawStatus: {}
    }
  },
  computed: {
    formattedStatus () {
      return JSON.stringify(this.rawStatus, null, 2)
    }
  },
  created () {
    this.$sbot.status((err, res) => {
      if (err) throw err

      console.log('status', res)
      this.rawStatus = res
    })
  }
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
