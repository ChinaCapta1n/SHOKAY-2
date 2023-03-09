<template>
    <div class="single-blog">
        <div class="blog" v-for="(single, index) in data" :key="single.id">
            <a :href="single.link">
                <div class="left">
                    <img :src="single.imgUrl" alt="">
                </div>
                <div class="right">
                    <div class="title">
                        <div class="post-time">
                            <img src="https://static.wixstatic.com/media/a1b0fd_35914c03706e49c98b5b648b627f5cc0~mv2.png/v1/fit/w_64%2Ch_64%2Cal_c/file.png"
                                alt="">
                            <div class="time">
                                <p class="text-and-svg">Shokay Textiles <svg xmlns="http://www.w3.org/2000/svg" width="19"
                                        viewBox="0 0 19 19" class="blog-post-homepage-description-fill"
                                        style="fill-rule: evenodd;">
                                        <path
                                            d="M6.45342775,7.90809427 C6.47137986,7.67117444 6.68963973,5.87674187 8.37808299,4.90340332 C8.41115266,5.58764834 8.60768103,6.30696092 8.92231539,6.73461406 C8.84483786,6.6302667 9.46560296,3.27490017 11.0397196,2.66934333 C11.3288431,2.55815351 12.4683297,2.18523997 13.0900396,2.03128484 C13.7117496,1.87647441 14.1917323,2.33662919 13.9243403,2.52821779 C13.1845244,3.0602183 12.4730539,4.28587219 12.2406213,4.77168616 C12.0412584,5.18822031 11.627415,6.07773884 11.1776674,7.44451827 C10.9017718,8.28186312 9.66213133,9.06617897 8.89396996,9.20901512 C9.40607754,9.70765868 10.5597369,9.42626292 10.5474538,9.45790925 C9.40607754,12.5943174 8.43571871,13.3401444 8.08140074,13.6309486 C7.9169972,13.7669423 7.72613791,13.8926723 7.57779679,14.0320872 C7.49748471,14.1056436 7.47386352,14.1980166 7.43984899,14.2792707 C7.27355575,14.6735669 6.94852806,15.5810469 6.46571077,17 L6.15580065,16.7605142 C6.3853987,15.1525384 6.44397927,14.5478369 6.48649743,14.313483 C6.51106347,14.1800552 6.4505932,14.1056436 6.35610841,14.0380744 C5.91108504,13.721611 5.59361613,13.3521187 5.36401808,12.9458482 C5.16371032,12.5934621 5.05977705,12.2119955 5.01820374,11.816844 C4.97096134,11.3643869 5.0115898,10.889692 5.18827637,10.4201288 C5.29315449,10.1430096 5.42637805,9.82911217 5.68432153,9.36125964 C5.92147836,10.2165659 6.64806642,10.3226239 6.65562521,10.3209133 C6.58759615,10.1122186 6.33721145,9.42711822 6.45342775,7.90809427">
                                        </path>
                                    </svg></p>
                                <p>2 min</p>
                            </div>
                        </div>
                        <button class="three-dots" ref="threeDots" @click="showPopUpBox(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img"
                                class="blog-post-homepage-description-fill blog-post-homepage-link-hashtag-hover-fill">
                                <path
                                    d="M2.44398805,5.99973295 C1.62345525,5.9690612 0.980075653,5.28418875 1.00047182,4.46312144 C1.02086799,3.64205413 1.69745853,2.98998831 2.51850166,3.0001164 C3.33954478,3.01024449 3.99985313,3.67880182 4,4.50012255 C3.98424812,5.34399206 3.28763905,6.0153508 2.44398805,5.99973295 L2.44398805,5.99973295 Z M2.44398805,10.9997329 C1.62345525,10.9690612 0.980075653,10.2841888 1.00047182,9.46312144 C1.02086799,8.64205413 1.69745853,7.98998831 2.51850166,8.0001164 C3.33954478,8.01024449 3.99985313,8.67880182 4,9.50012255 C3.98424812,10.3439921 3.28763905,11.0153508 2.44398805,10.9997329 L2.44398805,10.9997329 Z M2.44398805,15.9997329 C1.62345525,15.9690612 0.980075653,15.2841888 1.00047182,14.4631214 C1.02086799,13.6420541 1.69745853,12.9899883 2.51850166,13.0001164 C3.33954478,13.0102445 3.99985313,13.6788018 4,14.5001225 C3.98424812,15.3439921 3.28763905,16.0153508 2.44398805,15.9997329 L2.44398805,15.9997329 Z">
                                </path>
                            </svg>
                            <div class="pop-up-box" ref="popUpBox">
                                <div class="wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img"
                                        class="blog-icon-fill">
                                        <path
                                            d="M16.9410444,8.39109677 C17.0195644,8.46818967 17.0195644,8.59371274 16.9410444,8.67080564 L11.9026789,13.6176004 C11.7063789,13.8103326 11.3872657,13.8103326 11.1909657,13.6176004 C11.096339,13.5246935 11.0429857,13.3991705 11.0429857,13.2677172 L11.0429857,11.0013834 C7.27402658,11.0013834 4.38690723,12.7339971 2.38263435,16.1972475 C2.27794104,16.3781194 1.99204777,16.3049799 2.0001011,16.0964337 C2.24975438,10.0357454 5.2637137,6.69011101 11.0429857,6.05953059 L11.0429857,3.79418524 C11.0429857,3.52040659 11.268479,3.29999995 11.5463189,3.29999995 C11.6802056,3.29999995 11.8080522,3.35139522 11.9026789,3.44430206 L16.9410444,8.39109677 Z M3.43409745,13.1243046 C5.43837033,11.0576217 7.98624309,10.0139024 11.0434891,10.0139024 L12.0501555,10.0139024 L12.0501555,12.0746551 L15.6600614,8.53035818 L12.0501555,4.98704968 L12.0501555,6.94501178 L11.1542224,7.0418721 C6.94635665,7.50146442 4.39949056,9.49994971 3.43409745,13.1243046 Z">
                                        </path>
                                    </svg>
                                    <p>Share Post</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="content">
                        <h2>{{ single.title }}</h2>
                        <p>{{ single.text }}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';


