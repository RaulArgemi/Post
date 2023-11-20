<template>
  <div class="entry-container">
    <div v-if="entry.emoji" class="emoji-container">
      <img :src="`/src/assets/emojis/${entry.emoji}.svg`" alt="emoji" />
    </div>
    <div class="content">
      {{ entry.body }}
    </div>
    <p class="date-info">
      {{ formatDate(entry.creationDate) }} | {{ user.username }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type Entry from "@/types/Entry";
import type User from "@/types/User";

const user: User = {
  id: 1,
  username: "Raul",
};

defineProps<{
  entry: Entry;
}>();

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;
};
</script>

<style scoped>
.entry-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.emoji-container {
  margin-bottom: 10px;
  text-align: left; 
}

.date-info {
  color: #888;
  font-size: 12px;
  margin-top: 15px;
}

.content {
  font-size: 16px;
  margin-bottom: 10px; 
}
</style>
