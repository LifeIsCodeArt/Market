<script setup>
import TheFooterItem from './TheCommonIcon.vue'
import {useFooterItemsStore} from '../stores/FooterStore.js'
import {computed} from "vue";

const store = useFooterItemsStore()
const storeItems = computed(() => store.footerItems)
const storeCards = computed(() => store.footerCards)
</script>


<template>
    <div class="w-[1440px] h-[510px] mx-auto my-0 bg-[#153E84] px-[130px] py-[32px] flex flex-col text-white">

        <div class="flex border-b-2 pb-[32px]">

            <div class="flex flex-col">
                <h2 class="font-orbitron font-normal text-[25px] leading-normal">
                    GreaTime
                </h2>

                <div class="flex flex-col mt-[40px] mb-[24px] font-roboto text-[14px] font-normal text-[#E0E0E0]">
                    <p class="mb-[8px]">
                      © 2024 “Gream Time”
                    </p>

                    <p class="font-roboto text-[14px] font-normal text-[#E0E0E0]">
                      Политика конфиденциальности
                    </p>

                </div>

                <div class="flex justify-between">
                    <TheFooterItem v-for="icon in storeItems" :link="icon" :key="icon.id" class="h-[28px] w-[28px]"/>
                </div>
            </div>

            <div class="ml-[40px] flex">

              <div class="flex flex-col">

                 <div class="flex flex-col h-auto">

                    <h2 class="font-roboto font-normal leading-normal text-[20px] text-[#F2F2F2] mb-[24px]">
                        Информация
                    </h2>

                    <ul class="flex flex-col text-[#BDBDBD]">

                      <li class="font-roboto font-normal leading-normal text-[14px]">
                      <RouterLink to="/Information">О компании</RouterLink>
                      </li>

                      <li class="font-roboto font-normal leading-normal text-[14px] mt-[8px]">
                         Маркетинговые материалы
                      </li>

                      <li class="font-roboto font-normal leading-normal text-[14px] my-[8px]">
                         Контакты
                      </li>

                      <li class="font-roboto font-normal leading-normal text-[14px]">
                         Карта сайта
                      </li>

                    </ul>

                 </div>

                <div class="flex flex-col pt-[16px] ">

                    <h2 class="font-roboto font-normal leading-normal text-[20px] text-[#F2F2F2] mb-[24px]">
                        Контакты
                    </h2>

                    <ul class="flex flex-col text-[#BDBDBD]">

                        <li class="font-roboto font-normal leading-normal text-[14px]">
                           +7 (904) 766-18-43
                        </li>

                        <li class="font-roboto font-normal leading-normal text-[14px] my-[8px]">
                           +7 (912) 213-70-82
                        </li>

                        <li class="font-roboto font-normal leading-normal text-[14px]">
                          Екатеринбург, ул Волховская 20
                        </li>

                    </ul>

                </div>

              </div>

              <div class="flex flex-col h-auto w-[120px] ml-[88px] mr-[92px]">

                      <h2 class="font-roboto font-normal leading-normal text-[20px] text-[#F2F2F2] mb-[24px]">
                          Розничным покупателям
                      </h2>

                      <ul class="flex flex-col text-[#BDBDBD]">

                          <li class="font-roboto font-normal leading-normal text-[14px]">
                      О компании
                          </li>

                          <li class="font-roboto font-normal leading-normal text-[14px] mt-[8px]">
                      Маркетинговые материалы
                          </li>

                          <li class="font-roboto font-normal leading-normal text-[14px] my-[8px]">
                      Контакты
                          </li>

                          <li class="font-roboto font-normal leading-normal text-[14px]">
                      Карта сайта
                          </li>

                      </ul>

              </div>


              <div class="flex flex-col h-auto w-[120px] mr-[53px]">

                <h2 class="font-roboto font-normal leading-normal text-[20px] text-[#F2F2F2] mb-[24px]">
                  Оптовым покупателям
                </h2>

                <ul class="flex flex-col text-[#BDBDBD]">

                  <li class="font-roboto font-normal leading-normal text-[14px]">
                    Как сделать заказ
                  </li>

                  <li class="font-roboto font-normal leading-normal text-[14px] mt-[8px]">
                    Доставка и оплата
                  </li>

                  <li class="font-roboto font-normal leading-normal text-[14px] my-[8px]">
                    Возврат
                  </li>

                  <li class="font-roboto font-normal leading-normal text-[14px]">
                    Вопрос-ответ
                  </li>

                </ul>

              </div>

              <div class="flex flex-col h-auto">

                <h2 class="font-roboto font-normal leading-normal text-[20px] text-[#F2F2F2] mb-[24px]">
                  Оптовым покупателям
                </h2>

                <ul class="flex flex-col text-[#BDBDBD]">

                  <li class="font-roboto font-normal leading-normal text-[14px]">
                    Как сделать заказ
                  </li>

                  <li class="font-roboto font-normal leading-normal text-[14px] mt-[8px]">
                    Доставка и оплата
                  </li>

                  <li class="font-roboto font-normal leading-normal text-[14px] my-[8px]">
                    Возврат
                  </li>

                  <li class="font-roboto font-normal leading-normal text-[14px]">
                    Вопрос-ответ
                  </li>

                </ul>

              </div>

            </div>

          <div class="flex flex-col w-[216px]">
            <p class="font-roboto font-normal leading-normal text-[14px] text-[#E0E0E0] mb-[16px]">
              Вы можете оформить заказ по телефону или получить ответы на любые интересующие вас вопросы.
            </p>

            <p class="font-roboto font-normal leading-normal text-[14px] text-[#E0E0E0]">
              Есть вопрос? Напишите нам<br>
              письмо <br>
              или воспользуйтесь формой<br>
              <span class="text-[#FFB745]">обратной связи</span>
            </p>

          </div>
        </div>

        <div class="pt-[32px] flex justify-between">

          <p class="font-roboto font-normal leading-normal text-[14px] text-[#E0E0E0]">
              Интернет-магазин «GreaTime» - спортивные товары по всей Украине
          </p>

          <div class="flex">

              <p class="font-roboto font-normal leading-normal text-[14px] text-white">
                  Инн:  667027205771
              </p>

              <p class="ml-[8px] font-roboto font-normal leading-normal text-[14px] text-white">
                  ОГРН: 310667022200016
              </p>

          </div>

          <div class=" w-[274px] flex justify-between items-center">
              <TheFooterItem v-for="icon in storeCards" :link="icon" :key="icon.id" class="h-[20px] w-[64px]"/>
          </div>
        </div>
    </div>
</template>

<style scoped>

</style>