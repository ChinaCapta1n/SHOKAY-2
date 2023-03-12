<template>
    <div class="sub-accessories">
        <div class="container">
            <h2 class="common-h2-styling">
                Home & Lifestyle
            </h2>
            <p class="p-style">
                SYak wool can be used for blankets, throws, and many other lifestyle products.
            </p>

            <div class="images">
                <img src="https://static.wixstatic.com/media/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.jpg/v1/fill/w_1020,h_680,q_90/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.webp" style="width: 300px; height: 250px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.jpg/v1/fill/w_1020,h_680,q_90/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.webp" style="width: 300px; height: 250px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.jpg/v1/fill/w_1020,h_680,q_90/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.webp" style="width: 300px; height: 250px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.jpg/v1/fill/w_1020,h_680,q_90/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.webp" style="width: 300px; height: 250px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.jpg/v1/fill/w_1020,h_680,q_90/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.webp" style="width: 300px; height: 250px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.jpg/v1/fill/w_1020,h_680,q_90/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.webp" style="width: 300px; height: 250px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.jpg/v1/fill/w_1020,h_680,q_90/a582b8_6969d6c6bfa44dbea8447845e23d2e83~mv2.webp" style="width: 300px; height: 250px;" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.sub-accessories {
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
                padding: 0 .5rem 1rem;
                object-fit: cover;
            }
        }
    }

    @media screen and (max-width: 899px) {
        .container {
            .images {
                padding: 0 2vw 0;
                img {
                    width: 100% !important;
                    margin-bottom: 2vw;
                }
            }
        }
    }
}
</style>