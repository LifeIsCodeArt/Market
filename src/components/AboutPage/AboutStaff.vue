<script setup>
import {defineProps, ref} from "vue";
const props = defineProps({
  item:{
    type: Object,
    default: () => {}
  }
})

const modal = ref(false)
</script>

<template>
    <div class="relative h-[250px] w-[220px] " @mouseenter="modal = !modal" @mouseleave="modal = !modal">

        <div class="absolute bg-stripe text-white font-roboto font-semibold w-auto h-[27px] py-[4px] pl-[8px] pr-[10px] z-[10] mt-[10px]"
             v-show="modal">
            {{item.label}}
        </div>

        <Transition name="fade"
                enter-from-class="opacity-0"
                enter-leave-class="opacity-100"
                enter-active-class=" duration-500"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                leave-active-class=" duration-500">
            <img :src="item.link" alt="" class="h-[200px] w-[250px] bg-auto" v-show="modal">
        </Transition>

        <Transition name="dade"
                    :enter-from-class="item.id%2 ?'opacity-100 translate-x-[500px] -translate-y-[500px]' : 'opacity-100 -translate-x-[500px] -translate-y-[500px]'"
                    :enter-leave-class="item.id%2 ?'opacity-0 translate-x-[500px] -translate-y-[500px]' : 'opacity-0 -translate-x-[500px] -translate-y-[500px]'"
                    enter-active-class=" duration-500"
                    :leave-from-class=" item.id%2 ?'opacity-0 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-0 translate-y-0'"
                    :leave-to-class=" item.id%2 ?'opacity-0 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-0 translate-y-0'"
                    leave-active-class=" duration-500">
            <div class="absolute top-0 left-0 text-[14px] flex items-center justify-center" v-show="!modal" :class="!modal ? 'text-black select-none' : ' hidden' ">
                {{item.text}}
            </div>
        </Transition>
    </div>
</template>

<style scoped>
  .bg-stripe{
    border-radius: 0 2px 2px 0;
    background: linear-gradient(93deg, rgba(0, 62, 168, 0.70) -8.03%, rgba(0, 94, 255, 0.30) 108.72%);
    backdrop-filter: blur(4px);
  }


</style>