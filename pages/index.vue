<template>
  <v-col cols="12">
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="4" xs="12" sm="4" >
        <NewList :card="card"/>
      </v-col>
    </v-row>
    <v-col class="text-right">
      <v-pagination
        v-model="page"
        :length="Math.ceil(this.countP / this.limit)"
        @input="pagination()"
      ></v-pagination>
    </v-col>
  </v-col>
</template>

<script>
  import NewList from "./news/index";
  import {mapState} from 'vuex'

  export default {
    name: 'newsList',
    components: {NewList},
    data() {
      return {
        page: 1,
        limit: 5
      }
    },
    methods: {
      pagination(){
        this.$store.dispatch('getArticles',{page: this.page,limit: this.limit})
        this.$store.commit('setPagination', {page: this.page,limit: this.limit})
      }
    },
    mounted() {
      this.$store.dispatch('getArticles',{page: this.page,limit: this.limit})
      this.$store.commit('setPagination', {page: this.page,limit: this.limit})
    },
    computed: {
      ...mapState(['article','count']),
      cards(){
        return this.article
      },
      countP(){
        return this.count
      }
    }
  }
</script>

