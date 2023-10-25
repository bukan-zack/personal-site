<script setup lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { faGithub, faLinkedin, faTwitter, faGolang, faRust, faVuejs, faReact } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
</script>
<template>
    <div class="min-h-screen tiles">
        <Transition name="fade" appear>
            <div class="mx-auto max-w-3xl px-6 py-12">
                <div class="flex flex-col justify-center ring ring-1 ring-zinc-800/50 rounded-xl flex flex-col p-8 bg-gradient-to-b from-zinc-800/60 to-transparent col-span-4">
                    <h1 class="font-semibold text-4xl text-zinc-100 tracking-wide">Software Developer. Caffeine Addict.</h1>
                    <p class="text-zinc-400 mt-2">
                        Hello there! I am Zackry, a software developer from Malaysia, with approximately 3 years of experience in Go. I am currently working with caffeine addicts at BerryByte Limited.
                    </p>
                    <div class="mt-4 space-x-6 text-zinc-400">
                        <a href="https://github.com/zackrsli" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                            <FontAwesomeIcon :icon="faGithub" size="xl" />
                        </a>
                        <a href="https://twitter.com/zackrsli" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                            <FontAwesomeIcon :icon="faTwitter" size="xl" />
                        </a>
                        <a href="https://linkedin.com/in/zackry-rosli" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                            <FontAwesomeIcon :icon="faLinkedin" size="xl" />
                        </a>
                        <a href="mailto:zackry@berrybyte.net" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                            <FontAwesomeIcon :icon="faEnvelope" size="xl" />
                        </a>
                    </div>
                </div>
                <div class="flex flex-col justify-center mt-8">
                    <h1 class="text-zinc-200 text-3xl">Things I love</h1>
                    <div class="mt-4 space-x-6 text-zinc-400">
                        <a href="https://go.dev" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                            <FontAwesomeIcon :icon="faGolang" size="xl" />
                        </a>
                        <a href="https://rust-lang.org" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                            <FontAwesomeIcon :icon="faRust" size="xl" />
                        </a>
                        <a href="https://vuejs.org" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                            <FontAwesomeIcon :icon="faVuejs" size="xl" />
                        </a>
                        <a href="https://react.dev" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                            <FontAwesomeIcon :icon="faReact" size="xl" />
                        </a>
                    </div>
                </div>
                <div class="flex flex-col justify-center mt-8">
                    <h1 class="text-zinc-200 text-3xl">Work</h1>
                    <div class="mt-4 flex flex-col justify-center ring ring-1 ring-zinc-800/50 rounded-xl flex flex-col p-8 bg-gradient-to-b from-zinc-800/60 to-transparent col-span-4">
                        <h2 class="text-xl text-zinc-100 tracking-wide">BerryByte Limited</h2>
                        <p class="text-zinc-400 mt-1">
                            Powerful & affordable. Dedicated hardware designed with customer satisfaction in mind, DDoS protected network, and a custom dashboard to manage your services.
                        </p>
                        <h3 class="text-lg mt-2 text-zinc-100">Position</h3>
                        <p class="text-zinc-400 mt-1">
                            Software Developer    
                        </p>
                        <h3 class="text-lg mt-2 text-zinc-100">From</h3>
                        <p class="text-zinc-400 mt-1">
                            2022 — Present   
                        </p>
                    </div>
                </div>
                <div class="flex flex-col justify-center mt-8">
                    <h1 class="text-zinc-200 text-3xl">Projects</h1>
                    <p class="mt-4 text-zinc-400">Unfortunately, there are no active projects... yet.</p>
                </div>
                <div class="flex flex-col justify-center mt-8">
                    <h1 class="text-zinc-200 text-3xl">Posts</h1>
                    <p class="mt-4 text-zinc-400">Unfortunately, there are no posts... yet.</p>
                </div>
                <p class="mt-8 text-zinc-500">&copy; 2023 Zackry Rosli. All rights reserved.</p>
            </div>
        </Transition>
    </div>
</template>