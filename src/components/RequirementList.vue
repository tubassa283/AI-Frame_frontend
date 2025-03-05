<template>
  <div>
    <button @click="$emit('create')" class="list-button">新しい要件を作成する</button>
    <div v-for="requirement in requirements" :key="requirement.id">
      <RequirementCard :requirement="requirement" @select="$emit('select', requirement)" />
    </div>
  </div>
</template>

<script>
import RequirementCard from './RequirementCard.vue';

export default {
  components: { RequirementCard },
  props: {
    requirements: { type: Array, required: true }
  }
};
</script>

<style scoped>
/* ボタンのスタイル */
.list-button {
  background-color: #FFA500;  /* オレンジ */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.list-button:hover {
  background-color: #FF8C00;  /* 少し濃いオレンジ */
}

button:focus {
  outline: none;
}
</style>
