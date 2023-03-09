<template>
    <div class="products">
        <div class="container">
            <div class="title-and-text">
                <h2>The Versatility of Yak</h2>
                <p class="p-style">Shokay partners with like-minded manufacturing partners to develop products across the
                    supply chain. By inspiring brands with the possibilities of what can be designed with yak wool and
                    working together with suppliers to provide premium yarns & fabrics, Shokay has helped catalyzed the
                    growth of the yak wool industry over the last 15 years.</p>
            </div>

            <boxes :data="data"></boxes>
        </div>

    </div>
</template>

<script setup>
import Boxes from './components/box.vue';

const data = [
    {
        "id": 0,
        "title": "Fibers & Tops",
        "text": "Carded fiber and tops are available in a range of specifications for mills to use for different applications.",
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_c75402cc6c964d5bae8931d9edf40042~mv2.png/v1/fill/w_431,h_308,al_c,lg_1,q_85,enc_auto/a1b0fd_c75402cc6c964d5bae8931d9edf40042~mv2.png",
        "path": "/fibers"
    },
    {
        "id": 1,
        "title": "Yarns",
        "text": "Woollen, semi-worsted, cotton-spun, and fancy yarns made from 100% yak wool and other sustainable blends are available for both knitted garments and fabrics.",
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_0a4a6dad37344421a4d97fcec673942e~mv2.jpg/v1/fill/w_409,h_292,al_c,lg_1,q_80,enc_auto/a1b0fd_0a4a6dad37344421a4d97fcec673942e~mv2.jpg",
        "path": "/yarns"
    },
    {
        "id": 2,
        "title": "Fabrics",
        "text": "Jersey and woven fabrics using yak wool and other sustainable blends are available for a wide range of applications.",
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_df37feaec48944feb32c45f4ca57f4e9~mv2.jpg/v1/fill/w_476,h_340,al_c,lg_1,q_80,enc_auto/a1b0fd_df37feaec48944feb32c45f4ca57f4e9~mv2.jpg",
        "path": "/fabrics"
    },
    {
        "id": 3,
        "title": "Apparel",
        "text": "Through Shokay's investment in R&D across the entire supply chain, brands can now develop a full apparel collection using yarns & fabrics made from yak wool.",
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_34081e5c51504e78b2285fd2911d71de~mv2.jpg/v1/fill/w_830,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a1b0fd_34081e5c51504e78b2285fd2911d71de~mv2.jpg",
        "path": "/accessories"
    },
    {
        "id": 4,
        "title": "Accessories",
        "text": "The finest yak wool is used for scarves, shawls, and other accessories.",
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_e5d884dbf0d44a22b360469f04141665~mv2.png/v1/fill/w_577,h_412,al_c,lg_1,q_85,enc_auto/a1b0fd_e5d884dbf0d44a22b360469f04141665~mv2.png",
        "path": "/apparel"
    },
    {
        "id": 5,
        "title": "Home & Lifestyle",
        "text": "Yak wool can be used for blankets, throws, and many other lifestyle products.",
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_e7d4a4bcfc6b44fab9ce32b24725b72e~mv2.jpg/v1/fill/w_830,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a1b0fd_e7d4a4bcfc6b44fab9ce32b24725b72e~mv2.jpg",
        "path": "/sub-accessories"
    },
    {
        "id": 6,
        "title": "Filling",
        "text": "Shokay creates fillings using a blend of yak hair and RPET for use as fillings for blankets and quilted fabrics.",
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_cd8348858be34ad8b916d6ead19d18a1~mv2.jpg/v1/fill/w_581,h_415,al_c,lg_1,q_80,enc_auto/a1b0fd_cd8348858be34ad8b916d6ead19d18a1~mv2.jpg",
        "path": ""
    }
]

</script>

<style lang="less" scoped>
.products {
    .container {
        max-width: 98rem;
        margin: 0 auto;

        .title-and-text {
            padding-left: 5rem;
            padding-bottom: 4rem;

            &>h2 {
                font-size: 3.2rem;
                color: var(--quinary-color);
                margin: 2.5rem 0 3.5rem;
            }

            &>p {
                text-align: left;
                line-height: 2;
            }
        }
    }
}
</style>