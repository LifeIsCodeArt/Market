<script setup>
  import TheImage from '../components/TheCommonIcon.vue'
  import HomePageTemplates from '../components/HomePage/HomePageTemplates.vue'
  import HomePageBenefits from '../components/HomePage/HomePageBenefits.vue'

  import {useHomePageItemsStore} from '../stores/HomePageStore.js'
  import {computed} from "vue";

  const store = useHomePageItemsStore()
  const pageTemplates = computed(()=> store.homePageTemplates)
  const pageBenefits = computed(()=> store.homePageBenefits)
  const pageCompanies = computed(()=> store.homePageCompanies)
</script>

<template >
    <div class="w-[1440px] px-[130px] h-auto mt-[15px] my-0 mx-auto">

        <section class="">
            <img src="../assets/images/homepage-carousel/image_1.png" alt="" class="w-full">
        </section>


        <section class="my-[100px]">

            <h1 class="mb-[48px] text-center font-roboto font-normal text-[32px] text-[#333333]">
                Наш ассортимент
            </h1>

            <div class="grid grid-cols-5 gap-4">
                <HomePageTemplates v-for="item in pageTemplates" :item="item" :key="item.id"
                />
            </div>

        </section>


        <section class="">

            <h1 class="mb-[48px] text-center font-roboto font-normal text-[32px] text-[#333333]">
                Популярные товары
            </h1>
            
            <div class="h-[424px]"> COMING SOON...</div>
        </section>



        <section class="my-[100px] grid grid-cols-4 gap-8">
                <HomePageBenefits v-for="item in pageBenefits" :item="item" :key="item.id"/>
        </section>


        <section class="">
            <div class="px-[133.5] h-[272px] pt-[40px] pb-[30px] flex flex-col items-center bg-[#8FAFE5]">

                <h1 class="text-center font-roboto font-bold leading-normal text-[48px] text-[#153E84]">
                    Оптовый прайс на почту
                </h1>

                <p class="mt-[24px] mb-[34px] text-white font-roboto font-thin leading-normal text-[24px]">В случае заинтересованности готовы направить вам прайс-лист с оптовыми ценами</p>

                <div class="flex w-[500px] h-[40px]">
                    <input type="text" placeholder="Введите Ваш E-mail" class="w-[360px] pl-[16px] flex items-center border border-blue-400 focus:outline-none">
                    <button class="flex justify-center items-center w-[104px] bg-[#4174CB] text-white rounded">Найти</button>
                </div>
            </div>
        </section>

        <section class="mt-[136px] mb-[108px]  grid grid-cols-3 place-items-center gap-32">
            <TheImage v-for="item in pageCompanies" :link="item" :key="item.id" class="w-[100px] h-[50px] mb-[100px] justify-center"/>
        </section>

    </div>

</template>
