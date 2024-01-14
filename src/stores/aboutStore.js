import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAboutItemsStore = defineStore('aboutItems', () => {

     const detailItems = ref([

        {
            id:1,
            label:'Инн:',
            text:' 667027205771',
        },

         {
             id:2,
             label:'ОГРН:',
             text:'310667022200016',
         },

         {
             id:3,
             label:'БИК:',
             text:'046577964',
         },

         {
             id:4,
             label:'Р/с:',
             text:'40802810638060000212',
         },


    ])

    const adressItems = ref([

        {
            id:1,
            label:'Юр. адрес:',
            text:'г. Екатеринбург ул. 40 лет ВЛКСМ, дом 16 - а, кв. 31',
        },

        {
            id:2,
            text:'ФИЛИАЛ"ЕКАТЕРИНБУРГСКИЙ" ОАО"АЛЬФА-БАНК"',
        },

        {
            id:3,
            label:'Свидетельство о гос. регистрации: ',
            text:'66№006756503',
        },

        {
            id:4,
            label:'к/с:',
            text:'30101810100000000964',
        },



    ])

    const aboutIcons = ref([

        {id:1,
            link:'../src/assets/icons/homepage-socials/instagram.png',
        },

        {id:2,
            link:'../src/assets/icons/homepage-socials/facebook.png',
        },

        {id:3,
            link:'../src/assets/icons/homepage-socials/telegram.png',
        },

        {id:4,
            link:'../src/assets/icons/homepage-socials/whatsapp.png',
        },
    ])

    const aboutStaff = ref([

        {
            id:1,
            link:'../src/assets/images/about-staff/image_1_2.png',
            label:'Менеджер',
            text:'Управление персоналом — область знаний и практической деятельности, направленная на обеспечение организации качественным персоналом, способным выполнять возложенные на него трудовые функции'
        },

        {
            id:2,
            link:'../src/assets/images/about-staff/image_1_2.png',
            label:'HR',
            text:'Управление персоналом — область знаний и практической деятельности, направленная на обеспечение организации качественным персоналом, способным выполнять возложенные на него трудовые функции'
        },

        {
            id:3,
            link:'../src/assets/images/about-staff/image_3.png',
            label:'Супервайзер',
            text:'Управление персоналом — область знаний и практической деятельности, направленная на обеспечение организации качественным персоналом, способным выполнять возложенные на него трудовые функции'
        },

        {
            id:4,
            link:'../src/assets/images/about-staff/image_4.png',
            label:'Мерчандайзер',
            text:'Управление персоналом — область знаний и практической деятельности, направленная на обеспечение организации качественным персоналом, способным выполнять возложенные на него трудовые функции'
        },
        {
            id:5,
            link:'../src/assets/images/about-staff/image_5.png',
            label:'Продавец-консультант',
            text:'Управление персоналом — область знаний и практической деятельности, направленная на обеспечение организации качественным персоналом, способным выполнять возложенные на него трудовые функции'
        },
    ])

    const partnersFeedback = ref([

        {
            id:1,
            label:' Чистяков Д. Компания ООО "ССС"',
            text:'Всем привет, долго выбирали поставщика спортивной одежды для своих магазинов. ' +
                'Остановили выбор на компании ИП Тишкин. Качество отличное, современный дизайн и самое главное - это доступные цены. ' +
                'Здесь мне помогли с выбором нужных актуальных моделей. ' +
                'Дальнейшее сотрудничество планируем только с ними.'
        },

        {
            id:2,
            label:'Иванов Иванович',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis nulla eget a mauris nunc. Viverra lacinia id diam sed mattis facilisis mi, adipiscing. Velit blandit vitae.'
        },

        {
            id:3,
            label:'Иванов Иванович',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis nulla eget a mauris nunc. Viverra lacinia id diam sed mattis facilisis mi, adipiscing. Velit blandit vitae.'
        },

        {
            id:4,
            label:'Мерчандайзер',
            text:'Всем привет, долго выбирали поставщика спортивной одежды для своих магазинов. ' +
                'Остановили выбор на компании ИП Тишкин. ' +
                'Качество отличное, современный дизайн и самое главное - это доступные цены. ' +
                'Здесь мне помогли с выбором нужных актуальных моделей. ' +
                'Дальнейшее сотрудничество планируем только с ними.'
        },
        {
            id:5,
            label:'Продавец-консультант',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis nulla eget a mauris nunc. Viverra lacinia id diam sed mattis facilisis mi, adipiscing. Velit blandit vitae.'
        },
    ])

    const clientsFeedback = ref([

        {
            id:1,
            label:'Николай Дмитриевич',
            text:'Шиповки отличные, ключ и комплект шипов в комплекте был. Дочери понравились.'
        },

        {
            id:2,
            label:'Алексей Степанович',
            text:'Приобрели несколько секундомер для тренеров, все остались в восторге!'
        },

        {
            id:3,
            label:'Дмитрий Сергеевич',
            text:'Спасибо за быструю доставку, пришло все в полном комплекте и вовремя, не смотря на не лучшую погоду.'
        },

        {
            id:4,
            label:'Николай Дмитриевич',
            text:'Шиповки отличные, ключ и комплект шипов в комплекте был. Дочери понравились.'
        },
        {
            id:5,
            label:'Алексей Степанович',
            text:'Приобрели несколько секундомер для тренеров, все остались в восторге!'
        },
    ])

    const aboutCertificates = ref([

        {
            id:1,
            link:'../src/assets/images/about-certificates/certificate-1.png'
        },

        {
            id:2,
            link:'../src/assets/images/about-certificates/certificate-2.png'
        },

        {
            id:3,
            link:'../src/assets/images/about-certificates/certificate-3.png'
        },

        {
            id:4,
            link:'../src/assets/images/about-certificates/certificate-4.png'
        },
        {
            id:5,
            link:'../src/assets/images/about-certificates/certificate-5.png'
        },
        {
            id:6,
            link:'../src/assets/images/about-certificates/certificate-6.png'
        }
    ])


    return {detailItems, adressItems, aboutIcons, aboutStaff, partnersFeedback, clientsFeedback,aboutCertificates}
})
