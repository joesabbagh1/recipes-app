<template>
<v-card
    flat
    tile
  >
    <v-toolbar>
      <router-link to="/">home</router-link>
       <v-spacer></v-spacer>
      <router-link to="/recipe-content">recipe content</router-link>
       <v-spacer></v-spacer>
      <router-link to="/">yo</router-link>

      <v-spacer></v-spacer>

      
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
.background{
    background-color: #C7EAE4;
    height: 4rem;
}
</style>