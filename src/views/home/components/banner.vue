<template>
    <div class="banner">
        <img :src="imgUrl" alt="">
        <h2 class="banner-title">{{ text }}</h2>
    </div>
</template>

<script setup>
defineProps({
    height: {
        tpye: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
})
</script>

<style lang="less" scoped>
.banner {
    height: v-bind(height);
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .banner-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3.5rem;
        color: #fff;
        font-family: font-6;
        font-weight: 400;
        text-align: center;
        width: 68.5rem;

        @media screen and (max-width: 979px) {
            width: 100%;
            font-size: 2.6rem;
            padding: 0 4vw;
        }
    }
}
</style>