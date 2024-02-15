<script setup>
import {ref} from "vue";

const props = defineProps({
    item:{
        type: Object,
        default: () => {}
    }
})

const showText = ref(false)


</script>


<template>
    <div class="relative h-auto w-[270px] mb-[50px]">

        <img :src="item.link" alt="" class="h-[350px] w-[250px] bg-auto">

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