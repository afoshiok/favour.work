<template>
    <title>Favour Oshiokhale</title>
    <main class="flex justify-between flex-col w-[calc(100dvw)] h-[calc(100dvh)] p-8 bg-zinc-800 overflow-hidden max-sm:my-auto">
        <section class="w-full mb-2 max-w-7xl mx-auto max-sm:w-screen">
            <nav class="flex flex-row justify-between align-baseline h-12">
                <div class="p-2 flex flex-col max-sm:mr-10">
                    <NuxtLink to="/" class="text-indigo-300 font-semibold text-2xl">Favour Oshiokhale</NuxtLink>
                    <p class="text-stone-200 font-semibold max-w-sm:text-sm">Currently: Open to work (Data Engineer, Analytics Engineer, Data Analyst)</p>
                </div>
                <div class="flex flex-row gap-4 text-white font-semibold max-sm:hidden">
                    <NuxtLink to="/resume.pdf" class="text-stone-200 p-2 flex items-center" external>Resume</NuxtLink>
                    <NuxtLink to="/projects" class="text-stone-200 p-2 flex items-center">Projects</NuxtLink>
                    <a class="text-stone-200 p-2 flex items-center" href="https://www.linkedin.com/in/favour-oshio/" target="_blank">LinkedIn</a>
                    <a class="bg-indigo-400 text-stone-200 rounded-md px-4 py-2 flex items-center" href="mailto:afoshiokhale@gmail.com">Contact</a>
                </div>
            </nav>
        </section>
        <section class="grow max-w-7xl mx-auto max-h-full max-sm:w-screen mt-4">
            <slot />
        </section>
        <footer class="flex flex-col max-w-7xl mx-auto">
            <div class="flex flex-row gap-4 text-white font-semibold sm:hidden">
                    <NuxtLink to="/resume.pdf" class="text-stone-200 p-2 flex items-center">Resume</NuxtLink>
                    <NuxtLink to="/projects" class="text-stone-200 p-2 flex items-center">Projects</NuxtLink>
                    <a class="text-stone-200 p-2 flex items-center" href="https://www.linkedin.com/in/favour-oshio/" target="_blank">LinkedIn</a>
                    <a class="bg-indigo-400 text-stone-200 rounded-md px-4 py-2 flex items-center" href="mailto:afoshiokhale@gmail.com">Contact</a>
            </div>
            <p class="text-center text-stone-200 font-semibold mt-2 max-sm:text-sm">Based in Houston, TX</p>
        </footer>
    </main>
</template>