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

  <div v-else>
    <router-view />
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref, onUpdated } from 'vue'
  import * as auth from '@/mixins/auth.js'

  const isLoggedIn = ref(false)
  onUpdated(() => {
    console.log('updated')
  })
  // console.log(isLoggedIn.value)
</script>

<style scoped>
</style>
