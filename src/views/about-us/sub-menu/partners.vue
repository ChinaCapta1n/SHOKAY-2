<template>
    <div class="partners">
        <div class="partners-banner">
            <img src="https://static.wixstatic.com/media/a582b8_2239ee8b117047b19fe3c2e4fc626e6d~mv2.png/v1/fill/w_1623,h_701,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a582b8_2239ee8b117047b19fe3c2e4fc626e6d~mv2.png"
                alt="">

            <div class="box">
                <h2>SHOKAY LAB</h2>
                <p>
                    In 2018, we launched Shokay Lab, a community of like-minded brands, designers, retailers, and <br>
                    manufacturers that works together to create beautiful products that are sustainably made.
                </p>
            </div>
        </div>

        <div class="partner">
            <div class="single" v-for="box in data" :key="box.id">
                <div class="left">
                    <img :src="box.imgUrl" alt="">
                </div>
                <div class="right">
                    <h2>{{ box.title }}</h2>
                    <h3>{{ box.subTitle }}</h3>
                    <p class="p-style">{{ box.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        "id": 0,
        "imgUrl": "https://static.wixstatic.com/media/a582b8_6fe83732335441ad8b33b704c126c114~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a582b8_6fe83732335441ad8b33b704c126c114~mv2.png",
        "title": "HKRITA",
        "subTitle": "Research Group",
        "content": "HKRITA is the premier R&D centre for textiles and clothing in Hong Kong. Shokay worked with HKRITA to establish fundamental research for yak wool and innovated on production methods for worsted yarns. The project won the Geneva Invention Convention Award with jury distinction."
    },
    {
        "id": 1,
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_1ba0ad2e787748c5bed2efd0d314d331~mv2.jpg/v1/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a1b0fd_1ba0ad2e787748c5bed2efd0d314d331~mv2.jpg",
        "title": "ICIMOD",
        "subTitle": "Research Group",
        "content": "ICIMOD is a unique intergovernmental institution leading the global effort to protect the Hindu Kush Himalayan Region and the people, resources and culture that define it."
    }
]
</script>

<style lang="less" scoped>
.partners {
    .partners-banner {
        position: relative;

        img {
            width: 100%;
            height: 56.1rem;
            object-fit: cover;
        }

        .box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;

            &>h2 {
                font-size: 3.6rem;
                color: #fff;
                margin-bottom: 5rem;
                position: relative;

                &::before {
                    position: absolute;
                    content: "";
                    width: 4rem;
                    height: 1px;
                    left: 50%;
                    bottom: -1.5rem;
                    transform: translateX(-50%);
                    background-color: #fff;
                }
            }

            &>p {
                color: #fff;
                margin-top: 2rem;
                font-size: 1.5rem;
                line-height: 2;
            }
        }
    }

    .partner {
        padding-top: 8rem;

        .single {
            width: 77.5rem;
            height: 33rem;
            display: flex;
            margin: 0 auto;
            background-color: #F9F9F9;
            padding-top: 2rem;
            padding-right: 4rem;
            margin-bottom: 4rem;

            .left {
                padding: 0 2rem;

                img {
                    width: 16rem;
                    height: 16rem;
                    border-radius: 100%;
                }
            }

            .right {
                &>h2 {
                    font-size: 2.4rem;
                    color: #333;
                    margin-bottom: 1rem;
                }

                &>h3 {
                    color: #a2230a;
                    font-size: 1.8rem;
                    margin-bottom: 2rem;
                }

                &>p {
                    color: #858585;
                    font-size: 1.6rem;
                    line-height: 2;
                    text-align: left;
                    font-family: avenir-light;
                }
            }
        }
    }
}
</style>