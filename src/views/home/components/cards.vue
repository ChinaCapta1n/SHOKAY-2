<template>
    <div class="cards">
        <div class="container">
            <div class="card" v-for="card in data" :key="card.id">
                <img :src="card.imgUrl" alt="">
                <div class="box">
                    <h2>{{ card.title }}</h2>
                    <p>
                        {{ card.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        "id": 0,
        "imgUrl": "https://static.wixstatic.com/media/9f945e_cc95dcf5aaf44dd68bd61af490b2ea7f~mv2.jpeg/v1/crop/x_518,y_0,w_629,h_900/fill/w_383,h_548,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1fedb48e3g71713142d3194512e0743c.jpeg",
        "title": "THE YAK",
        "text": "Yaks emit minimal greenhouse gases and live on a rich natural vegetation diet. Rarely grazing too long in one place, they roam freely in peaceful herds across the regions of Tibet."
    },
    {
        "id": 1,
        "imgUrl": "https://static.wixstatic.com/media/9f945e_0177bbe1e2fa45179c2a106cef782ab6~mv2.jpeg/v1/crop/x_0,y_26,w_718,h_1028/fill/w_383,h_548,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f36d1cb96lcab0be4f1b1469eadbafd2.jpeg",
        "title": "THE PROCESS",
        "text": "Tibetan herders responsibly hand-comb our yak wool each summer during their natural shedding season. Only the finest fibres are collected to produce premium yak knitwear and accessories."
    },
    {
        "id": 2,
        "imgUrl": "https://static.wixstatic.com/media/9f945e_7c7ebae12efc4a22b76d39ac57a9ef63~mv2.jpg/v1/crop/x_719,y_0,w_863,h_1235/fill/w_383,h_548,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Yak_About%20section.jpg",
        "title": "THE JOURNEY",
        "text": "Our partners, manufacturers, and designers collaborate to prove that there is true power in partnership. Our incredible and transparent supply chain ensures that your consumer can trace the journey of their favourite knitwear."
    }
]
</script>

<style lang="less" scoped>
.cards {
    margin-top: 8rem;
    margin-bottom: 8rem;

    .container {
        max-width: 1024px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;

        .card {
            width: 30.6rem;
            height: 43.8rem;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }

            .box {
                position: absolute;
                top: 7.5%;
                left: 7.5%;
                width: 85%;
                height: 85%;
                background-color: rgba(255, 255, 255, .5);
                padding: 2rem 3rem;
                text-align: center;

                &>h2 {
                    font-size: 2.5rem;
                    color: var(--quinary-color);
                    font-family: font-7;
                    position: relative;
                    margin-bottom: 4rem;

                    &::before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        background-color: var(--quinary-color);
                        left: 0;
                        bottom: -2rem;
                    }
                }

                &>p {
                    line-height: 1.8;
                    color: var(--quinary-color);
                }
            }
        }
    }
}
</style>