<template>
    <div class="banner">
        <img src="https://static.wixstatic.com/media/a582b8_220e2cf689d3461f87dcc5ecc1a2ef48~mv2.jpg/v1/fill/w_3072,h_902,al_c,q_90,enc_auto/a582b8_220e2cf689d3461f87dcc5ecc1a2ef48~mv2.jpg" alt="">
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.banner {
    height: 52.2rem;
    &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 979px) {
        height: 24.3rem;
    }
}
</style>