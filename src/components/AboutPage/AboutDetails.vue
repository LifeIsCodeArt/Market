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
  <li class="flex items-center">
    <span v-show="item.label" class="font-roboto font-semibold leading-normal text-[16px] text-[#333333]">{{item.label}}</span>
    <p class="font-roboto font-thin leading-normal text-[14px] text-[#333333] pl-[4px]">{{item.text}}</p>
  </li>
</template>

<style scoped>

</style>