const threeDots = ref(null);

function showPopUpBox(index) {
    event.cancelBubble = true;
    threeDots.value[index].classList.toggle('show')
}

function hidePopUpBox(e) {
    e.cancelBubble = true;
    Array.from(threeDots.value).forEach(item => {
        item.classList.remove('show');
    })
}

onMounted(() => {
    document.addEventListener('click', hidePopUpBox)
})

const data = [
    {
        "id": 0,
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_fcfc6f7ed3bc4638ba3d165c0c73e639~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/a1b0fd_fcfc6f7ed3bc4638ba3d165c0c73e639~mv2.jpg",
        "link": "javascript:;",
        "title": "Is Yak the New Cashmere?",
        "text": "Yak wool is softer, warmer and more sustainable than its competitors. So, how hasn't it reached the fashion market?"
    },
    {
        "id": 1,
        "imgUrl": "https://static.wixstatic.com/media/a582b8_0cddb2a5efa64ec89c116434b5750969~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/a582b8_0cddb2a5efa64ec89c116434b5750969~mv2.jpg",
        "link": "javascript:;",
        "title": "The Importance of Traceability to Today’s Consumer",
        "text": "What is traceability and why is it important to today's consumer?"
    }
]
</script>

<style lang="less" scoped>
.single-blog {
    display: flex;
    flex-direction: column;

    .blog {
        margin-bottom: 4rem;

        a {
            width: 100%;
            height: 100%;
            display: flex;
            cursor: default;

            .left,
            .right {
                height: 34rem;
            }

            .left {
                width: 45.4rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .right {
                width: 48.6rem;
                border: 1px solid rgb(207, 200, 200);
                padding: 2.4rem 3.6rem;

                &:hover {
                    .content {

                        &>h2,
                        &>p {
                            color: #928A69;
                        }
                    }
                }

                .title {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;

                    .post-time {
                        display: flex;
                        align-items: center;

                        &>img {
                            width: 3.2rem;
                            height: 3.2rem;
                            margin-right: 1rem;
                        }

                        .time {
                            display: flex;
                            flex-direction: column;

                            &:hover {
                                &>.text-and-svg {
                                    color: #928A69;
                                }
                            }

                            .text-and-svg {
                                display: flex;
                                align-items: center;
                            }
                        }
                    }

                    .three-dots {
                        position: relative;
                        cursor: pointer;

                        &.show {
                            .pop-up-box {
                                display: block;
                            }
                        }

                        .pop-up-box {
                            position: absolute;
                            width: 20rem;
                            height: 5.2rem;
                            box-shadow: 0px 0px 3px rgb(199, 187, 187);
                            background-color: #fff;
                            transform: translate(-105%, 10%);
                            cursor: pointer;
                            display: none;
                            z-index: 2;

                            .wrapper {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                padding-left: 3rem;

                                &>p {
                                    margin-left: 1rem;
                                }
                            }


                        }
                    }
                }

                .content {
                    &>h2 {
                        font-size: 2.8rem;
                        color: var(--tertiary-color);
                        font-family: avenir-light;
                        font-weight: 600;
                        margin: 1.5rem 0;
                    }

                    &>p {
                        line-height: 1.7;
                        font-size: 1.6rem;
                        color: var(--quaternary-color);
                        font-family: avenir-light;
                    }
                }
            }
        }



    }
}
</style>