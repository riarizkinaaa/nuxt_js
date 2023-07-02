<template>
    <div>
        <navbar/>
        <div class="container">
            <h1 style="text-align: center;" class="my-3">halaman contack</h1>
            <Data :data="'John Doe'" :nama="'ria rizkina'" :isLight="false"/>
        </div>
        <!-- form -->
        <div class="container">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="text"></textarea>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"><a href="/">Kembali</a> </button>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Data from '~/components/Data.vue'
    export default {
        components:{
            Data,
        }      
    }
</script>

<style lang="scss" scoped>

a{
    color: aliceblue;
}

</style>