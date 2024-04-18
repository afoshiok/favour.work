
import Project1 from '../../components/project1.vue';
<template>
    <div class="h-full mt-4">
        <section class="flex justify-center">
            <h1 class="text-stone-200 font-bold text-2xl">Projects</h1>
        </section>
        <section class="mt-4 flex flex-row gap-4">
            <div class="flex flex-col w-96 h-96 rounded-xl bg-zinc-600 p-4">
                <h1 class="text-stone-200 font-semibold">Letterboard</h1>
                <div class="w-6/7 h-3/5 rounded-xl bg-zinc-500 mt-2 flex items-center justify-center">
                    <Letterboard class="w-4/5 h-4/5"/>
                </div>
                <div class="mt-2">
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Web Scraping</span>
                    <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Streamlit</span>
                    <span class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Polars</span>
                    <span class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Python</span>
                </div>
            </div>
            <div class="w-96 h-96 rounded-xl bg-zinc-600 p-4">
                <h1 class="text-stone-200 font-semibold">Money + Elections</h1>
                <div class="w-6/7 h-3/5 rounded-xl bg-zinc-500 mt-2 flex items-center justify-center">

                </div>
            </div>
            <div class="w-96 h-96 rounded-xl bg-zinc-600 p-4">
                <h1 class="text-stone-200 font-semibold">Lloyd (WIP)</h1>
                <div class="w-6/7 h-3/5 rounded-xl bg-zinc-500 mt-2 flex items-center justify-center">

                </div>
            </div>
        </section>
    </div>
</template>