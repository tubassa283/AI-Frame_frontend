<template>
  <div class="container">
    <Header :title="'AI要件整理ツール'" />
    
    <div class="new-requirement-container">
      <button @click="createRequirement" class="list-button">新しい要件を作成する</button>
    </div>
    
    <h2 class="title">要件一覧</h2>
    <div v-if="requirements.length === 0" class="no-requirements">要件がありません</div>
    
    <div class="requirement-list">
      <div v-for="requirement in requirements" :key="requirement.id" class="requirement-card">
        <h3>{{ requirement.title }}</h3>
        <p>{{ requirement.description }}</p>
      </div>
    </div>
    
    <p v-if="requirements.length >= 5" class="warning">これ以上は追加できません</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Header from './Header.vue';

export default {
  components: { Header },
  setup() {
    const router = useRouter();
    const requirements = ref([]);

    const fetchRequirements = async () => {
      try {
        const response = await fetch('http://localhost:8000/requirements');
        requirements.value = await response.json();
      } catch (error) {
        console.error('Error fetching requirements:', error);
      }
    };

    onMounted(fetchRequirements);

    const createRequirement = () => {
      if (requirements.value.length < 5) {
        router.push('/create-requirement');
      }
    };

    return { requirements, createRequirement };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  margin: 50px;
  margin-bottom: 60px;
}

.new-requirement-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.list-button {
  margin: 30px;
  background-color: #FFA500;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.list-button:hover {
  background-color: #FF8C00;
}

.title {
  font-size: 25px;
  margin: 20px;
  margin-bottom: 10px;
}

.no-requirements {
  color: gray;
  font-size: 16px;
}

.requirement-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.requirement-card {
  background-color: #f0f0f0;
  width: 80%;
  max-width: 600px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.warning {
  color: red;
  margin-top: 10px;
}
</style>