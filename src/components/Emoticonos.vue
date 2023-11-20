<template>
    <div class="emoji-container">
      <div
        v-for="emoji in emojis"
        :key="emoji"
        @click="selectEmoji(emoji)"
        :style="{ transform: modelValue === emoji ? 'scale(1.2)' : 'scale(1)' }"
      >
        <img :src="`./src/assets/emojis/${emoji}.svg`" alt="emoji" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from "vue";
  import type Emoji from "@/types/Emoji";
  
  const props = defineProps(["modelValue"]);
  const emit = defineEmits();
  
  const emojis: Emoji[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
  ];
  
  const selectEmoji = (emoji: Emoji) => {
    if (props.modelValue === emoji) {
      emit("update:modelValue", null);
    } else {
      emit("update:modelValue", emoji);
    }
  };
  </script>
  
  <style scoped>
  .emoji-container {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 10px;
  }
  
  img {
    transition: transform 0.2s ease-in-out;
  }
  </style>
  