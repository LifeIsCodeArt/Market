<script setup>
import {defineProps} from "vue";
const props = defineProps({
  link:{
    type: Object,
    default: () => {}
  }

})
</script>


<template>
  <img :src="link.link" alt="">
</template>

<style scoped>

</style>