<template>
  <div>
    <router-link :to="link">
      <q-card class="layout" :class="status">
        <div>
          <Icon :name="iconName"></Icon>
        </div>
        <div class="slot">
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
}

a {
  color: black;
  text-decoration: none;
}

.slot {
  padding: 0.5rem;
}

.layout.good {
  background-color: #90ee90;
}

.layout.neutral {
  background-color: #eeeeee;
}

.layout.unsure {
  background-color: #ffffa0;
}
</style>
