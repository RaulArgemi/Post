<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from "vue";
import Emoticonos from "@/components/Emoticonos.vue";
import type Entry from "@/types/Entry";
import type Emoji from "@/types/Emoji";

const emit = defineEmits(["create"]);

const maxCharacters = 280;
const body = ref("");
const emoji = ref<Emoji | null>(null);
const charCount = computed(() => body.value.length);

const collectTextForm = (e: Event) => {
    const textarea = e.target as HTMLTextAreaElement;
    if (textarea.value.length <= maxCharacters) {
        body.value = textarea.value;
    } else {
        body.value = textarea.value = textarea.value.substring(0, maxCharacters);
    }
};

const handleSubmit = () => {
    emit("create", {
        body: body.value,
        emoji: emoji.value,
        creationDate: new Date(),
        userId: 1,
        id: Math.random(),
    });
    body.value = "";
    emoji.value = null;
};
</script>

<template>
    <div class="form-container">
        <form @submit.prevent="handleSubmit">
            <h1>My Journaly Diary</h1>
            <textarea v-model="body" ref="textarea" @input="collectTextForm" name="my-diary" cols="50" rows="10"></textarea>
            <Emoticonos v-model="emoji" />
            <div>
                <span>{{ charCount }}/{{ maxCharacters }}</span>
                <button class="post-button" type="submit">Post</button>
            </div>
        </form>
    </div>
</template>
  

  
<style scoped>
.form-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.post-button {
    margin-top: 10px;
}
</style>
  