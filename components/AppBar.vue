<template>
  <div>>
    <v-app-bar fixed app>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer/>
      <v-btn text @click="OpenDialog">Добавить</v-btn>
    </v-app-bar>
    <Modal/>
  </div>
</template>

<script>
  import Modal from "./Modal";
  export default {
    name: "AppBar",
    components: {Modal},
    data() {
      return {
        title: 'Статьи',
        dialog: false,
      }
    },
    methods: {
      OpenDialog(){
        this.$store.commit('setDialog', true)
      }
    }
  }
</script>

<style scoped>

</style>
