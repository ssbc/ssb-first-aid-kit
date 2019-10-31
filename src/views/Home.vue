<template>
  <div>
    home page
    <div class="widgets">
      <WidgetConnection></WidgetConnection>
      <WidgetIndexing></WidgetIndexing>
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
