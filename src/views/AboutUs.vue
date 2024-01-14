<script setup>

 import AboutDetails from '../components/AboutPage/AboutDetails.vue'
 import AboutStaff from '../components/AboutPage/AboutStaff.vue'
 import AboutComment from '../components/AboutPage/AboutComment.vue'
 import AboutCertificate from '../components/AboutPage/AboutCertificate.vue'

 import TheFooterItem from '../components/TheFooterIcon.vue'

 import {useAboutItemsStore} from '../stores/aboutStore.js'

 import {computed} from "vue";

 const store = useAboutItemsStore()

 const detailItems = computed(() => store.detailItems)
 const adressItems = computed(() => store.adressItems)


 const aboutIcons = computed(() => store.aboutIcons)
 const aboutCertificates = computed(() => store.aboutCertificates)

 const aboutStaff = computed(() => store.aboutStaff)

 const aboutClients = computed(() => store.clientsFeedback.filter(el => el.id<4))
 const aboutPartners = computed(() => store.partnersFeedback.filter(el => el.id<4))
  console.log(aboutClients)



</script>


<template>
  <div class="w-[1440px] my-0 mx-auto px-[130px] mt-[20px]">
      <section class="">

          <div class="">Головна/Про Нас</div>

          <h1 class="font-normal font-bold font-roboto text-[32px] text-[#333333] leading-normal mt-[24px] mb-[28px]">
              О нас
          </h1>

          <div class="flex flex-col mb-[32px]">

              <h2 class="font-normal font-bold font-roboto text-[20px] text-[#4174CB] leading-normal mb-[20px] ">
                  Реквизиты
              </h2>

              <div class="flex">

                  <ul class="flex flex-col justify-between">
                      <AboutDetails v-for="detail in detailItems" :item="detail" :key="detail"/>
                  </ul>

                  <ul class="flex flex-col justify-between ml-[34px]">
                      <AboutDetails v-for="adress in adressItems" :item="adress" :key="adress"/>
                  </ul>

              </div>

          </div>
      </section>

      <section class="flex justify-between">

          <div class="flex flex-col pb-[20px]">

              <div class="flex flex-col">

                  <h2 class="font-normal font-bold font-roboto text-[20px] text-[#4174CB] leading-normal mb-[16px]">
                      Адресс
                  </h2>

                  <p class="font-normal font-bold font-roboto text-[18px] text-[#333333] leading-normal">
                      Екатеринбург, ул Волховская 20
                  </p>

              </div>

              <div class="flex flex-col my-[32px]">

                  <h2 class="font-normal font-bold font-roboto text-[20px] text-[#4174CB] leading-normal mb-[16px]">
                      Телефон
                  </h2>

                  <div class="flex flex-col">

                      <p class="font-normal font-bold font-roboto text-[18px] text-[#333333] leading-normal">
                          +7 (904) 766-18-43
                      </p>

                      <p class="font-normal font-bold font-roboto text-[18px] text-[#333333] leading-normal">
                          +7 (904) 766-18-43
                      </p>

                  </div>
              </div>

              <div class="flex flex-col">

                  <h2 class="font-normal font-bold font-roboto text-[20px] text-[#4174CB] leading-normal mb-[16px]">
                      Cоц.сети
                  </h2>

                  <ul class="flex justify-between items-center">
                    <TheFooterItem v-for="icon in aboutIcons" :link="icon" :key="icon.id" class="h-[28px] w-[28px]"/>
                  </ul>
              </div>

          </div>

          <div class="min-w-[680px] min-h-[300px]">
              <img src="../assets/images/about-map/Map.png" alt="" class="">
          </div>

      </section>

      <section class="flex flex-col mt-[48px]">

          <h2 class=" font-normal font-roboto text-[32px] text-[#333333] leading-normal mb-[32px]">
              Вакансии
          </h2>

          <ul class="flex justify-between items-center">
              <AboutStaff v-for="item in aboutStaff" :item="item" :key="item.id"/>
          </ul>
      </section>

      <section class="flex flex-col">

          <h2 class=" font-normal font-roboto text-[32px] text-[#333333] leading-normal mb-[32px]">
              Отзыв наших парнеров
          </h2>

          <ul class="mt-[32px] mb-[24px] flex">
              <AboutComment v-for="item in aboutPartners" :item="item" :key="item.id"/>
          </ul>

          <div class="">

          </div>

      </section>


      <section class="flex flex-col">

          <h2 class=" font-normal font-roboto text-[32px] text-[#333333] leading-normal mb-[32px]">
              Отзыв наших клиентов
          </h2>

          <ul class="mt-[32px] mb-[24px] flex">
              <AboutComment v-for="item in aboutClients" :item="item" :key="item.id"/>
          </ul>

          <div class="">

          </div>

      </section>

      <section class="">

          <div class="font-normal font-roboto text-[32px] text-[#333333] leading-normal mb-[32px]">
              О компании
          </div>

          <div class="flex">

              <div class="w-[580px] pb-[14px]">
                Наша компания является надежным поставщиком спортивных товаров для профессионального и любительского спорта с 2010 года.
                Мы являемся прямыми дистрибьюторами фабрик из разных стран и официальными представителями брендов, поэтому реализуем продукцию по лучшим ценам, всегда предлагаем широкий ассортимент продукции. У нас более 3000 категорий.
                Мы работаем по трём основным направлениям: розничные продажи, оптовые продажи, государственные закупки.
                За 10 лет мы накопили огромный опыт в оптовом направлении. Сотрудники компании квалифицированно окажут любую консультацию, касающуюся предлагаемого товара. Мы заинтересованы в развитии наших партнеров и предлагаем прогрессивную систему скидок.
                География нашей работы распространяется по всей России и СНГ: мы готовы оказать помощь в доставке в любой населенный пункт нашей страны.

              </div>

              <div class="ml-[20px]">
                <img src="../assets/images/about-store/about_store.png" alt="" class="">
              </div>

          </div>

      </section>

      <section class="my-[100px]">
          <div class="flex flex-col">

              <div class="font-normal font-roboto text-[32px] text-[#333333] leading-normal mb-[32px]">
                  Наши сертификаты
              </div>

              <ul class="flex justify-between">
                <AboutCertificate v-for="item in aboutCertificates" :item="item" :key="item.id"/>
              </ul>

          </div>
      </section>

  </div>

</template>

<style scoped>

</style>