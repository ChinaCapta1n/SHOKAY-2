<template>
    <div class="common-banner">
        <img :src="src" alt="">
        <h2>{{ text }}</h2>
    </div>
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    height: {
        type: String,
        default: "100%"
    },
    text: {
        type: String,
        required: true
    }
})
</script>

<style lang="less" scoped>
.common-banner {
    height: v-bind(height);
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &>h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 6rem;
        color: #fff;
        font-family: font-6;
        font-weight: 300;
    }
}
</style>