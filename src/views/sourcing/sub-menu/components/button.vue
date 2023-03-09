<template>
    <button class="reserve">
        <a :href="href">
            {{ text }}
        </a>
    </button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    href: {
        type: String,
        default: "javascript:;"
    }
})
</script>

<style lang="less" scoped>
.reserve {
    width: 12rem;
    height: 4rem;
    background-color: #686663;
    position: absolute;
    bottom: 2rem;
    right: 1.5rem;
    cursor: pointer;

    &>a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
        font-weight: 300;
        line-height: 4rem;
    }
}
</style>