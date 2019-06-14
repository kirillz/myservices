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
                  <v-toolbar-title class="body-2 grey--text">Выберите раздел и</v-toolbar-title>

                  <v-btn
                    v-for="(n, i) in categories"
                    :key="n"
                    @click="activeCategory = i"
                    :color="i === activeCategory ? 'red' : 'indigo'"
                    outline
                  >{{ n.title }}</v-btn>
                </v-toolbar>

                <v-divider></v-divider>
                <v-flex column>
                  <v-toolbar card prominent>
                    <v-btn
                      v-for="(n, i) in category.sections"
                      :key="n.name"
                      @click="activeSubcategory = i"
                      :color="i === activeSubcategory ? 'red' : 'indigo'"
                      outline
                    >{{ n.title }}</v-btn>
                  </v-toolbar>
                </v-flex>

                <v-card>
                  <v-layout row v-for="service in section.items" :key="service.title">
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
                    </h4>
                    <h4 class="mt-3">Вами выбраны:</h4>
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
      activeCategory: null,
      activeSubcategory: null,
      categories: [
        {
          name: "general",
          title: "Общая помощь",
          sections: [
            {
              name: "hdd",
              title: "Работа с жестким диском",
              items: [
                {
                  title: "Освобождение рабочей области жёсткого диска",
                  description: "Подробное описание услуги 1",
                  cost: 790,
                  checked: false
                },
                {
                  title:
                    "Сохранение, перенос информации (за 1 Гб включительно)",
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
                  title:
                    "Восстановление данных (случайно удаленные файлы и др.)",
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
            },
            {
              name: "training",
              title: "Обучение пользователей",
              items: [
                {
                  title: "Запись информации на CD, DVD диск",
                  description: "Подробное описание услуги 1",
                  cost: 750,
                  checked: false
                },
                {
                  title: "Настройка (создание) профиля пользователя Windows",
                  description: "Подробное описание услуги 1",
                  cost: 750,
                  checked: false
                },
                {
                  title: "Регистрация почтового ящика",
                  description: "Подробное описание услуги 1",
                  cost: 750,
                  checked: false
                },
                {
                  title: "Обучение работе с смартфонами, планшетами",
                  description: "Подробное описание услуги 1",
                  cost: 750,
                  checked: false
                }
              ]
            },
            {
              name: "network",
              title: "Работа с сетью",
              items: [
                {
                  title:
                    "Настройка 3G/4G модема на компьютере/ноутбуке/планшете",
                  description: "Подробное описание услуги 1",
                  cost: 790,
                  checked: false
                },
                {
                  title: "Создание WAP, GPRS, PPoE, PPTP или L2TP соединения",
                  description: "Подробное описание услуги 1",
                  cost: 800,
                  checked: false
                },
                {
                  title: "Настройка локальной сети",
                  description: "Подробное описание услуги 1",
                  cost: 490,
                  checked: false
                },
                {
                  title: "Настройка Wi-Fi на компьютере/ноутбуке/планшете",
                  description: "Подробное описание услуги 1",
                  cost: 500,
                  checked: false
                },
                {
                  title:
                    "Комплексная настройка роутера (маршрутизатора): настройка роутера uplink, беспроводной связи внутри квартиры и одно беспроводное устройство",
                  description: "Подробное описание услуги 1",
                  cost: 1300,
                  checked: false
                }
              ]
            },
            {
              name: "additional",
              title: "Дополнительные услуги",
              items: [
                {
                  title:
                    "Комплектование и запуск рабочего места (компьютер + периферия)",
                  description: "Подробное описание услуги 1",
                  cost: 590,
                  checked: false
                },
                {
                  title: "Сопровождение при покупке",
                  description: "Подробное описание услуги 1",
                  cost: 590,
                  checked: false
                }
              ]
            }
          ]
        },
        {
          name: "equip",
          title: "Оборудование",
          sections: [
            {
              name: "repairupgrade",
              title: "Ремонт и модернизация компьютера",
              items: [
                {
                  title: "Проведение работ по модернизации компьютера",
                  description: "Подробное описание услуги 1",
                  cost: 500,
                  checked: false
                },
                {
                  title: "Чистка компьютера от пыли",
                  description: "Подробное описание услуги 1",
                  cost: 500,
                  checked: false
                },
                {
                  title: "Монтаж&демонтаж материнской платы",
                  description: "Подробное описание услуги 1",
                  cost: 690,
                  checked: false
                },
                {
                  title:
                    "Монтаж&демонтаж (сетевой карты, видеокарты, звуковой карты и др.)",
                  description: "Подробное описание услуги 1",
                  cost: 490,
                  checked: false
                },
                {
                  title: "Монтаж&демонтаж процессора (без системы охлаждения)",
                  description: "Подробное описание услуги 1",
                  cost: 490,
                  checked: false
                },
                {
                  title: "Монтаж&демонтаж блока питания",
                  description: "Подробное описание услуги 1",
                  cost: 490,
                  checked: false
                },
                {
                  title: "Монтаж&демонтаж DVD-RW, CD-RW, HDD, FDD и др",
                  description: "Подробное описание услуги 1",
                  cost: 390,
                  checked: false
                },
                {
                  title: "Монтаж&демонтаж модуля оперативной памяти",
                  description: "Подробное описание услуги 1",
                  cost: 290,
                  checked: false
                },
                {
                  title:
                    "Монтаж&демонтаж системы охлаждения (с заменой термопасты)",
                  description: "Подробное описание услуги 1",
                  cost: 1000,
                  checked: false
                },
                {
                  title: "Подбор комплектующих компьютера под задачи клиента",
                  description: "Подробное описание услуги 1",
                  cost: 440,
                  checked: false
                }
              ]
            },
            {
              name: "peripheral",
              title: "Подключение и настройка периферийных устройств",
              items: [
                {
                  title: "Подключение и настройка принтера",
                  description: "Подробное описание услуги 1",
                  cost: 600,
                  checked: false
                },
                {
                  title: "Подключение и настройка сканера",
                  description: "Подробное описание услуги 1",
                  cost: 700,
                  checked: false
                },
                {
                  title:
                    "Подключение и настройка многофункционального устройства (МФУ)",
                  description: "Подробное описание услуги 1",
                  cost: 800,
                  checked: false
                },
                {
                  title:
                    "Подключение и настройка монитора (разрешение, частота, цвет и др.)",
                  description: "Подробное описание услуги 1",
                  cost: 290,
                  checked: false
                },
                {
                  title:
                    "Подключение гаджетов к компьютеру (при наличии кабеля)",
                  description: "Подробное описание услуги 1",
                  cost: 590,
                  checked: false
                },
                {
                  title:
                    "Настройка прочего оборудования (игровая приставка, ТВ, и др.)",
                  description: "Подробное описание услуги 1",
                  cost: 440,
                  checked: false
                }
              ]
            }
          ]
        },
        {
          name: "system",
          title: "Система",
          sections: [
            {
              name: "optimize",
              title: "Оптимизация операционной системы",
              items: [
                {
                  title: 'Поиск "плавающей" системной или аппаратной ошибки',
                  description: "Подробное описание услуги 1",
                  cost: 750,
                  checked: false
                },
                {
                  title: "Ускорение загрузки Windows",
                  description: "Подробное описание услуги 1",
                  cost: 700,
                  checked: false
                },
                {
                  title: "Комплексная настройка Windows",
                  description: "Подробное описание услуги 1",
                  cost: 1500,
                  checked: false
                },
                {
                  title: "Устранение ошибок в системном реестре Windows",
                  description: "Подробное описание услуги 1",
                  cost: 1500,
                  checked: false
                },
                {
                  title:
                    "Восстановление запуска операционной системы после сбоя",
                  description: "Подробное описание услуги 1",
                  cost: 1100,
                  checked: false
                },
                {
                  title: "Настройка и оптимизация системных служб",
                  description: "Подробное описание услуги 1",
                  cost: 790,
                  checked: false
                }
              ]
            },
            {
              name: "software",
              title: "Установка и настройка ПО",
              items: [
                {
                  title: "Обновление ПО",
                  description: "Подробное описание услуги 1",
                  cost: 540,
                  checked: false
                },
                {
                  title: "Поиск и установка драйверов для оборудования",
                  description: "Подробное описание услуги 1",
                  cost: 500,
                  checked: false
                },
                {
                  title: "Установка ПО предоставленного клиентом",
                  description: "Подробное описание услуги 1",
                  cost: 500,
                  checked: false
                },
                {
                  title: "Настройка офисных программ",
                  description: "Подробное описание услуги 1",
                  cost: 440,
                  checked: false
                },
                {
                  title: "Настройка ПО до 50 Мб.",
                  description: "Подробное описание услуги 1",
                  cost: 540,
                  checked: false
                },
                {
                  title: "Настройка ПО свыше 50 Мб",
                  description: "Подробное описание услуги 1",
                  cost: 750,
                  checked: false
                },
                {
                  title:
                    "Настройка Интернет-браузера (IE, Opera, Firefox, Chrome и др.)",
                  description: "Подробное описание услуги 1",
                  cost: 390,
                  checked: false
                },
                {
                  title: "Настройка почтовых программ",
                  description: "Подробное описание услуги 1",
                  cost: 390,
                  checked: false
                },
                {
                  title:
                    "Установка комплексной защиты (антивируса, firewall и антишпиона)",
                  description: "Подробное описние услуги 1",
                  cost: 1250,
                  checked: false
                },
                {
                  title: "Настройка firewall",
                  description: "Подробное описние услуги 1",
                  cost: 990,
                  checked: false
                },
                {
                  title: "Обновление антивирусных баз (или антишпиона)",
                  description: "Подробное описние услуги 1",
                  cost: 200,
                  checked: false
                },
                {
                  title: "Настройка BIOS на материнской плате",
                  description: "Подробное описние услуги 1",
                  cost: 490,
                  checked: false
                }
              ]
            },
            {
              name: "infection",
              title: "Удаление вредоносных программ",
              items: [
                {
                  title: "Удаление блокировщика Windows",
                  description: "Подробное описание услуги 1",
                  cost: 950,
                  checked: false
                },
                {
                  title: "Поиск и удаление вирусов, троянов, и др",
                  description: "Подробное описание услуги 1",
                  cost: 750,
                  checked: false
                }
              ]
            }
          ]
        }
      ]
    };
  },
  watch: {
    activeCategory() {
      this.activeSubcategory = null;
    }
  },
  computed: {
    category() {
      return this.categories[this.activeCategory] || { sections: [] };
    },
    section() {
      return this.category.sections[this.activeSubcategory] || { items: [] };
    },
    selectedServices() {
      return this.section.items.filter(n => n.checked);
    },
    costSum() {
      return this.section.items.reduce((acc, n) => acc + n.checked * n.cost, 0);
    },
    quantSum() {
      return this.section.items.reduce((acc, n) => acc + n.checked, 0);
    }
    // itogo() {
    //   return this.quantSum * this.costSum;
    // }
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
