<template>
  <v-app dark>
    <AppBar/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppBar from "../components/AppBar";
  export default {
    name: 'DefaultLayout',
    components: {AppBar},
    data() {
      return {
        title: 'Новости'
      }
    },
    methods: {
    }
  }
</script>
