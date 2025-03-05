<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',  // コンポーネント名を複数単語に変更
  props: {
    title: { type: String, default: 'AI要件整理ツール' }
  }
};
</script>
