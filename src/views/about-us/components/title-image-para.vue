<template>
    <div class="title-image-para">
        <div class="container" v-for="item in data" :key="item.id">
            <div class="left">
                <img :src="item.src" alt="">
            </div>
            <div class="right">
                <h2 v-html="item.title"></h2>
                <p class="p-style" v-for="(p, index) in item.text" :key="index">
                    {{ p }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: {
        type: Array,
        required: true
    }
})
</script>

<style lang="less" scoped>
.title-image-para {
    padding: 8rem 0;

    .container {
        max-width: 95rem;
        margin: 0 auto;
        display: flex;
        align-items: center;

        .left {
            width: 36.6rem;

            img {
                width: inherit;
            }
        }

        .right {
            padding-left: 6rem;

            &>h2 {
                font-size: 2.5rem;
                color: #946C49;
                text-align: center;
                line-height: 1.8;
                margin-bottom: 1.5rem;
            }

            &>p {
                text-align: left;
                margin-bottom: 2rem;
            }
        }
    }

    @media screen and (max-width: 979px) {
        padding-top: 0;
        padding-bottom: 0;
        .container {
            width: 100%;
            max-width: 100%;
            flex-direction: column;

            .left {
                width: 100%;
            }

            .right {
                padding: 3vw;
            }
        }
    }
}
</style>