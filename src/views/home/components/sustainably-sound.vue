<template>
    <div class="sustainably-sound">
        <div class="container">
            <div class="left">
                <img src="https://static.wixstatic.com/media/ec2beb_96d102d84fc545f8aa2af94d8d66471e~mv2.png/v1/crop/x_193,y_0,w_689,h_726/fill/w_550,h_579,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec2beb_96d102d84fc545f8aa2af94d8d66471e~mv2.png"
                    alt="">
            </div>
            <div class="right">
                <h2-title text="SUSTAINABLY SOUND" />
                <p class="p-style">Choosing yak wool allows you to meet your consumers' growing demands for sustainable
                    practices.</p>
                <p class="p-style">If you’re a fashion brand looking to take a more sustainable approach, yak wool covers
                    all
                    winter fashion and accessories.</p>
                <p class="p-style">From cosy winter knits to weather-defending outerwear, yak wool guarantees comfort and
                    longevity with every wear.</p>

                <home-button text="FIND OUT MORE" />
            </div>
        </div>
    </div>
</template>

<script setup>
import H2Title from './title-h2.vue';
import HomeButton from '../../../components/button/index.vue';
</script>

<style lang="less" scoped>
.sustainably-sound {
    padding-top: 10rem;

    .container {
        display: flex;
        max-width: 102.4rem;
        margin: 0 auto;

        .left,
        .right {
            flex: 1;
        }

        .left {
            width: 44rem;
            height: 46.3rem;

            img {
                width: inherit;
                height: inherit;
                object-fit: cover;
            }
        }

        .right {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding: 0 2rem;
        }
    }

    @media screen and (max-width: 979px) {
        padding-top: 0;
            .container {
                flex-direction: column;
                padding: 5vw;
                .left, .right {
                    width: 100%;
                }

                .left {
                    height: auto;
                    img {
                        object-fit: cover;
                    }
                }

                .right {
                    & > h2 {
                        margin: 3vw 0 6rem;
                    }

                    & > p {
                        margin-bottom: 3rem;
                    }
                }
            }
        }
}
</style>