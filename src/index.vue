<template>
  <div>
    hello
    {{ test }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      test: 'butt'
    }
  },
  created () {
    document.title = 'Scuttlebutt First Aid Kit'
  }
}
</script>

<style scoped>
</style>
