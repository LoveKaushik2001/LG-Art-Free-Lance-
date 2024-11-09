<template>
    <div class="artwork-detail">
        <h1>{{ artwork.title }}</h1>
        <img :src="artwork.image" :alt="artwork.title" />
        <p>{{ artwork.description }}</p>
        <button @click="inquire">Inquire via WhatsApp</button>
    </div>
</template>

<script>
export default {
    async asyncData({ params }) {
        const artworks = [
            { id: 1, title: 'Resin Art #1', description: 'Detailed description of artwork.', image: '/path/to/image1.jpg', slug: 'resin-art-1' },
            // Add more artworks
        ]
        const artwork = artworks.find(art => art.slug === params.slug)
        return { artwork }
    },
    methods: {
        inquire() {
            const message = `Hello, I'm interested in ${this.artwork.title}.`
            window.location.href = `https://wa.me/?text=${encodeURIComponent(message)}`
        }
    }
}
</script>

<style scoped>
/* Style for artwork details */
</style>