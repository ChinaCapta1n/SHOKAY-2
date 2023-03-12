<template>
    <div class="join-us">
        <div class="banner">
            <img src="https://static.wixstatic.com/media/a1b0fd_1f75750c953f48e485f776ded67e7c47~mv2.jpg/v1/fill/w_2053,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a1b0fd_1f75750c953f48e485f776ded67e7c47~mv2.jpg"
                alt="">
            <h2>
                JOIN US IN CONSERVING <br>
                TIBETAN GRASSLAND
            </h2>
        </div>

        <div class="text">
            <p class="p-style">
                Since 2018, Shokay & UPW have committed 1% of our revenues from the yak collection to our joint Community
            </p>
            <p class="p-style">
                Development Fund. We will be regenerating 240 mu of grassland (equivalent to 30 football fields) in Sichuan
                in
            </p>
            <p class="p-style">
                Spring of 2022, and are inviting more brands and manufacturers to join us to expand the program! The
            </p>
            <p class="p-style">
                calculation is simple. For every US$0.30, you can recover 2 sqm of land. You can also commit a portion of
                your
            </p>
            <p class="p-style">
                revenues or commit a fixed lump sum. Connect with us if you are interested!
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.join-us {
    padding: 5rem 0 3rem;

    .banner {
        position: relative;
        height: 52.5rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &>h2 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 5rem;
            text-shadow: #ffffff 3px 3px 0px, rgb(0 0 0 / 20%) 6px 6px 0px;
            text-align: center;
            font-family: serif;
        }
    }

    .text {
        padding: 7rem 0;

        &>p {
            text-align: center;
            line-height: 2;
        }
    }

    @media screen and (max-width: 820px) {
        .banner {
            height: 26rem;
            & > h2 {
                font-size: 2.4rem;
            }
        }

        .text {
            padding: 4vw 5vw;
            p {
                text-align: left;
                margin-bottom: 2rem;
            }
        }
    }
}
</style>