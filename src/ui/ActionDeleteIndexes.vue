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
import glob from 'glob'
import Config from 'ssb-config/inject'
import { mapGetters } from 'vuex'

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
    deleteIndexes () {
      this.deleting = true

      const ssbConfig = Config('ssb')
      // getting this to make sure it works cross-platform
      const ssbPath = ssbConfig.path

      // just print the files to start with
      glob(`${ssbPath}/flume/**/*`, { ignore: '**/log.offset' }, (err, files) => {
        if (err) throw err

        console.log('files found:', files)
        this.deleting = false
      })
    },
  },
}
</script>

<style scoped>
</style>
