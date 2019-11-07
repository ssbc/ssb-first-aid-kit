<template>
  <div>
    home page
    <div class="widgets">
      <WidgetConnection></WidgetConnection>
      <WidgetIndexing></WidgetIndexing>
    </div>
    Actions
    <div>
      <q-btn @click="deleteIndexes">Delete indexes</q-btn>
    </div>
  </div>
</template>

<script>
import glob from 'glob'
import Config from 'ssb-config/inject'
import WidgetConnection from "../ui/WidgetConnection"
import WidgetIndexing from '../ui/WidgetIndexing'

export default {
  components: {
    WidgetConnection,
    WidgetIndexing,
  },
  data () {
    return {
    }
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
.widgets {
  margin: 1.5rem;
}

.widgets > * {
  margin-bottom: 1rem;
}
</style>
