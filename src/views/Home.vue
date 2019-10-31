<template>
  <div>
    home page
    <div class="widgets">
      <WidgetConnection></WidgetConnection>
      <WidgetIndexing v-if="connected"></WidgetIndexing>
    </div>
  </div>
</template>

<script>
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
  computed: {
    connected () {
      // we can move this logic to a mixin if we start using it all over the place
      return this.$store.state.sbot !== null
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
