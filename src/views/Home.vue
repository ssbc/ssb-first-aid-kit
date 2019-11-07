<template>
  <div>
    home page
    <div>Status</div>
    <div class="widgets">
      <WidgetConnection></WidgetConnection>
      <WidgetIndexing></WidgetIndexing>
    </div>
    <div>Action</div>
    <div>
      <ActionDeleteIndexes></ActionDeleteIndexes>
    </div>
  </div>
</template>

<script>
import WidgetConnection from "../ui/WidgetConnection"
import WidgetIndexing from '../ui/WidgetIndexing'
import ActionDeleteIndexes from '../ui/ActionDeleteIndexes'

export default {
  components: {
    WidgetConnection,
    WidgetIndexing,
    ActionDeleteIndexes,
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
