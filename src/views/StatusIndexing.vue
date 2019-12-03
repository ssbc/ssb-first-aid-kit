<template>
  <BaseView>
    <template #title>
      Index status
    </template>

    <q-badge
      text-color="white"
      class="target"
    >
      Target: {{ target }}
    </q-badge>
    <div class="subtitle">
      Average index progress
    </div>
    <Progress :current="average" :target="target"></Progress>
    <div class="subtitle">
      Individual index progress
    </div>
    <div class="indexes">
      <Progress
        v-for="(current, name) in indexes"
        :key="name"
        :label="name"
        :current="current"
        :target="target"
      ></Progress>
    </div>
  </BaseView>
</template>

<script>
import BaseView from '@/ui/BaseView'
import Progress from '@/ui/Progress'
import { mapState } from 'vuex'

export default {
  components: {
    BaseView,
    Progress,
  },
  computed: {
    ...mapState('indexing', [
      'average',
      'target',
      'indexes',
    ]),
  },
}
</script>

<style scoped>
.title {
  font-size: 1.5rem;
  font-weight: 600;
}

.subtitle {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.target {
  margin-top: 1rem;
  height: 2rem;
}

.indexes {
  display: grid;
  grid-row-gap: 0.5rem;
}
</style>
