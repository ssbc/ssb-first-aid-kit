<template>
  <div>
    home page
    <div>Status</div>
    <div class="widgets">
      <WidgetConnection></WidgetConnection>
      <WidgetIndexing></WidgetIndexing>
      <WidgetEbt></WidgetEbt>
    </div>
    <div>Action</div>
    <div>
      <ActionDeleteIndexes></ActionDeleteIndexes>
    </div>
  </div>
</template>

<script>
import WidgetConnection from '@/ui/WidgetConnection'
import WidgetIndexing from '@/ui/WidgetIndexing'
import WidgetEbt from '@/ui/WidgetEbt'
import ActionDeleteIndexes from '@/ui/ActionDeleteIndexes'

export default {
  components: {
    WidgetConnection,
    WidgetIndexing,
    WidgetEbt,
    ActionDeleteIndexes,
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
