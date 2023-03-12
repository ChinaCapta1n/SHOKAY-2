<template>
    <div class="title-and-text">
        <h2>
            {{ title }}
        </h2>
        <p class="p-style">
            {{ text }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>

<style lang="less" scoped>
.title-and-text {
    &>h2 {
        font-size: 3.2rem;
        color: var(--quinary-color);
        font-family: font-5;
        font-weight: 300;
        margin: 5rem 0 4rem;
    }

    &>p {
        text-align: left;
        line-height: 1.8;
    }

    @media screen and (max-width: 979px) {

    }
}
</style>