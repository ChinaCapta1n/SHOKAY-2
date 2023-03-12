<template>
    <div class="cards" v-for="item in data" :key="item.id">
        <div class="left">
            <img :src="item.imgUrl" alt="">
        </div>
        <div class="right">
            <div class="wrapper">
                <h2>{{ item.title }}</h2>
                <h3>{{ item.subtitle }}</h3>
                <p class="p-style">{{ item.text }}</p>
                <button-design text="more" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonDesign from '@/components/button-white-bg/index.vue';

defineProps({
    data: {
        type: Array,
        required: true
    }
})
</script>

<style lang="less" scoped>
.cards {
    margin-top: 5rem;
    display: flex;

    .left {
        width: 53.5rem;
        height: 42.5rem;

        img {
            width: inherit;
            height: 100%;
            object-fit: cover;
        }
    }

    .right {
        .wrapper {
            height: 100%;
            padding: 3rem 4rem;

            &>h2 {
                font-size: 2.6rem;
                font-weight: 300;
                color: var(--quaternary-color);
                margin-bottom: 1rem;
            }

            &>h3 {
                font-size: 1.4rem;
                color: var(--quinary-color);
                font-weight: 300;
                margin-bottom: 2rem;
            }

            &>p {
                text-align: left;
            }

            &>button {
                margin-top: 1rem;
            }
        }
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;

        .left {
            width: 100%;
            height: auto;
        }
    }
}
</style>