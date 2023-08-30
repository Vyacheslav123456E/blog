<template>
  <v-container>
    <v-col>
      <nuxt-link :to="'/'">Назад</nuxt-link>
    </v-col>
    <v-col>
      <v-card class="mx-auto">
        <v-img :src="data.src" height="300px" min-width="800px"></v-img>
      </v-card>
    </v-col>
    <v-col>
      {{data.text}}
    </v-col>
  </v-container>
</template>

<script>
  import data from "../../data.json"

  export default {
    name: "_id",
    data() {
      return {
        data: []
      }
    },
    mounted() {
      this.data = data.data.find((el) => Number(el.id) === Number(this.$route.params.id));
      console.log(this.data)
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
