<template>
    <div class="video-desc">
        <div class="video-wrapper">
            <iframe
                src="https://video.wixstatic.com/video/a582b8_e36b8b56754a47d887bc5d9549bf76d5/480p/mp4/file.mp4"></iframe>

            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" preserveAspectRatio="xMidYMin slice">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="18" cy="18" r="17" stroke="#fff" stroke-width="2"></circle>
                        <path fill="#fff" d="m23.935 17.708-10.313 6.033V11.676z"></path>
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.video-desc {
    padding: 7rem 0;

    .video-wrapper {
        width: 59.5rem;
        height: 30rem;
        position: relative;
        margin: 0 auto;

        iframe {
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
        }
    }

    @media screen and (max-width: 677px) {
        padding: 2rem 0;
        .video-wrapper {
            width: 100%;
        }
    }
}
</style>