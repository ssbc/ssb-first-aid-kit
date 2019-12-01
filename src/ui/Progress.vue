<template>
  <div>
    <span>
      {{ label }}
    </span>
    <span>
      {{ current }}
    </span>
    /
    <span>
      {{ target }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    current: Number,
    target: Number,
  },
}
</script>

<style scoped>
</style>
