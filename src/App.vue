<template>
    <div>
        <ShokayHeader />
        <router-view></router-view>
        <ShokayFooter />
    </div>
</template>

<script setup>
import ShokayHeader from '@/components/header/index.vue';
import ShokayFooter from '@/components/footer/index.vue';

</script>

<style lang="less" scoped></style>