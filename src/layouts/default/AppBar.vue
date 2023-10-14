<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>
      Chess
    </v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer app v-model="drawer">
    <v-list-item title="Chess" subtitle="Chess"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>
</template>


<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>
