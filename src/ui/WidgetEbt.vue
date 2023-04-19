<template>
  <BaseWidget v-if="connected" :link="hasEbt ? '/ebt' : ''" :status="numPeers ? 'good' : 'neutral'">
    <div>
      <div></div>
      <div v-if="hasEbt">
        The client can gossip, and currently sees {{ numPeers }} peers
      </div>
      <div v-else>
        The running client does not support gossipping. If you want to see ebt info, please close the running client and start one with ebt support.
      </div>
    </div>
  </BaseWidget>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters([
      'connected',
      'ebt',
    ]),
    hasEbt () {
      return this.ebt !== null
    },
    numPeers () {
      return this.ebt ? Object.keys(this.ebt.peers).length : 0
    }
  },
}
</script>

<style scoped>
</style>