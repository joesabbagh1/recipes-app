<template>
  <v-row >
      <v-container class="ContainerSize" :style="backgroundStyle">
          <v-row>
              <v-col>
                  <div>
                    <span class="Title">
                        {{title}}
                    </span>
                    <p class="text">
                        {{description}}
                    </p>
                  </div>
              </v-col>
          </v-row>
      </v-container>
  </v-row>
</template>

<script>
export default {
    props:{
        image: String,
        title: String,
        description: String,
    },
    computed: {
      backgroundStyle() {
        let bg= {"background-image":`url('${this.image}')`}
        console.log(bg);
        return bg;
      }
    }
}
</script>

<style land="scss" scoped>
.ContainerSize{
    max-width: 100%;
    height: 30rem;
    background-size: cover;
}
.right-col{
  height: 30rem;
  background-color: rgb(0, 0, 0,0.5);
  padding: 4rem 6rem 0rem 4rem;
}
.yellow-line{
    height: 0.3rem;
    background: var(--v-secondary-base);
    margin-bottom: 1.5rem;
}
.Title{
  color: white;
  font-size: 2rem; 
}
.text{
  color: white;
  margin-top: 2rem;
  font-size: 1rem;
}
</style>