<template>
    <div class="gallery-card">
        <NuxtLink :to="`/gallery/${artwork.slug}`">
            <img :src="artwork.image" :alt="artwork.title" />
            <h3>{{ artwork.title }}</h3>
            <p>{{ artwork.description }}</p>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'GalleryCard',
    props: {
        artwork: Object
    }
}
</script>

<style scoped>
.gallery-card {
    /* Add your card styling here */
}
</style>