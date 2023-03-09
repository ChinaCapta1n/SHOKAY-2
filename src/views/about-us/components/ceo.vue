<template>
    <div class="ceo">
        <h2>
            "TODAY, YAK WOOL REMAINS ONE OF THE RAREST FIBRES USED <br>
            GLOBALLY DESPITE ITS SUSTAINABLE POTENTIAL, BUTTERY <br>
            SOFTNESS, AND BEING 30% WARMER THAN WOOL."
        </h2>
        <p>-Carol, CEO and co-founder</p>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.ceo {
    background-color: #756F63;
    height: 40rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &>h2 {
        color: #fff;
        font-size: 2.5rem;
        position: relative;
        margin-bottom: 5rem;
        line-height: 1.5;


        &::before {
            content: "";
            position: absolute;
            bottom: -2rem;
            left: 0;
            width: 100%;
            height: 0.3rem;
            background-color: #fff;
        }
    }

    &>p {
        font-size: 2rem;
        color: #fff;
    }
}
</style>