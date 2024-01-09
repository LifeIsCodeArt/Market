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
  <div class="relative h-[220px] w-[220px] rounded">
    <img :src="item.link" alt="" class="rounded">
    <div class="absolute bottom-0 bg-[#4174CB] z-[9] flex items-center justify-center w-full h-[47px] opacity-80 rounded-b">
      <p class="font-roboto font-semibold leading-normal text-[18px] z-[10] text-white">
        {{item.label}}
      </p>
    </div>
  </div>

</template>

<style scoped>

</style>