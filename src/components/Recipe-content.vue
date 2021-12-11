<template>
  <v-container>
      <v-row class="pt-16">
          <v-col cols="4" align='left'>
            <v-img 
                :src= recipe.image
                width='300px'
                height="370px" 
                class="ImageBorder"
            >
            </v-img>
          </v-col>
          <v-col cols="8" class="pa-0" align="center">
              <v-list class="pa-0" height="100">
                <v-list-item-title class="RecipeTitle text-uppercase">
                    {{recipe.title}}    
                </v-list-item-title>
                <v-list-item v-for="(item,index) in recipe.ingrediants" :key="index" class="pa-0">
                    <span class="Index">{{index +1}}.</span>
                    <span class="Text">{{item}}</span>
                </v-list-item>
              </v-list>
          </v-col>
      </v-row>
      <v-row>
          <v-col align="right">
            <v-btn
              class="secondary mt-16"
              x-large 
              rounded
            >
              <span class="text-h6 text-uppercase">
                  add a recipe
              </span>
            </v-btn>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    props:['recipe']
}
</script>

<style>
.ImageBorder{
    border-radius: 68px;
}
.RecipeTitle{
    color: #7776BC;
    font-size: 64px !important;
    font-weight: 700;
}
.Index{
    padding:0 2rem 0.4rem 0;
    font-size: 34px;
}
.Text{
   font-size: 28px;
}
.Button{
    background-color: #7776BC;
}
.yo{
    height: 500px;
}
</style>