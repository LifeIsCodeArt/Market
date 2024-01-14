<script setup>
import {defineProps} from "vue";
const props = defineProps({
  item:{
    type: Object,
    default: () => {}
  }
})
</script>


<template>
    <li class="text-[#333333] text-[14px] font-semibold font-roboto leading-normal my-[15px] flex">
       <p class="pr-[5px] text-[#4174CB]">{{item.id}}. </p>  {{item.text}}
        <RouterLink :to="item.path" v-if="item.path" class="pl-[5px] text-[#4174CB] text-[14px] font-bold font-roboto leading-normal">
             "Оформить заказ"
        </RouterLink>
    </li>
</template>

<style scoped>

</style>