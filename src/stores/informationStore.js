import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInformationStore = defineStore('informationStore', () => {

    const InformationListItems = ref([

        {id:1,
            label:'Маркетинговые материалы',
        },

        {id:2,
            label:'Политика конфиденциальности',
        }

    ])


    const InformationJournalItems = ref([

        {
            id:1,
            text:'Спортивный каталог 2021 включает в себя следующие варианты....',
            link:'../src/assets/images/information-catalogue/catalogue-1.png'
        },

        {
            id:2,
            text:'Спортивный каталог 2021 включает в себя следующие варианты....',
            link:'../src/assets/images/information-catalogue/catalogue-1.png'
        },

        {
            id:3,
            text:'Спортивный каталог 2021 включает в себя следующие варианты....',
            link:'../src/assets/images/information-catalogue/catalogue-2.png'
        },

        {
            id:4,
            text:'Спортивный каталог 2021 включает в себя следующие варианты....',
            link:'../src/assets/images/information-catalogue/catalogue-3.png'
        },

        {
            id:5,
            text:'Спортивный каталог 2021 включает в себя следующие варианты....',
            link:'../src/assets/images/information-catalogue/catalogue-4.png'
        },

        {
            id:6,
            text:'Спортивный каталог 2021 включает в себя следующие варианты....',
            link:'../src/assets/images/information-catalogue/catalogue-5.png'
        },

    ])

    return { InformationListItems, InformationJournalItems }
})