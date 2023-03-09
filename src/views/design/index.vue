<template>
    <div class="design cmomon-style">
        <div class="container">
            <title-and-text title="Fashion"
                text="Shokay has collaborated with many fashion brands to launch their collections using yak wool. Our product development and production experience across the entire textile supply chain offers designers insight on what can be made with the material. Shokay also has an in-house design team that can work closely with brands & designers to develop products that meet both their quality and budget requirements." />
            <cards :data="data" />
        </div>
    </div>
</template>

<script setup>
import TitleAndText from './components/title-and-text.vue';
import Cards from './components/card.vue';

const data = [
    {
        "id": 0,
        "title": "Anagram",
        "subtitle": "Fashion",
        "text": "Shokay provided Anagram with double-faced fabric in 50% yak/ 50% wool for their outwear collection. The fabric is extra warm and has a beautiful drape.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_4cb2ac25c6054f12aebc9e9427d363d4~mv2.png/v1/fill/w_669,h_531,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.png"
    },
    {
        "id": 1,
        "title": "Arete",
        "subtitle": "Fashion",
        "text": "Arete, a Shanghai based designer label, worked with Shokay across multiple seasons to develop a knitwear collection using 50% yak/ 50% wool.",
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_b1d3c5995e284c32b997e488e26f9244~mv2.jpeg/v1/fill/w_556,h_442,al_c,q_80,enc_auto/Image-empty-state.jpeg"
    }
]

</script>

<style lang="less" scoped>
.cmomon-style {
    .container {
        max-width: 89.5rem;
        margin: 0 auto;
    }

    margin-bottom: 3rem;
}
</style>