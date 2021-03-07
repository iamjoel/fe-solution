<template>
  <div class="clipborad">
    <div class="clipborad__content-copy" id="foo" :v-model="message">
        {{message}}
      </div>
    <button class="clipborad__btn btn" data-clipboard-target="#foo" @click="handleCopy">复制</button>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
export default {
  name: "Copy",
  data() {
    return {
      message: '我是要复制的内容46345678'
    };
  },
  methods: {
    handleCopy() {
      let support = !!document.queryCommandSupported;
      support = support && !!document.queryCommandSupported('copy');
      if(support){
      var temp = document.createElement('textarea');
      temp.value = this.message;
      document.body.appendChild(temp);
      temp.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      console.log('复制成功');
      }else{
        this.copyValue()
      }
    },
    copyValue(){
      var clipboard1 = new Clipboard('.btn');

      clipboard1.on('success', function (e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        e.clearSelection();
      });

      clipboard1.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
      });
    }
  },
}
</script>

<style scoped>
.clipborad {
  padding: 20px;
  height: 100%;
  width: 100%;
}
.clipborad__content-copy {
  border: 1px #ccc solid;
  border-radius: 6px;
  text-align: left;
  width: 200px;
  margin: 0 auto;
  padding: 10px 20px;
}
.clipborad__btn {
  margin: 20px 10px;
  padding: 5px 10px;
  border: 1px #ccc solid;
  border-radius: 3px;
}
</style>
