<template>
    <div>
        <b-carousel>
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section class="hero is-medium">
                    <figure class="image is-3by1">
                        <img :src="carousel.ruta">
                    </figure>
                    <!-- <div class="hero-body has-text-centered">
                        <h1 class="title">{{carousel.text}}</h1>
                    </div> -->
                </section>
            </b-carousel-item>
        </b-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return {
            carousels: [
                { text: 'Slide 1', ruta: require('../assets/1.png') },
                { text: 'Slide 2', ruta: require('../assets/2.jpeg') },
                { text: 'Slide 3', ruta: require('../assets/3.jpeg') },
            ]
        }
    }
}
</script>