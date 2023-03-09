<template>
    <div class="yarns">
        <div class="left">
            <img src="https://static.wixstatic.com/media/a1b0fd_0a4a6dad37344421a4d97fcec673942e~mv2.jpg/v1/fill/w_409,h_480,al_c,lg_1,q_80,enc_auto/a1b0fd_0a4a6dad37344421a4d97fcec673942e~mv2.jpg"
                alt="">
        </div>
        <div class="right">
            <h2 class="common-h2-styling">Yarns</h2>
            <p class="p-style">
                Many brands around the world have started using Shokay Yarns in their designs. Our ranges cover woollen,
                semi-worsted, cotton-spun, and fancy yarns made from 100% yak wool and other sustainable blends. Shokay
                Yarns yarn counts vary from 18s to 60s, and can be used for machine knitting, machine weaving, and hand
                knitting.
            </p>
            <ul class="p-style">
                <li>100% yak</li>
                <li>Yak/wool blends</li>
                <li>Yak/pima cotton blends </li>
                <li>Yak/bamboo blends</li>
                <li>Yak/EcoMarine blends</li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.yarns {
    display: flex;
    height: calc(100vh - 186px);

    .left,
    .right {
        width: 50%;
    }

    .left {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .right {
        padding: 6vw 6vw;

        &>h2 {
            margin-bottom: 4rem;
        }

        &>p {
            text-align: left;
            line-height: 2;
        }

        &>ul {
            text-align: left;
            margin-top: 4rem;

            li {
                line-height: 2;
                list-style: disc;
                margin-left: 2rem;
            }
        }
    }
}
</style>