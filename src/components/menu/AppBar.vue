<template>
  <v-app-bar
    clipped-left
    app
    min-width="960"
    flat
    border
    style="border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important"
  >
    <v-toolbar-title>
      <v-row align="center" justify="center" no-gutters>
        <img :src="require('@/assets/appLogo-color.png')" width="100" />
      </v-row>
    </v-toolbar-title>
    <v-spacer />
    <search-bar />
    <v-bottom-navigation class="elevation-0 transparent" width="50">
      <v-btn>
        <span>Bolsa</span>

        <v-icon>mdi-purse</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
</template>
<script>
import SearchBar from "@/components/menu/SearchBar";
export default {
  components: {
    SearchBar,
  },
  data: () => ({}),
};
</script>
