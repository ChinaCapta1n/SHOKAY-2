<template>
    <div class="numbers">
        <div class="container">
            <div class="top">
                <div class="box" v-for="item in data" :key="item.id">
                    <h2>{{ item.title }}</h2>
                    <p class="p-style" v-html="item.text"></p>
                </div>
            </div>
            <div class="bottom">
                <p class="p-style">
                    Yaks are naturally sustainable animals. Studies have shown that yaks are low carbon emission animals due
                    to their efficient digestive systems, emitting fewer greenhouse gases, including methane, carbon
                    dioxide, and nitrous oxide. The nomadic lifestyle of yaks with frequent seasonable migration prevents
                    overgrazing in one area. Their diet of grass and shrubby vegetation also contributes to positive
                    environmental impact and align with grassland conservation initiatives as yaks graze and feed gently
                    without pulling up roots.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        "id": 0,
        "title": "14 Million",
        "text": "<p>There are 14 million yaks in the<br /> <p>world. For every 5 cashmere<br /> goats there is one yak.</p>"
    },
    {
        "id": 1,
        "title": "90%",
        "text": "<p>90% of the world's yak<br /> population lives on the Tibetan<br /> Plateau</p>"
    },
    {
        "id": 2,
        "title": "3500m",
        "text": "<p>Yaks generally live on the<br /> Tibetan plateau at altitudes<br /> over 3500m</p>"
    }
]
</script>

<style lang="less" scoped>
.numbers {
    .container {
        max-width: 74.7rem;
        margin: 0 auto;

        .top {
            display: flex;
            justify-content: space-between;
            padding: 4rem 0;

            .box {
                text-align: center;

                &>h2 {
                    color: #000;
                    font-size: 2.4rem;
                    margin-bottom: 1rem;
                }
            }
        }

        .bottom {
            margin-top: 4rem;
            margin-bottom: 2rem;

            &>p {
                text-align: left;
                line-height: 1.8;
                padding: 0 5vw;
            }
        }
    }

    @media screen and (max-width: 979px) {
        .container {
            .top {
                flex-direction: column;
                .box {
                    margin-bottom: 4rem;
                    &:nth-last-child(1) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>