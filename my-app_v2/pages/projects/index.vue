
<template>
    <div class="mt-4 max-sm:mt-10 flex flex-col">
        <section class="sm:flex sm:justify-center">
            <h1 class="text-stone-200 font-bold text-2xl p-2">Projects</h1>
        </section>
        <section class="mt-4 flex flex-row gap-4 max-sm:overflow max-sm:overflow-x-scroll max-sm:px-2 max-sm:scroll-pe-6 max-sm:snap-x">
            <a href="https://github.com/afoshiok/Letterboard" target="_blank" class="flex flex-col w-96 h-[28rem] rounded-xl bg-zinc-600 hover:border hover:border-indigo-300 p-4">
                <h1 class="text-stone-200 font-semibold">Letterboard</h1>
                <div class="w-6/7 h-3/5 rounded-xl bg-zinc-500 mt-2 flex items-center justify-center">
                    <Letterboard class="w-4/5 h-4/5"/>
                </div>
                <div class="mt-2">
                    <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Streamlit</span>
                    <span class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Polars</span>
                    <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Python</span>
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Asyncio</span>
                </div>
                <div class="mt-2">
                    <span class="bg-lime-100 text-lime-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">ELT/ETL</span>
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Web Scraping</span>
                </div>
            </a>
            <a href="https://github.com/afoshiok/Money-and-Elections" target="_blank" class="w-96 h-[28rem] rounded-xl bg-zinc-600 hover:border hover:border-indigo-300 p-4">
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
                <div class="mt-2">
                    <span class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">AWS</span>
                </div>
            </a>
            <div class="sm:hidden p-4">
            </div>
        </section>
        <section class="w-dw flex justify-center mt-4">
            <a href="https://github.com/afoshiok" class="w-20 h-10 flex items-center justify-center p-4 bg-lime-100 rounded-md">
                <h1 class="text-lime-800 font-bold">More</h1>
            </a>
        </section>
    </div>
</template>