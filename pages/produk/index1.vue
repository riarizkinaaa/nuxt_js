<template>
    <div>
        <Header></Header>
            <div class="container mx-auto">
                <div class="grid grid-col-4 gap-4">
                    <div  v-for="produk in products">
                        <NuxtLink>{{ produk.title }}</NuxtLink>
                        <img src="`{{ produk.image }}`" alt="">
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