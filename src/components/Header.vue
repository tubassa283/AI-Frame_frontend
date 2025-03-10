<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    title: { type: String, default: 'AI要件整理ツール' }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #f8f9fa;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
}
</style>
