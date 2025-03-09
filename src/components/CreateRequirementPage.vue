<template>
  <div class="container">
    <Header :title="'要件作成'" />
    <form @submit.prevent="saveRequirement" class="form">
      <!-- ボタンを要件作成の下に移動 -->
      <div class="button-container">
        <!-- AIによる添削ボタン -->
        <button type="button" class="list-button" @click="listAmbiguousPoints">AIによる添削</button>
        <button type="submit" class="save-button">保存</button>
      </div>

      <div class="form-group">
        <label for="title">要件タイトル</label>
        <input type="text" id="title" v-model="title" required class="input-field" />
      </div>

      <div class="form-group">
        <label for="description">要件詳細</label>
        <textarea v-model="description" class="input-field large-input"></textarea>
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

    // AIによる添削ボタンの処理（現在はダミー）
    const listAmbiguousPoints = () => {
      console.log("AIによる添削機能は未実装です。");
    };

    // 要件保存処理
    const saveRequirement = async () => {
      try {
        const response = await fetch('http://localhost:8000/requirements', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: title.value, description: description.value }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('要件が保存されました:', data);
          router.push('/'); // 保存後にホームページにリダイレクト
        } else {
          console.error('保存に失敗しました');
        }
      } catch (error) {
        console.error('エラー:', error);
      }
    };

    const updateDescription = (event) => {
      description.value = event.target.innerHTML;
    };

    const handleEnter = (event) => {
      event.preventDefault();
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const br = document.createElement("br");
      range.deleteContents();
      range.insertNode(br);
      range.setStartAfter(br);
    };

    return { title, description, saveRequirement, listAmbiguousPoints, updateDescription, handleEnter };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
}

.form-group label {
  background-color: transparent; /* 背景を透明に設定 */
}

.form {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #f9f9f92f;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #cfd7f3;
  border-radius: 8px;
  background-color: #fff; /* 背景色を白に */
  box-sizing: border-box; /* 枠内の余白を含むように調整 */
}

.large-input {
  min-height: 400px; /* 縦の長さを倍にする（200px -> 400px） */
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px; /* 上部とボタンの間にスペースを確保 */
}

.list-button {
  background-color: #FF6347;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
}

.list-button:hover {
  background-color: #FF4500;
}

.save-button {
  background-color: #28a745;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 4px;
  width: 200px;
}

.save-button:hover {
  background-color: #218838;
}

button:focus {
  outline: none;
}
</style>
