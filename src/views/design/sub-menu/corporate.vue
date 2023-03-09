<template>
    <div class="design cmomon-style">
        <div class="container">
            <title-and-text title="Corporate"
                text="Shokay has worked with many corporations to design unique gifts with a social impact. We work with corporations to customize products with their corporate logos, colors, and patterns, and design in accordance to their  budget requirements." />
            <cards :data="data" />
        </div>
    </div>
</template>

<script setup>
import TitleAndText from './../components/title-and-text.vue';
import Cards from './../components/card.vue';

const data = [
    {
        "id": 0,
        "title": "BMW",
        "subtitle": "68 PIECE CULTURAL HERITAGE COLLECTION",
        "text": "Shokay worked closely with BMW China on a CSR project to highlight the cultural heritage of Yushu, a Tibetan area in Qinghai province. We designed and produced over 68 pieces, inspired by the colors and patterns of the local communities. The products were sold on BMW China's e-commerce platforms and also through Shokay channels. 1% of the revenues were dedicated back to the local community.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_a685ad0817564f94ab62fd0a57331b05~mv2.png/v1/fill/w_532,h_422,al_c,lg_1,q_85,enc_auto/Image-empty-state.png"
    },
    {
        "id": 1,
        "title": "Pudong Development Bank",
        "subtitle": "GIFTS FOR HIGH-NET WORTH CLIENTS",
        "text": "Shokay worked with Pudong Development Bank for several years to develop unique products for their high-net worth clients. We used their corporate colors and symbols to design shawls that had a luxurious aesthetic.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_c2df65a0c8054564bbbb86d2c5cb7230~mv2.png/v1/fill/w_546,h_434,al_c,lg_1,q_85,enc_auto/Image-empty-state.png"
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