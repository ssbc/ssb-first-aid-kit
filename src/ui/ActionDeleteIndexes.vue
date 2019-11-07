<template>
  <q-btn @click="deleteIndexes" :disabled="connected" color="primary" no-caps>
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
    }
  },
  computed: {
    ...mapGetters([
      'connected',
    ]),
  },
  methods: {
    deleteIndexes () {
      const ssbConfig = Config('ssb')
      // getting this to make sure it works cross-platform
      const ssbPath = ssbConfig.path

      // just print the files to start with
      glob(`${ssbPath}/flume/**/*`, { ignore: '**/log.offset' }, (err, files) => {
        if (err) throw err

        console.log('files found:', files)
      })
    },
  },
}
</script>

<style scoped>
</style>
