<template>
  <div>
    <router-link to="/">Back</router-link>
    <div>
      Index status
    </div>
    <CodeBlock>
      {{ formattedStatus }}
    </CodeBlock>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CodeBlock from "@/ui/CodeBlock"

export default {
  components: {
    CodeBlock,
  },
  computed: {
    ...mapState('indexing', [
      'average',
      'target',
      'indexes',
    ]),
    statusString () {
      return {
        'average': this.average,
        'target': this.target,
        'indexes': this.indexes,
      }
    },
    formattedStatus () {
      return JSON.stringify(this.statusString, null, 2)
    },
  },
}
</script>

<style scoped>
</style>
