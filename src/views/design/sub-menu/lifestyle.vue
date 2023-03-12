<template>
    <div class="design cmomon-style">
        <div class="container">
            <title-and-text title="Lifestyle"
                text="Shokay has worked with many lifestyle brands to incorporate yak wool in their collections. With our in-house design team, we can support brands from concept development all the way to final production. The softness and warmth of yak wool coupled with Shokay's impact story presents unique, beautiful products that are sustainably made." />
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
        "title": "Edward Chiu",
        "subtitle": "MATCHING JEWELED BROOCHES WITH WINTER SHAWLS",
        "text": "Edward Chiu is a boutique jewelry designer based in Hong Kong. Shokay & Edward Chiu presented a joint collection featuring jeweled brooches from Edward Chiu and shawls from Shokay.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_372b5c977ed14415a773f2f1d7bb7b42~mv2.jpg/v1/fill/w_669,h_531,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"
    },
    {
        "id": 1,
        "title": "Six Senses",
        "subtitle": "YAK/COTTON EYE MASKS",
        "text": "Shokay helped Six Senses, a luxury resort hotel group, to design an eyemask for their sleep program. They wanted a sustainable product with a premium feel.",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_99b9422d6647425b889f25ff3e0c5226~mv2.png/v1/fill/w_548,h_436,al_c,lg_1,q_85,enc_auto/Image-empty-state.png"
    },
    {
        "id": 2,
        "title": "Studio Yoggi",
        "subtitle": "KNIT TOP WITH HAND KNIT YAK",
        "text": "Studio Yoggi is a popular yoga brand in Japan that cares about wholistic sustainability. Shokay and Studio Yoggi jointly launched a yak/cotton pullover and hand knit yak, which together supported their 'Giving Back' campaign.",
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_cfc754fcd4734ff4876ce9f0c0f9338b~mv2.jpg/v1/fill/w_532,h_422,al_c,lg_1,q_80,enc_auto/Image-empty-state.jpg"
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