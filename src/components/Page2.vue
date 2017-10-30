<template id="hello2">
  <div>
    <div class="img-container">
      <img :src="list[index].img" alt="">
    </div>
    <group>
      <cell :title="list[index].title" :value="list[index].time"></cell>
      <cell-box>{{list[index].url}}</cell-box>
    </group>
    <h1>{{list[index].title}}的内容</h1>
    <x-button class="btn" type="primary" @click.native="showToast=true">获取福利</x-button>
    <div v-transfer-dom>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div class="img-box">
          <img :src="list[index].img" style="max-width:100%">
        </div>
        <div @click="showToast=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<script>
  import {Group, Cell, XButton, CellBox, XDialog, TransferDomDirective as TransferDom} from 'vux'
  const list = () => [
    {
      url: '/page2',
      img: 'http://imgsrc.baidu.com/imgad/pic/item/78310a55b319ebc4b37daea08926cffc1e171685.jpg',
      title: '福利一',
      time: '2017-10-27 10:00 am'
    },
    {
      url: '/page2',
      img: 'http://pic.58pic.com/58pic/12/96/26/79W58PICYKg.jpg',
      title: '福利二',
      time: '2017-11-27 10:00 am'
    },
    {
      url: '/page2',
      img: 'http://pic.58pic.com/58pic/13/30/88/29I58PICpKz_1024.jpg',
      title: '福利三',
      time: '2017-12-27 10:00 am'
    },
    {
      url: '/page2',
      img: 'http://pic.58pic.com/58pic/13/77/98/57r58PICPiY_1024.jpg',
      title: '福利四',
      time: '2018-01-27 10:00 am'
    },
    {
      url: '/page2',
      img: 'http://down1.sucaitianxia.com/psd02/psd168/psds31260.jpg',
      title: '福利五',
      time: '2018-02-27 10:00 am'
    }
  ]
  export default {
    name: 'Hello2',
    components: {
      Group,
      Cell,
      XButton,
      CellBox,
      XDialog
    },
    data () {
      return {
        index: this.$route.query.index,
        list: list(),
        showToast: false
      }
    },
    methods: {
      click () {
        console.log(123)
      }
    },
    directives: {
      TransferDom
    }
  }
</script>
<style scoped>
  .img-container{
    text-align:center;
    margin-top:0.3rem;
  }
  .img-container img{
    width: 50%;
  }
  .btn {
    position: fixed;
    bottom: 5px;
  }
</style>
<style lang="less" scoped>
  @import '~vux/src/styles/close';
  .dialog-demo {
    .weui-dialog{
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 350px;
      overflow: hidden;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
</style>
