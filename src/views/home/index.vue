<template>
    <section class="home">
        <!-- banner -->
        <home-banner :height="windowSize > 979 ? '13.7rem' : '16.2rem'" text="CONSIDERED EVERY THREAD OF THE WAY" imgUrl="../../src/assets/images/home/1.webp" />

        <!-- meet the yak -->
        <meet-the-yak />

        <!-- frank -->
        <frank />

        <!-- wintry day -->
        <home-banner :height="windowSize > 979 ? '16.5rem' : '22.3rem'"  text="It is my warmest jumper in my closet and my go-to piece on a cold wintry day"
            imgUrl="https://static.wixstatic.com/media/9f945e_ca0ea22ff93c416aa840f5a94ad0b8b1~mv2.png/v1/fill/w_1000,h_126,al_t,q_85,enc_auto/9f945e_ca0ea22ff93c416aa840f5a94ad0b8b1~mv2.png" />

        <!-- experience -->
        <Experience />

        <!-- sustainability -->
        <home-banner :height="windowSize > 979 ? '17.5rem' : '26.2rem'" text="In Europe, up to 60% of shoppers consider a brand’s sustainability practice before purchasing."
            imgUrl="https://static.wixstatic.com/media/9f945e_10c89e9ad952433fa57c5f3c5f3554ad~mv2.jpg/v1/fill/w_1929,h_275,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9f945e_10c89e9ad952433fa57c5f3c5f3554ad~mv2.jpg" />

        <!-- sustainably sound -->
        <sustainably-sound />

        <!-- story -->
        <story />

        <!-- yak wool -->
        <yak-wool />

        <!-- cards -->
        <cards />

        <!-- making tibet greener -->
        <making-tibet-greener />

        <!-- exclusivity -->
        <exclusivity />
    </section>
</template>

<script setup>
import HomeBanner from './components/banner.vue';
import MeetTheYak from './components/meet-the-yak.vue';
import Frank from './components/frank.vue';
import Experience from './components/experience.vue';
import SustainablySound from './components/sustainably-sound.vue';
import Story from './components/story.vue';
import YakWool from './components/yak-wool.vue';
import Cards from './components/cards.vue';
import MakingTibetGreener from './components/making-tibet-greener.vue';
import Exclusivity from './components/exclusivity.vue';

import windowSize from '@/utils/getViewPort.js';

</script>

<style lang="less" scoped>
.home {}
</style>