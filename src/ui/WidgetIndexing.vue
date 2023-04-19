<template>
  <BaseWidget v-if="connected && hasData" link="/indexing" :status="finished ? 'good' : 'neutral'">
    <Progress
      :current="average"
      :target="target"
      show-target
    ></Progress>
  </BaseWidget>
</template>

<script>
import BaseWidget from './BaseWidget'
import Progress from './Progress'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    BaseWidget,
    Progress,
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
  },
}
</script>

<style scoped>
</style>
