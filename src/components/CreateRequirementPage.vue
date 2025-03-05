<template>
  <div class="container">
    <Header :title="'要件作成'" />
    <form @submit.prevent="saveRequirement" class="form">
      <div class="form-group">
        <label for="title">要件タイトル</label>
        <input type="text" id="title" v-model="title" required class="input-field" />
      </div>
      <div class="form-group">
        <label for="description">要件詳細</label>
        <!-- contenteditableを使い、@inputで内容を監視 -->
        <div 
          contenteditable="true" 
          class="input-field large-input" 
          @input="updateDescription"
          @keydown.enter="handleEnter"
        />
      </div>
      <div class="button-container">
        <button type="button" class="list-button" @click="listAmbiguousPoints">AIによる添削</button>
        <button type="submit" class="save-button">保存</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from './Header.vue';
import { useRouter } from 'vue-router';

export default {
  components: { Header },
  setup() {
    const title = ref('');
    const description = ref('');
    const router = useRouter();

    const listAmbiguousPoints = () => {
      // AIによる曖昧な部分のリスト化処理
    };

    const saveRequirement = async () => {
      try {
        const response = await fetch('http://localhost:5000/requirements', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: title.value, description: description.value }),
        });
        const data = await response.json();
        console.log('Success:', data);
        router.push('/');
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // 入力を監視してdescriptionを更新
    const updateDescription = (event) => {
      description.value = event.target.innerHTML;
    };

    // Enterキーで新しい行に移る際、箇条書きアイテムを追加
    const handleEnter = (event) => {
      event.preventDefault(); // デフォルトの動作（カーソルの移動）を防ぐ
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const br = document.createElement("br"); // 改行を作成
      range.deleteContents(); // 現在の選択内容を削除
      range.insertNode(br); // 改行（<br>）を挿入
      range.setStartAfter(br); // 改行後にカーソルを移動
    };

    return { title, description, listAmbiguousPoints, saveRequirement, updateDescription, handleEnter };
  }
};
</script>

<style scoped>
/* 親要素で中央寄せ */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 高さを100%にすることで中央寄せ */
  padding: 20px;
}

.form {
  width: 100%;
  max-width: 600px; /* 最大幅を設定 */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #cfe2f3; /* 薄い青の縁 */
  border-radius: 8px;
  background-color: #fff;
  font-size: 1rem;
  transition: border-color 0.3s;
  white-space: pre-wrap;
}

.input-field:focus {
  border-color: #9ec9e8; /* フォーカス時に青く変化 */
  outline: none;
}

.large-input {
  min-height: 150px; /* 要件詳細のテキストエリアを大きく */
  max-height: 300px;
  overflow-y: auto;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.list-button {
  background-color: #FFA500; /* オレンジ */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 200px;
}

.list-button:hover {
  background-color: #FF8C00; /* 濃いオレンジ */
}

.save-button {
  background-color: #28a745; /* 緑 */
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
}

.save-button:hover {
  background-color: #218838; /* 濃い緑 */
}

button:focus {
  outline: none;
}

ul {
  list-style-type: none; /* デフォルトの箇条書きスタイルを無効に */
  padding-left: 20px;
}

li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 10px;
}

li::before {
  content: "・";
  position: absolute;
  left: 0;
  top: 0;
}
</style>
