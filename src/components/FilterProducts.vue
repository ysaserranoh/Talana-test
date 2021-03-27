<template>
  <div v-if="getCountry.length && getRegion.length">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="500"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          @click.native="$emit('close')"
          color="secondary"
          ><v-icon class="mx-1" color="secondary">mdi-filter</v-icon></v-btn
        >
      </template>
      <v-card class="pb-5">
        <v-toolbar dark color="primary" class="px-3 mb-2">
          <v-toolbar-title class="subtitle-1 font-weight-medium"
            >Filtrar producto</v-toolbar-title
          >
        </v-toolbar>
        <v-select
          v-model="filterProduct.category"
          flat
          solo-inverted
          hide-details
          :items="category"
          prepend-inner-icon="mdi-shape"
          background-color="transparent"
          label="Filtrar por categoria"
          chips
          class="px-5"
        />
        <v-divider />
        <v-select
          v-model="filterProduct.country"
          flat
          solo-inverted
          hide-details
          :items="country"
          prepend-inner-icon="mdi-earth"
          background-color="transparent"
          label="Filtrar por pais"
          chips
          class="px-5"
        />
        <v-divider />
        <v-select
          v-model="filterProduct.region"
          flat
          solo-inverted
          hide-details
          :items="region"
          prepend-inner-icon="mdi-earth-box"
          background-color="transparent"
          label="Filtrar por region"
          chips
          class="px-5"
        />
        <v-card-actions class="mt-5">
          <v-row align="center" justify="center">
            <v-btn @click="menu = false" outlined class="mr-5">Cancel</v-btn>
            <v-btn
              @click="
                menu = false;
                goTo();
              "
              color="primary"
              >Filtrar</v-btn
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    filterProduct: {
      category: "",
      country: "",
      region: "",
    },
    filtred: [],
    search: "",
    menu: false,
  }),
  computed: {
    ...mapGetters("store", [
      "getItems",
      "getCategory",
      "getCountry",
      "getRegion",
    ]),
    category() {
      return this.getCategory[0].map((item) => item.name);
    },
    country() {
      return this.getCountry[0].map((item) => item.name);
    },
    region() {
      return this.getRegion[0].map((item) => item.name);
    },
    // getProducts() {
    //   return this.$route.query.item ? this.getProductSearch() : this.getItems;
    // },
  },
  async created() {
    await this.$store.dispatch("store/getItems");
    await this.$store.dispatch("store/getCountry");
    await this.$store.dispatch("store/getRegion");
    console.log("it", this.getItems);
  },

  methods: {
    // filterItem() {
    //   if (this.filterProduct.category !== "") {
    //     this.filtred = this.getItems.filter((item) =>
    //         item.category.name.toUpperCase().includes(this.filterProduct.category.toUpperCase())
    //     );
    //   }
    // },
    goTo() {
      this.$router.push({
        name: "CategoryProductRetrieve",
        query: { item: this.filterProduct.category },
      });
    },
  },
};
</script>
