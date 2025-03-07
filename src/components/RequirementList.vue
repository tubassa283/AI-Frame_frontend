<template>
  <div class="container">
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.list-button {
  background-color: #FFA500;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}
</style>
