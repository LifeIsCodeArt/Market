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
    <li class="">
        <img :src="item.link" alt="" class="w-[180px] h-[255px]">
    </li>
</template>

<style scoped>

</style>