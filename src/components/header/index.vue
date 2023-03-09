<template>
    <PcHeader :data="data" />
</template>

<script setup>
import PcHeader from './components/pc-header.vue';

const data = [
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
                "url": "/yak"
            },
            {
                "id": 1.2,
                "text": "COMPARING YAK TO OTHER FIBERS",
                "url": "/yak"
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
        "url": "/marketing"
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
                "url": "/about-us"
            },
            {
                "id": 772,
                "text": "PARTNERS",
                "url": "/partners"
            }
        ]
    }
]
</script>

<style lang="less" scoped></style>