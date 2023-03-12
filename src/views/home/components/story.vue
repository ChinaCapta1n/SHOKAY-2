<template>
    <div class="story">
        <div class="left">
            <div class="container">
                <h2-title text="THE HAPPIER THE YAK,THE COMFIER THE KNITS" />
                <h3 class="sub-title">The story of the yak is one that we love to tell here at Shokay</h3>
                <p class="p-style">Tibetan yaks are semi-nomadic, graze on natural and pollution-free grass and have the
                    space
                    to roam and explore!</p>
                <p class="p-style">Most importantly, the herding process involves no cruelty, caging or unnatural treatment
                    towards these beautiful animals.</p>
            </div>
        </div>
        <div class="right">
            <img src="https://static.wixstatic.com/media/9f945e_f797924a9f7b4731a289bb7d8ecc2f35~mv2.jpg/v1/fill/w_1089,h_601,al_bl,q_85,usm_0.66_1.00_0.01,enc_auto/9f945e_f797924a9f7b4731a289bb7d8ecc2f35~mv2.jpg"
                alt="">
        </div>
    </div>
</template>

<script setup>
import H2Title from './title-h2.vue';
</script>

<style lang="less" scoped>
.story {
    display: flex;
    height: 48.1rem;
    margin-top: 12rem;
    margin-bottom: 10rem;

    .left,
    .right {
        flex: 1;
    }

    .left {
        background-color: #EFF1F5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .container {
            width: 42rem;
            margin: 0 auto;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            text-align: center;

            .sub-title {
                font-size: 2rem;
                font-family: venir-light;
                color: var(--quaternary-color);
                font-weight: 400;
            }
        }
    }

    .right {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media screen and (max-width: 979px) {
        flex-direction: column-reverse;
        margin-top: 3rem;
        height: auto;
        margin-bottom: 0;

        .left {
            .container {
                width: 100%;
                padding: 4vw;

                & > h2 {
                    margin: 3vw 0 5rem;
                    line-height: 1.8;
                }

                .sub-title {
                    line-height: 1.8;
                    margin-bottom: 2rem;
                }

                & > p {
                    margin-bottom: 2rem;
                }
            }
        }
    }
}
</style>