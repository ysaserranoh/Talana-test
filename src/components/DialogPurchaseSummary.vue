<template>
  <v-card>
    <v-toolbar color="transparent" flat height="55">
      <v-toolbar-title class="text--secondary subtitle-1 font-weight-medium">Resumen de compra</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="px-8 py-5">
      <template v-if="getCart.length">
        <v-row v-for="(item, i) in getCart" :key="i" class="mb-3">
          <v-col cols="2" class="pa-0">
            <span class="d-block mb-1">Nombre</span>
            <span>Precio</span>
          </v-col>
          <v-col cols="3" class="pa-0">
            <span class="d-inline-block text-truncate" style="max-width: 150px">{{(item || {}).name || ""}}</span>
            <span class="d-block mt-n1">${{ (item || {}).price || "" }}</span>
          </v-col>
          <v-col cols="3" class="pa-0 pl-6">
            <add-quantity-cart :currentItem="item" :show="true" />
          </v-col>
          <v-col cols="4" class="pa-0 text-right">
            <span class="mr-5">Sub-total: ${{ (item.quantity * item.price) > 0 ? item.quantity * item.price : '0' }}</span>
          </v-col>
        </v-row>
        <v-row class="mt-8 mb-2">
          <v-col cols="6" class="pa-0 text-center">
            <span class="d-block font-weight-bold">Total</span>
          </v-col>
          <v-col cols="6" class="pa-0 pr-3 text-right">
            <span class="font-weight-bold">${{ total > 0 ? total : '0' }}</span>
          </v-col>
        </v-row>
      </template>
      <v-col v-if="!getCart.length" class="text-center py-12 white">
        <v-icon class="mb-5" color="secondary" size="40">mdi-purse</v-icon>
        <span class="d-block body-1 text--secondary font-weight-medium">Su bolsa esta vacia</span>
        <span class="d-block">Agregue productos a su carrito</span>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import AddQuantityCart from "@/components/AddQuantityCart";
export default {
  components: { AddQuantityCart },
  computed: {
    ...mapGetters("store", ["getCart"]),
    total() {
      let totalPrice = 0;
      this.getCart.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      return totalPrice;
    },
  },
};
</script>
