<template>
  <v-row justify='space-around' align='center' no-gutters>
    <!-- 上一首 -->
    <v-col cols='auto'>
      <v-btn icon @click='previous'>
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>
    </v-col>
    <!-- 播放,暂停 -->
    <v-col cols='auto'>
      <v-btn icon large class='mx-5' style='background-color: rgba(90, 90, 90, 0.15)' @click='playORpause'>
        <v-icon>{{ isplay ? 'mdi-pause' : 'mdi-play' }}</v-icon>
      </v-btn>
    </v-col>
    <!-- 下一首 -->
    <v-col cols='auto'>
      <v-btn icon @click='next'>
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { playerStore } from '@/plugins/store/player'
import { mapState, mapActions } from 'pinia'
export default {
  data: () => ({}),
  computed: {
    ...mapState(playerStore, ['isplay'])
  },
  methods: {
    ...mapActions(playerStore, ['previous', 'next', 'playORpause'])
  }
}
</script>
