<template>
  <div>
    <router-link :to="link">
      <div class="layout">
        <div class="status-icon">
          {{ icon }}
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
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
  border: solid;
  border-radius: 3px;
  align-items: center;
}

.status-icon {
}
</style>
