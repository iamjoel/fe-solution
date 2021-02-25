<template>
  <div class="dnd-upload">
    <div class="dnd-upload__area" :class="{'dnd-upload__area--over': isOver}" @dragover="handleDragOver($event)"
      @dragleave="handleDragLeave($event)" @drop="drop">
      请将文件拖到这里(支持同时拖多个)
      <div>一堆其他内容</div>
      <div>一堆其他内容</div>
      <div>一堆其他内容</div>
    </div>
    <div class="dnd-upload__uploaded">
      <h2>已上传文件</h2>
      <div class="dnd-upload__uploaded-list">
        <div
          class="dnd-upload__uploaded-item"
          v-for="(item, i) in uploadList"
          :key="i"
        >
          <div>文件名: {{item.name}}</div>
          <div class="dnd-upload__uploaded-item-size">大小: {{item.size}} KB</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uploadList: [],
      isOver: false
    };
  },
  methods: {
    handleDragOver(el){
      this.isOver = true
      el.preventDefault()
      el.stopPropagation()
    },
    handleDragLeave(el){
      this.isOver = false
      el.preventDefault()
      el.stopPropagation()
    },
    drop(el){
      this.isOver = false
      el.preventDefault()
      el.stopPropagation()
      let uplist = [...(el.dataTransfer.files)]
      uplist.filter(item=>{
        var obj = {
          name: item.name,
          size: item.size
        }
        this.uploadList.push(obj)
      })
      console.log(this.uploadList)
    },
  },
};
</script>
<style scoped>
.dnd-upload {
  margin: 10px auto;
  width: 500px;
}

.dnd-upload__area {
  margin-bottom: 20px;
  padding-top: 20px;
  height: 200px;
  text-align: center;
  border: 3px dashed blue;
}

.dnd-upload__area--over {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}

.dnd-upload__uploaded-list {
  display: flex;
  flex-wrap: wrap;
}

.dnd-upload__uploaded-item {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 8%), 0 1px 2px 0 rgb(0 0 0 / 8%);
  border-radius: 3px;
}
.dnd-upload__uploaded-item-size{
  text-align:left;
}
</style>