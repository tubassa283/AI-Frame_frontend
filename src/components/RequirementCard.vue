<template>
  <div class="requirement-card" @click="$emit('select', requirement)">
    <h2>{{ requirement.title }}</h2>
    <p>{{ requirement.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    requirement: { type: Object, required: true }
  }
};
</script>
