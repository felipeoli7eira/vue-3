<script setup>
  import { useToast } from "vue-toastification";
  import { useStore } from "vuex";

  const toast = useToast();
  const store = useStore();

  toast.success('Welcome to app');

  function increment()
  {
    store.dispatch('counter/actionIncrement', 1) // action
  }
</script>

<template>
  <div id="home-view">
    <h1>Vue | Vuex | VueRouter</h1>

    <hr>

    <h1>{{ store.state.counter.counter }}</h1>
    <button @click="increment">increment into state +1</button>
  </div>
</template>
