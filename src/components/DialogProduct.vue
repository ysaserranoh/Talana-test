<template>
  <v-card>
    <v-toolbar color="transparent" flat height="55">
      <v-toolbar-title class="text--secondary subtitle-1 font-weight-medium">Producto Agregado</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-row align="center" justify="center" class="pr-1">
          <v-btn icon :ripple="false" small @click.native="$emit('close')"><v-icon small>mdi-close</v-icon></v-btn>
        </v-row>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider />
    <v-card-text class="py-5 px-8">
      <v-row class="my-3">
        <v-col class="pa-0">
          <img :src="currentItem.photo" width="200" />
        </v-col>
        <v-col class="pa-0">
          <v-list class="py-0 v-list-form">
            <v-list-item>
              <v-list-item-title>Nombre</v-list-item-title>
              <v-list-item-subtitle>{{ currentItem.name }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="my-n3">
              <v-list-item-title>Codigo</v-list-item-title>
              <v-list-item-subtitle>{{ currentItem.code }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Precio</v-list-item-title>
              <v-list-item-subtitle>{{ currentItem.price }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="my-n3">
              <v-list-item-title>Cantidad</v-list-item-title>
              <v-list-item-subtitle>
                <v-row
                  class="px-0"
                  align="center"
                  justify="center"
                  style="border: 1px solid #ccc"
                >
                  <v-col cols="6" class="py-0">
                    <v-row align="center" justify="center">
                      <v-btn
                        class="ml-1"
                        @click="currentItem.quantity -= 1"
                        text
                        x-small
                        color="primary"
                        ><v-icon small>mdi-minus</v-icon></v-btn
                      >
                      {{ currentItem.quantity }}
                      <v-btn
                        class="ml-1"
                        @click="currentItem.quantity += 1"
                        text
                        x-small
                        color="primary"
                        ><v-icon small>mdi-plus</v-icon></v-btn
                      >
                    </v-row>
                  </v-col>
                  <v-col cols="5" class="pa-0 primary">
                    <v-btn height="50" text color="white" style="cursor: none"><v-icon class="ml-n1" size="22">mdi-cart-plus</v-icon></v-btn>
                  </v-col>
                </v-row>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="py-1">
              <v-list-item-title>Sub-total</v-list-item-title>
              <v-list-item-subtitle class="font-weight-medium">${{ currentItem.quantity * currentItem.price }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <span>{{ currentItem.description }}</span>
    </v-card-text>
    <v-divider />
    <v-card-actions class="pa-4">
      <v-spacer />
      <v-btn @click.native="$emit('close')" outlined color="secondary">Seguir comprando</v-btn>
      <v-btn @click="AddProducttoCart(); $emit('close');" color="primary" dark>Agregar al carro</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    currentItem: {
      type: Object,
      default: () => {
        return null;
      },
    }
  },
  methods: {
    AddProducttoCart() {
      this.$store.dispatch("store/addToCart", this.currentItem);
    },
  },
};
</script>
