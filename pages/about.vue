<template>
    <section class="about">
        <div class="about-content">
            <div class="about-text">
                <h2>About Lakshya</h2>
                <p>
                    Lakshya is a talented mixed media artist whose work explores the dynamic fusion of resin and
                    painting.
                    Her art is a reflection of her deep passion for color, texture, and creativity. Every piece tells a
                    story,
                    invoking emotions and creating a visual experience that leaves a lasting impact.
                </p>
                <p>
                    With a focus on intricate details and bold, expressive strokes, Lakshya’s work captures the harmony
                    between
                    natural elements and artistic innovation. Her pieces resonate with collectors, bringing timeless
                    beauty into
                    homes and spaces across the globe.
                </p>
                <p>
                    Whether it's an abstract representation or a more realistic portrayal, Lakshya’s art connects deeply
                    with his
                    audience, offering both visual pleasure and thought-provoking depth.
                </p>
            </div>
            <div class="about-image">
                <img src="/images/profile.jpeg" alt="Lakshya" />
            </div>
        </div>
        <NuxtLink to="/gallery" class="cta-button">Explore the Gallery</NuxtLink>
    </section>
</template>

<script>
export default {
    name: 'AboutSection'
}
</script>

<style scoped>
/* About Section Styles */
.about {
    background-color: var(--primary-background);
    padding: 6rem 2rem;
    text-align: center;
}

.about-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.about-text {
    max-width: 800px;
    margin-bottom: 2rem;
}

.about-text h2 {
    font-size: 2.8rem;
    font-weight: bold;
    color: var(--heading-color);
    margin-bottom: 1.5rem;
}

.about-text p {
    font-size: 1.2rem;
    color: var(--text-color);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.about-image img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 50%;
    border: 6px solid var(--highlight-color);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

/* Media Query for Responsive Design */
@media (max-width: 768px) {
    .about-content {
        flex-direction: column;
        align-items: center;
    }

    .about-text h2 {
        font-size: 2.5rem;
    }

    .about-text p {
        font-size: 1.1rem;
    }

    .about-image img {
        max-width: 300px;
    }
}
</style>