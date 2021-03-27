<template>
  <v-row  v-if="getItems.length">
    <v-col cols="12" class="px-0">
      <v-toolbar color="transparent" flat height="55">
        <v-toolbar-title
          class="text--secondary subtitle-1 font-weight-medium d-block"
          >{{ ((category || []).name || '') }}</v-toolbar-title
        >
      </v-toolbar>
      <v-col class="py-0 px-4">
        <router-link to="/" class="subtitle-1 routerLink font-weight-medium"
          >Home</router-link
        >
        <v-icon class="mx-1" color="secondary">mdi-chevron-right</v-icon>
        <router-link to="/" class="subtitle-1 routerLink font-weight-medium"
          >Products</router-link
        >
        <v-icon class="mx-1" color="secondary">mdi-chevron-right</v-icon>
        Features
      </v-col>
    </v-col>
    <v-col cols="12" class="mx-11">
      <v-row aling="center" justify="start" class="mx-0">
        <v-col
          style="width: 280px; flex-grow: 0 !important"
          v-for="item in getItems"
          :key="item.title"
        >
          <v-card
            class="pa-0"
            hover
            width="280"
            min-height="300"
            :ripple="false"
            style="border: 1px solid #ccc"
          >
            <v-card-text>
              <v-container fluid class="pt-5 pb-0 text-center">
                <img :src="item.photo" height="200" />
                <v-subheader v-if="item.stock > 0" class="grey lighten-3"
                  >Disponible</v-subheader
                >
                <v-subheader v-else class="grey lighten-1"
                  >Sin stock</v-subheader
                >
              </v-container>
            </v-card-text>
          </v-card>
          <v-col class="px-0">
            <span
              class="d-block text--secondary subtitle-1 font-weight-medium"
              >{{ item.name }}</span
            >
            <span
              class="d-block text--secondary subtitle-1 font-weight-medium"
              >{{ item.price }}</span
            >
          </v-col>
          <v-row
            class="mx-1"
            align="center"
            justify="center"
            style="border: 1px solid #ccc"
          >
            <v-col cols="5" class="">
              <v-row align="center" justify="center">
                <v-btn
                  class="ml-1"
                  @click="quantity -= 1"
                  text
                  x-small
                  color="primary"
                  ><v-icon small>mdi-minus</v-icon></v-btn
                >
                {{ quantity }}
                <v-btn
                  class="ml-1"
                  @click="quantity += 1"
                  text
                  x-small
                  color="primary"
                  ><v-icon small>mdi-plus</v-icon></v-btn
                >
              </v-row>
            </v-col>
            <v-col class="mx-auto orange">
              <v-btn
                @click="
                  modalProduct = true;
                  currentItem = item;
                "
                text
                color="white"
                ><v-icon>mdi-cart-plus</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <!-- modal product -->
    <v-dialog v-model="modalProduct" width="600" persistent no-click-animation>
      <dialog-product
        @close="modalProduct = false"
        :currentItem="currentItem"
        :quantity="quantity"
      />
    </v-dialog>
    <!-- end modal product -->
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import DialogProduct from "@/components/DialogProduct";
export default {
  components: { DialogProduct },
  data: () => ({
    currentItem: {},
    quantity: 1,
    modalProduct: false,
  }),
  computed: {
    ...mapGetters("store", ["getItems", "getCategory"]),
    category() {
      return this.getCategory[0].find(item => item.id === this.$route.params.id);
    },
  },
  async created() {
    await this.$store.dispatch("store/getItems");
  },

  methods: {
    AddProduct() {
      // this.quantityProduct[item.id.toString()] = this.quantityProduct[item.id.toString()] ? this.quantityProduct[item.id.toString()] - 1 : 1;
    },
  },
};
</script>
