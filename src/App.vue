<template>
  <div class="container">
    <div class="header">
      <div class="tophead">
        <div class="breadcrumb">
        <router-link to="/">Laptop</router-link> &gt; <router-link to="/">Laptop Asus</router-link>
      </div>
      <div class="product-title">
        Laptop Asus Vivobook 15 X1504ZA i3 1215U/8GB/512GB/Win11 (N102W)
      </div>
      </div>
      <div class="rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <span> 4.1 (24)</span>
      </div>
    </div>
    
    <div class="product-main">
      <div class="left">
        <img alt="Main product image" src="/2024-06-17 (45) 6x4.png" />
        <div class="thumbnails">
          <button> <img alt="Thumbnail 2" src="/2024-06-17 (45).png" /> </button>
          <button> <img alt="Thumbnail 3" src="/2024-06-17 (45).png" /> </button>
          <button> <img alt="Thumbnail 4" src="/2024-06-17 (45).png" /> </button>
          <button> <img alt="Thumbnail 1" src="/2024-06-17 (45).png" /> </button>
          <button> <img alt="Thumbnail 5" src="/2024-06-17 (45).png" /> </button>
        </div>
      </div>
      <div class="right">
        <div class="discount">
          GIẢM THÊM 200.000₫
          <input placeholder="Mã giảm giá" type="text" />
          <CmButton>Áp dụng</CmButton>
        </div>
      </div>
    </div>
    <div class="tabs">
      <router-link active-class="active" to="/detail/thong-so">
        <CmButton navigate="/detail/thong-so" content="Thông số kĩ thuật" type-button="button" />
      </router-link>
      <router-link active-class="active" to="/detail/danh-gia">
        <CmButton navigate="/detail/danh-gia" content="Bài viết đánh giá" type-button="button" />
      </router-link>
    </div>
    <router-view></router-view>

    <div class="tab-content">
      <img class="img5x4" alt="Technical specifications image" src="../2024-06-17 (45) 5x4.png" />
    </div>
    
  
  </div>
</template>

<script>
import CmButton from './components/sub/CmButton.vue';

export default {
  components: {
    CmButton,
  },
  
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
}
.breadcrumb {
  font-size: 14px;
  color: #666;
}
.breadcrumb a {
  color: #007bff;
  text-decoration: none;
}
.breadcrumb a:hover {
  text-decoration: underline;
}
.product-title {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}
.rating {
  color: #f39c12;
  font-size: 14px;
}
.rating span {
  color: #666;
  margin-left: 10px;
}
.product-main {
  display: flex;
  margin-top: 20px;
}
.product-main .left {
  flex: 2;
}
.product-main .right {
  flex: 1;
  margin-left: 20px;
}
.product-main img {
  width: 100%;
}
.product-main .thumbnails {
  display: flex;
  margin-top: 10px;
}
.product-main .thumbnails img {
  width: 50px;
  margin-right: 10px;
}
.product-main .thumbnails img:last-child {
  margin-right: 0;
}
.product-main .thumbnails img:hover {
  cursor: pointer;
  border: 2px solid #007bff;
}
.discount {
  background-color: #ffeb3b;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.discount input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.guarantee {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}
.guarantee div {
  text-align: center;
  flex: 1;
}
.guarantee div i {
  font-size: 24px;
  color: #007bff;
}
.guarantee div p {
  margin: 10px 0 0;
  font-size: 14px;
}
.tabs {
  margin-top: 20px;
}
.tabs button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;
  font-size: 16px;
}
.tabs button.active {
  background-color: #007bff;
  color: #fff;
}
.tab-content {
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: -1px;

  
}
.img5x4{
  width: 325px;
  height: 420px;
}
.specs {
  margin-top: 20px;
}
.specs h3 {
  font-size: 18px;
  margin: 10px 0;
}
.spec-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.spec-item:last-child {
  border-bottom: none;
}
.spec-item span {
  font-size: 14px;
}
</style>
