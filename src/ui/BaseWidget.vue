<template>
  <div>
    <router-link :to="link">
      <q-card class="layout">
        <div class="status-icon">
          {{ icon }}
        </div>
        <div>
          <slot></slot>
        </div>
      </q-card>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [
    'link',
    'icon',
  ],
  data () {
    return {
    }
  },
  computed: {
  },
}
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 3rem auto;
  height: 3rem;
  align-items: center;
  background-color: #eeeeee;
}

.status-icon {
}
</style>
