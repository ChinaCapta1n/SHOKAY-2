<template>
    <div class="about-us">
        <!-- banner -->
        <banner height="42.6rem" text="Why Yak?"
            src="https://static.wixstatic.com/media/a582b8_220e2cf689d3461f87dcc5ecc1a2ef48~mv2.jpg/v1/fill/w_2053,h_533,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a582b8_220e2cf689d3461f87dcc5ecc1a2ef48~mv2.jpg" />

        <!-- back to beginning -->
        <back-to-beginning />

        <!-- born -->
        <born />

        <!-- background with text -->
        <BackgroundWithText text="BUT DON’T JUST TAKE IT FROM US"
            subText="Worldwide customers who have tried Shokay’s yak sweaters have said"
            style="color: #5C4942; line-height: 2; font-size: 2.5rem;" />

        <!-- wintry day -->
        <BackgroundWithText style="background-color: #756F63; color: #fff; line-height: 2; font-size: 2.5rem;"
            text="IT IS MY WARMEST JUMPER IN MY CLOSET AND <br /> MY GO-TO PIECE ON A COLD WINTRY DAY" />

        <!-- knitwear -->
        <Knitwear />

        <!-- GRAPHIC -->
        <BackgroundWithText text="GRAPHIC" style="background-color: #756F63; color: #fff;" />

        <!-- meet the team -->
        <MeetTheTeam :data="data1" />

        <!-- THE FIBRES OF CHANGE -->
        <TheFibresOfChange />

        <!-- CEO -->
        <ceo />

        <!-- purchases -->
        <Purchase />

        <!-- quality coms first -->
        <MeetTheTeam :data="data2" />

        <!-- get ahead -->
        <BackgroundWithText text="WHY SHOULD YOU GET AHEAD OF <br /> THE YAK WOOL GAME?"
            style="background-color: #756F63; color: #fff; font-size: 19.2rem; line-height: 1.6" />

        <!-- supply chain -->
        <SupplyChain />
    </div>
</template>

<script setup>
import Banner from '@/components/banner/index.vue';
import BackToBeginning from './components/back-to-beginning.vue';
import Born from './components/born.vue';
import BackgroundWithText from './components/bg-with-text.vue';
import Knitwear from './components/knitwear.vue';
import MeetTheTeam from './components/title-image-para.vue';
import TheFibresOfChange from './components/the-fiber-of-change.vue';
import Ceo from './components/ceo.vue';
import Purchase from './components/purchases.vue';
import SupplyChain from './components/supply-chain.vue';

const data1 = [
    {
        "id": 0,
        "src": "https://static.wixstatic.com/media/9f945e_10c89e9ad952433fa57c5f3c5f3554ad~mv2.jpg/v1/crop/x_0,y_0,w_2206,h_1869/fill/w_458,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/flash4jpg_10830662343_o.jpg",
        "title": "MEET THE TEAM <br /> THE YAK",
        "text": [
            "Yaks are naturally sustainable, low-carbon emission animals compared to sheep and goats due to their gentler grazing habits.",
            "Each year, as spring turns to summer, each yak provides 100g of fine wool fibres.",
            "The yak’s fine wool is carefully hand combed by Tibetan herders from the neck and shoulders and thanks to their fibre naturally moulting, the animals are never harmed during this process.",
            "After all, the happier the yak, the cosier the knitwear."
        ]
    }
]

const data2 = [
    {
        "id": 0,
        "src": "https://static.wixstatic.com/media/a1b0fd_252b1518eb09482ba6517f7fa60c2fcb~mv2.jpg/v1/crop/x_476,y_0,w_391,h_466/fill/w_469,h_559,al_c,lg_1,q_80,enc_auto/shokay-tibetan-yak-1.jpg",
        "title": "QUALITY COMES FIRST",
        "text": [
            "We ensure the Shokay quality is maintained through our expert herder training, the best care practices for our animals, and rigorous quality control.",
            "Most importantly, we continuously strive to make every step in our supply chain as traceable as possible.",
            "And, of course, collaborating with Shokay also ensures you do your part for the planet. Take a look at our Grassland Conservation Program and find out how your brand can leave a mark."
        ]
    }
]

</script>

<style lang="less" scoped>
.about-us {
    .container {
        max-width: 95rem;
        margin: 0 auto;
    }
}
</style>