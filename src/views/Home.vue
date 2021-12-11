<template>
  <v-container>
    <v-row>
        <v-col cols="4" v-for="(item, index) in recipes.info" :key="index" >
          <v-card>
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            >  
            </v-img>
            <v-card-title>
              {{item.title}}
            </v-card-title>
          </v-card>
        </v-col> 
        <div>
          {{recipes}}
        </div>
        <!-- <v-col cols="4" v-if="index===6" :key="index" align="center">
            <v-btn
              class="secondary mt-16"
              rounded
              x-large
            >
              <span class="text-h6 text-uppercase">
                  show more
              </span>
            </v-btn>
            <br>
            <v-btn
              class="secondary mt-16"
              x-large 
              rounded
            >
              <span class="text-h6 text-uppercase">
                  add a recipe
              </span>
          </v-btn>
        </v-col> -->
    </v-row>
  </v-container>
</template>

<script>

import { mapState} from 'vuex'

export default {
  computed: mapState(['recipes'])
}
</script>

<style>

</style>