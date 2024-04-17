<template>
    <div class="w-dvw h-dvh p-8 bg-zinc-800">
        <section class="w-full mb-2">
            <nav class="flex flex-row justify-between align-baseline">
                <div>
                    <h1 class="text-rose-400 font-semibold text-2xl">FAVOUR OSHIOKHALE</h1>
                    <p class="text-lime-400 font-semibold">Currently: Open to work (Data Engineer, Analytics Engineer, Data Analyst)</p>
                </div>
                <div class="flex flex-row gap-4 text-white font-semibold">
                    <a class="p-2">Github</a>
                    <a class="p-2">Linkedin</a>
                    <a class="bg-rose-400 rounded-md p-2">Contact</a>
                </div>
            </nav>
        </section>
        <slot />
    </div>
</template>