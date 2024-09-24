<template>
  <div class="w-full h-auto">
    <div>
      <span>5</span>
      <i class="fa-solid fa-star"></i>
    </div>
    <div class="w-[400px] h-[10px] rounded-full bg-gray-500"></div>
    <div>{{ ratio }}</div>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: Number,
    },
  },
};
</script>

<style></style>
