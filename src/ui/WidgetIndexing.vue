<template>
  <BaseWidget v-if="connected && status" link="/indexing" :status="finished ? 'good' : 'neutral'">
    <div class="indexes">
      <div>
        Indexing:
      </div>
      <div class="numbers">
        {{ current }} /
        <br/>
        {{ target }}
      </div>
    </div>
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
    status () {
      return this.$store.state.status
    },
    indexes () {
      return this.status.progress.indexes
    },
    current () {
      return this.indexes.current
    },
    target () {
      return this.indexes.target
    },
    finished () {
      return this.current === this.target
    },
  },
}
</script>

<style scoped>
.indexes {
  display: flex;
  align-items: center;
  justify-content: center;
}

.numbers {
  margin-left: 0.5rem;
  text-align: left;
}
</style>
