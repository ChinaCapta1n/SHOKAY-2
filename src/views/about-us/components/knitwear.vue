<template>
    <div class="knitwear">
        <div class="container">
            <div class="cards">
                <div class="card" v-for="card in data" :key="card.id">
                    <p>
                        {{ card.text }}
                    </p>
                </div>
            </div>

            <TitleWithUnderline text="KNITWEAR THAT WILL LAST A LIFETIME" />
            <p class="p-style">
                Here at Shokay, we provide yak wool that is sustainable, soft, warm, and incredibly versatile. <br>
                Despite the unmatched qualities, most brands still need to familiarise themselves with how to use the fibre.
            </p>
            <p class="p-style">That’s why we offer as much involvement as you prefer.</p>
            <p class="p-style">Whether you would rather a beautifully designed knit collection ready to stock your shelves,
                or to simply source sustainable yak wool, we do it all.</p>

            <about-button text="FIND OUT MORE" />
        </div>
    </div>
</template>

<script setup>
import TitleWithUnderline from '@/components/title-h2-with-underline/index.vue';
import AboutButton from '@/components/button/index.vue';

const data = [
    {
        "id": "0",
        "text":
            "I bought my first yak sweater because I Ioved the sustainability story. To my surprise, it had the touch of cashmere but stays in shape even better. I have now bought multiple sweaters, plus it's more affordable than cashmere!"
    },
    {
        "id": "1",
        "text":
            "We have traveled with Shokay to see their sourcing sites and are impressed by how Shokay has built a transparent supply chain, and how the local herders are an integral part of it."
    },
    {
        "id": "2",
        "text":
            "Shokay products last very well. I'm still using the same shawl that I bought 10 years ago. I loved it so much that I bought multiple scarves to gift my family for Christmas. I know they are still wearing their scarves too!"
    }
]
</script>

<style lang="less" scoped>
.knitwear {
    padding: 10rem 0;

    .container {
        max-width: 95rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        &>h2 {
            align-self: center;
            margin-top: 10rem;
            margin-bottom: 4rem;
        }

        .cards {
            display: flex;
            justify-content: space-evenly;

            .card {
                width: 26.7rem;
                height: 32.1rem;
                position: relative;
                background-color: #756F63;

                &>p {
                    font-size: 1.6rem;
                    color: #fff;
                    position: absolute;
                    width: 80%;
                    height: 80%;
                    top: 10%;
                    left: 10%;
                    line-height: 1.5;
                }
            }
        }

        &>p {
            margin-bottom: 3rem;
        }

        &>button {
            align-self: center;
        }
    }
}
</style>