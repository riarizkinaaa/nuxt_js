<template>
    <div>
      <navbar />
      <div class="container">
        <div v-if="book">
          <img :src="book.volumeInfo.imageLinks?.thumbnail" alt="Sampul buku" class="mx-auto mt-2" />
          <h5>judul buku: {{ book.volumeInfo.title }}</h5>
          <p v-if="book.volumeInfo.authors">Penulis: {{ book.volumeInfo.authors.join(', ') }}</p>
          <p v-if="book.volumeInfo.description">{{ book.volumeInfo.description }}</p>
          
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
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
      saveBook() {
        const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
        const bookToSave = {
          id: this.book.id,
          title: this.book.volumeInfo.title,
          // Tambahkan properti lain yang ingin Anda simpan
        };
        savedBooks.push(bookToSave);
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
        alert('Buku berhasil disimpan!');
      },
    },
  };
  </script>
  