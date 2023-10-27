<script setup lang="ts">
    const { text, size } = defineProps({
        text: { type: String, required: true },
        size: { type: String, required: true, default: '1' },
    });

    const words = text.split(" ");
</script>

<template>
    <div class="w-full relative md:space-x-3 overflow-hidden">
        <h1 v-for="(word, index) in words" :key="index" :class="['md:inline font-semibold uppercase text-zinc-100 tracking-wider', size === '1' ? 'text-5xl md:text-8xl' : 'text-4xl md:text-5xl']">
            <span
                v-for="(letter, index) in word.split('')"
                :key="index"
                class="animate-letter"
                :style="{ 'animation-delay': index * 50 + 'ms', 'transition-delay': index * 25 + 'ms' }"
            >
                {{ letter }}
            </span>
        </h1>
    </div>
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