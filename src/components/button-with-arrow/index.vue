<template>
    <button class="button-with-arrow">
        {{ text }} <svg-icon color="#908766" />
    </button>
</template>

<script setup>
import svgIcon from "../svg-icon/index.vue";

defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<style lang="less" scoped>
.button-with-arrow {
    height: 5.4rem;
    background-color: #fff;
    border: 1px solid #938B6A;
    cursor: pointer;
    color: #9e9679;
    width: fit-content;
    padding: 0 2rem;
    transition: .2s all;

    &:hover {
        background-color: #908766;
        color: #fff;
        svg {
            fill: #fff;
        }
    }

    &>svg {
        width: 1.2rem;
        height: 1.2rem;
        transform: translate(0.2rem, 0.1rem);
    }
}
</style>