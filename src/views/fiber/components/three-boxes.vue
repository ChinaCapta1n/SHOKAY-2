<template>
    <div class="three-boxes">
        <div class="left">
            <img src="https://static.wixstatic.com/media/a1b0fd_53ec6e30371d4f5c87033996aa651899~mv2.jpg/v1/fill/w_678,h_641,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a1b0fd_53ec6e30371d4f5c87033996aa651899~mv2.jpg"
                alt="">
        </div>
        <div class="middle">
            <div class="wrapper">
                <h2>100g</h2>
                <p class="p-style">Yaks have two types of hair: coarse hair that is used to make tents and fine down hair
                    used to make
                    clothing. The fine fibers are hand combed from the neck and shoulder areas of the yak. Each yak every
                    year only can provide 100g of the fine downy fiber. </p>
            </div>
        </div>
        <div class="right">
            <img src="https://static.wixstatic.com/media/a1b0fd_73c0e078db63469ca770cd145f6d203d~mv2.jpg/v1/fill/w_679,h_641,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a1b0fd_73c0e078db63469ca770cd145f6d203d~mv2.jpg"
                alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.three-boxes {
    display: flex;
    margin-top: 5rem;

    .left,
    .middle,
    .right {
        flex: 1;
        height: 51.3rem;
    }

    .left,
    .right {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .middle {
        position: relative;
        background-color: #F5F3F2;

        .wrapper {
            position: absolute;
            width: 80%;
            height: 60%;
            top: 20%;
            left: 10%;

            &>h2 {
                color: #272521;
                font-size: 2.4rem;
                text-align: center;
                margin-bottom: 5rem;
            }

            &>p {
                line-height: 2;
                letter-spacing: 0.1rem;
                text-align: left;
                max-width: 36rem;
                margin: 0 auto;
            }
        }
    }

    @media screen and (max-width: 979px) {
        flex-direction: column;

        .left, .right {
            height: 30rem;
            img {
                height: 30rem;
            }
        }

        .middle {
            .wrapper {
                position: static;
                width: 100%;
                padding: 4rem;
            }
        }
    }
}
</style>