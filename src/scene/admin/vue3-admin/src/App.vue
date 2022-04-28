<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/ui/layout/Navbar.vue'
import Menu from '@/components/ui/nav/menu/Menu.vue'
import SubMenu from '@/components/ui/nav/menu/SubMenu.vue'
import MenuItem from '@/components/ui/nav/menu/MenuItem.vue'
import { IconApps } from '@arco-design/web-vue/es/icon'
</script>

<template>
  <div>
    <Navbar />
    <main class="main">
      <Menu class="menu" breakpoint="xl">
        <SubMenu>
          <template #icon><icon-apps></icon-apps></template>
          <template #title>常规页面</template>
          <MenuItem key="list">
            <router-link to="/list">列表</router-link>
          </MenuItem>
          <MenuItem key="home">
            <router-link to="/">首页</router-link>
          </MenuItem>
        </SubMenu>
      </Menu>
      <div class="right-content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
@import "@/assets/base.css";
</style>
