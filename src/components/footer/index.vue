<template>
    <footer class="footer">
        <div class="info">
            <span>©2023 by SHOKAY <span class="line">|</span> <a href="mailto:info@shokay.asia">info@shokay.asia</a></span>
        </div>
        <div class="icons">
            <img src="../../assets/images/footer/in.webp" alt="">
            <img src="../../assets/images/footer/f.webp" alt="">
            <img src="../../assets/images/footer/ins.webp" alt="">
            <img src="../../assets/images/footer/youtube.webp" alt="">
        </div>
    </footer>
    <div class="footer-height"></div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.footer-height {
    height: 4.3rem;

    @media screen and (max-width: 490px) {
        height: 8rem;
    }
}

.footer {
    height: 4.3rem;
    background-color: var(--quaternary-color);
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    .info {
        .line {
            margin: 0 1.2rem;
        }

        span {
            display: inline-block;
            color: #f4f3f2;
            font-size: 1.3rem;
            font-family: avenir-light;

            a {
                color: #f4f3f2;
                font-size: 1.3rem;
            }
        }
    }

    .icons {
        margin-left: 1.5rem;

        img {
            width: 2.8rem;
            height: 2.8rem;
            margin-right: 0.8rem;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 490px) {
        height: 8rem;
        flex-direction: column;
        justify-content: space-evenly;
    }
}
</style>