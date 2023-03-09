<template>
    <div class="blog">
        <div class="container">
            <all-posts />
            <single-blog />
        </div>
    </div>
</template>

<script setup>
import AllPosts from './components/all-post.vue';
import SingleBlog from './components/single-blog.vue';

</script>

<style lang="less" scoped>
.blog {
    .container {
        max-width: 94rem;
        margin: 0 auto;
    }
}
</style>