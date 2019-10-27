<template>
  <div>
    <router-link to="/indexing">
      <div class="layout">
        <div class="status-icon">
          ✔
        </div>
        <div>
          Indexing:
          {{ this.$store.state.status.progress.indexes.current }}/{{ this.$store.state.status.progress.indexes.target }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {
  },
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
