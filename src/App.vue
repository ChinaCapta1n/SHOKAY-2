<template>
    <div>
        <ShokayHeader />
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <ShokayFooter />
    </div>
</template>

<script setup>
import ShokayHeader from '@/components/header/index.vue';
import ShokayFooter from '@/components/footer/index.vue';

</script>

<style lang="less" scoped>
.fade-leave-active,
.fade-enter-active {
  transition: all .8s;
}
.fade-enter-from {  
  opacity: 0;
}
.fade-enter-to { 
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

</style>