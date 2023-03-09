<template>
    <div class="fibers">
        <ul class="wrapper">
            <li>
                <img src="https://static.wixstatic.com/media/a1b0fd_c75402cc6c964d5bae8931d9edf40042~mv2.png/v1/fill/w_255,h_599,al_c,lg_1,q_85,enc_auto/a1b0fd_c75402cc6c964d5bae8931d9edf40042~mv2.png"
                    alt="">
            </li>
            <li class="title-and-text">
                <h2>Fibers & Tops</h2>
                <p class="p-style">
                    Shokay is able to offer the widest range of carded yak wool fibers & tops available in the market
                    because we source directly from different Tibetan regions and is able to classify different qualities of
                    fiber right from the source.
                </p>
            </li>
            <li>
                <img src="https://static.wixstatic.com/media/a1b0fd_babeebebed404e51ae9f8201d4f20704~mv2.jpg/v1/fill/w_261,h_614,al_c,lg_1,q_80,enc_auto/a1b0fd_babeebebed404e51ae9f8201d4f20704~mv2.jpg"
                    alt="">
            </li>
            <li class="title-and-text">
                <h2>Fillings</h2>
                <p class="p-style">Shokay creates fillings using a blend of yak hair and RPET for use as fillings for
                    blankets and quilted
                    fabrics.</p>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.fibers {
    min-height: calc(100vh - 186px);

    .wrapper {
        display: flex;
        min-height: calc(100vh - 186px);

        li {
            flex: 25%;

            &>img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .title-and-text {
            padding: 5vw 3vw;

            &>h2 {
                font-size: 3.2rem;
                color: var(--quinary-color);
                text-align: center;
                margin-bottom: 3rem;
            }

            &>p {
                line-height: 2;
                text-align: left;
            }
        }
    }
}
</style>