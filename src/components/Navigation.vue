,<script setup lang="ts">
    import { RouterLink } from "vue-router";
</script>

<template>
    <nav class="h-14 w-full overflow-x-auto">
        <div class="h-full flex flex-row items-center mx-auto max-w-7xl px-6">
            <div class="flex flex-row text-zinc-100 space-x-8 uppercase">
                <RouterLink to="/">
                    [Home]
                </RouterLink>
                <RouterLink to="/about">
                    [About]
                </RouterLink>
                <RouterLink to="/contact">
                    [Contact]
                </RouterLink>
            </div>
        </div>
    </nav>
</template>