<template>
    <Style>
        h1, p {
            font-family: 'Roboto', sans-serif;
        }
    </Style>
    <div class="h-screen bg-stone-100 relative">
        <div class="z-[-1]">
            <NuxtParticles
            id="tsparticles"
            :options="options"
            ></NuxtParticles>
        </div>
        <div class="pt-10 pl-12 relative z-[1]">
            <h1 class="text-red-500 font-black text-6xl">Favour Oshiokhale</h1>
            <p class="text-3xl text-orange-500 font-black">Data Engineer based in Houston, TX</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

const options = {
    fullscreen: {
        enable: true,
        zIndex: -1
    },
    particles: {
    color: {
      value: ["#ef4444", "#f97316", "#22c55e", "#3b82f6", "#6366f1", "#8b5cf6"]
    },
    move: {
      enable: true
    },
    number: {
      value: 100
    },
    size: {
        value: 7,
        random: true
    },
    shape: {
        type: ['circle', 'square', 'star', 'triangle', 'image']
    }
  }
}

const onLoad = (container: Container) => {
  // Do something with the container


}
</script>