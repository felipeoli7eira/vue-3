<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->

  <div v-if="isLoggedIn" class="container-fluid border">
    <div class="row">
      <div class="col col-2 border">
        menu
      </div>
      <div class="col col-10 border">
        <router-view />
      </div>
    </div>
  </div>

  <div class="border border-danger" v-else>
    <router-view />
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  const isLoggedIn = ref(false)

  // console.log(isLoggedIn.value)
</script>

<style scoped>
</style>
