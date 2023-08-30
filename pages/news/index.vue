<template>
  <nuxt-link :to="'/news/'+ card.id">
    <v-card>
      <v-img :src="card.src" class="white--text align-end"
             gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
        <v-card-title v-text="card.title"></v-card-title>
      </v-img>
      <v-card-actions>
        <v-row dense>
          <div class="body-2" v-html="card.sub_text"/>
          <div class="text-date" v-html="card.date"/>
        </v-row>
      </v-card-actions>
    </v-card>
  </nuxt-link>
</template>

<script>
  export default {
    name: "news",
    props: ['card'],
    data() {
      return {

      }
    },

  }
</script>

<style lang="scss">
  .text-date{
    color: $date-grey;
    font-size: $date-size;
  }
</style>
