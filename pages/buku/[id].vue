<template>
  <div>
    <navbar/>
    <div class="container">
      <h1>Keranjang buku</h1>
      <div v-if="book">
        <h3>judul buku:{{ book.volumeInfo.title }}</h3>
        <p v-if="book.volumeInfo.authors">Penulis: {{ book.volumeInfo.authors.join(', ') }}</p>
        <p v-if="book.volumeInfo.description">{{ book.volumeInfo.description }}</p>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><nuxt-link to="/buku" style="color: white;">BACK</nuxt-link></button>
        <nuxt-link to="/buku/perpustakaan"  @click="simpanBuku">BUY</nuxt-link>


      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
    <!-- <Footer/> -->

  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      book: null,
    };
  },
  mounted() {
    this.fetchBook();
  },
  methods: {
    stripParagraphTags(text) {
      return text.replace(/<\/?p>/g, '');
    },
  },
  methods: {
  simpanBuku() {
    const buku = {
      id: this.$route.params.id,
      judul: this.book.volumeInfo.title,
      penulis: this.book.volumeInfo.authors,
      deskripsi: this.book.volumeInfo.description
    };

    // Menyimpan informasi buku ke dalam localStorage atau sumber data lainnya
    // Di sini kita menggunakan localStorage sebagai contoh
    const daftarBuku = JSON.parse(localStorage.getItem('daftarBuku')) || [];
    daftarBuku.push(buku);
    localStorage.setItem('daftarBuku', JSON.stringify(daftarBuku));

    // Navigasi ke halaman perpustakaan setelah menyimpan buku
    this.$router.push('buku/perpustakaan');
  }
},

  methods: {
    fetchBook() {
      const bookId = this.$route.params.id;
      axios
        .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then((response) => {
          this.book = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
