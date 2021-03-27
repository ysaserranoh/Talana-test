<template>
  <v-row>
    <v-col cols="12" v-if="!getItems.length">
      <v-skeleton-loader class="mt-5" v-bind="attrs" type="date-picker" />
    </v-col>
    <v-col cols="12" class="px-0" v-else>
      <v-toolbar color="transparent" flat height="55">
        <v-toolbar-title class="text--secondary subtitle-1 font-weight-bold d-block">{{ (category || []).name || "Sin nombre" }}</v-toolbar-title>
      </v-toolbar>
      <v-col class="py-0 px-4">
        <router-link to="/" class="subtitle-1 routerLink font-weight-medium">Home</router-link>
        <v-icon class="mx-1" color="secondary">mdi-chevron-right</v-icon>
        <router-link to="/" class="subtitle-1 routerLink font-weight-medium">Products</router-link>
        <v-icon class="mx-1" color="secondary">mdi-chevron-right</v-icon>Features
      </v-col>
    </v-col>
    <!-- filter -->
    <v-col class="mt-n12 text-right">
       <!-- <v-btn text @click.native="$emit('close')" color="secondary"><v-icon class="mx-1" color="secondary">mdi-filter</v-icon></v-btn> -->
       <filterProducts />
    </v-col>
    <!-- end filter -->
    <v-col cols="12" class="mx-11">
      <v-row aling="center" justify="start" class="mx-0">
        <v-col
          style="width: 280px; flex-grow: 0 !important"
          v-for="item in getProducts"
          :key="item.id"
        >
          <v-card
            class="pa-0"
            hover
            width="280"
            min-height="300"
            :ripple="false"
            style="border: 1px solid #ccc"
            @click="modalProduct=true; currentItem = item"
            :disabled="item.stock === 0"
          >
            <v-card-text>
              <v-container fluid class="pt-5 pb-0 text-center">
                <img :src="item.photo" height="200" />
                <v-subheader v-if="item.stock > 0" class="grey lighten-3">Disponible</v-subheader>
                <v-subheader v-else class="grey lighten-1">Sin stock</v-subheader>
              </v-container>
            </v-card-text>
          </v-card>
          <v-col class="px-0">
            <span class="d-block text--secondary subtitle-1 font-weight-medium">{{ item.name }}</span>
            <span class="d-block text--secondary subtitle-1 font-weight-medium">{{ item.price }}</span>
          </v-col>
          <add-quantity-cart :currentItem="item" @open="modalProduct=true; currentItem = item" />
        </v-col>
      </v-row>
    </v-col>
    <!-- modal product -->
    <v-dialog v-model="modalProduct" width="550" persistent no-click-animation>
      <dialog-product @close="modalProduct=false" :currentItem="currentItem" />
    </v-dialog>
    <!-- end modal product -->
    <v-row class="mt-10" align="center" justify="center">
      <pagination />
    </v-row>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import DialogProduct from "@/components/DialogProduct";
import AddQuantityCart from "@/components/AddQuantityCart";
import Pagination from "@/components/Pagination";
import FilterProducts from "@/components/FilterProducts";
export default {
  components: { DialogProduct, AddQuantityCart, Pagination, FilterProducts },
  data: () => ({
    currentItem: {},
    modalProduct: false,
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
  }),
  computed: {
    ...mapGetters("store", ["getItems", "getCategory"]),
    category() {
      return this.getCategory[0].find(item => item.id == this.$route.params.id);
    },
    getProducts() {
      return this.$route.query.item ? this.getProductSearch() : this.getItems;
    },
  },
  async created() {
    await this.$store.dispatch("store/getItems");
  },

  methods: {
    getProductSearch() {
      if (this.$route.query.item) {
        return this.getItems.filter(
          (item) => item.name.toUpperCase().includes(this.$route.query.item.toUpperCase()) || item.category.name.toUpperCase().includes(this.$route.query.item.toUpperCase())
        );
      }
    }
  },
};
</script>
