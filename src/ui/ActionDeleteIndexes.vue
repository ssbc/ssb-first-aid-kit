<template>
  <q-btn @click="deleteIndexes" :disabled="connected || deleting" color="primary" no-caps>
    <q-spinner v-if="deleting"></q-spinner>
    <div>
      <div>
        Delete indexes
      </div>
      <div v-if="connected">
        To do this safely, please first close any running client
      </div>
    </div>
  </q-btn>
</template>

<script>
import Config from 'ssb-config/inject'
import { mapGetters } from 'vuex'
import del from 'del'

export default {
  components: {
  },
  data () {
    return {
      deleting: false,
    }
  },
  computed: {
    ...mapGetters([
      'connected',
    ]),
  },
  methods: {
    async deleteIndexes () {
      this.deleting = true

      const ssbConfig = Config('ssb')
      // getting this to make sure it works cross-platform
      const ssbPath = ssbConfig.path

      const deletedPaths = await del([
        `${ssbPath}/flume/**/*`,
        `!${ssbPath}/flume/`,
        `!${ssbPath}/flume/log.offset`], { force: true });
      
      console.log('Files deleted:', deletedPaths)

      this.deleting = false
    },
  },
}
</script>

<style scoped>
</style>
