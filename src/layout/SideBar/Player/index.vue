<template>
  <v-container fluid class='pa-0 overflow-hidden' style='position: relative; height: 100vh; min-width: 900px' @mousewheel='mouseWheel'>
    <!-- 背景 -->
    <v-img class='bg' :src='music.picUrl'></v-img>
    <!-- 内容 -->
    <v-card elevation='0' height='100%' color='transparent' :style='`backdrop-filter: blur(${blur}px) brightness(70%)`'>
      <!-- 左上播放列表按键 -->
      <player-lists v-on='$listeners' />
      <!-- 右上关闭页面按键 -->
      <v-btn @click='$emit("close")' large icon absolute top right>
        <v-icon large>mdi-chevron-down</v-icon>
      </v-btn>
      <v-row class='ma-0' align='center' style='height: 100%'>
        <!-- 播放 -->
        <v-col cols='6'>
          <player-music />
        </v-col>
        <!-- 歌词 -->
        <v-col v-if='true' cols='5'>
          <player-lyrics />
        </v-col>
        <!-- 评论 -->
        <v-col v-else cols='5'>
          <player-comment />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { styleStore } from '@/plugins/store/style'
import { playerStore } from '@/plugins/store/player'
import PlayerLists from './PlayerLists.vue'
import PlayerMusic from './PlayerMusic'
import PlayerLyrics from './PlayerLyrics.vue'
import PlayerComment from './PlayerComment.vue'
export default {
  components: { PlayerLists, PlayerMusic, PlayerLyrics, PlayerComment },
  data: () => ({}),
  computed: {
    ...mapState(styleStore, ['blur']),
    ...mapState(playerStore, ['music'])
  },
  methods: {
    ...mapActions(styleStore, ['setBlur']),
    mouseWheel(event) {
      if (event.clientX === 0) {
        this.setBlur(Math.sign(event.wheelDelta) * 5)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
