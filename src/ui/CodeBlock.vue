<template>
  <div class="code">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.code {
  font-family: monospace;
  text-align: left;
  overflow: auto;
  white-space: pre;
  max-height: 40rem;
}
</style>
