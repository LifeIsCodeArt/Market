<script setup>
import {defineProps, ref} from "vue";
const props = defineProps({
  link:{
    type: Object,
    default: () => {}
  }

})

const transition = ref(false)

const copified = () =>{

    transition.value = !transition.value


}

const active = () =>  {
    setTimeout(copified,250)
    setTimeout(copified,1500)
}
</script>


<template>


        <button class="relative" @click="active()">
            <Transition
                    enter-from-class="opacity-0"
                    enter-leave-class="opacity-100"
                    enter-active-class="duration-500"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                    leave-active-class="duration-500">

                <img v-show="!transition" :src="link.link" alt="" >

            </Transition>

            <Transition
            :enter-from-class="link.id%2 ? 'opacity-0 -translate-x-[500px]' : 'opacity-0 translate-x-[1500px]'"
            enter-active-class="duration-1000"
            leave-from-class="opacity-100 translate-x-0 "
            :leave-to-class="link.id%2 ? 'opacity-0 -translate-y-[500px]' : 'opacity-0 translate-y-[500px]'"
            leave-active-class="duration-1000"
            >
                <p v-if="transition" class="text-blue-700 font-bold absolute top-0"> Copied!</p>
            </Transition>
        </button>


</template>

<style scoped>

</style>