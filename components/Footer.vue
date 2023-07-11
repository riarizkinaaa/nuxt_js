<template>
    <footer class="bg-gray-900 text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {{ currentYear }} My Website. All rights reserved.</p>
        </div>
        <div>
          <ul class="flex space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style scoped>
  a {
    color: white;
  }
  </style>
  