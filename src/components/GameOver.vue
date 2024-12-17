<template>
    <div class="bg-white rounded-lg shadow-lg p-6 text-center">
      <h2 class="text-2xl font-bold text-red-600 mb-4">Game Over!</h2>
      <p class="text-xl mb-4">Final Score: {{ score }}</p>
      <button
        @click="$emit('restart')"
        class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Play Again
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    score: Number
  });
  
  defineEmits(['restart']);
  </script>