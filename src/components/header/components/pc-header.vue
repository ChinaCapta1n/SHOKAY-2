<template>
     <header ref="headerElement" class="header pc">
            <h1 class="logo">
                <img src="@/assets/images/SHOKAY.webp" alt="">
            </h1>
            <ul class="navigation">
                <li ref="menuItem" v-for="(nav, index) in data" :key="nav.id">
                    <router-link :to="{ path: nav.url }" @mouseleave.stop="dropdownMouseLeave(index)"
                        @mouseenter.stop="dropdownMouseEnter(index)">
                        {{ nav.text }}

                        <ul class="sub-menu">
                            <li v-for="child in nav.children" :key="child.id">
                                <template v-if="child.url != ''">
                                    <router-link :to="{ path: child.url }">
                                        {{ child.text }}
                                    </router-link>
                                </template>
                                <template v-else>
                                    <a href="javascript:;" @click.stop="redirectTo(child.text)">
                                        {{ child.text }}
                                    </a>
                                </template>
                            </li>
                        </ul>
                    </router-link>
                </li>


            </ul>
            <div class="box">
                <div class="search">
                    <input type="text" v-model="searchText" @input="searchInputFocusFn">
                    <div @click.stop="closeButtonFn" class="close-icon-container" v-if="searchTextLength >= 1"></div>
                </div>
                <div class="languages" ref="languagesElement">
                    <ul class="dropdown-languages">
                        <li @click.stop="extendLanguagesHeight">EN
                            <svg data-bbox="13.05 2.55 33.878 54.8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"
                                class="arrow-container" fill="#848484">
                                <g>
                                    <path
                                        d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z">
                                    </path>
                                </g>
                            </svg>
                        </li>
                        <li>JA</li>
                        <li>ZH</li>
                    </ul>
                </div>
            </div>
     </header>
     <div class="header-height"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import useScrollTotore from '@/stores/modules/scrollTo.js';


const router = useRouter();
const store = useScrollTotore();


const searchText = ref('');
const searchTextLength = ref(0);
const languagesElement = ref(null);


defineProps({
    data: {
        type: Array,
        required: true
    }
})

// languages function
function searchInputFocusFn() {
    if (searchText.value.length >= 1) {
        searchTextLength.value = searchText.value.length;
    }
}

function closeButtonFn() {
    searchText.value = '';
    searchTextLength.value = 0;
}

function extendLanguagesHeight(e) {
    if (e.currentTarget.nodeName.toLowerCase() !== "li" && !languagesElement.value.classList.contains('active')) {
        return;
    }

    languagesElement.value.classList.toggle('active');
}



// dropdown menu function
const menuItem = ref(null);

function dropdownMouseEnter(index) {
    // console.log(e.srcElement)
    menuItem.value[index].classList.add('active');
}

function dropdownMouseLeave(index) {
    menuItem.value[index].classList.remove('active');
}


// scroll function
function redirectTo(text) {
    store.path = text.toLowerCase();

    if(store.path === "about the yak" || store.path === "comparing yak to other fibers") {
        router.push({
            path: "/yak"
        })
    } else if (store.path === "our story") {
        router.push({
            path: "/about-us"
        })
    } else if (store.path === "traceability & verification" || store.path === "media licensing") {
        router.push({
            path: "/marketing"
        })
    }

    if(store.path === "about the yak") {
        setTimeout(() => {
            window.scrollTo({
                behavior: "smooth",
                top: 305
            })
        }, 1500)
    }

    if(store.path === "comparing yak to other fibers") {
        setTimeout(() => {
            window.scrollTo({
                behavior: "smooth",
                top: 1450
            })
        }, 1500)
    }

    if(store.path === "our story") {
        setTimeout(() => {
            window.scrollTo({
                behavior: "smooth",
                top: 305
            })
        }, 1500)
    }

    if(store.path === "traceability & verification") {
        setTimeout(() => {
            window.scrollTo({
                behavior: "smooth",
                top: 554
            })
        }, 1500)
    }

    if(store.path === "media licensing") {
        setTimeout(() => {
            window.scrollTo({
                behavior: "smooth",
                top: 1621
            })
        }, 1500)
    }
}



// 组件吸顶
const scrollTop = ref(document.documentElement.scrollTop);
const headerElement = ref(null);
function listenerScrollTop() {
    scrollTop.value = document.documentElement.scrollTop;
}
watch(scrollTop, (newValue, oldValue) => {
    if(newValue > oldValue) {
        headerElement.value.classList.add('active');
    } else {
        headerElement.value.classList.remove('active');
    }
})


