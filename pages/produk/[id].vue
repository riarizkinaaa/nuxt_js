<template>
    <div>
        <Header></Header>
        <div class="container mx-auto">
            <p>{{ products.title }}</p>
            <p>{{ products.description }}</p>
            <p>{{ products.category }}</p>
            <p>{{ products.price }}</p>
            <img src="products.image" alt="{{ products.title }}">
        </div>
        <!-- <Footer></Footer> -->
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const url ='https://fakestoreapi.com/products/' + id
    const {data: products} = await useFetch(url)

    definePageMeta({
        layout : 'products' 
    })
        
</script>

<style lang="scss" scoped>

</style>