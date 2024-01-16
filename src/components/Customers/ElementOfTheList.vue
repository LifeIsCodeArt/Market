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
    <li class="h-[48px] text-[#333333] mb-[12px] hover:bg-[#4174CB] hover:text-white hover:duration-500 flex items-center border-r-2 border-r-gray-200">
        <button class="text-[18px] font-roboto font-normal pl-[16px] px-[8px] pr-[8px] flex items-center">
            {{item.label}}
        </button>
    </li>
</template>

<style scoped>

</style>