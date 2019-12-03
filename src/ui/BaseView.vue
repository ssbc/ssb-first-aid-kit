<template>
  <div>
    <div class="top">
      <div v-if="!atHome" class="backlink">
        <router-link to="/">Back</router-link>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
    <div v-if="!connected && !atHome">
      NOT CONNECTED CHANGEME
    </div>
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
</style>
