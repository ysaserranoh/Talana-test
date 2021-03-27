<template>
  <!-- <v-row class="ma-0"> -->
  <v-col cols="4" class="mr-5">
    <v-menu
      v-model="menu"
      offset-y
      :max-height="300"
      :nudge-width="100"
      :nudge-bottom="10"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ menu, attrs }">
        <!-- v-model="search" -->
        <v-text-field
          background-color="white"
          v-bind="attrs"
          v-on="menu"
          outlined
          filled
          rounded
          single-line
          dense
          placeholder="Buscar..."
          autocomplete="off"
          hide-details
        >
          <template v-slot:prepend-inner>
            <v-row
              class="text-center ml-2 mr-1"
              justify="center"
              align="center"
            >
              <!-- <v-progress-circular indeterminate color="secondary" size="20" width="2"></v-progress-circular> -->
              <!-- v-if="loader"  <v-icon v-else class="icon-autocomplete" color="secondary" size="20">mdi-magnify</v-icon> -->
            </v-row>
          </template>
        </v-text-field>
      </template>
      <!-- <template v-if="search.length >= 3">
          <v-col class="pa-0">
            <v-list class="v-list-search">
              <v-list-item class="my-0 mx-2 pa-1">
                <v-list-item-title class="subtitle-2 text--secondary font-weight-medium">Resultados para {{search}}</v-list-item-title>
              </v-list-item>
              <template v-if="!$store.state.accounts.retrieveLoader && searchList.length">
                <template v-for="item in searchList">

                  <v-list-item v-if="item._index === 'subscription'" :key="item.id" class="my-0 mx-2 pa-1" @click="goTo('SubscriptionRetrieve', item._id)">
                    <v-list-item-title>
                      <v-icon color="secondary" left small>mdi-autorenew</v-icon>
                      <span class="subtitle-2 text--secondary font-weight-medium">{{item._source.customer}}</span>
                    </v-list-item-title>
                  </v-list-item>

                </template>
              </template>
            </v-list>
          </v-col>
          <v-col v-if="!$store.state.accounts.retrieveLoader && !searchList.length" class="text-center py-12">
            <v-icon class="mb-5" color="secondary" size="40">mdi-magnify</v-icon>
            <span class="d-block body-1 text--secondary font-weight-medium">No se han encontrado resultados para tu búsqueda</span>
            <span class="d-block">Inténtalo de nuevo con una búsqueda diferente</span>
          </v-col>
        </template> -->
    </v-menu>
  </v-col>
  <!-- </v-row> -->
</template>
<script>
// import { mapState } from 'vuex'
// import ListViewMixin from "@/mixins/ListViewMixin"
// import debounce from 'lodash/debounce'
export default {
  //   mixins: [
  //     ListViewMixin
  //   ],
  data: () => ({
    search: "",
    loader: false,
    menu: false,
  }),
  //   computed: mapState({
  //     searchList: state => state.accounts.searchList,
  //     searchCount: state => state.accounts.searchCount,
  //     currenciesList: state => state.generals.currenciesList
  //   }),
  //   created () {
  //     if (!this.currenciesList.length) {
  //       this.$store.dispatch('generals/LIST', {
  //         resource: 'generals/currencies',
  //         query: {
  //           page_size: 100
  //         }
  //       })
  //     }
  //   },
  //   watch: {
  //     search: debounce(function () {
  //       if (this.search.length < 3) {
  //         return false
  //       }
  //       this.menu = true
  //       this.getSearch()
  //     }, 600),
  //     $route () {
  //       this.search = ''
  //     }
  //   },
  //   methods: {
  //     getSearch () {
  //       const query = {
  //         query: this.search
  //       }
  //       this.loader = true
  //       this.$store.dispatch('accounts/SEARCH_LIST', {
  //         resource: 'search',
  //         query: query
  //       })
  //       .finally(() => {
  //         this.loader = false
  //       })
  //     },
  //     goTo (name, id) {
  //       this.$router.push({ name: name, params: { id: id }}).catch(err => err)
  //       this.menu = false
  //     },
  //     isRounded (currency) {
  //       return this.currenciesList.find(c => c.id === currency).rounded || false
  //     }
  // }
};
</script>
