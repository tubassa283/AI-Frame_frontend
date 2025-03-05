<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style scoped>
/* グローバルなボタンのスタイル */
button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.list-button {
  background-color: #FFA500;  /* オレンジ */
  color: white;
}

.list-button:hover {
  background-color: #FF8C00;  /* 少し濃いオレンジ */
}

.save-button {
  background-color: #28a745;  /* 緑 */
  color: white;
}

.save-button:hover {
  background-color: #218838;  /* 少し濃い緑 */
}

button:focus {
  outline: none;
}
</style>
