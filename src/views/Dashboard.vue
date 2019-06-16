<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Главная</h1>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="info white--text display-1">
            <v-card-text>Сайт в активной разработке. Многое еще не работает.</v-card-text>
          </v-card>
          <v-btn
            large
            @click="$router.push('pchelp')"
            class="primary white--text ma-5"
          >Помощь с компьютером</v-btn>
          <v-btn large v-bind:href="'https://t.me/kirillZ'" class="primary white--text ma-5">
            Обратная связь
            <v-icon large right class="primary white--text">mdi-telegram</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn color="pink" flat @click="snackbar = false">Убрать</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      snackbar: true,
      y: "top",
      x: null,
      mode: "",
      timeout: 36000,
      text: "И я делаю все, чтобы он скорее заработал :)"
    };
  }
};
</script>
