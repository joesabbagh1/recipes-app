<template>
  <div>
    <ImageBackground :recipe='recipes[0]' />
    <RecipeContent :recipe='recipes[0]' />
  </div>
</template>

<script>
import RecipeContent from '../components/RecipeContent/Recipe.vue';
import ImageBackground from '../components/RecipeContent/ImageBackground.vue';
export default {
    data: () => ({
        recipes:[
        {
            title: 'pizza',
            image: 'dccccccc.jpg',
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