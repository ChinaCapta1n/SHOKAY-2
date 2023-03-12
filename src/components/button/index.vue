<template>
    <button class="home-button">
        {{ text }}
    </button>
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
.home-button {
    width: 20.3rem;
    height: 5.3rem;
    background-color: var(--septenary-color);
    color: #fff;
    font-size: 1.8rem;
    transition: .2s all;
    font-family: venir-light;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }
}
</style>