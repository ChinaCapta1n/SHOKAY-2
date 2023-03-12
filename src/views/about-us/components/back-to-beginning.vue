<template>
    <div class="back-to-beginning">
        <div class="container">
            <h2>BACK TO THE BEGINNING</h2>
            <p class="p-style">Whilst studying at Harvard, Shokay co-founder Carol Chyau knew she wanted to find a way to
                influence social change and sustainability. She figured she would start by exploring one of the more remote
                places in Asia, the Tibetan plateaus of Western China.</p>
            <p class="p-style">There, she discovered the fibre that she believed could contribute to a sustainable future
                for fashion- yak wool.</p>
            <p class="p-style">Despite a United Nations report describing yak wool as “comparable to cashmere,” one question
                left her stumped.</p>

            <div class="two-line">
                <p>WHY HASNT YAK WOOL MADE IT <br> TO THE GLOBAL MARKET</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.back-to-beginning {
    padding: 5rem 3rem 7rem;

    .container {
        height: 100%;
        max-width: 91.8rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;

        &>h2 {
            font-size: 2.5rem;
            color: var(--quinary-color);
            font-weight: 300;
            margin-bottom: 2rem;
        }

        &>p {
            margin-bottom: 3rem;
        }

        &>div {
            font-size: 3rem;
            color: var(--septenary-color);
            margin: 3rem 0;
            position: relative;

            &::before,
            &::after {
                content: "";
                position: absolute;
                width: 28.7rem;
                height: 0.3rem;
                background-color: #424242;
            }

            &::before {
                left: -21%;
                top: -30%;
            }

            &::after {
                right: -21%;
                bottom: -30%;
            }

            @media screen and (max-width: 979px) {
                    &::before, &::after {
                        width: 100%;
                    left: 0;
                    right: 0;
                    }
            }
        }

        .two-line {}
    }
}
</style>