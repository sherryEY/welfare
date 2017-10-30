<template id="hello1">
  <div>
    <x-button @click.native="show2=true" type="default" mini>show toast</x-button>
    <div v-transfer-dom>
      <x-dialog :show.sync="show2" class="dialog-demo">
        <div class="img-box">
          <img src="http://g.hiphotos.baidu.com/zhidao/wh%3D600%2C800/sign=591f43b3d300baa1ba794fbd7720952a/55e736d12f2eb9385d72f4add7628535e5dd6f56.jpg" style="max-width:100%">
          <x-button mini type="primary" link="/hello2">点击参与</x-button>
        </div>
        <div @click="show2=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<script>
  import {XDialog, XButton, TransferDomDirective as TransferDom} from 'vux'
  export default {
    name: 'Hello1',
    components: {
      XDialog,
      XButton
    },
    directives: {
      TransferDom
    },
    methods: {
      doShowToast () {
        this.$vux.toast.show({
          text: 'toast'
        })
      }
    },
    data () {
      return {
        show2: false,
        showHideOnBlur: false,
        showScrollBox: false,
        showDialogStyle: false
      }
    }
  }
</script>
<style scoped>
  div{
    color: #FF0;
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
