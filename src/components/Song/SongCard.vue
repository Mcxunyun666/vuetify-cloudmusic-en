<template>
  <v-card max-width='150' elevation='0'>
    <v-img :src='value.coverImgUrl' class='mx-3 my-1 text-end rounded-lg' transition='fade-transition' width='126' height='126' @click='toPlaylist'>
      <!-- 图片加载前显示 -->
      <template v-slot:placeholder>
        <v-row class='fill-height ma-0' align='center' justify='center'>
          <v-progress-circular indeterminate color='grey lighten-5'></v-progress-circular>
        </v-row>
      </template>
      <!-- 默认插槽 -->
      <template v-slot:default>
        <v-chip color='rgba(88, 89, 93, .45)' class='ma-1 px-2 white--text' x-small v-text='theplayCount'></v-chip>
      </template>
    </v-img>
    <v-card-text class='text-caption py-0' v-text='value.name'></v-card-text>
  </v-card>
</template>

<script>
import playCount from '@/common/playCount'
export default {
  props: {
    // @params Object
    // coverImgUrl:String, playCount:Number ,name:String, id:Number
    value: { type: Object, required: true }
  },
  data: () => ({}),
  computed: {
    theplayCount() {
      return playCount(this.value.playCount)
    }
  },
  methods: {
    toPlaylist() {
      this.$router.push({
        path: '/playlist',
        query: {
          id: this.value.id
        }
      })
    }
  }
}
</script>
