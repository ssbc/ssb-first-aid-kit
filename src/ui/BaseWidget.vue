<template>
  <div>
    <router-link :to="link">
      <q-card class="layout">
        <div class="status-icon">
          <Icon :name="iconName"></Icon>
        </div>
        <div>
          <slot></slot>
        </div>
      </q-card>
    </router-link>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  components: {
    Icon,
  },
  props: [
    'link',
    'status',
  ],
  data () {
    return {
    }
  },
  computed: {
    iconName () {
      if (this.status === 'good') {
        return 'done' // checkmark
      } else if (this.status === 'neutral') {
        return 'remove' // minus
      } else if (this.status === 'unsure') {
        return 'help_outline' // question mark
      } else {
        return 'unknown status'
      }
    },
  },
}
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 3rem auto;
  min-height: 3rem;
  align-items: center;
  background-color: #eeeeee;
}

.status-icon {
}
</style>
