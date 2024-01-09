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
  <img :src="props.link" alt="">
</template>

<style scoped>

</style>