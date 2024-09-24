<template>
    <div>
      <button class="btn_archo" @click="showInfo = !showInfo">{{ px }}</button>
      <div v-if="showInfo" class="cpu-info">
        <h3>Bộ xử lý</h3>
        <p v-if="p1">{{ p1 }}</p>
        <p v-if="p2">{{ p2 }}</p>
        <p v-if="p3">{{ p3 }}</p>
        <p v-if="p4">{{ p4 }}</p>
        <p v-if="p5">{{ p5 }}</p>
        <p v-if="p6">{{ p6 }}</p>
        <!-- Add more <p> tags conditionally as needed -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      p1: String,
      p2: String,
      p3: String,
      p4: String,
      p5: String,
      p6: String,
      px: String
    },
    data() {
      return {
        showInfo: false
      };
    }
  };
  </script>
  
  <style scoped>
  .btn_archo{
    width: 540px;
    --rem: 16;
    --product-price-color: #e83a45;
    --primary-ankhang: #4cb551;
    --primary-kids: #ed1164;
    --primary-color: #396ce8;
    --primary-dark-color: #1544b7;
    --white-color: #fff;
    --black-10-color: rgba(0,0,0,.1);
    --black-20-color: rgba(0,0,0,.1);
    --black-50-color: rgba(0,0,0,.5);
    --transition: all 300ms ease-in-out;
    --crmsurvey-main-color: #018846;
    font: 14px/18px Arial,Helvetica,sans-serif;
    box-sizing: border-box;
    margin: 10px;
    text-decoration: none;
    transition: .2s;
    display: block;
    overflow: hidden;
    background: #f2f4f7;
    padding: 15px 10px;
    color: #000;
    line-height: 20px;
    font-weight: 600;
    position: relative;
    border-radius: 8px;
  }
  .cpu-info {
    margin-top: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    
  }
  </style>
  