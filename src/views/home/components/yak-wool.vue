<template>
    <div class="yak-wool">
        <img src="https://static.wixstatic.com/media/9f945e_10c89e9ad952433fa57c5f3c5f3554ad~mv2.jpg/v1/fill/w_1679,h_434,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/9f945e_10c89e9ad952433fa57c5f3c5f3554ad~mv2.jpg"
            alt="">

        <div class="ceo-text">
            <h2>"Today, yak wool remains one of the rarest fibres used globally despite its sustainable potential, extreme
                softness and being 30% warmer than wool."</h2>
            <p>-Carol, CEO and co-founder</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.yak-wool {
    height: 34.7rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, .3);
    }

    img {
        width: 100%;
        height: 100%;
    }

    .ceo-text {
        max-width: 91rem;
        margin: 0 auto;
        position: absolute;
        inset: 0;

        color: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        font-family: serif;

        &>h2 {
            font-size: 3rem;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                bottom: -4rem;
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
                height: 2px;
                background-color: #fff;
            }
        }

        &>p {
            font-size: 2.5rem;
        }
    }
}
</style>