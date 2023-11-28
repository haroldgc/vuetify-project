<template>
  <v-app-bar flat density="compact">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title to="/home" @click="$router.push('/')">
      Home
    </v-app-bar-title>
    <v-app-bar-nav-icon to="/login" @click="">
      <v-icon>mdi-login</v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer app v-model:rail="drawer" permanent>
    <v-list density="compact">
      <v-list-item link to="/AccountOverview">
        <v-icon @click="">mdi-account-box</v-icon>
        Account overview
      </v-list-item>
      <v-list-item link to="/Dashboard">
        <v-icon @click="">mdi-view-dashboard</v-icon>
        Dashboard
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-container class="pa-2">
        <v-row justify="end">
          <v-col>
            <v-divider class="pa-1"></v-divider>
            <v-btn icon>
              <v-icon @click="toggleTheme">mdi-theme-light-dark</v-icon>
            </v-btn>
            <v-btn icon link to="/about">
              <v-icon @click="">mdi-book-information-variant</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-navigation-drawer>
</template>


<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const drawer = ref(false)

const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

// function redirectReload() {
// router.push({ path: '/login' })
// router.
// }


</script>
