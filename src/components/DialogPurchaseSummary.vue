<template>
  <v-card>
    <v-toolbar color="transparent" flat height="55">
      <v-toolbar-title class="text--secondary subtitle-1 font-weight-medium">Resumen de compra</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-row align="center" justify="center" class="pr-1">
          <v-btn icon :ripple="false" small @click.native="$emit('close')"><v-icon small>mdi-close</v-icon></v-btn>
        </v-row>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider />
    <v-card-text class="pa-10">
        <v-row v-for="(item, i) in getCart" :key="i" class="mb-3">
            <v-col cols="2" class="pa-0">
                <span class="d-block mb-1">Nombre</span>
                <span>Precio</span>
            </v-col>
                <v-col cols="4" class="pa-0">
                <span class="d-inline-block text-truncate" style="max-width: 150px;">{{((item || {}).name || '')}}</span>
                <span class="d-block mt-n1">${{((item || {}).price || '')}}</span>
                </v-col>
            <v-col cols="3" class="pa-0 ml-n4">
                <v-row no-gutters align="center" justify="center">
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
            <v-col cols="3" class="pa-0 text-right">
                <span class="mr-5">Sub-total</span>
                <span>${{ quantity * currentItem.price }}</span>
            </v-col>
        </v-row>
        <v-row class="mt-8">
            <v-col cols="6" class="pa-0 text-center">
                <span class="d-block font-weight-bold">Sub-total</span>
            </v-col>
            <v-col cols="6" class="pa-0 pr-3 text-right">
                <span class="font-weight-bold">${{ quantity * currentItem.price }}</span>
            </v-col>
        </v-row>
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
export default {
  props: {
    currentItem: {
      type: Object,
      default: () => {
        return null;
      },
    },
    quantity: {
      type: Number,
      default: () => {
        return null;
      },
    },
  },
  data: () => ({
      list: []
  }),
    computed: {
    ...mapGetters("store", ["getItems", "getCart"])
  },
  created() {
    this.getProductCart()
  },
  methods: {
    async getProductCart() {
     await this.$store.dispatch("store/getCart");
      this.list = this.getCart
    }
  }
};
</script>
