<template>
  <v-row align="center" justify="center">
    <v-col class="text-center py-5">
      <h1>Bienvenido a la tienda</h1>
      <img
        :src="require('@/assets/HappyMascota-Gestos_Gata-Parada.svg')"
        width="500"
      />
      <span class="d-block"
        >Happy Mascota es un lugar donde puedes aprender, compartir y ser parte
        de una comunidad Pet lover.</span
      >
      <span class="mt-3 font-italic font-weight-medium title"
        >El lugar que visitaría tu mascota.</span
      >
      <v-col class="mt-3">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-instagram", "mdi-whatsapp", "mdi-youtube"],
  }),
};
</script>
