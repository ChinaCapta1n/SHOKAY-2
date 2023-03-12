<template>
    <div class="accessories">
        <div class="container">
            <h2 class="common-h2-styling">
                Accessories
            </h2>
            <p class="p-style">
                The finest yak wool is used for scarves, shawls, and other accessories.
            </p>

            <div class="images">
                <img src="https://static.wixstatic.com/media/a1b0fd_e5d884dbf0d44a22b360469f04141665~mv2.png/v1/fill/w_512,h_343,q_90/a1b0fd_e5d884dbf0d44a22b360469f04141665~mv2.webp" style="width: 580px; height: 409px;" alt="">
                <img src="https://static.wixstatic.com/media/a1b0fd_d8dee9e76e9740ea953e5d8a5fad146f~mv2.jpg/v1/fill/w_440,h_440,q_90/a1b0fd_d8dee9e76e9740ea953e5d8a5fad146f~mv2.webp" style="width: 380px; height: 409px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_0fb06b8ce7ef4a9e91e3dba8eb19f0d1~mv2.jpg/v1/fill/w_504,h_758,q_90/a582b8_0fb06b8ce7ef4a9e91e3dba8eb19f0d1~mv2.webp" style="width: 232px; height: 379px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_fcc1c5b6f8b04c84881d1cd0d746a8fa~mv2.jpg/v1/fill/w_504,h_758,q_90/a582b8_fcc1c5b6f8b04c84881d1cd0d746a8fa~mv2.webp" style="width: 242px; height: 379px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_ce9d19be99db4e4284c2ac86cf7df7e8~mv2.jpg/v1/fill/w_504,h_758,q_90/a582b8_ce9d19be99db4e4284c2ac86cf7df7e8~mv2.webp" style="width: 242px; height: 379px;" alt="">
                <img src="https://static.wixstatic.com/media/a582b8_f92c1a19c66743dbb77fa14d6f9bca06~mv2.jpg/v1/fill/w_508,h_758,q_90/a582b8_f92c1a19c66743dbb77fa14d6f9bca06~mv2.webp" style="width: 242px; height: 379px;" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.accessories {
    .container {
        max-width: 97rem;
        margin: 0 auto;
        padding: 0 .5rem;

        &>h2 {
            padding: 4rem 0 2rem 6rem;
        }

        &>p {
            margin-bottom: 4rem;
            text-align: left;
            padding-left: 6rem;
        }

        .images {
            & > img {
                padding: 0 .5rem .5rem;
                object-fit: cover;
            }
        }
    }

    @media screen and (max-width: 979px) {
        .images {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
            img {
                width: 100% !important;
                margin-bottom: 1rem;
            }
        }
    }
}
</style>