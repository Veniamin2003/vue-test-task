<template>
  <v-main-wrapper />
</template>
<script>

import VMainWrapper from "@/components/v-main-wrapper.vue";

export default {
  name: 'App',
  components: {
    VMainWrapper
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600&family=Raleway:wght@100;200;300;400;500;600;800&display=swap');
#app {
  /*font-family: 'Raleway', sans-serif;*/
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
body {
  margin: 0;
  list-style: none;
  min-height: 100vh;
  background: #f5f8fa;
}
</style>
