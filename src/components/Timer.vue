<template>
    <div class="mt-2">
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div
          class="bg-red-600 h-2.5 rounded-full transition-all duration-1000"
          :style="{ width: `${(timeLeft / 20) * 100}%` }"
        ></div>
      </div>
      <div class="text-sm text-gray-500 mt-1">Time left: {{ timeLeft }}s</div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    timeLeft: Number
  });
  </script>