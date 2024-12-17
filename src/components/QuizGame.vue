<template>
    <div class="bg-white rounded-lg shadow-lg p-6">
      <!-- Header -->
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold text-red-600 mb-2">Christmas Quiz</h1>
        <div class="text-gray-600">
          Question {{ currentQuestionIndex + 1 }} of {{ totalQuestions }}
        </div>
        <!-- Timer -->
        <Timer :timeLeft="timeLeft" />
      </div>
  
      <!-- Question -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4">{{ currentQuestion.question }}</h2>
        <div class="space-y-3">
          <button
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            @click="$emit('select-answer', option)"
            :disabled="selectedAnswer !== null"
            :class="[
              'w-full p-3 text-left rounded-lg transition-colors duration-200',
              {
                'bg-gray-100 hover:bg-gray-200': selectedAnswer === null,
                'bg-green-100': selectedAnswer === option && option === currentQuestion.correct,
                'bg-red-100': selectedAnswer === option && option !== currentQuestion.correct,
                'opacity-50': selectedAnswer !== null && option !== selectedAnswer
              }
            ]"
          >
            {{ option }}
          </button>
        </div>
      </div>
  
      <!-- Score -->
      <div class="text-center text-lg font-semibold text-gray-700">
        Score: {{ score }}
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    currentQuestion: Object,
    currentQuestionIndex: Number,
    score: Number,
    timeLeft: Number,
    selectedAnswer: String,
    totalQuestions: Number
  });
  
  defineEmits(['select-answer']);
  </script>