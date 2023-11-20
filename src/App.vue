<template>
    <div class="app-container">
      <Formulari @create="handlePost" />
      <ul>
        <li v-for="entrada in sortedEntrades" :key="entrada.id">
          <Post :entry="entrada" />
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import Formulari from "./components/Formulari.vue";
  import Post from "./components/Post.vue";
  import type Entry from "./types/Entry";
  import { ref, computed } from "vue";
  
  const entrades = ref<Entry[]>([]);
  
  const handlePost = (entradaPost: Entry) => {
    entrades.value.unshift(entradaPost);
  };
  
  const sortedEntrades = computed(() => {
    return [...entrades.value].sort((a, b) => b.creationDate - a.creationDate);
  });
  </script>
  
  <style scoped>

  ul li{
    list-style: none;
  }
  .app-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #333;
  }
  </style>
  