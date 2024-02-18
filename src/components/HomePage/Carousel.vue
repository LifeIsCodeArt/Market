<script setup>

    import Images from '@/components/HomePage/carouselImages.vue'
    import {useHomePageItemsStore} from '@/stores/HomePageStore.js'
    import {computed, ref} from "vue";

    const currentSlide = ref(1)

    const prevValue = ref(Number)

    const slideBack = () => {

        prevValue.value = currentSlide.value

        currentSlide.value = currentSlide.value - 1

        console.log(currentSlide.value)
    }

    const slideFurther = () => {

        prevValue.value = currentSlide.value

        currentSlide.value = currentSlide.value + 1

        console.log(currentSlide.value)
    }

    const images = computed(() => useHomePageItemsStore().carouselImages)

    const imagesTotal = images.value.length

</script>


<template>

    <section class="">

        <div class="relative w-[1180px] h-[400px] overflow-hidden">

            <button class="absolute w-[48px] h-[48px] rounded-[50%] top-[50%] left-1 bg-white flex justify-center items-center z-[10]" @click="slideBack()"
                    :class="currentSlide === 1 ? 'cursor-not-allowed pointer-events-none bg-gray-300' : 'cursor-pointer' ">

                <img src="@/assets/icons/homepage-carousel/short_left.png" alt="">

            </button>

            <TransitionGroup
                    :enter-from-class="prevValue < currentSlide ? 'translate-x-[1050px]' : '-translate-x-[1050px]'"
                    :enter-leave-class="prevValue < currentSlide ? 'translate-x-[1050px]' : '-translate-x-[1050px]'"
                    enter-active-class="duration-[2000ms]"
                    :leave-from-class="'translate-x-0'"
                    :leave-to-class="prevValue < currentSlide ? '-translate-x-[850px]' : 'translate-x-[850px]'"
                    leave-active-class="duration-[2000ms]">
            <Images v-show="currentSlide === item.id" v-for="item in images" :item="item" :key="item.id" :class="currentSlide === item.id ? 'z-[2]' : 'z-[1]' "/>
            </TransitionGroup>

            <button class="absolute w-[48px] h-[48px] rounded-[50%] top-[50%] right-1 bg-white flex justify-center items-center z-[10]" @click="slideFurther()"
                    :class="currentSlide === imagesTotal ? 'cursor-not-allowed pointer-events-none bg-gray-300' : 'cursor-pointer' ">

                <img src="@/assets/icons/homepage-carousel/short_right.png" alt="" class="">

            </button>

        </div>

    </section>

</template>

<style scoped>

</style>