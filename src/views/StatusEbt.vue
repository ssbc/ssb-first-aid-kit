<template>
  <div>
    <router-link to="/">Back</router-link>
    <div>
      Ebt status
    </div>
    <q-card class="my-seq">
      Your latest message id: {{ mySeq }}
    </q-card>
    <div>
      <div
        v-for="peer in peers"
        :key="peer.id"
      >
        <div>
          {{ peer.id }}
        </div>
        <Progress
          :current="peer.seq"
          :target="mySeq"
        ></Progress>
      </div>
    </div>
    <CodeBlock>
      {{ formattedStatus }}
    </CodeBlock>
  </div>
</template>

<script>
import CodeBlock from '@/ui/CodeBlock'
import Progress from '@/ui/Progress'
import { mapState } from 'vuex'

export default {
  components: {
    CodeBlock,
    Progress,
  },
  computed: {
    ...mapState([
      'ebt',
    ]),
    formattedStatus () {
      return JSON.stringify(this.ebt, null, 2)
    },
    mySeq () { // -UEL  // note: this is a bad pun, don't let it confuse you
      return this.ebt.seq
    },
    peers () {
      return Object.entries(this.ebt.peers)
        .map(([peerId, peerData]) => {
          return {
            id: peerId,
            seq: peerData.seq,
          }
        })
    },
  },
}
</script>

<style scoped>
.my-seq {
  background-color: var(--q-color-primary);
  color: white;
  margin: 2rem;
  padding: 1rem;
}
</style>
