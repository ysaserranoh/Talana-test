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
      <v-list-item-title class="title subtitle-1 font-weight-medium">Categorías
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
        :to="{ name: 'CategoryProductRetrieve', params: { id: `${item.id}`} }"
        style="min-height: 20px"
        active-class="primary--text"
      >
        <v-list-item-content >
          <v-list-item-title>
            <v-row no-gutters>
              <v-col cols="10" class="pa-0">
                {{ item.name }}
              </v-col>
              <v-col cols="1" class="pa-0">
                <v-icon class="mt-n1" v-if="selected === `/products/category/${item.id}`">mdi-chevron-right</v-icon>
              </v-col>
            </v-row>
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
    selected: ''
  }),
  computed: {
    ...mapGetters("store", ["getCategory"]),
  },
  async created() {
    await this.$store.dispatch("store/getCategory");
    this.loading = false;
  },
  watch: {
    $route: {
      immediate: false,
      handler: function (val) {
        this.selected = val.path;
      },
    }
  }
};
</script>
