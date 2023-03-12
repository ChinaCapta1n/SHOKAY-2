<template>
    <div class="purchase">
        <img src="https://static.wixstatic.com/media/9f945e_4fff1d44184641bdbe22ebdc154f56c7~mv2.jpg/v1/fill/w_1440,h_400,al_b,q_85,enc_auto/9f945e_4fff1d44184641bdbe22ebdc154f56c7~mv2.jpg"
            alt="">

        <div class="info-box">
            Shokay purchases raw yak wool from Tibetan herders to produce <br />
            premium knitwear and accessories. Not only does this enable major <br />
            brands to connect directly to these local communities, but it also <br />
            contributes towards real social change.
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.purchase {
    width: 100%;
    height: 46.6rem;
    position: relative;

    &>img {
        width: inherit;
        height: 100%;
    }

    .info-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, .7);
        padding: 3rem;
        color: #fff;
        font-size: 2rem;
        line-height: 1.8;
        font-family: serif;
    }

    @media screen and (max-width: 668px) {
        .info-box {
            min-width: 80%;
        }
    }
    @media screen and (max-width: 437px) {
        .info-box {
            width: 90%;
            height: 90%;
        }
    }
}
</style>