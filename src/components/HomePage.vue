<template>
  <div>
    <Header :title="'AI要件整理ツール'" />
    <RequirementList :requirements="requirements" @create="createRequirement" @select="selectRequirement" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from './Header.vue';
import RequirementList from './RequirementList.vue';

export default {
  components: { Header, RequirementList },
  setup() {
    const router = useRouter();
    const requirements = ref([
      { id: 1, title: '要件1', description: '要件1の概要' },
      { id: 2, title: '要件2', description: '要件2の概要' }
    ]);

    const createRequirement = () => {
      router.push('/create-requirement');
    };

    const selectRequirement = (requirement) => {
      router.push(`/requirement-detail/${requirement.id}`);
    };

    return { requirements, createRequirement, selectRequirement };
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
</style>
