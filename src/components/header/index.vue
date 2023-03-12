<template>
    <PcHeader :data="dataPc" v-if="windowSize > 979" />

    <MobileHeader :data="dataMobile" v-else />

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import PcHeader from './components/pc-header.vue';
import MobileHeader from './components/mobile-header.vue';
import windowSize from '@/utils/getViewPort.js';


const dataPc = [
    {
        "id": 0,
        "text": "HOME",
        "url": "/home"
    },
    {
        "id": 1,
        "text": "FIBER",
        "url": "/yak",
        "children": [
            {
                "id": 1.1,
                "text": "ABOUT THE YAK",
                "url": ""
            },
            {
                "id": 1.2,
                "text": "COMPARING YAK TO OTHER FIBERS",
                "url": ""
            }
        ]
    },
    {
        "id": 2,
        "text": "SOURCING",
        "url": "/products",
        "children": [
            {
                "id": 2.1,
                "text": "FIBERS & FILLINGS",
                "url": "/fibers"
            },
            {
                "id": 2.2,
                "text": "YARNS",
                "url": "/yarns"
            },
            {
                "id": 2.3,
                "text": "FABRICS",
                "url": "/fabrics"
            },
            {
                "id": 2.4,
                "text": "ACCESSORIES",
                "url": "accessories"
            },
            {
                "id": 2.5,
                "text": "APPAREL",
                "url": "apparel"
            },
            {
                "id": 2.6,
                "text": "HOME & LIFESTYLE",
                "url": "sub-accessories"
            }
        ]
    },
    {
        "id": 3,
        "text": "DESIGN",
        "url": "/design",
        "children": [
            {
                "id": 3.1,
                "text": "FASION",
                "url": "/fasion"
            },
            {
                "id": 3.2,
                "text": "LIFESTYLE",
                "url": "/lifestyle"
            },
            {
                "id": 3.3,
                "text": "ARTIST",
                "url": "/artist"
            },
            {
                "id": 3.4,
                "text": "CORPORATE",
                "url": "/corporate"
            }
        ]
    },
    {
        "id": 4,
        "text": "MARKETING",
        "url": "/marketing",
        "children": [
            {
                "id": 4.1,
                "text": "TRACEABILITY & VERIFICATION",
                "url": ""
            },
            {
                "id": 4.2,
                "text": "MEDIA LICENSING",
                "url": ""
            }
        ]
    },
    {
        "id": 5,
        "text": "IMPACT",
        "url": "/impact",
        "children": [
            {
                "id": 4.1,
                "text": "SUSTAINABLE DEVELOPMENT GOLDS",
                "url": "/community-development"
            },
            {
                "id": 4.2,
                "text": "GLASSLAND CONSERVATION PROGRAM",
                "url": "/environment"
            }
        ]
    },
    {
        "id": 6,
        "text": "BLOG",
        "url": "/blog"
    },
    {
        "id": 7,
        "text": "ABOUT US",
        "url": "/about-us",
        "children": [
            {
                "id": 771,
                "text": "OUR STORY",
                "url": ""
            },
            {
                "id": 772,
                "text": "PARTNERS",
                "url": "/partners"
            }
        ]
    }
]

const dataMobile = [
    {
        "id": 0,
        "text": "HOME",
        "url": "/home"
    },
    {
        "id": 1,
        "text": "FIBER",
        "url": "/yak",
        "children": [
            {
                "id": 1.1,
                "text": "ABOUT THE YAK",
                "url": ""
            },
            {
                "id": 1.2,
                "text": "COMPARING YAK TO OTHER FIBERS",
                "url": ""
            }
        ]
    },
    {
        "id": 2,
        "text": "SOURCING",
        "url": "/products",
        "children": [
            {
                "id": 2.1,
                "text": "FIBERS & FILLINGS",
                "url": "/fibers"
            },
            {
                "id": 2.2,
                "text": "YARNS",
                "url": "/yarns"
            },
            {
                "id": 2.3,
                "text": "FABRICS",
                "url": "/fabrics"
            },
            {
                "id": 2.4,
                "text": "ACCESSORIES",
                "url": "accessories"
            },
            {
                "id": 2.5,
                "text": "APPAREL",
                "url": "apparel"
            },
            {
                "id": 2.6,
                "text": "HOME & LIFESTYLE",
                "url": "sub-accessories"
            }
        ]
    },
    {
        "id": 3,
        "text": "DESIGN",
        "url": "/design",
        "children": [
            {
                "id": 3.1,
                "text": "FASION",
                "url": "/fasion"
            },
            {
                "id": 3.2,
                "text": "LIFESTYLE",
                "url": "/lifestyle"
            },
            {
                "id": 3.3,
                "text": "ARTIST",
                "url": "/artist"
            },
            {
                "id": 3.4,
                "text": "CORPORATE",
                "url": "/corporate"
            }
        ]
    },
    {
        "id": 4,
        "text": "MARKETING",
        "url": "/marketing",
        "children": [
            {
                "id": 4.1,
                "text": "TRACEABILITY & VERIFICATION",
                "url": ""
            },
            {
                "id": 4.2,
                "text": "MEDIA LICENSING",
                "url": ""
            }
        ]
    },
    {
        "id": 5,
        "text": "IMPACT",
        "url": "/impact",
        "children": [
            {
                "id": 4.1,
                "text": "SUSTAINABLE DEVELOPMENT GOLDS",
                "url": "/community-development"
            },
            {
                "id": 4.2,
                "text": "GLASSLAND CONSERVATION PROGRAM",
                "url": "/environment"
            }
        ]
    },
    {
        "id": 6,
        "text": "BLOG",
        "url": "/blog"
    },
    {
        "id": 7,
        "text": "ABOUT US",
        "url": "/about-us",
        "children": [
            {
                "id": 771,
                "text": "OUR STORY",
                "url": ""
            },
            {
                "id": 772,
                "text": "PARTNERS",
                "url": "/partners"
            }
        ]
    }
]


// onUnmounted(() => {
//     window.addEventListener('resize', getViewPortSize);
// })
</script>

<style lang="less" scoped></style>