<template>
    <div class="h-full mx-10 flex justify-center items-center">
        <div class="w-4/5 h-3/5 grid grid-rows-8 grid-cols-4 gap-6 relative z-[1]">
            <div class="col-span-2 row-span-4 overflow overflow-y-hidden bg-red-500 bg-opacity-30 backdrop-filter backdrop-blur-md shadow-lg rounded-3xl p-8">
                <h2 class="text-2xl text-red-500 font-black">About Me</h2>
                <p class="mt-4 text-xl text-stone-50 font-medium">I'm a Data Engineer that loves making cool things with data. When I'm not making pipelines and writing SQL queries, I'm watching lots of <a href="https://letterboxd.com/favouroshio/" class="hover:text-green-500">movies</a> and TV shows.</p>
            </div>
            <div class="row-start-5 col-span-2 row-span-4 overflow overflow-y-hidden bg-red-500 bg-opacity-30 backdrop-filter backdrop-blur-md shadow-lg rounded-3xl p-8">
                <h2 class="text-2xl text-red-500 font-black">Experience</h2>
                <section>
                    <section class="flex flex-row justify-between items-center">
                        <h3 class="mt-4 text-xl text-red-500 font-semibold">Slalom Build</h3>
                        <p class="text-md italic text-red-500">Jun. 2022 - Aug. 2022</p>
                    </section>
                    <div class="text-stone-50">Data Engineering Intern</div>
                    <section class="flex justify-center mt-2">
                        <button class="bg-red-600 bg-opacity-40 backdrop-filter backdrop-blur-md hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-48">
                         <a href="mailto:afoshiokhale@gmail.com">+</a>
                        </button>
                    </section>
  
                </section>
                
                
            </div>
            <div class="col-start-3 col-span-2 row-span-8 overflow overflow-y-hidden bg-red-500 bg-opacity-30 backdrop-filter backdrop-blur-md shadow-lg rounded-3xl p-8">
                <h2 class="text-2xl text-red-500 font-black">Education</h2>
                <section class="flex flex-row justify-between items-center mt-4">
                    <h3 class="text-lg text-red-500 font-semibold">University of Houston</h3>
                    <p class="text-md italic text-red-500">Aug. 2018 - May 2023</p>
                </section>
                <div class="text-stone-50">BSc. Computer Information Systems, Cum Laude</div>
                <h3 class="pl-12 text-red-500 font-medium">Relevant Coursework</h3>
                <ul class="italic text-sm pl-16">
                    <li class="text-stone-50">Enterprise Appls Development, Database Management, Info Systems Analysis & Design, 	
                        Database Admin & Implementation, Information Visualization
                    </li>
                </ul>
                <h2 class="text-2xl text-red-500 font-black mt-8">Certifications</h2>
                <ul class="text-stone-50">
                    <li class="flex flex-row justify-between items-center mt-2">
                        <h3>Tableau Desktop Specialist</h3>
                        <p>Apr. 2022</p>
                    </li>
                    <li class="flex flex-row justify-between items-center mt-2">
                        <h3>Databricks Lakehouse Fundamentals</h3>
                        <p>Jun. 2023</p>
                    </li>
                    <li class="flex flex-row justify-between items-center mt-2">
                        <h3>Databricks Data Engineer Associate</h3>
                        <p>Sept. 2023</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>