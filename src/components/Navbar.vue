<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Моё</span>
        <span>Приложение</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat color="grey">
        <span>Выйти</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="primary" temporary>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="yellow--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        {
          icon: "dashboard",
          text: "На главную",
          route: "/"
        },
        {
          icon: "mdi-account-tie",
          text: "Обо мне",
          route: "/about"
        },
        {
          icon: "mdi-desktop-classic",
          text: "Помощь с компьютером",
          route: "/pchelp"
        },
        {
          icon: "mdi-web",
          text: "Создание сайтов",
          route: "/sites"
        }
      ]
    };
  }
};
</script>