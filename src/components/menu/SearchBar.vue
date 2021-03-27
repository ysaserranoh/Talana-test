<template>
  <v-col cols="4" class="mr-5">
    <v-menu
      v-model="menu"
      offset-y
      :max-height="300"
      :nudge-bottom="10"
      :close-on-content-click="false"
      rounded
    >
      <template v-slot:activator="{ menu, attrs }">
        <v-text-field
          background-color="white"
          v-bind="attrs"
          v-on="menu"
          v-model="search"
          outlined
          filled
          rounded
          single-line
          dense
          placeholder="Buscador de productos y categorias"
          autocomplete="off"
          hide-details
        >
          <template v-slot:prepend-inner>
            <v-row class="text-center py-3 mr-2" justify="center" align="center">
              <v-icon class="icon-autocomplete" color="secondary" size="20">mdi-magnify</v-icon>
            </v-row>
          </template>
        </v-text-field>
      </template>
      <template>
        <v-col class="pa-0 red">
          <v-list>
            <v-list-item class="my-0 mx-2 pa-1">
              <v-list-item-title class="subtitle-2 text--secondary font-weight-medium">Resultados para {{ search }}</v-list-item-title>
            </v-list-item>
            <template v-for="item in filtred">
              <v-list-item
                :key="item.id"
                class="my-0 mx-2 pa-1"
                dense
                @click="goTo()"
              >
                <v-list-item-title>
                  <span class="subtitle-2 text--secondary font-weight-medium">{{item.name}}</span>
                </v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-col>
        <v-col v-if="!filtred.length" class="text-center py-12 white">
          <v-icon class="mb-5" color="secondary" size="40">mdi-magnify</v-icon>
          <span class="d-block body-1 text--secondary font-weight-medium">No se han encontrado resultados para tu búsqueda</span>
          <span class="d-block">Inténtalo de nuevo con una búsqueda diferente</span>
        </v-col>
      </template>
    </v-menu>
  </v-col>
</template>
<script>
import { mapGetters } from "vuex";
import debounce from "lodash/debounce";
export default {
  data: () => ({
    search: "",
    menu: false,
    filtred: [],
  }),
  computed: {
    ...mapGetters("store", ["getItems"]),
    category() {
      return this.getCategory[0].find(
        (item) => item.id === this.$route.params.id
      );
    },
  },
  watch: {
    search: debounce(function () {
      if (this.search.length < 3) {
        return false;
      }
      this.menu = true;
      this.getSearch();
    }, 600),
  },
  methods: {
    getSearch() {
      if (this.search !== "") {
        this.filtred = this.getItems.filter(
          (item) =>
            item.name.toUpperCase().includes(this.search.toUpperCase()) ||
            item.category.name.toUpperCase().includes(this.search.toUpperCase())
        );
      }
    },
    goTo() {
      this.$router.push({
        name: "CategoryProductRetrieve",
        query: { item: this.search },
      });
      this.menu = false;
    },
  },
};
</script>