onMounted(() => {
    document.addEventListener('click', extendLanguagesHeight);

    window.addEventListener('scroll', listenerScrollTop);
})

onUnmounted(() => {
    document.removeEventListener("click", extendLanguagesHeight);

    window.removeEventListener('scroll', listenerScrollTop);
})

</script>

<style lang="less" scoped>
.header-height {
    height: 18.6rem;
}
.header {
    &.active {
        transform: translateY(-100%);
    }
        &.pc {
            transition: .5s transform;
            height: 18.6rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            box-shadow: 1px 1px 5px grey;
            background-color: rgba(255, 255, 255, 0.6);
            z-index: 999;

            .logo {
                width: 32.1rem;
                height: 8.4rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .navigation {
                display: flex;
                position: relative;
                bottom: -3rem;
                height: 4rem;

                &>li {
                    margin: 0 1.5rem;
                    font-size: 1.4rem;
                    color: var(--tertiary-color);
                    font-family: helvetica;


                    &>a {
                        transition: .3s all;
                        position: relative;
                        display: block;
                        width: 100%;
                        height: 100%;
                        cursor: pointer;

                        .sub-menu {
                            position: absolute;
                            top: 3.5rem;
                            left: 50%;
                            transform: translateX(-50%);
                            box-shadow: 0 0 10px grey;
                            background-color: #fff;
                            display: none;
                            z-index: 888;

                            &>li {
                                padding: .7rem 1rem;
                                &:hover {
                                    a {
                                        color: var(--septenary-color);
                                    }
                                }

                                &>a {
                                    white-space: nowrap;
                                    cursor: pointer;
                                    transition: .3s all;
                                }
                            }
                        }
                    }

                    .router-link-exact-active {
                        color: var(--septenary-color);
                    }

                    &:hover {
                        &>a {
                            color: var(--septenary-color);
                        }
                    }

                    &.active {
                        .sub-menu {
                            display: block;
                        }
                    }


                }


            }

            .box {
                position: absolute;
                top: 2rem;
                right: 4rem;
                display: flex;
                width: 30rem;

                .search {
                    width: 11.4rem;
                    height: 3.9rem;
                    border: 1px solid #B3B2B0;
                    margin-right: 2rem;
                    position: relative;

                    &:hover {
                        border-color: #000;
                    }

                    .close-icon-container {
                        position: absolute;
                        top: 50%;
                        right: 1rem;
                        transform: translateY(-50%);
                        width: 1.6rem;
                        height: 1.6rem;
                        background-color: #F7F7F7;
                        border-radius: 50%;

                        &:hover {
                            cursor: pointer;
                        }

                        &::after {
                            content: "";
                            display: block;
                            width: 0.8rem;
                            height: 0.8rem;
                            border-radius: 50%;
                            transform: translate(50%, 50%);
                            background-size: cover;
                            background-image: url("@/assets/images/icons/close.svg");
                        }
                    }

                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: 1rem;
                        transform: translateY(-50%);
                        width: 1.4rem;
                        height: 1.4rem;
                        background-size: cover;
                        background-image: url("@/assets/images/icons/search.svg");
                    }


                    input {
                        width: 100%;
                        height: 100%;
                        display: block;
                        border: none;
                        padding-left: 3.5rem;
                        padding-right: 3.5rem;

                        &:focus {
                            outline: none;
                        }
                    }
                }

                .languages {
                    width: 9rem;
                    height: 3.9rem;
                    border: 1px solid #B3B2B0;
                    overflow: hidden;
                    position: relative;
                    cursor: pointer;
                    background-color: #fff;

                    &.active {
                        overflow-y: auto;
                        height: auto;

                        .dropdown-languages {
                            li {
                                &:nth-child(1) {
                                    background-color: rgb(244, 240, 240);
                                }
                            }
                        }
                    }


                    .dropdown-languages {
                        li {
                            width: 9rem;
                            height: 3.9rem;
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            padding-left: 1.3rem;
                            color: #848484;

                            &:hover {
                                color: #B5B5B5;

                                .arrow-container path {
                                    fill: #B5B5B5;
                                }
                            }

                            &:nth-child(1) {
                                position: relative;

                                .arrow-container {
                                    position: absolute;
                                    top: 35%;
                                    right: 1rem;
                                    width: 1.2rem;
                                    height: 1.2rem;
                                    display: block;
                                    transform: rotate(90deg);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>