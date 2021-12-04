<template>
  <v-container>
    <v-row>
      <template v-for="(item, index) in Recipes" >
        <v-col cols="4"  :key="index" v-if="index<5">
          <v-card >
            <h1>yo</h1>
          </v-card>
        </v-col> 
        <v-col cols="4" v-if="index===6" :key="index" align="center">
            <v-btn
              class="secondary"
            >
              <span class="text-h6 text-uppercase">
                  show more
              </span>
            </v-btn>
            <br>
            <v-btn
              class="secondary"
            >
              <span class="text-h6 text-uppercase">
                  add a recipe
              </span>
          </v-btn>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    Recipes:[
      {
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },
      {
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },
      {
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },
      {
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },
      {
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },
      {
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },
      {
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },
      {
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },{
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },
      {
        title: 'pizza',
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      },

    ]
  }),
}
</script>

<style>

</style>