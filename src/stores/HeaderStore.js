import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderItemsStore = defineStore('headerItems', () => {

  const headersItem = ref([
    {id:1,
     text:'Оптовым покупателям',
     link:'/retails',
    },

    {id:2,
     text:'Розничным покупателям',
     link:'/private',
    },

    {id:3,
     text:'Регистрация для юр.лиц',
     link:'/retails-reg',
    },

    {id:4,
     text:'Регистрация для физ.лиц',
     link:'/private-reg',
    },


  ])

  return {headersItem}
})
