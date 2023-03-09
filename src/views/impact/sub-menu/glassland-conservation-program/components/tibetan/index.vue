<template>
    <div class="tibetan">
        <div class="container">
            <div class="left">
                <p class="p-style">
                    Shokay started partnering with Tibetan environmentalist Drakyom Palzang in 2021.
                </p>
                <p class="p-style">
                    Palzang is the founder of Trachung Tsang Cultural and Environmental Protection Center, located in the
                    mountains of Sichuan Province.
                </p>
                <p class="p-style">
                    Over the last 15 years, Palzang has developed a unique methodology that empowers local Tibetans and
                    their yak herds to work together to combat desertification and has led over 1000 Tibetans to recover
                    13,000 mu of grassland.
                </p>
            </div>
            <div class="right">
                <img src="https://static.wixstatic.com/media/a582b8_97ccebcfd33a44ee9bdcfe2c1a5ba252~mv2.jpg/v1/fill/w_465,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%E7%89%A7%E4%BA%BA%20%E6%89%8E%E7%90%BC%E5%B7%B4%E8%AE%A9.jpg"
                    alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.tibetan {
    padding: 10rem 0;

    .container {
        max-width: 93rem;
        margin: 0 auto;
        display: flex;

        .left {
            flex: 1;
            padding-right: 2.5rem;

            &>p {
                text-align: left;
                margin-bottom: 4rem;
                line-height: 2;
            }
        }

        .right {
            width: 46.5rem;
            height: 34.5rem;

            img {
                width: inherit;
                height: inherit;
                object-fit: cover;
            }
        }
    }
}
</style>