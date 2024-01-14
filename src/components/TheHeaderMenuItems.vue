<script setup>
import {defineProps, ref} from "vue";
const props = defineProps({
  item:{
    type: Object,
    default: () => {}
  }

})
</script>


<template>
    <li class="font-roboto font-thin, font-[#333] text-[14px] mr-[30px]">
      <RouterLink :to="item.link">{{item.text}}</RouterLink>
    </li>
</template>

<style scoped>

</style>