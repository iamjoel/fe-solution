<template>
  <div class="dnd-copy">
    <div class="dnd-copy__content-copy">
        我是要复制的内容
      </div>
    <button class="dnd-copy__btn" @click="copy">复制</button>
  </div>
</template>

<script>
export default {
  name: "Copy",
  data() {
    return {};
  },
  methods: {
    copy() {
      let value = document.getElementsByClassName('dnd-copy__content-copy')[0].innerHTML;
      this.copyValue(value)
    },
    copyValue(val){
      var temp = document.createElement('textarea');
      temp.value = val;
      document.body.appendChild(temp);
      temp.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      console.log('复制成功');
    }
  },
}
</script>

<style scoped>
.dnd-copy {
  padding: 20px;
  height: 100%;
  width: 100%;
}
.dnd-copy__content-copy {
  border: 1px #ccc solid;
  border-radius: 6px;
  text-align: left;
  width: 200px;
  margin: 0 auto;
  padding: 10px 20px;
}
.dnd-copy__btn {
  margin: 20px 10px;
  padding: 5px 10px;
  border: 1px #ccc solid;
  border-radius: 3px;
}
</style>
