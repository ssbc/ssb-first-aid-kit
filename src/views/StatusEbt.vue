<template>
  <div>
    <router-link to="/">Back</router-link>
    <div>
      Ebt status
    </div>
    <div class="explanation">
      <p>
        EBT (Epidemic Broadcast Trees) is one method of scuttlebutt feed replication (sending messages between people). To make it work, clients tell each other how many messages they have from each other. What's visualized on this page is how many messages other clients say that they have from <i>you</i>.
      </p>
      <p>
      It's normal for peers to take a while to get your messages. But if someone is stuck on an old message of yours for several days, maybe they're having trouble replicating you? Or, if several people seem stuck on old messages for several days, maybe your feed is "forked"?
      </p>
    </div>
    <q-card class="my-seq">
      Your latest message id: {{ mySeq }}
    </q-card>
    <div v-if="peers.length > 0" class="peer-list">
      <div
        v-for="peer in peers"
        :key="peer.id"
      >
        <div>
          Peer: {{ peer.id }}
        </div>
        <Progress
          :current="peer.seq"
          :target="mySeq"
        ></Progress>
      </div>
    </div>
    <div v-else>
      Not connected to any peers with ebt support
    </div>
  </div>
</template>

<script>
import Progress from '@/ui/Progress'
import { mapState } from 'vuex'

export default {
  components: {
    Progress,
  },
  computed: {
    ...mapState([
      'ebt',
    ]),
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

.explanation {
  margin: 1rem 5rem;
}

.peer-list {
  display: grid;
  grid-row-gap: 1.5rem;
}
</style>
