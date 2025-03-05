<template>
  <div>
    <Header :title="'要件詳細'" />
    <div v-if="requirement">
      <h2>{{ requirement.title }}</h2>
      <p>{{ requirement.description }}</p>
      <div v-for="(point, index) in ambiguousPoints" :key="index">
        <p>{{ point }}</p>
        <input type="text" v-model="supplementaryInfo[index]" placeholder="補足情報を入力" />
      </div>
      <button @click="summarizeRequirement" class="save-button">要件をまとめる</button>
      <button @click="downloadText" class="save-button">テキスト出力</button>
      <button @click="copyText" class="save-button">コピー機能</button>
      <button @click="execute" class="save-button">実施</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from './Header.vue';

export default {
  components: { Header },
  setup() {
    const requirement = ref(null);
    const ambiguousPoints = ref(['曖昧な部分1', '曖昧な部分2']);
    const supplementaryInfo = ref(['', '']);
    const route = useRoute();

    const fetchRequirement = (id) => {
      console.log(`Fetching requirement with id: ${id}`);
    };

    onMounted(() => {
      const id = route.params.id;
      fetchRequirement(id);
    });

    return { requirement, ambiguousPoints, supplementaryInfo };
  }
};
</script>

<style scoped>
/* ボタンのスタイル */
.save-button {
  background-color: #28a745;  /* 緑 */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.save-button:hover {
  background-color: #218838;  /* 少し濃い緑 */
}

button:focus {
  outline: none;
}
</style>
