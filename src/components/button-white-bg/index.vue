<template>
    <button class="button-white-bg">
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
.button-white-bg {
    width: 11.6rem;
    height: 3.9rem;
    border: 1px solid var(--quaternary-color);
    cursor: pointer;
    color: #9E9679;
    transition: .3s all;

    &:hover {
        color: #fff;
        background-color: var(--septenary-color);
    }
}
</style>