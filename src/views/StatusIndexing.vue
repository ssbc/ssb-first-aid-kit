<template>
  <div>
    <router-link to="/">Back</router-link>
    <div class="title">
      Index status
    </div>
    <div class="subtitle">
      Average index progress
    </div>
    <Progress :current="average" :target="target"></Progress>
    <div class="subtitle">
      Individual index progress
    </div>
    <Progress
      v-for="(current, name) in indexes"
      :key="name"
      :label="name"
      :current="current"
      :target="target"
    ></Progress>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Progress from '@/ui/Progress'

export default {
  components: {
    Progress,
  },
  computed: {
    ...mapState('indexing', [
      'average',
      'target',
      'indexes',
    ]),
    statusString () {
      return {
        'average': this.average,
        'target': this.target,
        'indexes': this.indexes,
      }
    },
    formattedStatus () {
      return JSON.stringify(this.statusString, null, 2)
    },
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
</style>
