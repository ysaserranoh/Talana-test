<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="500"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on" @click.native="$emit('close')" color="secondary"><v-icon class="mx-1" color="secondary">mdi-filter</v-icon></v-btn>
      </template>

      <v-card>
        <v-toolbar
          dark
          color="primary"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
        </v-toolbar>

        <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false">
            Cancel
          </v-btn>
          <v-btn color="primary" text @click="menu = false">
            Save
          </v-btn>
        </v-card-actions>-->
      </v-card>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      search: '',
      sortBy: '',
      menu: false
    }),
  }
</script>