<script setup lang="ts">
import Toaster from './components/ui/toast/Toaster.vue';
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <Toaster />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
