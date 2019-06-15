<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="450px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Всё верно!</v-btn>
      </template>
      <v-card class="mx-auto" style="max-width: 500px;">
        <v-system-bar color="primary darken-1" dark>
          <v-spacer></v-spacer>
          <v-icon small>mdi-square</v-icon>
          <v-icon class="ml-1" small>mdi-circle</v-icon>
          <v-icon class="ml-1" small>mdi-triangle</v-icon>
        </v-system-bar>
        <v-toolbar color="primary accent-1" cards dark flat>
          <v-card-title class="title font-weight-regular">Профиль пользователя</v-card-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" v-model="form" class="pa-2 pt-2">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Как вас зовут?*" hint="Как к вам можно обращаться" required></v-text-field>
                </v-flex>
                <v-text-field
                  v-model="email"
                  box
                  required
                  color="primary"
                  label="Почтовый ящик"
                  hint="мы пришлем вам информацию о заказе"
                  type="email"
                ></v-text-field>
                <v-text-field
                  v-model="phone"
                  box
                  color="primary"
                  label="Телефон для связи"
                  hint="мы сможем вам позвонить сами"
                  mask="phone"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="bio"
                  style="min-height: 96px"
                  box
                  color="primary"
                  label="Дополнительно"
                  hint="пожелания и примечания"
                  rows="3"
                ></v-textarea>
                <v-checkbox v-model="agreement" :rules="[rules.required]" color="primary">
                  <template v-slot:label>
                    Даю согласие&nbsp;
                    <a
                      href="#"
                      @click.stop.prevent="dialog1 = true"
                    >Политику обслуживания</a>
                    &nbsp;и&nbsp;
                    <a
                      href="#"
                      @click.stop.prevent="dialog1 = true"
                    >Обработку персональных данных</a>*
                  </template>
                </v-checkbox>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn flat @click.stop.prevent="dialog = false">Закрыть</v-btn>
          <v-btn flat @click="$refs.form.reset()">Очистить</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!form"
            :loading="isLoading"
            class="white--text"
            color="primary accent-4"
            depressed
          >Отправить</v-btn>
        </v-card-actions>
        <v-dialog v-model="dialog1" absolute max-width="700" persistent>
          <v-card>
            <v-card-title class="headline grey lighten-3">Политика обработки персональных данных</v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat @click="agreement = false, dialog1 = false">Нет</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="white--text"
                color="primary accent-4"
                @click="agreement = true, dialog1 = false"
              >ДА</v-btn>
            </v-card-actions>
            <v-card-text>
              <DataPrivacy/>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import DataPrivacy from "@/components/DataPrivacy";
export default {
  components: { DataPrivacy },
  data: () => ({
    dialog: false,
    dialog1: false,
    agreement: false,
    phone: undefined,
    bio: "",
    rules: {
      //email: v => (v || "").match(/@/) || "Пожалуйста введите правильный адрес",
      // length: len => v =>
      //   (v || "").length >= len ||
      //   `Неверная длинна поля, нужна длинна от ${len}`,
      required: v => !!v || "Это поле обязательно!"
    }
  })
};
</script>
