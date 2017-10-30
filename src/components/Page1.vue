<template>
  <div id="page1">
    <div class="header">
      <div class="header-title">
        <span class="header-span-1">有时·福利</span><span class="header-span-2">栽种有时，拔出所栽种的也有时</span>
      </div>
      <div class="header-btn">
        <button>订&nbsp;阅&nbsp;福&nbsp;利</button>
        <p>已有244人订阅</p>
      </div>
    </div>
    <div style="overflow-x: hidden;width: 100%;">
      <swiper :show-desc-mask="false" loop auto :list="swiperList" style="width:100%;margin:0 auto;" :aspect-ratio="300/500" dots-position="center" :index="swiperIndex" @on-index-change="swiperIndexChange"></swiper>
    </div>
    <div class="tab-list">
      <tab :line-width="1" v-model="index" style="background: none;">
        <tab-item :selected="showItem==item" v-for="(item,index) in items" @click="showItem=item" :key="index">{{item}}</tab-item>
      </tab>
    </div>
    <div class="wel-list" v-model="index">
      <child1 v-show="index==0" @haha="getIndex"></child1>
      <child2 v-show="index==1"></child2>
    </div>
  </div>
</template>
<script>
  import {Swiper, SwiperItem, Tab, TabItem} from 'vux'
  import Vue from 'vue'
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
  const list = () => [
    {
      url: '/hello',
      img: 'http://imgsrc.baidu.com/imgad/pic/item/78310a55b319ebc4b37daea08926cffc1e171685.jpg'
    },
    {
      url: '/hello',
      img: 'http://pic.58pic.com/58pic/12/96/26/79W58PICYKg.jpg'
    },
    {
      url: '/hello',
      img: 'http://pic.58pic.com/58pic/13/30/88/29I58PICpKz_1024.jpg'
    },
    {
      url: '/hello',
      img: 'http://pic.58pic.com/58pic/13/77/98/57r58PICPiY_1024.jpg'
    },
    {
      url: '/hello',
      img: 'http://down1.sucaitianxia.com/psd02/psd168/psds31260.jpg'
    }
  ]

  var child1 = {
    template: '<h5 style="color: red;">呵呵</h5>'
  }
//  var Child3 = Vue.extend({
//    template: '<h5 style="color: green;">呵呵</h5>',
//    data () {
//      return {
//        msg: '想哭，脑袋疼。'
//      }
//    }
//  })
//  new Child3().$mount('page1')
  Vue.component('child2', {
    template: '<h5 style="color: blue;">{{msg}}</h5>',
    data () {
      return {
        msg: '哈哈',
        index: 0
      }
    }
  })
  export default {
    name: 'page1',
    components: {
      Child2,
      Child1,
      Swiper,
      SwiperItem,
      Tab,
      TabItem,
      'hehe': child1
    },
    data () {
      return {
        swiperList: list(),
        swiperIndex: 0,
        showItem: '最新福利',
        index: 0,
        items: ['最新福利', '最热福利', '推荐福利']
      }
    },
    methods: {
      swiperIndexChange (index) {
        this.swiperIndex = index
      },
      getIndex (index) {
        this.index = index
      }
    }
  }
</script>
<style lang="less" scoped>
  .header{
    width: 100%;
    height: 1.46rem;
    background: #267e3a;
    color: #FFF;
    .header-title{
      height: 100%;
      float: left;
      margin-left: 0.2rem;
      .header-span-1{
        font-size: 0.4rem ;
      }
      .header-span-2{
        font-size: 0.18rem;
        margin-left: 0.2rem;
      }
    }
    .header-btn{
      float: right;
      margin-right: 0.2rem;
      height: 100%;
      text-align: center;
      button{
        padding: 0;
        height: 0.52rem;
        width: 1.5rem;
        background: none;
        border: 1px solid #FFF;
        -webkit-border-radius: 0.5rem;
        -moz-border-radius: 0.5rem;
        border-radius: 0.5rem;
        color: #FFF;
        vertical-align: middle;
        font-size:0.22rem;
      }
      p{
        font-size: 0.18rem;
        line-height: 0.1rem;
      }
    }
  }
  .wel-list{
    width: 92.8%;
    overflow-x: hidden;
    padding-left: 3.6%;
    padding-right: 3.6%;
  }
  .tab-list{
    width: 60%;
    min-height: 0.9rem;
    margin-left: 3.6%;
  }
  .vux-tab .vux-tab-item{
    font-size: 0.24rem;
  }
</style>
