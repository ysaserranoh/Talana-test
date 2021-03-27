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
      <v-bottom-navigation class="elevation-0 transparent" width="50">
        <v-btn @click="modalSummary=true">
          <span>Bolsa</span>
          <v-badge :content="badge" :value="badge" color="red" offset-y="18" offset-x="10">
            <v-icon class="text--secondary" size="26"> mdi-purse</v-icon>
          </v-badge>
        </v-btn>
      </v-bottom-navigation>
    </v-app-bar>
    <!-- modal summary -->
    <v-dialog v-model="modalSummary" width="550" persistent no-click-animation>
      <dialog-purchase-summary
        @close="modalSummary = false"
        :currentItem="null"
        :quantity="0"
      />
    </v-dialog>
    <!-- end modal summary -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SearchBar from "@/components/menu/SearchBar";
import DialogPurchaseSummary from "@/components/DialogPurchaseSummary";
export default {
  components: {
    SearchBar,
    DialogPurchaseSummary
  },
  data: () => ({
    modalSummary: false
  }),
  computed: {
    ...mapGetters("store", ["getItems", "getCart"]),
    badge () {
      return  this.getCart.length ? this.getCart.length : '0'
    }
  },
  async created () {
    await this.$store.dispatch("store/getCart");
    console.log('getCart', this.getCart.length)
  }
};
</script>
