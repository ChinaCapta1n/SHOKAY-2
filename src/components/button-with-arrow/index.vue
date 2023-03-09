<template>
    <button class="button-with-arrow">
        {{ text }} <img src="../../assets/images/icons/arrow-right.svg" alt="">
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
.button-with-arrow {
    height: 5.4rem;
    background-color: #fff;
    border: 1px solid #938B6A;
    cursor: pointer;
    color: #D4B89A;
    width: fit-content;
    padding: 0 2rem;
    transition: .2s all;

    &:hover {
        background-color: #908766;
    }

    &>img {
        width: 1.2rem;
        height: 1.2rem;
        transform: translate(0.2rem, 0.1rem);
    }
}
</style>