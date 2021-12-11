<template>
  <div>
    <ImageBackground />
    <RecipeContent :recipe='recipes[0]' />
  </div>
</template>

<script>
import RecipeContent from '../components/Recipe-content.vue';
import ImageBackground from '../components/RecipeContent/ImageBackground.vue'
export default {
    data: () => ({
        recipes:[
        {
            title: 'pizza',
            image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
            ingrediants: [
                '2 eggs',
                '1kg flour',
                '1 tb sugar',
                '1 tb sugar',
                '1 tb sugar',
                '1 tb sugar',
                '1 tb sugar',
                '1 tb sugar',
                '500g mozorella'
            ]
        }
        ]
  }),

    components: {
        RecipeContent,
        ImageBackground,
    },
}
</script>

<style>

</style>