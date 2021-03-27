<template>
  <v-app>
    <app-bar />
    <div class="d-flex flex-column">
      <v-row align="start" justify="center" no-gutters>
        <navigation-drawer />
        <v-col
          cols="12"
          style="padding-left: 200px !important; padding-right: 35px !important"
        >
          <v-main>
            <v-container fluid>
              <router-view :key="$route.fullPath"></router-view>
            </v-container>
          </v-main>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import AppBar from "@/components/menu/AppBar";
import NavigationDrawer from "@/components/menu/NavigationDrawer";
export default {
  components: { AppBar, NavigationDrawer },
  data: () => ({
    //
  }),
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.$vuetify.goTo(1, { duration: "0", easing: "linear" });
      }
    },
  },
};
</script>
