<template>
    <div class="design cmomon-style">
        <div class="container">
            <title-and-text title="Artist"
                text="Shokay has worked with many artists to create unique pieces that tell a story. We have an artist-in-residence program where we invite artists to visit our Tibetan communities, and through their artistic lens engage with the richness of the Tibetan cultural heritage and environment. " />
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
        "title": "Jasper Huang",
        "subtitle": "DIGITAL PRINT ARTIST SHAWLS",
        "text": "Jasper Huang is a renown Taiwanese artist & fashion designer known for his eye for colors and patterns. Shokay and Jasper collaborated on a collection of 6 artist shawls, each with patterns corresponding to auspicious symbols of Chinese heritage.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_816087f1d1564de2840a77da096be7a3~mv2.jpg/v1/fill/w_669,h_531,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"
    },
    {
        "id": 1,
        "title": "Echo",
        "subtitle": "DIGITAL PRINT ARTIST SHAWLS",
        "text": "Echo is a Shanghainese artist who uses alcohol ink to create vibrant, fluid images. She choose two of her pieces, 'Pure Love Drives Fear Away' and 'Peace' to collaborate with Shokay on a series of yak/cotton shawls.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_be7d95732ee84eab8e313aa3c86db462~mv2.png/v1/fill/w_627,h_498,al_c,q_85,enc_auto/Image-empty-state.png"
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

    @media screen and (max-width: 979px) {
        .container {
            padding: 4vw;
        }
    }
}
</style>