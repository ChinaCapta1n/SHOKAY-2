<template>
    <div class="commitment">
        <div class="container">
            <p class="p-style">
                Shokay's commitment to economic and environmental sustainability has been a core part of our ethos since
                2006.
                Our model of promoting the sustainable use of yak fiber in the textiles & fashion industry links closely to
                the
                Sustainable Development Goals (SDGs) put forth by the United Nations. Our community development programs
                over
                the last 15 years have focused on education, empowerment, and environment.
            </p>

            <div class="box" v-for="item in data" :key="item.id">
                <img :src="item.imgUrl" alt="">
                <h2>{{ item.title }}</h2>
                <p class="p-style">{{ item.text }}</p>
                <div class="small-image">
                    <img :src="item.subImg" alt="" class="subImg">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        "id": 0,
        "imgUrl": "https://static.wixstatic.com/media/a1b0fd_401622d643c64e08ae88d91ccc87ae9b~mv2.jpg/v1/fill/w_979,h_400,q_90/a1b0fd_401622d643c64e08ae88d91ccc87ae9b~mv2.webp",
        "title": "Herders receive immediate cash income for their fibers",
        "text": "Sourcing happens early summer. Our local cooperative sets up sourcing stations near the local township or during local festivals, making it convenient for herders to bring their fibers on site. The cooperative examines each bag of fiber and pays the herders in cash based on the quality of their fibers.",
        "subImg": "https://static.wixstatic.com/media/a582b8_e92bc315710e4323834ac38aaf58b878~mv2.jpg/v1/fill/w_289,h_98,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a582b8_e92bc315710e4323834ac38aaf58b878~mv2.jpg"
    },
    {
        "id": 1,
        "imgUrl": "https://static.wixstatic.com/media/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg/v1/fill/w_979,h_400,fp_0.4_0.23,q_90/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg 1x, https://static.wixstatic.com/media/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg/v1/fill/w_1958,h_800,fp_0.4_0.23,q_90/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg 2x, https://static.wixstatic.com/media/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg/v1/fill/w_2937,h_1200,fp_0.4_0.23,q_90/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg 3x, https://static.wixstatic.com/media/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg/v1/fill/w_3916,h_1600,fp_0.4_0.23,q_90/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg 4x, https://static.wixstatic.com/media/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg/v1/fill/w_4895,h_2000,fp_0.4_0.23,q_90/a582b8_83be7de33a1a410ab61d10cf8405ac3c~mv2.jpg 5x",
        "title": "Innovation driving demand",
        "text": "Shokay has helped catalyzed the growth of the yak wool industry over the last 15 years. We innovate across the supply chain to provide premium yarns & fabric that brands can use in their collections. Developing market demand for yak wool enables to expand our sourcing bases and provide economic opportunities for the Tibetan herders. We launched Shokay Lab, a community of like-minded brands, designers, retailers, and manufacturers, to work together to create beautiful products that are sustainably made.",
        "subImg": "https://static.wixstatic.com/media/a582b8_e5cff7e224ea4d919c7f54700e760a90~mv2.jpg/v1/fill/w_284,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a582b8_e5cff7e224ea4d919c7f54700e760a90~mv2.jpg"
    }
]
</script>

<style lang="less" scoped>
.commitment {
    .container {
        max-width: 97rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        padding: 0 3vw;

        &>p {
            padding: 6rem 0;
            line-height: 2;
            text-align: left;
        }

        .box {
            &>h2 {
                font-size: 2.3rem;
                padding: 1rem 0;
                color: var(--tertiary-color);
            }

            &>p {
                font-size: 1.5rem;
                color: var(--tertiary-color);
                text-align: left;
                padding-bottom: 1rem;
            }

            .small-image {
                margin-bottom: 6rem;

                img {
                    width: 23.1rem;
                    height: 7.8rem;
                }

                text-align: right;
            }

            &>img {
                &:nth-child(1) {
                    width: 100%;
                    height: 40rem;
                    object-fit: cover;
                }
            }

        }
    }

    @media screen and (max-width: 797px) {
        .container {
            .box {
            .small-image {
                margin: 3rem 0;
            }
        }
        }
    }
}
</style>