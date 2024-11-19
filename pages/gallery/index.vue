<template>
    <section class="gallery">
        <h2>Gallery</h2>
        <div class="gallery-grid">
            <NuxtLink :to="`/gallery/${work.id}/${work.displayProductId}`" class="gallery-item"
                v-for="(work, idx) in works" :key="idx">
                <img :src="work.thumbnailImage" alt="gallery art works" />
                <u>[{{ work.mainTitle }}]</u>
            </NuxtLink>
        </div>
    </section>
</template>

<script>
export default {
    name: "Gallery",
    data() {
        return {
            works: []
        };
    },
    mounted() {
        // Dynamically import the JSON file from the assets folder
        import("~/assets/db.json")
            .then((data) => {
                this.works = data.default;
            })
            .catch((error) => {
                console.error("Failed to load trending works:", error);
            });
    }
};
</script>

<style scoped>
/* Gallery Section */
.gallery {
    background-color: var(--primary-background);
    padding: 4rem 2rem;
    text-align: center;
}

.gallery h2 {
    font-size: 2.5rem;
    color: var(--heading-color);
    margin-bottom: 2rem;
}

/* Gallery Grid Layout */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    justify-items: center;
}

/* Gallery Item */
.gallery-item {
    background-color: var(--secondary-background);
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.gallery-item p {
    margin-top: 1rem;
    font-weight: bold;
    color: var(--text-color);
}

.gallery-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* CTA Button */
.cta-button {
    background-color: var(--cta-color);
    padding: 0.8rem 2rem;
    color: var(--cta-text-color);
    font-size: 1.1rem;
    text-decoration: none;
    border-radius: 30px;
    display: inline-block;
    margin-top: 2rem;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: var(--cta-hover-color);
}
</style>