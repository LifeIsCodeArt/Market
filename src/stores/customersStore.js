import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCustomersStore = defineStore('customersStore', () => {

    const commonCustomersListItems = ref([

        {id:1,
            label:'Как сделать заказ',
        },

        {id:2,
            label:'Доставка и оплата',
        },

        {id:3,
            label:'Возврат товара',
        },

        {id:4,
            label:'Вопросы и ответы',
        },

        {id:5,
            label:'Политика конфиденциальности',
        }

    ])

    const commonCustomersListRules = ref([

        {id:1,
            text:'Зарегистрируйтесь',
        },

        {id:2,
            text:'Выберите товары и добавьте их в корзину\n',
        },

        {id:3,
            text:'Перейдите в раздел Корзина и нажмите  ',
            path: '/',
        },

        {id:4,
            text:'Выберите способ доставки и укажите адрес',
        },

        {id:5,
            text:'Укажите номер телефона, email и ФИО получателя заказа',
        },

        {id:6,
            text:'Выберите способ оплаты и нажмите ',
            path: '/',
        }

    ])

    return {commonCustomersListItems, commonCustomersListRules}
})