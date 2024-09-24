<template>
    <header class="bg-[#ffd500] h-[80px] py-2 flex justify-evenly items-center fixed w-screen top-0 left-0 right-0 z-50">
      <div class="w-[20%] h-full">
        <img
          class="size-full object-contain"
          src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG-B-V.png"
          alt=""
        />
      </div>
      <div class="w-[40%]">
        <input type="text" class="px-3 py-2 text-[12px] rounded-3xl w-full" placeholder="Tìm kiếm tại đây" />
      </div>
      <div class="flex items-center justify-center gap-3 text-[13px] font-medium w-[40%] text-[#333333]">
        <div
          class="flex items-center justify-between gap-2 p-3 rounded-3xl hover:bg-[#ffee99] cursor-pointer transition-all duration-150"
        >
          <i class="fa-solid fa-user"></i>
          <div>Đăng nhập</div>
        </div>
  
        <div
          class="flex items-center justify-between gap-2 p-3 rounded-3xl hover:bg-[#ffee99] cursor-pointer transition-all duration-150"
        >
          <i class="fa-solid fa-cart-shopping"></i>
          <div>Giỏ hàng</div>
        </div>
  
        <div
          class="flex items-center justify-between gap-2 p-3 bg-[#ffee99] rounded-3xl opacity-75 hover:opacity-100 cursor-pointer transition-all duration-150"
        >
          <div>
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div>TT.Đông Phú, H.Quế Sơn, Quảng Nam</div>
          <div>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style></style>
  