<template>
    <section class="gallery">
        <h2>Gallery</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="https://via.placeholder.com/300x300/FFD700/000000?text=Art+1" alt="Art 1" />
                <p>Resin Artwork 1</p>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/300x300/00BFFF/000000?text=Art+2" alt="Art 2" />
                <p>Resin Artwork 2</p>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/300x300/FF6347/000000?text=Art+3" alt="Art 3" />
                <p>Resin Artwork 3</p>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/300x300/90EE90/000000?text=Art+4" alt="Art 4" />
                <p>Resin Artwork 4</p>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/300x300/8A2BE2/000000?text=Art+5" alt="Art 5" />
                <p>Resin Artwork 5</p>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/300x300/FFD700/000000?text=Art+6" alt="Art 6" />
                <p>Resin Artwork 6</p>
            </div>
        </div>
        <NuxtLink to="/gallery" class="cta-button">View All Works</NuxtLink>
    </section>
</template>

<script>
export default {
    name: 'Gallery',
}
</script>

<style scoped>
/* Root color variables */
:root {
    --beige: #f5f5dc;
    --off-white: #faf9f6;
    --text-color: #333;
    --highlight-color: #d4b88d;
    --cta-color: #d4b88d;
    --cta-hover-color: #e1c699;
}

/* Gallery Section */
.gallery {
    background-color: var(--off-white);
    padding: 4rem 2rem;
    text-align: center;
}

.gallery h2 {
    font-size: 2.5rem;
    color: var(--highlight-color);
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
    background-color: var(--beige);
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
    color: var(--off-white);
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