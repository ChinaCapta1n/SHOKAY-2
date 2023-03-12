<template>
    <div class="supply-chain">
        <div class="container">
            <div class="top">
                <div class="left">
                    <p class="p-style">
                        Shokay is the bridge that connects the natural herding process to sustainable supply chains. Since
                        many brands are yet to discover the qualities of yak wool, you have the perfect opportunity to get
                        ahead of the game.
                    </p>
                    <p class="p-style">
                        You will also be offering your customers something unique. Yak wool is far more exclusive than
                        sheep’s wool or goat’s cashmere, giving your brand an element of exclusivity.
                    </p>
                    <p class="p-style">
                        Most importantly, by introducing responsible yak wool into your knitwear collection, you are meeting
                        consumers’ increasing demand for sustainable products.
                    </p>
                </div>
                <div class="right">
                    <img src="../../../assets/images/1.png" alt="">
                </div>
            </div>
            <PurchaseButton text="FIND OUT MORE" />
            <div class="bottom">
                <div class="left">
                    <img src="https://static.wixstatic.com/media/9f945e_4fff1d44184641bdbe22ebdc154f56c7~mv2.jpg/v1/crop/x_267,y_0,w_906,h_1080/fill/w_500,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190226165728_edited.jpg"
                        alt="">
                </div>
                <div class="right">
                    <div class="address-box">
                        <h2>CONTACT US</h2>

                        <div class="address">
                            <p>Shanghai</p>
                            <p>Hongqiao Rd Lane 966 No. 161 Building 2 Room 109-112
                                <br>
                                200060 CN
                            </p>
                        </div>

                        <div class="address">
                            <p>Taipei</p>
                            <p>Chung Hsiao E. Rd. Sec. 2 Lane 134 No. 5 4F
                                <br>
                                100 TW
                            </p>
                        </div>

                        <p>
                            ✉ <a href="mailto:info@shokay.asia">info@shokay.asia</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PurchaseButton from '@/components/button/index.vue';
</script>

<style lang="less" scoped>
.supply-chain {
    .container {
        max-width: 95rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 7rem;

        .top {
            display: flex;
            align-items: center;
            padding: 6rem 0;

            &>.left {
                padding-right: 8rem;

                p {
                    text-align: left;
                    margin-bottom: 2rem;
                }
            }

            &>.right {
                width: 34.4rem;

                img {
                    width: inherit;
                }
            }
        }

        .bottom {
            padding-top: 6rem;
            width: 100%;
            display: flex;

            .left {
                width: 40rem;

                img {
                    width: inherit;
                }
            }

            .right {
                width: 100%;
                position: relative;

                .address-box {
                    position: absolute;
                    width: 60%;
                    left: 20%;
                    top: 20%;

                    &>p {
                        margin-top: 2rem;

                        a {
                            text-decoration: underline;
                        }
                    }

                    &>h2 {
                        text-align: center;
                        font-size: 2.5rem;
                        position: relative;
                        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

                        &::before {
                            content: "";
                            position: absolute;
                            bottom: -2rem;
                            left: 50%;
                            transform: translateX(-50%);
                            width: 80%;
                            height: 0.3rem;
                            background-color: #000;
                        }
                    }

                    .address {
                        &:nth-of-type(1) {
                            margin-top: 7rem;
                        }

                        &:nth-of-type(2) {
                            margin-top: 3rem;
                        }


                        &>p {
                            font-size: 1.5rem;
                            color: var(--quaternary-color);
                            text-align: left;
                            line-height: 1.5;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        }
                    }


                }


            }
        }
    }

    @media screen and (max-width: 979px) {
        .container {
            padding: 0 3vw;
            .top {
                flex-direction: column-reverse;
                .left {
                    padding: 4vw;
                }

                .right {
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
            }

            .bottom {
                flex-direction: column;

                .left {
                    width: 100%;

                    img {
                        object-fit: cover;
                    }
                }

                .right {
                    padding-bottom: calc(341px + 10vw);
                }
            }
        }
    }
}
</style>