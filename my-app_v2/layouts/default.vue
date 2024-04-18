<template>
    <main class=" flex justify-between flex-col w-svw h-svh p-8 bg-zinc-800">
        <section class="w-full mb-2 max-w-7xl mx-auto">
            <nav class="flex flex-row justify-between align-baseline h-12">
                <div class="p-2 flex flex-col">
                    <h1 class="text-indigo-400 font-semibold text-2xl">Favour Oshiokhale</h1>
                    <p class="text-stone-200 font-semibold">Currently: Open to work (Data Engineer, Analytics Engineer, Data Analyst)</p>
                </div>
                <div class="flex flex-row gap-4 text-white font-semibold">
                    <NuxtLink to="/projects" class="text-stone-200 p-2 flex items-center">Projects</NuxtLink>
                    <a class="text-stone-200 p-2 flex items-center" href="https://www.linkedin.com/in/favour-oshio/" target="_blank">LinkedIn</a>
                    <a class="bg-indigo-400 text-stone-200 rounded-md px-4 py-2 flex items-center" href="mailto:afoshiokhale@gmail.com">Contact</a>
                </div>
            </nav>
        </section>
        <section class="grow max-w-7xl mx-auto max-h-full">
            <slot />
        </section>
        <footer class="flex max-w-7xl mx-auto">
            <p class="text-stone-200 font-semibold">Based in Houston, TX</p>
        </footer>
    </main>
</template>