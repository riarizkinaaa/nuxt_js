<template>
  <div>
    <navbar />
    <div class="container">
      <h2 class="text-2xl font-bold mb-4">Buku Tersimpan</h2>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="book in savedBooks" :key="book.id" class="border border-gray-300 rounded-lg p-4">
          <h5 class="text-lg font-bold">{{ book.title }}</h5>
          <img :src="book.thumbnail" :alt="book.title" class="mx-auto mt-2" />
          <button @click="viewBookDetails(book.id)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">baca</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedBooks: [],
    };
  },
  mounted() {
    this.getSavedBooks();
  },
  methods: {
    getSavedBooks() {
      const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
      this.savedBooks = savedBooks.map((book) => ({
        id: book.id,
        title: book.title,
        thumbnail: this.getBookThumbnail(book.id),
      }));
    },
    getBookThumbnail(bookId) {
      // Implementasi logika untuk mendapatkan URL gambar buku berdasarkan ID buku
      // ...
    },
    viewBookDetails(bookId) {
      // Lakukan navigasi ke halaman detail buku dengan ID buku yang dipilih
      this.$router.push(`/baca/${bookId}`);
    },
  },
};
</script>

<style>
.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
</style>
