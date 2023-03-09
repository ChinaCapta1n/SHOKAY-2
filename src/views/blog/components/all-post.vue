<template>
    <div class="all-posts">
        <p>All Posts</p>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.all-posts {
    padding: 3rem 0 4rem;

    p {
        font-size: 1.5rem;
        font-family: avenir-light;
        color: var(--tertiary-color);
        cursor: pointer;
        width: fit-content;

        &:hover {
            color: #B88B88;
        }
    }
}
</style>