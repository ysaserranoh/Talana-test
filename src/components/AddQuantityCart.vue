<template>
    <v-row class="mx-1" align="center" justify="center" style="border: 1px solid #ccc" no-gutters>
        <v-col :cols="show ? '12' : '6'" >
            <v-row align="center" justify="center">
                <v-btn
                    @click="currentItem.quantity -= 1;"
                    :disabled="currentItem.stock === 0"
                    class="ml-1"
                    text
                    x-small
                    color="primary"
                    height="45"
                >
                    <v-icon small>mdi-minus</v-icon>
                </v-btn>
                {{ currentItem.quantity > 0 ? currentItem.quantity : '1' }}
                <v-btn
                    @click="currentItem.quantity += 1;"
                    :disabled="currentItem.stock === 0"
                    class="ml-1"
                    text
                    x-small
                    color="primary"
                    height="45"
                >
                    <v-icon small>mdi-plus</v-icon>
                </v-btn>
            </v-row>
        </v-col>
        <v-col cols="6" v-if="!show" :class="`${ currentItem.stock !== 0 ? 'primary': 'grey lighten-1' }  mx-auto`">
            <v-row align="center" justify="center">
                <v-btn @click.native="$emit('open')" text color="white" :disabled="currentItem.stock === 0" height="70">
                    <v-icon dark>mdi-cart-plus</v-icon> 
                </v-btn>
            </v-row>
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
    },
    show: {
      type: Boolean,
      default () {
        return false
      }
    },
  },
};
</script>
