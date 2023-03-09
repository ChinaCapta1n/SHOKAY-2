<template>
    <div class="yak-banner">
        <img src="https://static.wixstatic.com/media/nsplsh_755454414246336d537063~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1963,h_610,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_755454414246336d537063~mv2_d_5760_3840_s_4_2.jpg"
            alt="">

        <h2>ABOUT THE YAK</h2>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.yak-banner {
    height: 48.8rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, .3);
    }

    &>img {
        width: 100%;
        height: 100%;
    }

    &>h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 4rem;
        font-family: avenir-light;
    }
}
</style>