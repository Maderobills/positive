<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto">
      <QuizGame 
        v-if="!gameOver" 
        :currentQuestion="currentQuestion"
        :currentQuestionIndex="currentQuestionIndex"
        :score="score"
        :timeLeft="timeLeft"
        :selectedAnswer="selectedAnswer"
        :totalQuestions="questions.length"
        @select-answer="selectAnswer"
      />
      <GameOver 
        v-else 
        :score="score" 
        @restart="restartGame"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import QuizGame from '@/components/QuizGame.vue';
import GameOver from '@/components/GameOver.vue';
import { questions } from '@/stores/questins';

const currentQuestionIndex = ref(0);
const score = ref(0);
const selectedAnswer = ref(null);
const gameOver = ref(false);
const timeLeft = ref(20);
let timer;

// Shuffle questions array
const shuffledQuestions = ref([...questions].sort(() => Math.random() - 0.5));

const currentQuestion = computed(() => shuffledQuestions.value[currentQuestionIndex.value]);

const startTimer = () => {
  timeLeft.value = 20;
  timer = setInterval(() => {
    timeLeft.value--;
    if (timeLeft.value === 0) {
      handleTimeout();
    }
  }, 1000);
};

const handleTimeout = () => {
  clearInterval(timer);
  if (currentQuestionIndex.value < questions.length - 1) {
    nextQuestion();
  } else {
    gameOver.value = true;
  }
};

const selectAnswer = (answer) => {
  selectedAnswer.value = answer;
  clearInterval(timer);
  
  if (answer === currentQuestion.value.correct) {
    score.value += 10;
  }

  setTimeout(() => {
    if (currentQuestionIndex.value < questions.length - 1) {
      nextQuestion();
    } else {
      gameOver.value = true;
    }
  }, 1500);
};

const nextQuestion = () => {
  currentQuestionIndex.value++;
  selectedAnswer.value = null;
  startTimer();
};

const restartGame = () => {
  currentQuestionIndex.value = 0;
  score.value = 0;
  selectedAnswer.value = null;
  gameOver.value = false;
  shuffledQuestions.value.sort(() => Math.random() - 0.5);
  startTimer();
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>