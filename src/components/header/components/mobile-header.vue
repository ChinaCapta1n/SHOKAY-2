<template>
    <div class="mobile header">
        <img src="https://static.wixstatic.com/media/9f945e_e90956d6d3e84adf96274188be774a65~mv2.png/v1/fill/w_440,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo_edited.png" alt="">

        <div class="hamburger" ref="hamburgerElement" @click="hamburgerFn">
            <div class="wrap">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
            </div>
        </div>

        <div class="mobile-menu">
            <div class="mobile-menu-wrap">
                <ul class="mobile-body">
                    <li v-for="nav in data" :key="nav.id">
                        <div class="charactor-and-link">
                            <p v-if="nav.children !== undefined" @click.stop="changeCharacterFn">
                                <span></span>
                                <span></span>
                            </p>
                            <router-link :to="nav.url" @click.stop="routerFn">
                                {{ nav.text }}
                            </router-link>
                        </div>

                        <ul class="sub-menu">
                            <li v-for="child in nav.children" :key="child.id">
                                <router-link :to="child.url" @click.stop="routerSubMenuFn(child.text)">
                                    {{ child.text }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="select-languages">
                    <div class="single-language">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useScrollTotore from '@/stores/modules/scrollTo.js';

const router = useRouter();
const route = useRoute();

const store = useScrollTotore();

const hamburgerElement = ref(null);
const bodyElement = ref(document.body);
const spanElement = ref(null);

const eTarget = ref(null);


defineProps({
    data: {
        type: Array, 
        required: true
    }
})

function hamburgerFn(e) {
    hamburgerElement.value.classList.toggle('active');
    bodyElement.value.classList.toggle('hidden');
}

function changeCharacterFn(e) {
    eTarget.value = e;
    eTarget.value.currentTarget.classList.toggle('active');
    eTarget.value.currentTarget.parentNode?.parentNode?.children[1]?.classList.toggle('active');
}

function routerFn(text) {
    hamburgerFn();
}

function routerSubMenuFn(text) {
    redirectTo(text);
    hamburgerFn();
}

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

</script>

<style lang="less" scoped>
.header.mobile {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8.3rem;
    &>img {
        width: 22rem;
        height: 5.8rem;
        display: block;
    }
    .hamburger {
        width: 2rem;
        height: 1.75rem;
        position: fixed;
        right: 4rem;
        z-index: 1000;
        .wrap {
            position: relative;
            height: 100%;
            & > span {
                display: block;
                width: 100%;
                height: 0.2rem;
                background-color: #000;
                position: absolute;
                transition: .3s all;
            }

            & > .line-1 {
                top: 0;
            }

            & > .line-2 {
                top: 50%;
                transform: translateY(-50%);
            }

            & > .line-3 {
                bottom: 0;
            }
        }

        &.active {
            overflow: hidden;
            .wrap {
                & > .line-1 {
                    transform: rotate(44deg) translate(4px, 9px);
                }
                & > .line-2 {
                    opacity: 0;
                }
                & > .line-3 {
                    transform: rotate(-44deg) translate(2px, -6px);
                }
            }
        }

        &.active ~ .mobile-menu {
            // display: block;
            height: 100%;
            overflow:initial;
            opacity: 1;
        }
    }

    

    .mobile-menu {
        position: fixed;
        inset: 0;
        background-color: #fff;
        z-index: 999;
        opacity: 0;
        height: 0;
        overflow: hidden;
        transition: .3s opacity;
        
        .mobile-menu-wrap {
            width: 90%;
            height: 100%;
            position: absolute;
            top: 12%;
            left: 50%;
            transform: translateX(-50%);
            .mobile-body {
                overflow: scroll;
                height: calc(100vh - 6rem);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                & > li {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 60%;
                    border-bottom: 1px solid rgb(206, 196, 196);

                    .sub-menu {
                        height: 0;
                        overflow: hidden;

                        &.active {
                            height: auto;
                        }
                        & > li {
                            padding-bottom: 2rem;
                            & > a {
                                font-size: 1.8rem;
                                color: #000;
                                font-family: sans-serif;
                                font-weight: 300;
                            }
                        }
                    }

                    .charactor-and-link {
                        display: flex;
                        align-items: center;
                        & > p {
                            font-size: 2.2rem;
                            margin-right: .8rem;
                            width: 1.4rem;
                            height: 2rem;
                            position: relative;
                            top: .8rem;
                            z-index: 2;

                            &.active {
                                span {
                                    &:nth-child(1) {
                                        display: none;
                                    }
                                }
                            }
                            &>span {
                                display: block;
                                width: 1.4rem;
                                height: 1px;
                                background-color: #000;
                                &:nth-child(2) {
                                    transform: rotate(90deg);
                                }
                            }
                        }
                        & > a {
                            font-size: 1.8rem;
                            font-weight: 300;
                            font-family: sans-serif;
                            display: block;
                            padding: 2rem 0;
                            margin-left: .8rem;
                        }
                    }
                }
            }

            .select-languages {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 4.5rem;
                // background-color: #e5e5e5;
                background-color: red;
            }
        }
    }
}

.router-link-exact-active {
    color: var(--septenary-color);
}
</style>