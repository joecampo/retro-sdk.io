---
layout: home
title: '{s welcome'
head:
  - - meta
    - property: 'og:image'
      content: https://retro-sdk.io/img/og.png
  - - meta
    - property: 'twitter:image:src'
      content: https://retro-sdk.io/img/og.png
  - - meta
    - property: 'twitter:card'
      content: summary_large_image
  - - meta
    - property: 'title:title'
      content:  Retro AOL SDK
  - - meta
    - property: 'title:description'
      content: An unofficial API server & JavaScript SDK for building P3OL web apps
  - - meta
    - property: 'og:type'
      content: object
  - - meta
    - property: 'og:url'
      content: https://retro-sdk.io
  - - meta
    - property: 'og:title'
      content:  Retro AOL SDK
  - - meta
    - property: 'og:description'
      content: An unofficial API server & JavaScript SDK for building P3OL web apps
---
<script setup>
import { defineAsyncComponent } from 'vue';

const RetroClient = defineAsyncComponent(() => {
  if(typeof window !== undefined) {
    return import('@/components/RetroClient.vue');
  }
});
</script>
<div class="container mx-auto" id="main">
  <div class="grid justify-center grid-cols-1 gap-4 p-4 lg:grid-cols-2">
    <div class="lg:mt-20">
      <div class="text-4xl font-bold">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
          An unofficial API server & JavaScript SDK for building <span class="whitespace-nowrap">P3OL</span> web apps
        </span>
      </div>
      <div class="flex items-center justify-center h-52 gap-x-4">
        <a href="/getting-started" class="px-3 py-2 text-lg font-bold border rounded-lg shadow text-gray-50 bg-gradient-to-r border-amber-500 from-amber-500 to-amber-600 hover:from-amber-400/90 hover:to-amber-600 active:from-amber-500 active:to-amber-600 active:border-transparent group">Get Started <span class="inline-block group-hover:animate-bounce-r">→</span></a>
        <a href="https://www.github.com/joecampo/retro-aol-sdk" class="flex px-3 py-2 text-lg font-bold border border-gray-500 border-opacity-50 rounded-lg shadow gap-x-2 text-gray-50 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-500/75 hover:to-gray-600 active:bg-gray-500 active:border-transparent">
          <img src="/icons/github.svg" height="22" width="22" />
          <span>Github</span>
        </a>
      </div>
    </div>
    <div class="lg:mt-20">
      <div class="relative mx-auto">
        <img class="z-0 mx-auto opacity-85" height="385" width="579" src="/img/Vector.png" />
        <ClientOnly>
          <RetroClient class="absolute z-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </ClientOnly>
      </div>
    </div>
  </div>
</div>
