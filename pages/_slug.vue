<template>
    <div class="not-found-page">
        <section class="hero">
            <div class="hero-content">
                <h1>Oops! Page Not Found</h1>
                <p>We couldn't find the page you're looking for. It may have been moved or deleted.</p>
                <NuxtLink to="/" class="cta-button">Go Back Home</NuxtLink>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "NotFoundPage",
};
</script>

<style scoped>
/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: var(--primary-background);
    color: var(--text-color);
    line-height: 1.6;
}

/* Hero Section for 404 */
.hero {
    background: linear-gradient(135deg, var(--secondary-background), var(--primary-background));
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    position: relative;
}

.hero-content {
    max-width: 800px;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
}

.cta-button {
    background-color: var(--cta-color);
    padding: 0.8rem 2rem;
    color: var(--cta-text-color);
    font-size: 1.1rem;
    text-decoration: none;
    border-radius: 30px;
    display: inline-block;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: var(--cta-hover-color);
}
</style>