<template>
  <div>
    <q-linear-progress
      :value="ratioDone"
      size="2rem"
      :color="color"
      rounded
    >
      <!-- absolute-full is a quasar thing and is needed for some reason -->
      <div class="whole-label absolute-full">
        <q-badge
          color="white"
          text-color="black"
        >
          <span>
            <span v-if="label">{{ label }}:</span>
            {{ current }}
          </span>
          <div class="symbol">
            <q-spinner
              v-if="inProgress"
              :color="color"
            ></q-spinner>
            <Icon
              v-else
              name="done"
              :color="color"
            ></Icon>
          </div>
        </q-badge>
      </div>
    </q-linear-progress>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  components: {
    Icon,
  },
  props: {
    label: String,
    current: Number,
    target: Number,
  },
  computed: {
    ratioDone () {
      return this.current / this.target
    },
    inProgress () {
      return this.current !== this.target
    },
    color () {
      return this.inProgress
        ? 'orange'
        : 'green'
    },
  },
}
</script>

<style scoped>
.whole-label {
  display: grid;
  place-items: center;
}

.symbol {
  margin-left: 0.5rem;
}
</style>
