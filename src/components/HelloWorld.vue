<template>
  <div class="hello">

    <group>
      <cell :title="msg" value="value"></cell>
    </group>
    <tab :line-width=2 v-model="index">
      <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item v-for="(item, index) in list2" :key="index">
        <div class="tab-swiper vux-center">{{item}} Container</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Group, Cell, Tab, TabItem, Swiper, SwiperItem} from 'vux'

const list = () => ['精选', '美食', '电影', '酒店', '外卖']
export default {
  name: 'HelloWorld',
  components: {
    Group,
    Cell,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list2: list(),
      index: 0,
      demo2: '精选'
    }
  },
  methods: {
    click (key) {
      console.log(key)
    },
    onItemClick (index) {
      console.log('on item click:', index)
    },
    handler () {
      console.log(123)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>
