<template>
  <div class="dnd-langs">
    <div class="dnd-langs__test">
      <div>{{ $t("home.describe") }}</div>
      <div>{{ $t("home.language") }}</div>
    </div>
    <div>
      <button @click="cutlanguage">{{ $t("home.cut") }}/{{ language }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      language: '中文'
    }
  },
  methods: {
    cutlanguage() {
      console.log(this.$i18n.locale); //打印查看当前语言包
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "zh";
        this.language = '中文'
      } else {
        this.$i18n.locale = "en";
        this.language = '英文'
      }
    },
  },
}
</script>

<style scoped>
.dnd-langs__test{
  width: 300px;
  height: 200px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #ccc;
  line-height: 48px;
}
button {
  font-size: 16px;
  margin-top: 20px;
  padding: 8px 12px;
  border-radius: 5px;
  border:1px #ccc solid;
  width: 120px;
  height: 40px;
}

</style>
