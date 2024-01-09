<script setup>
 import TheHeaderItem from '../components/TheHeaderMenuItems.vue'
 import {useHeaderItemsStore} from '../stores/HeaderItems.js'
 import {computed} from "vue";

 const store = useHeaderItemsStore()
 const storeItems = computed(() => store.count)
</script>


<template>
    <div class="w-[1440px] my-0 mx-auto">
        <div class="bg-[#F2F2F2]  h-[45px]  flex items-center justify-between px-[130px]">
              <div class="font-roboto font-[18px] leading-normal font-[#333]">Київ</div>
              <ul class="flex">
                  <TheHeaderItem v-for="item in storeItems" :item="item"/>
                  <li class="font-roboto font-[18px] leading-normal text-[#333333] font-bold"> +7 (999) 999-99-99</li>
              </ul>
        </div>

        <div class=" h-[58px] flex items-center justify-between mt-[8px] mb-[19px] px-[130px] border-b-2 border-b-gray-200">

            <div class="flex items-center">
                <img src="../assets/icons/header-icons/whatsapp.png" alt="" class="mr-[24px]">
                <img src="../assets/icons/header-icons/Telegram.png" alt="" class="">
            </div>

            <div class="flex items-center pl-[90px] w-[200px]">
                <p class="text-[25px] text-[#333333] font-orbitron">GreaTime</p>
            </div>

            <div class="flex items-center">

                <p class="mr-[48px] text-[20px] font-roboto text-[#333333]">
                    О Компании
                </p>

                <p class="text-[20px] font-roboto text-[#333333]">
                    Контакты
                </p>

            </div>

        </div>

        <div class="flex px-[130px] h-[62px] items-center">

            <button class="flex justify-center items-center w-[163px] bg-[#4174CB] text-white rounded h-[40px]">
                <img src="../assets/icons/header-icons/menu-alt-01.png" alt="" class="mr-[10px]">
                <p class="text-[18px] font-normal">Каталог</p>
            </button>

            <div class="ml-[20px] mr-[53px] flex h-[40px]">
                <input type="text" placeholder="Найти любимые товары" class="w-[613px] pl-[16px] flex items-center">
                <button class="flex justify-center items-center w-[104px] bg-[#4174CB] text-white rounded">Найти</button>
            </div>

            <div class="flex h-[62px]">
              
              <button class="flex flex-col justify-between items-center">
                  <img src="../assets/icons/header-icons/Profile.png" alt="" class="">
                  <p class="">Войти</p>
              </button>
              
              <button class="flex flex-col justify-between items-center mx-[32px]">
                  <img src="../assets/icons/header-icons/Heart.png" alt="" class="">
                  <p class="">Избранное</p>
              </button>
              
              <button class="flex flex-col justify-between items-center">
                  <img src="../assets/icons/header-icons/Buy.png" alt="" class="">
                  <p class="">Корзина</p>
              </button>
              
            </div>

        </div>

    </div>
</template>

<style scoped>

</style>