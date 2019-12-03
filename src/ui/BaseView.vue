<template>
  <div>
    <div class="top">
      <div v-if="!atHome" class="backlink">
        <q-btn to="/" color="secondary" no-caps>&lt; Back</q-btn>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
    <q-card v-if="!connected && !atHome" class="not-connected">
      Lost connection to the client. The information you see below is the last we received, and is probably out of date.
    </q-card>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'connected',
    ]),
    atHome () {
      return this.$route.path === '/'
    },
  },
}
</script>

<style scoped>
.top {
  margin-top: 2rem;
}

.backlink {
  display: flex;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
}

.not-connected {
  background-color: var(--q-color-negative);
  color: white;
  margin: 1.5rem;
  padding: 1rem;
}
</style>
