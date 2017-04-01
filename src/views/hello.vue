<!-- hello.vue -->
<template>
    <strong>{{vueMsg}}</strong>
</template>
<script>
module.exports = {
    data() {
      return {
          vueMsg:'Vue hello world'
      }
    }
}
</script>
<style scoped>
  strong{
    background-color: #f00;
  }
</style>