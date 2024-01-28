<template>
    <Style>
        div {
            font-family: 'Roboto', sans-serif;
        }
    </Style>
    <head>
      <title>Favour Oshiokhale | Data Engineer</title>
    </head>
    <div class="h-screen max-h-screen bg-stone-100 relative overflow overflow-y-auto">
        <div class="z-[-1]">
            <NuxtParticles
            id="tsparticles"
            :options="options"
            ></NuxtParticles>
        </div>
        <div class="h-screen backdrop-blur-md bg-white/30 relative z-[1]">
        <main class="flex flex-col h-lvh max-w-[1920px] mx-auto justify-between">
          <header class="flex flex-row justify-between px-8 mt-4 relative z-[1]">
            <h1 class="font-[800] text-2xl text-zinc-950">Currently: Open to work (Data Analyst, Data Engineer, Analytics Engineer)</h1>
            <nav class="grid grid-cols-3 gap-4">
              <NuxtLink to="/about" class="text-zinc-950 font-[800] text-2xl cursor-pointer">About</NuxtLink>
              <NuxtLink to="/projects" class="text-zinc-950 font-[800] text-2xl cursor-pointer">Projects</NuxtLink>
              <a class="text-zinc-950 font-[800] text-2xl">Tool Box</a>
            </nav>
          </header>

          <section class="grow">
              <slot />
          </section>

          <footer class="pl-10 pb-4 relative z-[1]">
            <h1 class="text-zinc-950 text-7xl font-[900]">Favour Oshiokhale</h1>
            <p class="text-3xl text-zinc-950 font-[800] ">Data Engineer based in Houston, TX</p>
          </footer>
        </main>
        </div>
    </div>
</template>

<script setup lang="ts">

const options = {
    fullscreen: {
        enable: true,
        zIndex: 0
    },
    particles: {
    color: {
      value: ["#ef4444", "#f97316", "#22c55e", "#3b82f6", "#6366f1", "#8b5cf6"]
    },
    move: {
      enable: true
    },
    number: {
      value: 10
    },
    size: {
        value: 975,
        random: true
    },
    shape: {
        type: ['circle']
    }
  }
}

</script>