<template>
    <div class="design cmomon-style">
        <div class="container">
            <title-and-text title="Design"
                text="The fashion & textiles industry has only started to use yak wool in recent years. Because very few mills offer high quality yarns & fabrics made from yak wool, many designers are less familiar with what can be made with the material. Shokay has an in-house design team that can work closely with brands & designers to develop products that meet both their quality and budget requirements." />
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
        "title": "Zhan Fang 绽放",
        "subtitle": "HAND KNITTED ACCESSORIES",
        "text": "Zhan Fang is a Chinese e-commerce brand that features colorful, relaxed styles for women. Shokay & Zhan Fang collaborated on a collection of colorful, hand-knitted accessories made in Qinghai and Chongming to match their apparel.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_be098ca514c648c1a9620ed6b46408ea~mv2.png/v1/fill/w_575,h_457,al_c,q_85,enc_auto/Image-empty-state.png"
    },
    {
        "id": 1,
        "title": "Bonobos",
        "subtitle": "UPW YAK YARNS FOR KNITWEAR COLLECTION",
        "text": "For FW19, Bonobos launched a knitwear collection using yak yarns spun by UPW, using yak fibers from Shokay. The sweaters were very well received and are now a staple in Bonobos' knitwear line.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_753032bd9c39499a8b5a656cc7fb3090~mv2.png/v1/fill/w_402,h_319,al_c,lg_1,q_85,enc_auto/Image-empty-state.png"
    },
    {
        "id": 2,
        "title": "Sweaty Betty",
        "subtitle": "UPW YAK YARNS FOR KNITWEAR COLLECTION",
        "text": "For FW20, Sweaty Betty launched a small knitwear collection using yak yarns spun by UPW, using yak fibers from Shokay.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_bbb4b837d17d4f86ad20c5c87769656a~mv2.jpg/v1/fill/w_669,h_531,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"
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