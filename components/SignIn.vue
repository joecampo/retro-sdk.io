<template>
  <ClientOnly>
    <div class="flex flex-col text-center gap-y-2">
      <img src="/img/logo_dark.svg" />
      <img src="/img/signon.gif" />
      <span>Connecting..</span>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Client } from 'retro-aol-sdk';
import { Events } from 'retro-aol-sdk/types';

const props = defineProps<{
  client?: Client;
}>();

const emit = defineEmits(['success']);

props.client?.on(Events.LOGGED_ON, () => emit('success'));
</script>
