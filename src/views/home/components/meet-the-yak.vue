<template>
    <div class="meet-the-yak container">
        <H2Title text="CHANGING THE FUTURE OF FASHION" />
        <h3 class="title-desc">Meet the yak</h3>
        <p>Here at Shokay, we are passionate about the incredible qualities of yak wool. So much so, we dedicate our
            time to helping fashion brands up their sustainability game and provide a knitwear collection that is soft,
            warm and durable.</p>
        <p>he best part? We take the whole process of supplying the yak wool off your hands. From sourcing the wool to
            designing the product line, you are assured that the end product is a beautifully soft ethical collection
            that your consumer will love.</p>
        <p>And together, we can drive sustainable change in fashion.</p>
        <home-button text="FIND OUT MORE"></home-button>
    </div>
</template>

<script setup>
import H2Title from './title-h2.vue';
import HomeButton from '../../../components/button/index.vue';
</script>

<style lang="less" scoped>
.container {
    max-width: 70rem;
    margin: 0 auto;
}

.meet-the-yak {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6.5rem 0;


    &>p {
        font-size: 1.5rem;
        color: var(--quaternary-color);
        font-family: avenir-light;
        line-height: 1.6;
        text-align: center;
        margin-top: 3rem;
    }

    .title-desc {
        font-size: 2rem;
        font-family: font-5;
        color: var(--quaternary-color);
        margin-top: 4rem;
        font-weight: 300;
    }

    .home-button {
        margin-top: 4rem;
    }
}
</style>