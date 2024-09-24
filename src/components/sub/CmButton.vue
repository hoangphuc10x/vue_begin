

<template>
    <b-button :variant="variant" :size="size" @click="handleClick">
      {{ content }}
    </b-button>
  </template>
  
  <script>
  export default {
    props: {
      variant: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'md'
      },
      content : {
        type: String
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  