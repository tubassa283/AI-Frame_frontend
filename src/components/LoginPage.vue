<template>
    <div class="login-container">
      <h1 class="title">AI Frame ログイン</h1>
      <div class="login-form">
        <label for="email">会員ID（メールアドレス）</label>
        <input type="email" id="email" v-model="email" placeholder="example@mail.com" />
        
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" placeholder="8文字以上" />
        
        <button class="login-button" @click="login">ログイン</button>
        
        <button class="register-button" @click="register">新規登録はこちら</button>
        
        <button class="reset-button" @click="resetPassword">再発行はこちら</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'LoginPage',
    setup() {
      const email = ref('');
      const password = ref('');
      const router = useRouter();
  
      const login = async () => {
        try {
          const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value, password: password.value }),
          });
  
          if (response.ok) {
            const data = await response.json();
            if (data.message === "ログイン成功") {
              router.push('/home');
            } else {
              alert('メールアドレスまたはパスワードが正しくありません');
            }
          } else {
            console.error('ログインに失敗しました');
          }
        } catch (error) {
          console.error('エラー:', error);
        }
      };
  
      const register = () => {
        router.push('/register');
      };
  
      const resetPassword = () => {
        router.push('/password-reset');
      };
  
      return { email, password, login, register, resetPassword };
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .title {
    font-size: 3.5rem;
    color: #007bff;
    font-family: cursive;
    margin-bottom: 20px;
  }
  
  .login-form {
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
  
  .login-button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
  }
  
  .register-button {
    background-color: orange;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .reset-button {
    background-color: #28a745; 
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>