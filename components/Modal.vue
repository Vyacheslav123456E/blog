<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="text-h6">Добавить статью</v-card-title>
        <v-card-text>
          <v-col cols="12" md="12">
            <v-text-field v-model="title" label="Название" outlined dense></v-text-field>
            <v-text-field v-model="src" label="url фото" outlined dense></v-text-field>
            <v-text-field v-model="subtext" label="Краткое описание" outlined dense></v-text-field>
              <v-textarea v-model="article" outlined name="input-7-4" label="Статья"
                value=""
              ></v-textarea>
          </v-col>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="closeDialog">
            Закрыть
          </v-btn>
          <v-btn color="green darken-1" text
                 @click="save(
                   {title: title,src: src,subtext: subtext,article: article})">
            Ок
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Modal",
    data() {
      return {
        title: null,
        src: null,
        subtext: null,
        article: null
      }
    },
    methods: {
      closeDialog(){
        this.$store.commit('setDialog', false)
      },
      save(payload){
        this.$store.dispatch('saveArticle', Object.assign(payload, this.paginate));
        this.$store.commit('setDialog', false);
        this.title = null
        this.src = null
        this.subtext = null
        this.article = null
      }
    },
    computed: {
      ...mapState(['isDialog','article','pagination']),
      dialog(){
        return this.isDialog
      },
      article(){
        return this.article
      },
      paginate(){
        return this.pagination
      },
    }
  }
</script>

<style scoped>

</style>
