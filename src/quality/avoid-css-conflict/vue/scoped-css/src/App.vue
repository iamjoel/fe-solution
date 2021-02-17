<template>
  <div id="app">
    <div class="app">
      <a href="http://google.com">Google</a>
      <div class="text">Hello~</div>
      <div class="hi-you">Camel Word</div>

      <div class="rotate">旋转</div>

      <div class="ly ly-j p-20">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  </div> 
</template>

// 全局CSS
<style src="@lucky-joel/css-utils"></style>
<style>
#app {
  background-color: #ddd;
}
</style>
// scoped css
<style scoped>
.text {
  text-align: center;
  color: green;
}

.hi-you {
  color: yellow;
}

.rotate {
  margin-top: 20px;
  display: inline-block;
  animation: rotate ease-in 3s infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
