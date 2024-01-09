import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHomePageItemsStore = defineStore('homePageItems', () => {

    const homePageTemplates = ref([

        {id:1,
            label:'Обувь',
            link:'../src/assets/images/homepage-templates/template_1.png',
        },

        {id:2,
            label:'Спорт',
            link:'../src/assets/images/homepage-templates/template_2.png',
        },

        {id:3,
            label:'Одежда',
            link:'../src/assets/images/homepage-templates/template_3.png',
        },

        {id:4,
            label:'Электроника',
            link:'../src/assets/images/homepage-templates/template_4.png',
        },

        {id:5,
            label:'Аксессуары',
            link:'../src/assets/images/homepage-templates/template_5.png',
        },

        {id:6,
            label:'Спортивное питание',
            link:'../src/assets/images/homepage-templates/template_6.png',
        },

        {id:7,
            label:'Детям',
            link:'../src/assets/images/homepage-templates/template_7.png',
        },

        {id:8,
            label:'Автотовары',
            link:'../src/assets/images/homepage-templates/template_8.png',
        },

        {id:9,
            label:'Красота и здоровье',
            link:'../src/assets/images/homepage-templates/template_9.png',
        },

        {id:10,
            label:'Канцелярия',
            link:'../src/assets/images/homepage-templates/template_10.png',
        },

    ])

    const homePageBenefits = ref([

        {id:1,
            label:'100% оригиналы',
            text:'Мы работаем со всеми представительствами брендов напрямую, а по некоторым из них являемся эксклюзивным оптовым каналом дистрибуции, \n' +
                'что дает нам возможность предлагать лучшие цены и условия.',
            link:'../src/assets/icons/homepage-templates/icon_1.png',
        },

        {id:2,
            label:'100% качество',
            text:'У нас оригинальный и сертифицированный товар, что подтверждено официальными документами',
            link:'../src/assets/icons/homepage-templates/icon_2.png',
        },

        {id:3,
            label:'Большой ассортимент',
            text:'Довольно широкий ассортимент товарова, вы обязательно сможете подобрать именно то, что нужно.  У нас более 3000 категорий',
            link:'../src/assets/icons/homepage-templates/icon_3.png',
        },

        {id:4,
            label:'Доставка',
            text:'Моменталтная отгрузка товаров из Екатеринбурга в любую точку России любой крупной транспортной компанией. Наш склад находится в паре км от любой крупной ТК. Отгрузка товара в течение 1 дня. ',
            link:'../src/assets/icons/homepage-templates/icon_4.png',
        },

        {id:5,
            label:'Нам можно доверять',
            text:'Наша компания более 10 лет занимается продажей спортивных товаров. За это время мы накопили огромный опыт в оптовом направлении. У нас продуманы даже самые мелкие детали.',
            link:'../src/assets/icons/homepage-templates/icon_5.png',
        },

        {id:6,
            label:'У нас нет очередей',
            text:'После оформления заказа, вы не попадете в очередь на выстпвление счета, в очередь на сборку заказа или в очередь на отгрузку. Мы осуществялем этот сервис моментально',
            link:'../src/assets/icons/homepage-templates/icon_6.png',
        },

        {id:7,
            label:'Оперативная поддержка',
            text:'Если у вас возникла проблема, мы обязательно ее решим на раз-два-три. Мы работаем на все 100%, нам нечего бояться.',
            link:'../src/assets/icons/homepage-templates/icon_7.png',
        },

        {id:8,
            label:'Заказы',
            text:'Минимальная сумма заказа – всего 20 000 руб. Мы открыты для сотрудничества с малыми, средними и крупным бизнесом.',
            link:'../src/assets/icons/homepage-templates/icon_8.png',
        },

    ])

    const homePageCompanies = ref([

        {id:1,
            link:'../src/assets/icons/homepage-companies/company_1.png',
        },

        {id:2,
            link:'../src/assets/icons/homepage-companies/company_2.png',
        },

        {id:3,
            link:'../src/assets/icons/homepage-companies/company_3.png',
        },

        {id:4,
            link:'../src/assets/icons/homepage-companies/company_4.png',
        },

        {id:5,
            link:'../src/assets/icons/homepage-companies/company_5.png',
        },

        {id:6,
            link:'../src/assets/icons/homepage-companies/company_6.png',
        },

        {id:7,
            link:'../src/assets/icons/homepage-companies/company_7.png',
        },

        {id:8,
            link:'../src/assets/icons/homepage-companies/company_8.png',
        },

        {id:9,
            link:'../src/assets/icons/homepage-companies/company_9.png',
        },

        {id:10,
            link:'../src/assets/icons/homepage-companies/company_10.png',
        },

        {id:11,
            link:'../src/assets/icons/homepage-companies/company_11.png',
        },

        {id:12,
            link:'../src/assets/icons/homepage-companies/company_12.png',
        },




    ])

    return {homePageTemplates, homePageBenefits, homePageCompanies}
})
