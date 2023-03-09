<template>
    <div class="exclusivity">
        <div class="container">
            <h2-title text="THE ELEMENT OF EXCLUSIVITY" />
            <p class="p-style">Despite its premium quality feel, extreme softness and durable quality, many fashion brands
                still
                need to familiarise themselves with the amazing benefits of yak wool.</p>
            <p class="p-style">That means you'll be one step ahead of your competitors when you introduce yak wool to your
                knitwear line.</p>

            <button-with-arrow text="COUNT ME IN" />
        </div>
    </div>
</template>

<script setup>
import H2Title from './title-h2.vue';
import ButtonWithArrow from '@/components/button-with-arrow/index.vue';
</script>

<style lang="less" scoped>
.exclusivity {
    margin-top: 10rem;
    height: 41.1rem;
    background-color: var(--senary-color);

    .container {
        max-width: 72rem;
        margin: 0 auto;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        &>h2 {
            font-size: 3.5rem;
        }
    }
}
</style>