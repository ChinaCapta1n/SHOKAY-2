<template>
    <div class="cashmere">
        <h2>Is yak the new cashmere?</h2>

        <div class="three-columns">
            <div class="column-1">
                <h2>18-20 microns</h2>
                <h2>1.2X more breathable <br> than cashmere</h2>
                <h2>30% warmer than <br> wool</h2>
            </div>
            <div class="column-2">
                <ul>
                    <li>Warm</li>
                    <li>Breathable</li>
                    <li>Non-itchy</li>
                    <li>Non-allergenic</li>
                    <li>Biodegradable</li>
                    <li>Water repellant.</li>
                </ul>

                <p class="p-style">
                    The most common natural color of the yak is a dark chocolate brown, but can also be found in white, tan,
                    and gray. Unlike wool, the scales of yak fiber are in a waved mosaic pattern, resulting in a very smooth
                    fiber that does not itch.
                </p>

                <p class="p-style">
                    Yak wool is a luxury fiber that is relatively unknown to the fashion world.
                </p>
            </div>
            <div class="column-3">
                <img src="https://static.wixstatic.com/media/a1b0fd_51ec5f0c5d404df28f63bb97f6173ec5~mv2.jpg/v1/fill/w_523,h_396,al_c,lg_1,q_80,enc_auto/%E5%9C%96%E7%89%872.jpg"
                    alt="">
            </div>
        </div>

        <h2>Yak compared to other natural fibers</h2>

        <table class="yak-table">
            <thead>
                <tr>
                    <th style="width: 30%;">Test</th>
                    <th style="width: 20%;">Yak</th>
                    <th style="width: 20%;">Cashmere</th>
                    <th style="width: 20%;">Merino Wool</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.cashmere {
    &>h2 {
        text-align: center;
        font-size: 3.2rem;
        color: #4e4142;
        margin: 5rem 0;
    }

    .three-columns {
        display: flex;
        align-items: center;
        margin: 0 auto;
        max-width: 97rem;
        margin-bottom: 2rem;

        .column-1 {
            width: 24rem;

            &>h2 {
                font-size: 2rem;
                text-align: center;

                &:nth-child(1) {
                    height: 20rem;
                }

                &:nth-child(2) {
                    height: 20rem;
                }

                &:nth-child(3) {
                    height: 10rem;
                }
            }
        }

        .column-2 {
            width: 52rem;
            padding-right: 5rem;
            padding-left: 4rem;

            p {
                text-align: left;

                &:nth-child(2) {
                    height: 20rem;
                }

                &:nth-child(3) {
                    height: 10rem;
                }
            }

            ul {
                height: 20rem;
                padding-left: 2rem;

                li {
                    list-style: disc;
                    font-size: 1.5rem;
                    font-weight: 300;
                    margin-bottom: 1rem;
                }
            }
        }

        .column-3 {
            min-width: 41.8rem;
            height: 31.3rem;

            &>img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .yak-table {
        display: block;
        border: 1px solid red;
        max-width: 90rem;
        margin: 0 auto;

        thead {
            display: block;
            width: 100%;
        }

        tr {
            display: block;
            width: 100%;
        }
    }
}
</style>