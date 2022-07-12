<template>
  <img src="/img/logo_dark.svg" />
  <fieldset>
    <div class="field-row-stacked">
      <label for="screenName">Select Screen Name:</label>
      <select id="screenName">
        <option selected class="px-2">&nbsp;Guest</option>
      </select>
    </div>
  </fieldset>
  <fieldset class="flex justify-end">
    <AolButton @click="$emit('login')">SIGN ON</AolButton>
  </fieldset>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue';
import AolButton from '@/components/AolButton.vue';

defineEmits(['login']);
</script>
<style scoped src="~/98.css/dist/98.css"></style>
