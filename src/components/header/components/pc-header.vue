<template>
    <header class="header pc">
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
                            <router-link :to="{ path: child.url }" @click="ourStory(child.text)">
                                {{ child.text }}
                            </router-link>
                        </li>
                    </ul>
                </router-link>


            </li>


        </ul>
        <div class="box">
            <div class="search">
                <input type="text" v-model="searchText" @input="searchInputFocusFn">
                <div @click="closeButtonFn" class="close-icon-container" v-if="searchTextLength >= 1"></div>
            </div>
            <div class="languages" ref="languagesElement">
                <ul class="dropdown-languages">
                    <li @click="extendLanguagesHeight">EN
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
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();


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
    e.cancelBubble = true;
    if (e.srcElement.nodeName.toLowerCase() !== "li" && !languagesElement.value.classList.contains('active')) {
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

// out story
function ourStory(path) {
    if (path === "OUR STORY") {
        setTimeout(() => {
            window.scrollTo({
                behavior: "smooth",
                top: 350
            })
        }, 1000)
    } else if (path === "ABOUT THE YAK" && window.location.hash === "#/yak") {
        window.scrollTo({
            behavior: "smooth",
            top: 304
        })

    } else if (path === "COMPARING YAK TO OTHER FIBERS" && window.location.hash === "#/yak") {
        window.scrollTo({
            behavior: "smooth",
            top: 1474
        })
    }
}


onMounted(() => {
    document.addEventListener('click', extendLanguagesHeight);
})

</script>

<style lang="less" scoped>
.header {
    &.pc {
        height: 18.6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 1px 1px 5px grey;

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
            padding-top: 2.2rem;

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
                        // top: 3.2rem;
                        left: -50%;
                        box-shadow: 0 0 10px grey;
                        background-color: #fff;
                        display: none;
                        z-index: 888;

                        &>li {
                            padding: 0.8rem 0.5rem;

                            &>a {
                                white-space: nowrap;
                                cursor: pointer;
                            }
                        }
                    }
                }

                .router-link-exact-active {
                    color: var(--septenary-color);
                }

                &:hover {
                    &>a {
                        color: var(--octonary-);
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