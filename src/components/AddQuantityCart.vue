<template>
    <v-row class="mx-1" align="center" justify="center" style="border: 1px solid #ccc">
        <v-col cols="5">
            <v-row align="center" justify="center">
            <v-btn
                @click="quantityProduct -= 1"
                :disabled="currentItem.stock === 0"
                class="ml-1"
                text
                x-small
                color="primary"
            >
                <v-icon small>mdi-minus</v-icon>
            </v-btn>
            {{ quantityProduct }}
            <v-btn
                @click="quantityProduct += 1"
                :disabled="currentItem.stock === 0"
                class="ml-1"
                text
                x-small
                color="primary"
            >
                <v-icon small>mdi-plus</v-icon>
            </v-btn>
            </v-row>
        </v-col>
        <v-col :class="`${ currentItem.stock !== 0 ? 'primary': 'grey lighten-1' }  mx-auto`">
            <v-btn @click.native="$emit('open')" text color="white" :disabled="currentItem.stock === 0">
                <v-icon class="px-10" dark>mdi-cart-plus</v-icon>
            </v-btn>
        </v-col>
    </v-row>
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
  data: () => ({
    quantityProduct: 0
  }),
  mounted() {
    this.quantityProduct = this.currentItem.quantity
  }
};
</script>
