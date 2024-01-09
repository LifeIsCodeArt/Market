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
  <img :src="item.link" alt="" class="">
</template>

<style scoped>

</style>