import { ref } from "vue";

const windowSize = ref(window.innerWidth);

function watchWindowSize() {
    window.addEventListener('resize', () => {
        windowSize.value = window.innerWidth;
    })
}

watchWindowSize();

export default windowSize;