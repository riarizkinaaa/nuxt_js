<template>
    <div>
      <h2>Data Component</h2>
      <p>Data: {{ data }}</p>
      <p>Data: {{ nama }}</p>
      <p v-if="isLight">light</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: String,
        required: true
      },
      nama:{
        type:String,
        required:true
      },
      isLight:{
        type:Boolean,
        default:false
      }
    }
  }
  </script>
  
  <style scoped>
  p{
    color: salmon;
  }
  </style>
  