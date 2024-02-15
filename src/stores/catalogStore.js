import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCatalogItemsStore = defineStore('catalogItems', () => {

    const ballItems = ref([

        {
            id:1,
            article: '124Nd31',
            name: "М'яч Spalding Silver Outdoor",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum',
            image:'../src/assets/images',
            size: 'S',
            color: ['#fff','#000000', '#B3B3B3'],
            brand:'PROFIT',
            price:'40$',
            tradePrice:'25$'
        },

        {
            id:2,
            article: '124Bd31',
            name: "М'яч Spalding Silver Indoor",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum',
            image:'../src/assets/images',
            size: 'M',
            color: ['#fff','#000000', '#B3B3B3'],
            brand:'PROFIT',
            price:'40$',
            tradePrice:'25$'
        },

        {
            id:3,
            article: '124Xd31',
            name: "М'яч Spalding Gold Outdoor",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum',
            image:'../src/assets/images',
            size: 'L',
            color: ['#fff','#000000', '#B3B3B3'],
            brand:'PROFIT',
            price:'40$',
            tradePrice:'25$'
        },

        {
            id:4,
            article: '124Yd31',
            name: "М'яч Spalding Gold Indoor",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum',
            image:'../src/assets/images',
            sizes: ['L','M','S'],
            color: ['#B3B3B3'],
            brand:'PROFIT',
            price:'40$',
            tradePrice:'25$'
        },


    ])

    const footerCards = ref([

        {id:1,
            link:'../src/assets/icons/footer-icons/Rectangle%2064.png',
        },

        {id:2,
            link:'../src/assets/icons/footer-icons/Rectangle%2062.png',
        },

        {id:3,
            link:'../src/assets/icons/footer-icons/Rectangle%2064.png',
        },
    ])

    return { ballItems }
})
