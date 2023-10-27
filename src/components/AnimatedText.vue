<script setup lang="ts">
    import AnimatedSlot from "./AnimatedSlot.vue";
</script>

<template>
    <AnimatedSlot>
        <p class="text-zinc-100 text-lg md:text-xl">
            <slot></slot>
        </p>
    </AnimatedSlot>
</template>