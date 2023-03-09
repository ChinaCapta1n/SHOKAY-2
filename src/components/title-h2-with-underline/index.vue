<template>
    <h2 class="title-with-underline" v-html="text">
    </h2>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<style lang="less" scoped>
.title-with-underline {
    font-size: 2.5rem;
    color: var(--quinary-color);
    font-family: font-5;
    font-weight: 100;
    position: relative;
    width: fit-content;

    &::before {
        content: "";
        position: absolute;
        bottom: -1rem;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #000;
    }
}
</style>