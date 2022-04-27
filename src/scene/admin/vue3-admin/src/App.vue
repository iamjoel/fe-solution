<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/ui/layout/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="main">
      <RouterView />
    </main>
  </div>
  
</template>

<style>
@import '@/assets/base.css';
</style>
