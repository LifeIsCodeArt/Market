<script setup>
const props = defineProps({
    item:{
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <div class="flex flex-col">

        <div class="flex">

            <div class="">

                <img :src="item.image" alt="" class="">

            </div>

            <div class="">

                <p class="">
                    Артикул: <span class="">{{item.article}}</span>
                </p>

                <div class="flex flex-col mt-[16px] mb-[24px]">

                    <p class="">{{item.name}}</p>

                    <p class="mt-[16px]">{{item.description}}</p>

                </div>

                <div class="flex flex-col">

                    <div class="">
                        
                        <p class="">Color</p>
                        
                        <ul class="flex">

                           <li class="" v-for=""></li>


                        </ul>
                    </div>

                </div>

                <div class=""></div>
                <div class=""></div>
                <div class=""></div>
                <div class=""></div>
                <div class=""></div>

            </div>

            <div class="flex flex-col">

                <div class="">



                </div>

            </div>

        </div>

        <div class="">



        </div>

    </div>

</template>

<style scoped>

</style>