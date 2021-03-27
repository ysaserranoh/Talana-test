<template>
  <v-navigation-drawer
    class="px-0 py-1"
    permanent
    elevation="1"
    width="180px"
    hide-overlay
    stateless
    fixed
  >
    <v-list-item>
      <v-list-item-content>
        <v-row align="center" justify="center" no-gutters>
          <img :src="require('@/assets/appLogo-color.png')" width="100" />
        </v-row>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list-item class="ml-2">
      <v-list-item-title class="title subtitle-1 font-weight-medium"
        >Categorías
      </v-list-item-title>
      <v-list-item-icon>
        <v-icon>mdi-menu</v-icon>
      </v-list-item-icon>
    </v-list-item>

    <!-- Categorías-->
    <v-list dense nav class="px-5">
      <v-list-item
        v-for="item in getCategory[0]"
        :key="item.name"
        exact
        @click="goToDetails(item.id)"
        class="my-n3"
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ item.name }}
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapGetters("store", ["getCategory"]),
  },
  async created() {
    await this.$store.dispatch("store/getCategory");
    this.loading = false;
  },
  methods: {
    goToDetails(id) {
      this.$router
        .push({
          name: "CategoryProductRetrieve",
          params: {
            id: id,
          },
        })
        .catch((err) => err);
    },
  },
};
</script>
