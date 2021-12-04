<template>
<v-card
    flat
    tile
  >
    <v-toolbar color="primary">
      <v-toolbar-title>Logo</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/recipe-content">yo</router-link>
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