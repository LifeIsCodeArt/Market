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

    const commonQAList = ref([

        {
            id:1,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat lectus turpis mollis nulla arcu. Metus sagittis nulla dolor nibh facilisi ornare. Aliquam ut quis viverra nibh purus suscipit. Enim sem massa tortor consectetur sagittis semper blandit ut nisl. Scelerisque urna, rutrum suspendisse amet gravida. Semper massa eget ut justo, nascetur aliquam id ipsum.',
            label: 'Lorem ipsum dolor sit amet',
        },

        {
            id:2,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat lectus turpis mollis nulla arcu. Metus sagittis nulla dolor nibh facilisi ornare. Aliquam ut quis viverra nibh purus suscipit. Enim sem massa tortor consectetur sagittis semper blandit ut nisl. Scelerisque urna, rutrum suspendisse amet gravida. Semper massa eget ut justo, nascetur aliquam id ipsum.',
            label: 'Lorem ipsum dolor sit amet',
        },

        {
            id:3,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat lectus turpis mollis nulla arcu. Metus sagittis nulla dolor nibh facilisi ornare. Aliquam ut quis viverra nibh purus suscipit. Enim sem massa tortor consectetur sagittis semper blandit ut nisl. Scelerisque urna, rutrum suspendisse amet gravida. Semper massa eget ut justo, nascetur aliquam id ipsum.',
            label: 'Lorem ipsum dolor sit amet',
        },

        {
            id:4,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat lectus turpis mollis nulla arcu. Metus sagittis nulla dolor nibh facilisi ornare. Aliquam ut quis viverra nibh purus suscipit. Enim sem massa tortor consectetur sagittis semper blandit ut nisl. Scelerisque urna, rutrum suspendisse amet gravida. Semper massa eget ut justo, nascetur aliquam id ipsum.',
            label: 'Lorem ipsum dolor sit amet',
        },

        {
            id:5,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat lectus turpis mollis nulla arcu. Metus sagittis nulla dolor nibh facilisi ornare. Aliquam ut quis viverra nibh purus suscipit. Enim sem massa tortor consectetur sagittis semper blandit ut nisl. Scelerisque urna, rutrum suspendisse amet gravida. Semper massa eget ut justo, nascetur aliquam id ipsum.',
            label: 'Lorem ipsum dolor sit amet',
        },

        {
            id:6,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat lectus turpis mollis nulla arcu. Metus sagittis nulla dolor nibh facilisi ornare. Aliquam ut quis viverra nibh purus suscipit. Enim sem massa tortor consectetur sagittis semper blandit ut nisl. Scelerisque urna, rutrum suspendisse amet gravida. Semper massa eget ut justo, nascetur aliquam id ipsum.',
            label: 'Lorem ipsum dolor sit amet',
        }

    ])

    return {commonCustomersListItems, commonCustomersListRules, commonQAList}
})