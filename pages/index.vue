<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="carousel-background">
        <!-- The background image will go here -->
      </div>
      <div class="hero-content">
        <div class="text-overlay">
          <h1>Welcome to Art By Lakshya</h1>
          <p style="color: black; font-size: 1.3rem; font-weight: bold;">Experience the fusion of resin and paint,
            creating timeless beauty.</p>
          <NuxtLink to="/gallery" class="cta-button">Explore the Gallery</NuxtLink>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="about-content">
        <h2>About the Artist</h2>
        <p>
          Lakshya is a talented mixed media artist whose work combines the beauty of resin art with the expressive
          nature of painting.
          With a keen eye for detail and a passion for color, each piece is a masterpiece.
        </p>
        <NuxtLink to="/about" class="cta-button">Learn More</NuxtLink>
      </div>
    </section>

    <!-- Featured Works Section -->
    <section class="featured-works">
      <h2>Trending Pieces</h2>
      <div class="works-grid">
        <NuxtLink :to="`/gallery/${work.id}/${work.displayProductId}`" v-for="(work, idx) in trendingWorks" :key="idx"
          class="work-item">
          <img :src="work.image" :alt="work.alt" />
          <p>{{ work.title }}</p>
        </NuxtLink>
      </div>
      <NuxtLink to="/gallery" class="cta-button">View All Works</NuxtLink>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <h2>Get in Touch</h2>
      <p>Have any questions or want to commission a custom artwork? Connect with me.</p>
      <div class="contact-buttons">
        <a href="mailto:Lakshyagora412@gmail.com" class="cta-button">Email</a>
        <a href="https://wa.me/+918826190095" target="_blank" class="cta-button">WhatsApp</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      trendingWorks: []
    };
  },
  mounted() {
    // Dynamically import the JSON file from the assets folder
    import("~/assets/trending.json")
      .then((data) => {
        this.trendingWorks = data.default;
      })
      .catch((error) => {
        console.error("Failed to load trending works:", error);
      });
  }
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

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  background-image: url('/images/home.jpeg');
  /* Your image here */
  background-size: contain;
  background-position: center center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text-overlay {
  background-color: rgba(255, 255, 255, 0.7);
  /* White semi-transparent background */
  padding: 2rem 3rem;
  border-radius: 10px;
  max-width: 80%;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #ca9647;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  /* You can change the color of the text if you prefer */
}

.hero p {
  font-size: 1.3rem;
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

/* About Section */
.about {
  background-color: var(--primary-background);
  padding: 4rem 2rem;
  text-align: center;
}

.about-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--heading-color);
}

.about-content p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}

.about .cta-button {
  margin-top: 1rem;
}

/* Featured Works Section */
.featured-works {
  background-color: var(--secondary-background);
  padding: 4rem 2rem;
  text-align: center;
}

.featured-works h2 {
  font-size: 2.5rem;
  color: var(--heading-color);
  margin-bottom: 2rem;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.work-item img {
  width: 100%;
  height: 350px;
  /* Set a fixed height */
  object-fit: cover;
  /* Ensure the image covers the set height and width */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.work-item img:hover {
  transform: scale(1.05);
}


.work-item p {
  margin-top: 1rem;
  font-weight: bold;
  color: var(--text-color);
}

.featured-works .cta-button {
  margin-top: 1rem;
}

/* Contact Section */
.contact {
  background-color: var(--primary-background);
  padding: 4rem 2rem;
  text-align: center;
}

.contact h2 {
  font-size: 2.5rem;
  color: var(--heading-color);
  margin-bottom: 1rem;
}

.contact p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.contact-buttons a {
  padding: 1rem 2rem;
  background-color: var(--cta-color);
  color: var(--primary-background);
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s ease;
}

.contact-buttons a:hover {
  background-color: var(--cta-hover-color);
}

@media (max-width: 768px) {
  .hero {
    background-size: contain;
    /* Ensures the whole image is visible on smaller screens */
    background-position: center center;
  }

  .text-overlay {
    max-width: 90%;
    /* Make sure text is not too large on mobile */
  }
}
</style>
