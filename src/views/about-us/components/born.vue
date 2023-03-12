<template>
    <div class="born">
        <div class="container">
            <div class="left">
                <TitleWithUnderline text="THUS, SHOKAY WAS BORN" />
                <p class="p-style">
                    When she founded Shokay (yak wool in Tibetan), Carol knew she had stumbled across something special.
                </p>
                <p class="p-style">
                    She was convinced that as soon as the market experienced the incredible qualities first-hand, they, too,
                    would be sold.
                </p>
                <p class="p-style">
                    And she was right. Shokay now supplies leading fashion and lifestyle brands with our responsible yak
                    wool.
                </p>
            </div>
            <div class="right">
                <img src="https://static.wixstatic.com/media/a1b0fd_fcfc6f7ed3bc4638ba3d165c0c73e639~mv2.jpg/v1/fill/w_530,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a1b0fd_fcfc6f7ed3bc4638ba3d165c0c73e639~mv2.jpg"
                    alt="">
            </div>
        </div>
        <ButtonWithArrow text="VIEW CASE STUDIES" />
    </div>
</template>

<script setup>
import TitleWithUnderline from '@/components/title-h2-with-underline/index.vue';
import ButtonWithArrow from '@/components/button-with-arrow/index.vue';

</script>

<style lang="less" scoped>
.born {
    height: 59.6rem;
    background-color: var(--senary-color);
    padding: 10rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>button {
        margin-top: 7rem;
        margin-bottom: 7rem;
    }

    .container {
        max-width: 95rem;
        margin: 0 auto;
        display: flex;


        .left {
            flex: 1;
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 2rem;

            &>h2 {
                margin-bottom: 7rem;
            }

            &>p {
                margin-bottom: 2rem;
            }
        }

        .right {
            width: 42.4rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    @media screen and (max-width: 979px) {
        height: auto;
        padding-top: 0;
        .container {
            flex-direction: column-reverse;
            width: 100%;

            .left {
                & > h2 {
                    margin: 3rem 0 5rem;
                }

                & > p {
                    text-align: left;
                }
            }

            .right {
                width: 100%;
            }
        }
    }
}
</style>