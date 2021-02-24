<template>
  <div class="hello">
    <div class="upload">
      <div class="upload_content">
        <div>请将文件拖拽至此处</div>
        <div class="upload_cover"></div>
        <input
          @change="fileChange($event)"
          type="file"
          ref="file"
          id="upload_file"
          multiple
        />
      </div>
        <div class=""></div>
    </div>
    <div class="item_info" v-for="(item,index) in imgInfo" :key="index">
      <div>当前上传文件名：{{item.imgName}}</div>
      <div>当前上传文件大小：{{item.imgSize}}</div>
      <div>当前上传文件类型：{{item.imgType}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: '',
      imgName:'',
      imgSize: '',
      imgType: '',
      imgInfo: [],
    };
  },
  methods: {
    fileChange(el) {
      this.file = el.target.files[0]
      let imgObj = {
        imgName: this.file.name,
        imgSize: this.file.size,
        imgType: this.file.type
      }
      this.imgInfo.push(imgObj)
    },
  },
};
</script>
<style scoped>
.upload_content{
    position: relative;
    width: 300px;
    height: 200px;
    background-color: rgb(231, 231, 231);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#upload_file{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    height: 200px;
}
.upload_cover{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-top-left-radius: 4px;
    background-color: rgb(231, 231, 231);
    width: 298px;
    height: 24px;
    z-index: 1;
}

.item_info {
  margin-top: 10px;
  justify-content: flex-start;
  border:1px green solid;
  height: aotu;
  padding: 10px;
  margin-right: 20px;
}

.upload {
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  display: flex;
}
.hello {
  padding: 20px;
  width: 720px;
  text-align: center;
}
</style>