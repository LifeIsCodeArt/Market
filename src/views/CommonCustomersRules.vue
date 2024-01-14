<script setup>
    import {useCustomersStore} from '../stores/customersStore.js'

    import ElementOfTheList from '../components/Customers/ElementOfTheList.vue'
    import ElementOfTheRules from '../components/Customers/ElementOfTheRules.vue'

    import {computed, ref} from "vue";


    const store = useCustomersStore()

    const retailListItem = computed(() => store.commonCustomersListItems)
    const customersListRulesItem = computed(() => store.commonCustomersListRules)

    const activeSection = ref(1)

</script>


<template>
    <div class="w-[1440px] min-h-[1070px] mx-auto my-0 px-[130px]">
        <div class="mt-[20px] mb-[24px]">

        </div>

        <div class="flex mr-[20px]">

            <ul class="w-[300px]">
            <ElementOfTheList v-for="item in retailListItem" :key="item.id" :item="item" @click="activeSection = item.id"/>
            </ul>

            <div class="">

              <section v-if="activeSection === 1" class="flex flex-col">

                  <h1 class="font-normal font-roboto text-[32px] text-[#333333] leading-normal">
                      Как сделать заказ
                  </h1>

                  <p class="mt-[24px] mb-[17.5px] text-[#4174CB] text-[18px] font-semibold font-roboto leading-normal">Заказ можно оформить в несколько шагов, ничего сложного.</p>

                  <ol class="">
                      <ElementOfTheRules v-for="item in customersListRulesItem" :key="item.id" :item="item" />
                  </ol>

              </section>

              <section v-if="activeSection === 2" class="flex flex-col">

                  <div class="">

                      <h1 class="font-normal font-roboto text-[32px] text-[#333333] leading-normal">
                          Доставка
                      </h1>

                      <p class="mt-[24px] mb-[16px] text-[#4174CB] text-[18px] font-semibold font-roboto leading-normal">Доставка осуществляется по всей Украине.</p>

                      <p class="w-[800px] text-[#333333] text-[14px] font-normal font-roboto leading-normal">
                          Работа над вашим заказом начинается автоматически после совершения покупки на сайте .........
                          Посылка передается выбранной Вами транспортной компании, которая осуществляет доставку покупок до двери или пвз.
                          После отправки вы получите e-mail c трек-номером и информацией об отправлении.
                          На любые вопросы, касающиеся доставки, мы с удовольствием ответим на .....
                      </p>

                  </div>

                  <div class="">

                      <h1 class="font-normal font-roboto text-[32px] text-[#333333] leading-normal">
                          Оплата
                      </h1>

                      <p class="mt-[24px] mb-[16px] text-[#4174CB] text-[18px] font-semibold font-roboto leading-normal">Банковской картой</p>

                      <p class="w-[800px] text-[#333333] text-[14px] font-normal font-roboto leading-normal">
                          При оформлении заказа выберите Онлайн оплата на сайте. Оплата товара происходит по полной предоплате. К оплате принимаются банковские карты, у которых 16, 18, 19 цифр в номере:
                          VISA, MasterCard, American Express<br><br>

                          После оплаты заказа вам на почту придет электронный чек. Все электронные чеки хранятся в личном кабинете в разделе.
                      </p>

                  </div>

              </section>

              <section v-if="activeSection === 3" class="ml-[30px] flex flex-col">

                <div class="">
                      <h1 class="font-normal font-roboto text-[32px] text-[#333333] leading-normal">
                          Как сделать заказ
                      </h1>

                      <p class="mt-[24px] mb-[17.5px] text-[#4174CB] text-[18px] font-semibold font-roboto leading-normal">Если вам не подошли один или несколько товаров, вы можете вернуть их в течение 14 дней с момента покупки.
                        Это очень просто:</p>

                      <ol class="list-disc pl-[20px] w-[800px]">

                          <li class="pb-[12px] text-[#333333] text-[14px] font-semibold font-roboto leading-normal">
                              Заполните онлайн форму на возврат и укажите причину
                          </li>

                          <li class="text-[#333333] text-[14px] font-semibold font-roboto leading-normal">
                              Дождитесь ответа одного из наших специалистов. В письме вы получите трек-номер для возврата.
                          </li>

                          <li class="py-[12px] text-[#333333] text-[14px] font-semibold font-roboto leading-normal">
                              Товар нужно будет отнести в ближайшее отделение СДЭКа и назвать оператору трек-номер из письма. Не забудьте положить все вещи в пакет или коробку, чтобы они доехали до нас в сохранности.
                          </li>

                          <li class="text-[#333333] text-[14px] font-semibold font-roboto leading-normal">
                              После того, как товары приедут к нам, мы проверим их наличие и вернем деньги за покупку.
                          </li>

                      </ol>

                      <div class="my-[32px]">

                          <h1 class="text-[#4174CB] font-bold font-roboto text-[20px] leading-normal mb-[16px]">
                              Информация о заказе
                          </h1>

                          <form action="" class="grid grid-cols-2 gap-4">

                            <input type="text" class="" placeholder="Имя">

                            <input type="number" class="" placeholder="Фамилия">

                            <input type="text" class="" placeholder="Телефон">

                            <input type="email" class="" placeholder="E-Mail">

                            <input type="text" class="" placeholder="Номер заказа">

                            <input type="date" class="text-[#BDBDBD]" placeholder="Дата">

                          </form>
                        
                      </div>

                      <div class="flex flex-col">

                          <h1 class="text-[#4174CB] font-bold font-roboto text-[20px] leading-normal mb-[16px]">
                              Информация о заказе
                          </h1>

                          <form action="" class="grid grid-cols-2 gap-4">

                              <input type="text" class="" placeholder="Имя">

                              <input type="text" class="" placeholder="Фамилия">

                              <input type="text" class="" placeholder="Телефон">

                          </form>

                      </div>
                  
                      <div class="my-[32px]">

                          <h1 class="text-[#4174CB] font-bold font-roboto text-[20px] leading-normal mb-[16px]">
                              Информация для возврата средств
                          </h1>

                          <input type="text" class="w-[416px]" placeholder="Номер заказа">

                      </div>

                      <div class="">

                          <h1 class="text-[#4174CB] font-bold font-roboto text-[20px] leading-normal mb-[16px]">
                              Причины возврата
                          </h1>

                          <div class="flex flex-col">

                              <div class="flex">

                                  <input type="radio" class="mr-[8px]">

                                  <p class="text-[#333333] text-[14px] font-normal font-roboto leading-normal">
                                      Получен товар ненадлежащего качества
                                  </p>

                              </div>

                              <div class="flex my-[10px]">

                                  <input type="radio" class="mr-[8px]">

                                  <p class="text-[#333333] text-[14px] font-normal font-roboto leading-normal">
                                      Получен не тот (ошибочный) товар
                                  </p>

                              </div>

                              <div class="flex">

                                  <input type="radio" class="mr-[8px]">

                                  <p class="text-[#333333] text-[14px] font-normal font-roboto leading-normal">
                                      Другое (другая причина), пожалуйста укажите/приложите подробности
                                  </p>

                              </div>

                          </div>

                          <div class="mt-[32px] mb-[16px]">

                              <h1 class="text-[#4174CB] font-bold font-roboto text-[20px] leading-normal mb-[16px]">
                                  Причины возврата
                              </h1>

                              <textarea placeholder="Описание дефектов...." name="" id="">

                              </textarea>
                          </div>
                      </div>

                </div>
              </section>

              <section v-if="activeSection === 4" class="flex flex-col">

                  <h1 class="font-normal font-roboto text-[32px] text-[#333333] leading-normal">
                      Как сделать заказ
                  </h1>

                  <p class="mt-[24px] mb-[17.5px] text-[#4174CB] text-[18px] font-semibold font-roboto leading-normal">Заказ можно оформить в несколько шагов, ничего сложного.</p>

                  <ol class="">
                    <ElementOfTheRules v-for="item in customersListRulesItem" :key="item.id" :item="item" />
                  </ol>

              </section>

              <section v-if="activeSection === 1" class="flex flex-col">

                  <h1 class="font-normal font-roboto text-[32px] text-[#333333] leading-normal">
                      Как сделать заказ
                  </h1>

                  <p class="mt-[24px] mb-[17.5px] text-[#4174CB] text-[18px] font-semibold font-roboto leading-normal">Заказ можно оформить в несколько шагов, ничего сложного.</p>

                  <ol class="">
                      <ElementOfTheRules v-for="item in customersListRulesItem" :key="item.id" :item="item" />
                  </ol>

              </section>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>