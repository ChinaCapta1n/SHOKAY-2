<template>
    <div class="boxes" v-for="item in data" :key="item.id">
        <div class="left">
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
        </div>
        <div class="right">
            <template v-if="item.path != ''">
                <router-link :to="item.path">
                    <img :src="item.imgUrl" alt="">
                </router-link>
            </template>
            <template v-else>
                <img :src="item.imgUrl" alt="">
            </template>
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
.boxes {
    width: 100;
    height: 47.4rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    background-color: #F5F3F2;

    .left {
        width: 27.6rem;
        height: 100%;
        padding: 4rem 1rem 4rem 3rem;

        &>h2 {
            color: #333;
            font-size: 3.3rem;
            font-family: font-7;
            position: relative;
            margin-bottom: 6rem;

            &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: -2rem;
                width: 100%;
                height: 1px;
                background-color: #bdafaf;
            }
        }

        &>p {
            color: #333;
            font-size: 1.8rem;
            line-height: 1.8;
            font-weight: 300;
        }
    }

    .right {
        width: 66.4rem;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>