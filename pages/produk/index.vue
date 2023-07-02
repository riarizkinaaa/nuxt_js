<template>
    <div>
        <Header></Header>
            <div class="container mx-auto">
                <h1 class="text-center"> Data produk </h1>
                <div class="grid grid-col-4 gap-4">
                    <div  v-for="produk in products">
                        <NuxtLink  to="`/produk/${produk.id}`"><h1>{{ produk.title }}</h1></NuxtLink>
                        <img :src= produk.image alt="">
                        <p>{{ produk.price }}</p>
                        <!-- <p>{{ produk.description }}</p> -->
                    </div>
                </div>

            </div>
            <Footer></Footer>
    </div>
</template>

<script setup>
    definePageMeta( {
        layout : 'produks'
        
    })
    const {data:products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>

</style>