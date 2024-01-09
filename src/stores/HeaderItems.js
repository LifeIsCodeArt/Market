import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderItemsStore = defineStore('headerItems', () => {
  const count = ref([
    {id:1,
     text:'Оптовым покупателям',
     link:'#',
    },

    {id:2,
     text:'Розничным покупателям',
     link:'#',
    },

    {id:3,
     text:'Регистрация для юр.лиц',
     link:'#',
    },

    {id:4,
     text:'Регистрация для физ.лиц',
     link:'#',
    },


  ])

  return {count}
})
