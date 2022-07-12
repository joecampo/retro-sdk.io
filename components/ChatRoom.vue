<template>
  <div class="flex space-x-2">
    <textarea ref="chatMessagesRef" v-model="chatMessages" style="resize: none" rows="8" cols="50" readonly></textarea>
    <textarea v-model="chatUsers" style="resize: none" rows="8" readonly></textarea>
  </div>
  <div class="flex items-center justify-center gap-x-2">
    <input
      ref="messageRef"
      v-model="message"
      type="text"
      placeholder="&nbsp;Enter a message.."
      class="w-full mt-2"
      @keydown.enter="sendChatMessage"
    />
    <AolButton class="h-6" @click="sendChatMessage">Send</AolButton>
  </div>
</template>
<script setup lang="ts">
import AolButton from '@/components/AolButton.vue';
import { defineProps, ref, onMounted, nextTick } from 'vue';
import { Client } from 'retro-aol-sdk';
import { Events } from 'retro-aol-sdk/types';

const props = defineProps<{
  client?: Client;
  screenName: string;
}>();

const chatMessages = ref<string>();
const chatMessagesRef = ref<HTMLTextAreaElement>();
const chatUsers = ref<string>();
const users = ref<string[]>(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users') || '') : []);
const message = ref('');
const messageRef = ref();

onMounted(() => {
  chatMessages.value = 'Online Host: \n';
  chatMessages.value += 'Online Host: *** You are in "Welcome". ***\n';
  chatMessages.value += 'Online Host: \n';

  if (users.value.length) chatUsers.value = users.value.join('\n');
});

const sendChatMessage = (): void => {
  if (!message.value) return;

  chatMessages.value += `${props.screenName}: ${message.value}\n`;
  props.client?.sendChatMessage(message.value);
  message.value = '';
  scrollChat();
};

props.client?.on(Events.NEW_CHAT_MESSAGE, (e: { screenName: string; message: string }) => {
  if (e.screenName === props.screenName) return;

  chatMessages.value += `${e.screenName}: ${e.message}\n`;
  scrollChat();
});

props.client?.on(Events.CHAT_ROOM_USERS, (e: { users: string[] }) => {
  localStorage.setItem('users', JSON.stringify(e.users));
  users.value = e.users;
  chatUsers.value = e.users.join('\n');
});

const scrollChat = (): void => {
  nextTick((): void => {
    if (chatMessagesRef.value) chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight;
  });
};
</script>
<style scoped src="~/98.css/dist/98.css"></style>
