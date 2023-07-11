<template>
  <navbar/>
  <div class="container">
    <div class="flex space-x-4 mb-4">
      <input type="text" v-model="searchQuery" placeholder="Masukkan judul buku" class="border border-gray-300 px-4 py-2 rounded-lg w-1/2" />
      <button @click="searchBooks" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Cari</button>
    </div>

    <h2 class="text-2xl font-bold mb-4">Daftar Buku</h2>
    <div class="grid grid-cols-5 gap-4">
      <div v-for="book in displayedBooks" :key="book.id" class="border border-gray-300 rounded-lg p-4">
        <h3 class="text-lg font-bold">{{ book.volumeInfo.title }}</h3>
        <img :src="book.volumeInfo.imageLinks?.thumbnail" alt="Sampul buku" class="mx-auto mt-2" />
        <button type="button" @click="addToCart(book)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</button>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4">Hasil Pencarian</h2>
    <div v-if="searchedBooks.length > 0" class="grid grid-cols-5 gap-4">
      <div v-for="book in searchedBooks" :key="book.id" class="border border-gray-300 rounded-lg p-4">
        <h3 class="text-lg font-bold">{{ book.volumeInfo.title }}</h3>
        <img :src="book.volumeInfo.imageLinks?.thumbnail" alt="Sampul buku" class="mx-auto mt-2" />
        <button type="button" @click="addToCart(book)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</button>
      </div>
    </div>
    <p v-else class="text-gray-500">Judul buku tidak ditemukan.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      books: [],
      displayedBooks: [],
      searchedBooks: [],
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: 'javascript', // Ganti dengan pencarian awal Anda
          },
        });

        this.books = response.data.items;
        this.displayedBooks = this.books.slice(0, 20); // Menampilkan 20 buku pertama
      } catch (error) {
        console.error(error);
      }
    },
    async searchBooks() {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: this.searchQuery,
          },
        });

        this.searchedBooks = response.data.items;
        this.displayedBooks = this.searchedBooks.slice(0, 20); // Menampilkan 20 hasil pencarian pertama
      } catch (error) {
        console.error(error);
      }
    },
    addToCart(book) {
      this.$router.push({ path: `/buku/${book.id}` });
    },
  },
};
</script>

<style>
.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.btn-detail {
  background-color: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
}
</style>
