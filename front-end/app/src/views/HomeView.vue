<script setup>
import { onMounted } from 'vue';
</script>

<template>
  <div id="home-view">
    <nav>
      <router-link :to="{ name: 'auth.login' }">login</router-link>
    </nav>
  </div>
</template>
