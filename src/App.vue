<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {Tab, TabItem} from 'vux'
export default {
  name: 'app',
  components: {
    Tab,
    TabItem
  }
}
</script>

<style>
  /*自适应*/
  /*@media screen and (min-width: 600px) {*/
    /*body{width: 80%;height: 100%;position: absolute;left: 10%;}*/
  /*}*/
  /*@media screen and (min-width: 860px) {*/
    /*body{width: 60%;height: 100%;position: absolute;left: 20%;}*/
  /*}*/
  /*@media screen and (min-width: 1000px) {*/
    /*body{width: 50%;height: 100%;position: absolute;left: 25%;}*/
  /*}*/
  /*@media screen and (min-width: 1500px) {*/
    /*body{width: 44%;height: 100%;position: absolute;left: 28%;}*/
  /*}*/
  /*@media screen and (min-width: 1600px) {*/
    /*body{width: 40%;height: 100%;position: absolute;left: 30%;}*/
  /*}*/
  /*@media screen and (min-width: 1900px) {*/
    /*body{width: 30%;height: 100%;position: absolute;left: 35%;}*/
  /*}*/

</style>
<style>
  html{
    font-size: 100px;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  body{
    overflow-x: hidden;
    background: #f2f6fa;
  }
  html,body,div,p,ul,ol,li,img,input,button{
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
