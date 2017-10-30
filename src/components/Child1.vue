<template id="child1">
  <div>
    <ul class="welList">
      <li v-for="(list,index) in welLists">
        <img :src="list.img" alt="" @click.stop.prevent="toLink(list.url,index)">
      </li>
    </ul>
  </div>
</template>
<script>
  const list = () => [
    {
      url: '/page2',
      img: 'http://imgsrc.baidu.com/imgad/pic/item/78310a55b319ebc4b37daea08926cffc1e171685.jpg',
      title: '福利一'
    },
    {
      url: '/page2',
      img: 'http://pic.58pic.com/58pic/12/96/26/79W58PICYKg.jpg',
      title: '福利二'
    },
    {
      url: '/page2',
      img: 'http://pic.58pic.com/58pic/13/30/88/29I58PICpKz_1024.jpg',
      title: '福利三'
    },
    {
      url: '/page2',
      img: 'http://pic.58pic.com/58pic/13/77/98/57r58PICPiY_1024.jpg',
      title: '福利四'
    },
    {
      url: '/page2',
      img: 'http://down1.sucaitianxia.com/psd02/psd168/psds31260.jpg',
      title: '福利五'
    }
  ]
  export default {
    name: 'Child1',
    data () {
      return {
        welLists: list()
      }
    },
    methods: {
      toLink: function (link, index) {
        this.$router.push({path: link, query: {index: index}})
        this.$emit('haha', index)
      }
    }
  }
</script>
<style scoped>
  .welList{
    width: 100%;
    overflow: hidden;
  }
  .welList li{
    height: 39.73vw;
    overflow: hidden;
    margin-top: 2.67vw;
    border-radius: 0.65vw;
  }
  .welList li img{
    width: 100%;
  }
</style>
