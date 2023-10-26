,<script setup lang="ts">
    import { RouterLink } from "vue-router";
</script>

<template>
    <nav class="h-14 w-full overflow-x-auto">
        <div class="h-full flex flex-row items-center mx-auto max-w-7xl px-6">
            <div class="flex flex-row text-zinc-400 space-x-8">
                <RouterLink to="/" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                    Home
                </RouterLink>
                <RouterLink to="/about" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                    About
                </RouterLink>
                <RouterLink to="/contact" class="hover:text-zinc-200 transition duration-300 ease-in-out">
                    Contact
                </RouterLink>
            </div>
        </div>
    </nav>
</template>