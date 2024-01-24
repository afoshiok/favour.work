<template>
    <Style>
        h1, p {
            font-family: 'Heebo', sans-serif;
        }
    </Style>
    <head>
      <title>Favour Oshiokhale | Data Engineer</title>
    </head>
    <div class="h-screen max-h-screen bg-stone-100 relative">
        <div class="z-[-1]">
            <NuxtParticles
            id="tsparticles"
            :options="options"
            ></NuxtParticles>
        </div>
        <section class="flex flex-col h-lvh justify-between">
          <header class="flex flex-row px-10 mt-4 relative z-[1]">
            <h1 class="font-[800] text-2xl text-green-500">Currently: Open to work (Data Analyst, Data Engineer, Analytics Engineer)</h1>
          </header>
          <footer class="pl-10 pb-4 relative z-[1]">
            <h1 class="text-red-500 text-7xl font-[900]">Favour Oshiokhale</h1>
            <p class="text-3xl text-orange-500 font-[800] ">Data Engineer based in Houston, TX</p>
          </footer>
        </section>

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
      value: 95
    },
    size: {
        value: 10,
        random: true
    },
    shape: {
        type: ['circle', 'square', 'star', 'triangle']
    }
  }
}

</script>