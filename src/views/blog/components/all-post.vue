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

    @media screen and (max-width: 979px) {
        max-width: calc(100vw - 8vw);
        height: 5rem;
        margin: 0 auto;
        background-color: #918766;
        padding-left: 4vw;
        display: flex;
        align-items: center;
        & > p {
            color: #fff;
            font-weight: 800;
        }
    }
}
</style>