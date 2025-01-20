<template>
    <section class="gallery">
        <h2>Gallery</h2>
        <div class="gallery-grid">
            <NuxtLink :to="`/gallery/${work.id}/${work.displayProductId}`" class="gallery-item"
                v-for="(work, idx) in works" :key="idx">

                <!-- Skeleton loader or image -->
                <div v-if="!work.loaded" class="skeleton-container">
                    <div class="skeleton-image"></div>
                </div>

                <!-- Image to display after it's loaded -->
                <img v-show="work.loaded" :src="work.thumbnailImage" alt="gallery art works" @load="onImageLoad(work)"
                    :class="{ 'loaded': work.loaded }" />

                <u>~{{ work.mainTitle }}~</u>
            </NuxtLink>
        </div>
    </section>
</template>

<script>
export default {
    name: "Gallery",
    data() {
        return {
            works: [] // Store the works data
        };
    },
    mounted() {
        // Dynamically import the JSON file from the assets folder
        import("~/assets/db.json")
            .then((data) => {
                this.works = data.default.map((work) => ({
                    ...work,
                    loaded: false,  // Add a loaded flag to each work
                }));
            })
            .catch((error) => {
                console.error("Failed to load gallery works:", error);
            });
    },
    methods: {
        onImageLoad(work) {
            // Set loaded to true once the image has fully loaded
            work.loaded = true;
        }
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
    text-decoration: none;
    color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Skeleton Loader Container */
.skeleton-container {
    width: 100%;
    height: 200px;
    position: relative;
    background-color: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
}

/* Skeleton Image Placeholder */
.skeleton-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

/* Shimmer Effect Animation */
@keyframes loading {
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
}

/* Image Styles */
.gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

/* Fade-in Effect */
img.loaded {
    opacity: 1;
}

/* Image Loaded Styles */
.gallery-item p {
    margin-top: 1rem;
    font-weight: bold;
    color: var(--text-color);
}

.gallery-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

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
