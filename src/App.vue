<template>
  <v-app>
    <v-main class="grey">
      <Header />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
// import Content from './components/Recipe-content';

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    
  }),
};
</script>
