/* eslint-disable */
<template>
  <div class="pchelp">
    <p class="subheading grey--text centered pt-5">
      Помогаю починить компьютерную технику и настроить программное обеспечение.
      Для оформления заявки обратитесь по телефону 8 926 755 54 88.
    </p>
    <v-container fluid class="my-5">
      <v-card class="pa-3">
        <v-card flat>
          <v-toolbar class="pt-2" color="primary" dark extended flat>
            <h1>
              Компьютерная
              <br>помощь
            </h1>
            <p class="subheading yellow--text centered">
              Помогаю починить компьютерную технику и настроить программное обеспечение.
              <br>Для оформления заявки обратитесь по телефону
              <strong>8 926 755 54 88</strong>.
            </p>
          </v-toolbar>

          <v-layout row pb-3>
            <v-flex xs8 offset-xs1>
              <v-card class="card--flex-toolbar">
                <v-toolbar card prominent>
                  <v-toolbar-title class="body-2 grey--text">Выберите раздел</v-toolbar-title>

                  <v-btn outline color="indigo">Общая помощь</v-btn>
                  <v-btn outline color="indigo">Оборудование</v-btn>
                  <v-btn outline color="indigo">Система</v-btn>
                  <v-spacer></v-spacer>
                </v-toolbar>

                <v-divider></v-divider>

                <v-card>
                  <v-layout row v-for="service of services" :key="service.title">
                    <v-card width="100%" class="ma-3">
                      <v-flex xs12 md12>
                        <v-card-title class="primary white--text">
                          {{ service.title }}
                          <v-spacer></v-spacer>
                          <h1>
                            <v-checkbox
                              dark
                              color="yellow"
                              hide-details
                              v-model="service.checked"
                              :label="`${service.cost} руб.`"
                            ></v-checkbox>
                          </h1>
                        </v-card-title>
                        <v-expansion-panel>
                          <v-expansion-panel-content
                            class="body-2 grey--text"
                            expand-icon="mdi-menu-down"
                          >
                            <template v-slot:header>
                              <div>Подробнее</div>
                            </template>
                            <v-card>
                              <v-card-text class="grey lighten-3">{{ service.description }}</v-card-text>
                            </v-card>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-flex>
                    </v-card>
                  </v-layout>
                </v-card>
              </v-card>
            </v-flex>
            <v-card width="30%" height="auto" class="ma-4">
              <v-container>
                <v-card class="primary white--text">
                  <v-card-text>Отметьте нужное галочками или Вы можете позвонить мне по телефону, я расскажу подробнее.</v-card-text>
                  <v-card-title v-if="quantSum > 0">
                    <h4 class="mx-2">
                      <ul>
                        <li v-for="n in selectedServices" :key="n">{{ n.title }}</li>
                      </ul>
                    </h4>Вами отмечены:
                    <v-spacer></v-spacer>
                    <v-chip class="subheading" color="green" text-color="white">
                      <v-avatar class="yellow black--text">{{quantSum}}</v-avatar>
                      Сумма: {{costSum}} р.
                    </v-chip>
                  </v-card-title>
                </v-card>
              </v-container>
            </v-card>
          </v-layout>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quant: 0,
      services: [
        {
          title: "Освобождение рабочей области жёсткого диска",
          description: "Подробное описание услуги 1",
          cost: 790,
          checked: false
        },
        {
          title: "Сохранение, перенос информации (за 1 Гб включительно)",
          description: "Подробное описание услуги 2",
          cost: 340,
          checked: false
        },
        {
          title: "Деление жесткого диска на разделы (за 1 раздел)",
          description: "Подробное описание услуги 3",
          cost: 550,
          checked: false
        },
        {
          title: "Форматирование жесткого диска (за 1 раздел)",
          description: "Подробное описание услуги",
          cost: 240,
          checked: false
        },
        {
          title: "Восстановление данных (случайно удаленные файлы и др.)",
          description: "Подробное описание услуги",
          cost: 750,
          checked: false
        },
        {
          title: "Дефрагментация жесткого диска",
          description: "Подробное описание услуги",
          cost: 50,
          checked: false
        }
      ]
    };
  },
  computed: {
    selectedServices() {
      return this.services.filter(n => n.checked);
    },
    costSum() {
      return this.services.reduce((acc, n) => acc + n.cost, 0);
    },
    quantSum() {
      return this.services.reduce((acc, n) => acc + n.checked, 0);
    }
  }
};
</script>

<style lang="sass" scoped>

.card--flex-toolbar
  margin-top: -64px

.centered
  text-align: center
  margin: 0 auto

.v-label
  font-size: 36px

</style>
