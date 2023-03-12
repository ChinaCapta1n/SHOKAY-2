<template>
    <div class="banner">
        <img src="https://static.wixstatic.com/media/a582b8_8dc778332afd4c3d93f32607f155ef2d~mv2.jpg/v1/fill/w_1781,h_750,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/a582b8_8dc778332afd4c3d93f32607f155ef2d~mv2.jpg"
            alt="">

        <div class="center-img">
            <img src="https://static.wixstatic.com/media/a1b0fd_7830e1b4ffc34f38b16ba3bf1e0fd24e~mv2.jpg/v1/fill/w_494,h_163,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_6831.jpg"
                alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.banner {
    height: 60rem;
    position: relative;

    &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .center-img {
        width: 39.5rem;
        height: 13rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 484px) {
        .center-img {
            width: 90%;
            height: auto;
        }
    }
}
</style>