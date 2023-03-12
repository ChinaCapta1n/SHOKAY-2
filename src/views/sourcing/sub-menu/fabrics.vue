<template>
    <div class="fabrics">
        <div class="container">
            <h2 class="common-h2-styling">
                Fabrics
            </h2>
            <p class="p-style">
                Shokay partners with fabric mills to develop unique fabrics made from premium yak down and other sustainable
                materials.
            </p>

            <div class="boxes">
                <div class="box" v-for="item in data" :key="item.id">
                    <div class="img-box">
                        <img :src="item.imgUrl" alt="">
                        <div class="header-box">
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.subTitle }}</p>
                        </div>
                    </div>
                    <div class="text">
                        <p class="p-style">
                            {{ item.text }}
                        </p>
                    </div>

                    <reserve-button text="Reserve" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ReserveButton from './components/button.vue';

const data = [
    {
        "id": 0,
        "title": "Shambala",
        "subTitle": "100% Yak",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_ee53fc4f4f9b4759b9bd3b14efc90f46~mv2.jpg/v1/fill/w_383,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a582b8_ee53fc4f4f9b4759b9bd3b14efc90f46~mv2.jpg",
        "text": "The Shambala Series, our most luxurious collection, uses the finest yak down from each year’s harvest. The fabric is ultra-soft, does not pill, and provides ultimate warmth at sub-zero temperatures."
    },
    {
        "id": 1,
        "title": "Himalayan Double-Faced Fabric",
        "subTitle": "50% Yak/ 50% Wool",
        "imgUrl": "https://static.wixstatic.com/media/a582b8_73ab12d2af82482f9dfcf2b23e957049~mv2.jpg/v1/fill/w_383,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a582b8_73ab12d2af82482f9dfcf2b23e957049~mv2.jpg",
        "text": "The Himalayan Series combines two beautiful natural fibers, yak and wool. The resilience of wool and the softness of yak creates a durable and easy to wear fabric."
    }
]

</script>

<style lang="less" scoped>
.fabrics {
    .container {
        max-width: 97rem;
        margin: 0 auto;

        &>h2 {
            padding: 4rem 0 2rem 6rem;
        }

        &>p {
            margin-bottom: 4rem;
            text-align: left;
            padding-left: 6rem;
        }

        .boxes {
            display: flex;
            flex-wrap: wrap;

            .box {
                width: 30.6rem;
                height: 57.9rem;
                margin-right: 3rem;
                box-shadow: 0px 0px 1.5px rgb(203, 169, 169);
                position: relative;

                .img-box {
                    position: relative;

                    img {
                        width: 100%;
                        height: 22.6rem;
                        object-fit: cover;
                    }

                    .header-box {
                        position: absolute;
                        height: 11.3rem;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background-color: rgba(255, 255, 255, .5);
                        padding: 2rem 1rem;

                        &>h2 {
                            font-size: 2rem;
                            color: #323232;
                            margin-bottom: 1rem;
                        }

                        &>p {
                            font-size: 1.5rem;
                            color: #000;
                            font-weight: 300;
                        }
                    }
                }

                .text {
                    padding: 2.5rem 1.5rem;

                    &>p {
                        text-align: left;
                        line-height: 2;
                        color: #000;
                        font-weight: 300;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 979px) {
        .container {
            .boxes {
                justify-content: center;
                .box {
                    margin: 0 1.5rem;
                    height: auto;
                    .text {
                        padding-bottom: 10rem;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 701px) {
        .container {
            .boxes {
                .box {
                    width: 80%;
                    margin-bottom: 2rem;
                }
            }
        }
    }
}
</style>