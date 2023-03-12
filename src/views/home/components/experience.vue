<template>
    <div class="experience">
        <div class="container">
            <h2-title text="YAK WOOL ISN’T JUST A FIBRE; IT’S AN EXPERIENCE" />
            <p class="p-style">Shokay’s natural, premium yak wool offers a buttery soft hand feel, unparalleled warmth and
                durable quality. Most importantly, it is more sustainable than goat cashmere or sheep wool. </p>
            <p class="p-style">Discover the Shokay Yak Wool Knitwear Collections, an exclusive twist on classic wardrobe
                essentials. </p>

            <home-button text="DISCOVER KNITWEAR" />
        </div>
    </div>
</template>

<script setup>
import H2Title from './title-h2.vue';
import HomeButton from '../../../components/button/index.vue';

</script>

<style lang="less" scoped>
.experience {
    height: 43.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;
    padding-bottom: 4rem;

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 71rem;
        margin: 0 auto;
    }

    @media screen and (max-width: 979px) {
        padding: 5vw 3vw;
        height: auto;
        .container {
            width: 100%;
            padding: 0 4vw;

            h2 {
                text-align: center;
                line-height: 1.8;
                margin-bottom: 4rem;
            }

            p {
                margin-bottom: 3rem;
            }
            
            & > button {
                margin: 2rem 0 6rem;
            }
        }
    }
}
</style>