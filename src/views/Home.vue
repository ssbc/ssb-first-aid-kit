<template>
  <BaseView>
    <template #title>
      Scuttlebutt First Aid Kit
    </template>

    <div class="subtitle">Status</div>
    <div class="widgets">
      <WidgetConnection></WidgetConnection>
      <WidgetIndexing></WidgetIndexing>
      <WidgetEbt></WidgetEbt>
    </div>
    <div class="subtitle">Action</div>
    <div>
      <ActionDeleteIndexes></ActionDeleteIndexes>
    </div>
  </BaseView>
</template>

<script>
import BaseView from '@/ui/BaseView'
import WidgetConnection from '@/ui/WidgetConnection'
import WidgetIndexing from '@/ui/WidgetIndexing'
import WidgetEbt from '@/ui/WidgetEbt'
import ActionDeleteIndexes from '@/ui/ActionDeleteIndexes'

export default {
  components: {
    BaseView,
    WidgetConnection,
    WidgetIndexing,
    WidgetEbt,
    ActionDeleteIndexes,
  },
}
</script>

<style scoped>
.subtitle {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.widgets > * {
  margin-bottom: 1rem;
}
</style>
