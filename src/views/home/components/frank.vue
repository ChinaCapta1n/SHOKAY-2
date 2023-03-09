<template>
    <div class="frank">
        <div class="left">
            <div class="container">
                <h2-title text="FRANK & OAK X SHOKAY"></h2-title>
                <p class="p-style">We had the honour of collaborating with Frank And Oak to introduce Shokay’s responsible
                    yak
                    wool to their incredible knitwear collection.</p>
                <p class="p-style">Their cosy knit collection guarantees 30% more warmth and 120% more breathability than
                    traditional wools.
                </p>
                <p class="p-style">Responsible yak wool transformed into comfortable and mindful knitwear that helps to make
                    Tibetan regions
                    greener almost sounds too good to be true, right?</p>
                <button-with-arrow text="VIEW COLLECTION" />
            </div>
        </div>
        <div class="right">
            <img src="@/assets/images/home/2.webp" alt="">
        </div>
    </div>
</template>

<script setup>
import H2Title from './title-h2.vue';
import ButtonWithArrow from '@/components/button-with-arrow/index.vue';
</script>

<style lang="less" scoped>
.frank {
    width: 100%;
    display: flex;
    margin-bottom: 8rem;

    .left,
    .right {
        width: 50%;
        height: 58rem;
    }

    .left {
        background-color: #EAE5D4;


        .container {
            max-width: 49rem;
            margin: 0 auto;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            text-align: center;

            >h2 {
                margin: 1.2rem 0;
            }
        }
    }

    .right {
        background-color: red;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>