import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFooterItemsStore = defineStore('footerItems', () => {
    const footerItems = ref([

        {id:1,
         link:'../src/assets/icons/footer-icons/instagram.png',
        },

        {id:2,
         link:'../src/assets/icons/footer-icons/facebook.svg',
        },

        {id:3,
         link:'../src/assets/icons/footer-icons/telegram.svg',
        },

        {id:4,
        link:'../src/assets/icons/footer-icons/whatsapp.svg',
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

    return {footerItems, footerCards}
})
