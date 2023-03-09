<template>
    <h2 class="h2">
        {{ text }}
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
.h2 {
    font-size: 3rem;
    font-family: font-7;
    color: var(--quaternary-color);
    position: relative;

    &::before {
        content: "";
        position: absolute;
        bottom: -2rem;
        left: 50%;
        width: 15rem;
        height: 1px;
        transform: translateX(-50%);
        background-color: var(--quaternary-color);
    }
}
</style>