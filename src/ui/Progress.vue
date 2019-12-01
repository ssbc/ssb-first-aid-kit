<template>
  <div>
    <q-linear-progress
      :value="ratioDone"
      size="2rem"
      rounded
    >
      <!-- absolute-full is a quasar thing and is needed for some reason -->
      <div class="whole-label absolute-full">
        <q-badge
          color="white"
          text-color="black"
          :label="`${label ? label : ''} ${current} / ${target}`"
        ></q-badge>
      </div>
    </q-linear-progress>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    current: Number,
    target: Number,
  },
  computed: {
    ratioDone () {
      return this.current / this.target
    },
  },
}
</script>

<style scoped>
.whole-label {
  display: grid;
  place-items: center;
}
</style>
