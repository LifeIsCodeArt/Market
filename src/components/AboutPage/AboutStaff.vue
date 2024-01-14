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
    <div class="relative h-[250px] w-[220px]">

        <div class="absolute bg-stripe text-white font-roboto font-semibold w-auto h-[27px] py-[4px] pl-[8px] pr-[10px] z-[10] mt-[10px]">
            {{item.label}}
        </div>

        <img :src="item.link" alt="" class="h-[200px] w-[250px] bg-auto">

        <div class="absolute hidden">
             {{item.text}}
        </div>
    </div>
</template>

<style scoped>
  .bg-stripe{
    border-radius: 0px 2px 2px 0px;
    background: linear-gradient(93deg, rgba(0, 62, 168, 0.70) -8.03%, rgba(0, 94, 255, 0.30) 108.72%);
    backdrop-filter: blur(4px);
  }
</style>