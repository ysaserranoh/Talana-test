<template>
  <div>
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
      <v-bottom-navigation class="elevation-0 transparent my-2" width="50">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="450"
          offset-x
          nudge-bottom="60"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text>
              <span>Bolsa</span>
              <v-badge
                :content="badge"
                :value="badge"
                color="red"
                offset-y="18"
                offset-x="10"
              >
                <v-icon class="text--secondary" size="26"> mdi-purse</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <DialogPurchaseSummary />
        </v-menu>
      </v-bottom-navigation>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SearchBar from "@/components/menu/SearchBar";
import DialogPurchaseSummary from "@/components/DialogPurchaseSummary";
export default {
  components: {
    SearchBar,
    DialogPurchaseSummary,
  },
  data: () => ({
    menu: false,
  }),
  computed: {
    ...mapGetters("store", ["getItems", "getCart"]),
    badge() {
      return this.getCart.length ? this.getCart.length : "0";
    },
  },
};
</script>
