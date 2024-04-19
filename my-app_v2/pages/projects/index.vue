
import Project1 from '../../components/project1.vue';
<template>
    <div class="h-full mt-4">
        <section class="flex justify-center">
            <h1 class="text-stone-200 font-bold text-2xl">Projects</h1>
        </section>
        <section class="mt-4 flex flex-row gap-4">
            <a href="https://github.com/afoshiok/Letterboard" target="_blank" class="flex flex-col w-96 h-96 rounded-xl bg-zinc-600 hover:border hover:border-indigo-300 p-4">
                <h1 class="text-stone-200 font-semibold">Letterboard</h1>
                <div class="w-6/7 h-3/5 rounded-xl bg-zinc-500 mt-2 flex items-center justify-center">
                    <Letterboard class="w-4/5 h-4/5"/>
                </div>
                <div class="mt-2">
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Web Scraping</span>
                    <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Streamlit</span>
                    <span class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Polars</span>
                    <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Python</span>
                </div>
                <div class="mt-2">
                    <span class="bg-lime-100 text-lime-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">ELT/ETL</span>
                </div>
            </a>
            <a href="https://github.com/afoshiok/Money-and-Elections" target="_blank" class="w-96 h-96 rounded-xl bg-zinc-600 hover:border hover:border-indigo-300 p-4">
                <h1 class="text-stone-200 font-semibold">Money + Elections</h1>
                <div class="w-6/7 h-3/5 rounded-xl bg-zinc-500 mt-2 flex items-center justify-center">
                    <Election class="w-4/5 h-4/5" />
                </div>
                <div class="mt-2">
                    <span class="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Airflow</span>
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Snowflake</span>
                    <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Dbt</span>
                    <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Pandas</span>
                    
                </div>
                <div class="mt-2">
                    <span class="bg-lime-100 text-lime-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Data Modeling</span>
                    <span class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Polars</span>
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Docker</span>
                </div>
                <div class="mt-2">
                    <span class="bg-lime-100 text-lime-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Data Visualization</span>
                    <span class="bg-lime-100 text-lime-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">ELT/ETL</span>
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">SQL</span>
                </div>
                
            </a>
            <div class="w-96 h-96 rounded-xl bg-zinc-600 hover:border hover:border-indigo-300 p-4">
                <h1 class="text-stone-200 font-semibold">Lloyd <span class="text-yellow-200">(WIP)</span></h1>
                <div class="w-6/7 h-3/5 rounded-xl bg-zinc-500 mt-2 flex items-center justify-center">
                    <h1 class="text-7xl">👷</h1>
                    <h1 class="text-stone-200">Still working on this...</h1>
                </div>
                <div class="mt-2">
                    <span class="bg-lime-100 text-lime-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">LangChain</span>
                    <span class="bg-lime-100 text-lime-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">ELT/ETL</span>
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">SQL</span>
                    <span class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Chatbot</span>
                </div>
            </div>
        </section>
    </div>
</template>