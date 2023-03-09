<template>
    <div class="the-fiber-of-change">
        <div class="container">
            <div class="left">
                <h2>THE FIBRES OF CHANGE</h2>
                <p class="lines">
                    90% of the world's yak population lives within Western China - 3500 meters high in the Tibetan region.
                </p>
                <p class="p-style">
                    Yaks are an essential asset to the Tibetan people, but this did not translate into cash income in the
                    past. Shokay made it our mission to bring yak wool to the global market to improve the lives of the
                    herders and offer the fashion industry a new sustainable material.
                </p>
            </div>
            <div class="right">
                <img src="https://static.wixstatic.com/media/ec2beb_96d102d84fc545f8aa2af94d8d66471e~mv2.png/v1/crop/x_202,y_0,w_672,h_726/fill/w_480,h_519,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Is%20Yak%20the%20new%20cashmere.png"
                    alt="">
            </div>
        </div>

        <button-with-arrow text="EXPLORE FIBER PROPERTIES" />
    </div>
</template>

<script setup>
import ButtonWithArrow from '@/components/button-with-arrow/index.vue';

</script>

<style lang="less" scoped>
.the-fiber-of-change {
    padding: 10rem 0;
    background-color: #EAE5D4;
    display: flex;
    flex-direction: column;

    .container {
        max-width: 95rem;
        margin: 0 auto;
        display: flex;
        // align-items: center;

        .left {
            display: flex;
            height: 100%;
            padding-top: 2rem;
            flex-direction: column;
            justify-content: space-evenly;

            padding-right: 10rem;

            &>h2 {
                font-size: 2.5rem;
                color: #504A49;
                text-align: center;
                margin-bottom: 2rem;
            }

            .lines {
                padding: 3rem 0;
                border-top: 2px solid #000;
                border-bottom: 2px solid #000;
                font-size: 2.5rem;
                color: var(--quaternary-color);
                font-family: futura-light;
                margin-bottom: 4rem;
            }

            .p-style {
                text-align: left;
            }
        }

        .right {
            width: 38.4rem;
            height: 41.5rem;

            img {
                width: inherit;
            }
        }
    }

    &>button {
        align-self: center;
        margin-top: 8rem;
    }
}
</style>