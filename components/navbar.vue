<template>
  <div>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="/images/a.gif" class="h-8 mr-3" alt="love" />
                <div class="kata">

                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Reading</span>
                </div>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a href="/contack1" class="mr-4 hover:underline md:mr-6">contack</a>
                </li>
                <li>
                    <a href="/buku/perpustakaan" class="mr-4 hover:underline md:mr-6 ">perpustakaan</a>
                </li>
                <li>
                    <a href="/buku" class="hover:underline">Rak Buku</a>
                </li> 
                
                
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </div>



</div>
</template>
<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

img{
  width: 50px;
  height: 50px;
}
.kata{
    font-style: oblique;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
body{
    background-image: url('images/awan.jpg');
    background-size: contain;
}
a{
    color:black;
}


</style>