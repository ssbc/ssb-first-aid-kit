<template>
  <BaseWidget v-if="connected" :link="hasEbt ? '/ebt' : ''" :status="'neutral'">
    <div>
      <div>
        Ebt status:
      </div>
      <div v-if="hasEbt">
        The client has ebt support. Click for more info.
      </div>
      <div v-else>
        The running client does not support ebt. If you want to see ebt info, please close the running client and start one with ebt support.
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
  },
}
</script>

<style scoped>
</style>