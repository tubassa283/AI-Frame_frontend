<template>
  <div class="register-container">
    <h1 class="title">パスワード再登録</h1>
    <div class="register-form">

      <label for="password">パスワード入力</label>
      <input type="password" id="password" v-model="password" placeholder="8文字以上" />

      <label for="password_re">パスワード再入力</label>
      <input type="password" id="password_re" v-model="password_re" placeholder="8文字以上" />

      <button class="register-button" @click="register">再登録</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'RegisterPage',
  setup() {
    const password = ref('');
    const password_re = ref('');
    const router = useRouter();

    const register = () => {

      if (!validatePassword(password.value)) {
        alert('パスワードは数字、アルファベット大文字小文字、記号ありで8文字以上にしてください');
        return;
      }
      if (password.value !== password_re.value) {
        alert('パスワードが一致しません');
        return;
      }
      
      alert('仮登録が完了しました');
      router.push('/home');
    };

    const validatePassword = (password) => {
      const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*/\\:;,])[A-Za-z\d@*/\\:;,]{8,}$/;
      return re.test(password);
    };

    return { password, password_re, register };
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.title {
    font-size: 2rem;
    color: #007bff;
    font-family: cursive;
    margin-bottom: 20px;
  }

.register-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register-button {
  background-color: #28a745; /* 明るめの緑 */
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}
</style>
