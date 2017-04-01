<template>
    <div id="firstcomponent">
        <h1>I am a title</h1>
        <a href="#">written by {{author}}</a>
    </div>
</template>
<script>
module.exports = {
    data() {
      return {
          author:'zxx'
      }
    }
}
</script>
<style scoped>
    #firstcomponent{color:#999;}
</style>