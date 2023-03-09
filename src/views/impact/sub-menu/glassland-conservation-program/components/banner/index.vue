<template>
    <div class="banner">
        <img src="https://static.wixstatic.com/media/nsplsh_4feb23b40c6b49da88c6675ed145fc20~mv2.jpg/v1/fill/w_1973,h_578,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_4feb23b40c6b49da88c6675ed145fc20~mv2.jpg"
            alt="">
        <div class="box">
            <p>Grassland</p>
            <p>Conservation</p>
            <p>Program</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.banner {
    position: relative;
    width: 100%;
    height: 46.2rem;

    &::before {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: 1;
    }

    img {
        width: 100%;
        height: inherit;
        object-fit: cover;
        position: relative;
        display: block;
    }

    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;

        &>p {
            color: #fff;
            font-size: 4rem;
            text-align: center;
            line-height: 1.5;
        }
    }
}
</style>