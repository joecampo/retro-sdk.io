<template>
  <div v-if="state" class="window !bg-cream" :style="{ width: width + 'px' }">
    <div class="title-bar">
      <div class="select-none title-bar-text">&nbsp; {{ titleBar }}</div>
      <div class="title-bar-controls">
        <button aria-label="Close" @click="logoff"></button>
      </div>
    </div>
    <div class="text-black window-body">
      <LoginForm v-if="state === States.LOGGED_OFF" @login="login" />
      <SignIn v-if="state === States.SIGNING_IN" :client="client" @success="loggedOn" />
      <ChatRoom v-if="state === States.LOGGED_ON" :client="client" :screen-name="screenName" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SignIn from './SignIn.vue';
import ChatRoom from './ChatRoom.vue';
import LoginForm from './LoginForm.vue';
import { States } from '../types/index';
import { Client } from 'retro-aol-sdk';
import { Events } from 'retro-aol-sdk/types';

const width = ref<number>(300);
const client = ref<Client>();
const state = ref<States>();
const titleBar = ref<string>('Retro Client 3.0');
const screenName = ref<string>(localStorage.getItem('screenName') ? localStorage.getItem('screenName' || '')! : '');

const login = async (): Promise<void> => {
  client.value = await new Client({
    server: 'https://berp.retro-sdk.io',
    websocketServer: 'https://socket.retro-sdk.io:443',
  });

  if (client.value.isOnline()) return handleSuccessfulLogin();

  client.value.on(Events.SET_SCREEN_NAME, (e: { screenName: string }) => {
    titleBar.value = `Retro Client 3.0 – Welcome, ${e.screenName}!`;
    localStorage.setItem('screenName', e.screenName);
    screenName.value = e.screenName;
  });

  state.value = States.SIGNING_IN;
  client.value.login('guest');
};

localStorage.getItem('online') === 'true' ? login() : (state.value = States.LOGGED_OFF);

const loggedOn = (): void => {
  client.value?.joinChatRoom('welcome');
  handleSuccessfulLogin();
};

const handleSuccessfulLogin = (): void => {
  width.value = 375;
  state.value = States.LOGGED_ON;
  localStorage.setItem('online', 'true');
  titleBar.value = `Retro Client 3.0 – Welcome, ${screenName.value}!`;
};

const logoff = (): void => {
  if (client.value) {
    width.value = 300;
    titleBar.value = 'Retro Client 3.0';
    state.value = States.LOGGED_OFF;
    screenName.value = '';
    localStorage.clear();
    client.value.logoff();
  }
};
</script>
<style scoped src="~/98.css/dist/98.css"></style>
