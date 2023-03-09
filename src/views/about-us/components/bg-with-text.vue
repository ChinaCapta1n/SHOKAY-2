<template>
    <div class="background-and-text">
        <p class="text" v-html="text"></p>
        <p class="sub-text" v-html="subText"></p>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    subText: {
        type: String,
        default: ""
    },
    textFontSize: {
        type: String,
        default: "2.5rem"
    }
})
</script>

<style lang="less" scoped>
.background-and-text {
    height: 18.8rem;
    // background-color: #756F63;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .text {
        font-size: v-bind(textFontSize);
        font-family: futura-light;
        // transform: translateY(-25%);
    }

    .sub-text {
        // transform: translateY(75%);
        color: var(--quaternary-color);
    }
}
</style>