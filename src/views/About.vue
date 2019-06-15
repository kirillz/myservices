<template>
  <div class="about">
    <h1 class="subheading grey--text">Обо мне</h1>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">Обо мне</v-card-text>
          </v-card>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="1.9"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>