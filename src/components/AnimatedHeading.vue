<script setup lang="ts">
    const props = defineProps({
        text: { type: String, required: true },
    });
</script>

<template>
    <h1 class="font-semibold text-6xl md:text-9xl uppercase text-zinc-100 tracking-wider">
        <span
            v-for="(letter, index) in props.text.split('')"
            :key="index"
            class="animate-letter"
            :style="{ 'animation-delay': index * 50 + 'ms', 'transition-delay': index * 25 + 'ms' }"
        >
            {{ letter }}
        </span>
    </h1>
</template>

<style scoped>
    .animate-letter {
        display: inline-block;
        opacity: 0;
        transform: translateY(2rem) skewY(12deg);
        animation: letter 0.4s ease-in-out forwards;
    }

    @keyframes letter {
        from {
            opacity: 0;
            transform: translateY(2rem) skewY(12deg);
        }

        to {
            opacity: 1;
            transform: translateY(0px) skewY(0deg);
        }
    }
</style>