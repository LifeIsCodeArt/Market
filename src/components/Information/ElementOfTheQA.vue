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

    <details class="mb-[25px] cursor-pointer">

        <summary class="text-[18px] leading-normal font-normal font-roboto text-[#4174CB] ">
            {{item.label}}
        </summary>

        <p class="text-[18px] leading-normal font-normal font-roboto text-[#333333] h-[112px] py-[16px] pl-[18px] pr-[8px]">
            {{item.text}}
        </p>

    </details>

</template>

<style scoped>

</style>