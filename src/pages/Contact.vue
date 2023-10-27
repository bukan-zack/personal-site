<script setup lang="ts">
    import AnimatedHeading from "./../components/AnimatedHeading.vue";
    import AnimatedSlot from "../components/AnimatedSlot.vue";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
</script>

<template>
    <AnimatedHeading text="Contact" />
    <AnimatedSlot class="mt-6">
        <div class="flex flex-col space-y-6 text-zinc-100 text-lg md:text-xl">
            <div class="flex flex-row">
                <a href="https://github.com/zackrsli">
                    <FontAwesomeIcon :icon="faGithub" size="xl" class="mr-3" />
                    zackrsli
                </a>
            </div>
            <div class="flex flex-row">
                <a href="https://twitter.com/zackrsli">
                    <FontAwesomeIcon :icon="faTwitter" size="xl" class="mr-3" />
                    @zackrsli
                </a>
            </div>
            <div class="flex flex-row">
                <a href="https://linkedin.com/in/zackry-rosli">
                    <FontAwesomeIcon :icon="faLinkedin" size="xl" class="mr-4" />
                    in/zackry-rosli
                </a>
            </div>
            <div class="flex flex-row">
                <a href="mailto:zackry@berrybyte.net">
                    <FontAwesomeIcon :icon="faEnvelope" size="xl" class="mr-3" />
                    zackry@berrybyte.net
                </a>
            </div>
        </div>
    </AnimatedSlot>
</template>