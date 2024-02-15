<script setup>

import {useInformationStore} from '../stores/informationStore.js'

import ElementOfTheList from '../components/Information/ElementOfTheList.vue'
import SportJournal from '../components/Information/sportJournal.vue'

import {computed, ref} from "vue";


const store = useInformationStore()

const retailListItem = computed(() => store.InformationListItems)
const informationJournalItems = computed(() => store.InformationJournalItems)

const activeSection = ref(1)

</script>


<template>
    <div class="w-[1440px] min-h-[1070px] mx-auto my-0 pl-[130px]">
        <div class="mt-[20px] mb-[24px]">

        </div>

        <div class="flex mr-[20px]">

            <ul class="w-[300px] h-auto">
                <ElementOfTheList v-for="item in retailListItem" :key="item.id" :item="item" @click="activeSection = item.id" :class="{'disabled:cursor-not-allowed  pointer-events-none text-white bg-[#4174CB] border-r-2 border-r-[#FFB745]':activeSection === item.id,}"/>
            </ul>

            <div class="ml-[20px] w-[860px]">

                <section v-if="activeSection === 1" class="flex flex-col">

                    <h1 class="font-normal font-roboto text-[32px] text-[#333333] leading-normal mb-[50px]">
                        Маркетинговые материалы
                    </h1>

                    <div class="flex justify-between flex-wrap">

                        <SportJournal v-for="item in informationJournalItems" :item="item" :key="item.id"></SportJournal>

                    </div>

                </section>

                <section v-if="activeSection === 2" class="flex flex-col">

                    <h1 class="font-normal font-roboto text-[32px] text-[#333333] leading-normal">
                        Политика конфиденциальности и защиты персональных данных
                    </h1>

                </section>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>