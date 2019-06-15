<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Всё верно!</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Профиль пользователя</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Как вас зовут?*" hint="Как к вам можно обращаться" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Почта*" hint="мы пришлем вам информацию о заказе" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Лыжи', 'Хоккей', 'Футбол', 'Баскетбол', 'Чтение', 'Духовный рост', 'Прыжки с парашютом']"
                  label="Хобби"
                  multiple
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*обозначает обязательные поля</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>
