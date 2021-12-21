<template>
  <v-container fluid class="ContainerSize box" :style="backgroundStyle">
      <v-row>
          <v-col cols="12" align="center">
            <div class="text-h1 text-uppercase secondary--text">
              {{recipe.title}}
            </div>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    props:[
        'recipe',
    ],
    computed: {
      backgroundStyle() {
        let bg= {"background-image":`url('${this.recipe.image}')`}
        console.log(bg);
        return bg;
      }
    }
}
</script>

<style land="scss" scoped>
.ContainerSize{
  height: 30rem;
  background-size: cover;
  
  display: flex;
  align-items: center;
}
</style>