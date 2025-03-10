<template>
    <div class="reset-container">
      <h1 class="title">パスワード再発行</h1>
      <div class="reset-form">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" placeholder="example@mail.com" />
        <button class="reset-button" @click="sendResetLink">送信する</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'PasswordResetPage',
    setup() {
      const email = ref('');
  
      const sendResetLink = async () => {
        try {
          const response = await fetch('http://localhost:8000/password-reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value }),
          });
  
          if (response.ok) {
            alert('パスワード再発行リンクを送信しました');
          } else {
            console.error('送信に失敗しました');
          }
        } catch (error) {
          console.error('エラー:', error);
        }
      };
  
      return { email, sendResetLink };
    }
  };
  </script>
  
  <style scoped>
  .reset-container {
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
  
  .reset-form {
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
  
  .reset-button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
  }
  </style>
  