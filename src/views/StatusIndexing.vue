<template>
  <div>
    <router-link to="/">back</router-link>
    <div>
      status
    </div>
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
  max-height: 40rem;
}
</style>
