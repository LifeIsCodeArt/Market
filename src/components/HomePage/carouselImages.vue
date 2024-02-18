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



    <img :src="item.path" alt="/" class="h-[400px] w-full absolute">



</template>

<style scoped>

</style>