<template>
  <BaseWidget v-if="connected && hasData" link="/indexing" :status="finished ? 'good' : 'neutral'">
    <div class="indexes">
      <div>
        Indexing:
      </div>
      <div class="numbers">
        {{ average }} /
        <br/>
        {{ target }}
      </div>
    </div>
  </BaseWidget>
</template>

<script>
import BaseWidget from './BaseWidget'
import { mapState, mapGetters } from 'vuex'

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
    ...mapState('indexing', [
      'average',
      'target',
    ]),
    ...mapGetters('indexing', [
      'hasData',
    ]),
    finished () {
      return this.average === this.target
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
