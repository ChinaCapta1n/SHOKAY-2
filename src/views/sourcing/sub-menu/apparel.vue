<template>
    <div class="apparel">
        <div class="container">
            <h2 class="common-h2-styling">
                Apparel
            </h2>
            <p class="p-style">
                Brands can develop a full apparel collection using yarns & fabrics made from yak wool.
            </p>

            <div class="images">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.png/v1/fill/w_454,h_678,q_90/a582b8_f0d6cb2c650e4618861495fbe4b114ee~mv2.webp" style="width: 322px; height: 378px;" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.apparel {
    .container {
        max-width: 97rem;
        margin: 0 auto;

        &>h2 {
            padding: 4rem 0 2rem 6rem;
        }

        &>p {
            margin-bottom: 4rem;
            text-align: left;
            padding-left: 6rem;
        }

        .images {
            display: flex;
            flex-wrap: wrap;
            
            img {
                object-fit: cover;
                padding: 0 .5rem 1rem;
            }
        }
    }

    @media screen and (max-width: 979px) {
        .container {
            .images {
                padding: 0 6vw 0;
                justify-content: center;
                img {
                    width: 100% !important;
                    margin-bottom: 1vw;
                }
            }
        }
    }
}
</style>