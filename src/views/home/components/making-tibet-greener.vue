<template>
    <div class="making-tibet-greener">
        <div class="container">
            <div class="left">
                <img src="https://static.wixstatic.com/media/9f945e_92a435b99eb640938de59fc52a0f2ba6~mv2.png/v1/fill/w_640,h_418,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Collection%20Page%20-%20The%20Quadra%20Collection%20(1).png"
                    alt="">
            </div>
            <div class="right">
                <h2-title text="MAKING TIBET GREENER" />
                <p class="p-style">We made it our mission to bring yak wool to the global market to improve the livelihood
                    of the herders and offer the fashion industry a new sustainable material.</p>
                <p class="p-style">When you partner with Shokay, you’re choosing to give families in the Tibetan region
                    fresh opportunities whilst paving the way for a more sustainable future in fashion.</p>
                <home-button text="VIEW OUR IMPACT" />
            </div>
        </div>
    </div>
</template>

<script setup>
import H2Title from './title-h2.vue';
import HomeButton from '../../../components/button/index.vue';
</script>

<style lang="less" scoped>
.making-tibet-greener {
    height: 40rem;

    .container {
        max-width: 1024px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 100%;
        
        .left,
        .right {
            flex: 1;
            height: 100%;
        }

        .left {
            display: flex;
            align-items: center;

            img {
                width: 51.2rem;
                height: 33.4rem;
            }
        }

        .right {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding-left: 4.5rem;

            &>h2 {
                margin-bottom: 2rem;
            }

            &>button {
                margin-top: 2rem;
            }
        }
    }

    @media screen and (max-width: 979px) {
        height: auto;

        .container {
            flex-direction: column;

            .left {
                width: 100%;

                img {
                    width: 100% !important;
                    height: 100% !important;
                }
            }
            .right {
                padding: 6vw 3vw 3vw;
                // & > h2 {
                //     margin: 5vw 0;
                // }

                & > p {
                    margin-top: 3rem;
                }

                & > button {
                    margin: 3rem 0;
                }
            }
        }
    }
}
</style>