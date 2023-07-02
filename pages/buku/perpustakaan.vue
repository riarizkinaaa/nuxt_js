<template>
    <div>
      <h1>Perpustakaan</h1>
      <ul>
        <li v-for="book in daftarBuku" :key="book.id">
          <h2>{{ book.judul }}</h2>
          <p>{{ book.penulis }}</p>
          <p>{{ book.deskripsi }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        daftarBuku: []
      };
    },
    created() {
      this.daftarBuku = JSON.parse(localStorage.getItem('daftarBuku')) || [];
    },
    
  };
  </script>
  