<template>
    <section class="pdp">
        <!-- Product Details Section -->
        <div class="pdp-container">
            <div class="product-image">
                <!-- Image container with horizontal scroll -->
                <div class="image-slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <!-- Each image inside the slider -->
                    <template v-for="(image, index) in images">
                        <div class="carousel-item">
                            <img :src="image" alt="Product Image" />
                        </div>
                    </template>
                </div>

                <!-- Carousel controls (Prev and Next buttons) -->
                <button class="carousel-control-prev" @click="goToPrevImage" v-if="images.length > 1">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">&laquo;</span>
                </button>
                <button class="carousel-control-next" @click="goToNextImage" v-if="images.length > 1">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">&raquo;</span>
                </button>
            </div>

            <div class="product-details">
                <h1>{{ product.productName }}</h1>
                <p>{{ product.description }}</p>
                <p><strong>Price:</strong> {{ product.price }}</p>
                <button @click="redirectToWhatsApp" class="whatsapp-btn">
                    Buy on WhatsApp
                </button>
            </div>
        </div>

        <!-- Similar Items Section -->
        <div class="similar-items" v-if="similarItems.length">
            <h2>See Similar Items</h2>
            <div class="similar-grid">
                <div class="similar-item" v-for="item in similarItems" :key="item.productId"
                    @click="updatePDP(item.productId)">
                    <div class="similar-item-card">
                        <img :src="Array.isArray(item.productImage) ? item.productImage[0] : item.productImage"
                            alt="Similar Product Image" />
                        <div class="item-info">
                            <h3>{{ item.productName }}</h3>
                            <p>View detail</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ProductDetailPage",
    data() {
        return {
            category: {},
            product: {},
            similarItems: [],
            images: [],
            currentIndex: 0
        };
    },
    async mounted() {
        const id = this.$route.params.id;
        const prodId = this.$route.params.prodId;
        const data = await import("~/assets/db.json");
        this.category = data.default.find((item) => item.id === id);
        this.product = this.category.products.find((prod) => prod.productId === prodId);
        if (!this.product) {
            throw new Error("Product not found");
        }
        this.similarItems = this.category.products.filter(
            (item) => item.productId !== prodId
        );
        this.images = Array.isArray(this.product.productImage)
            ? this.product.productImage
            : [this.product.productImage];
    },
    methods: {
        updatePDP(newId) {
            this.product = this.similarItems.find(item => item.productId === newId);
            this.similarItems = this.category.products.filter(
                (item) => item.productId !== this.product.productId
            );
            this.$router.push(`/gallery/${this.category.id}/${this.product.productId}`);
        },
        redirectToWhatsApp() {
            const message = `Hi, I would like to buy the ${this.product.productName}.`;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/+918826190095?text=${encodedMessage}`;
            window.open(url, "_blank");
        },
        goToPrevImage() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.images.length - 1;
            } else {
                this.currentIndex--;
            }
        },
        goToNextImage() {
            if (this.currentIndex === this.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        }
    }
};
</script>

<style scoped>
.pdp {
    padding: 6rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.pdp-container {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    flex-wrap: wrap;
}

.product-image {
    position: relative;
    width: 100%;
    max-width: 500px;
    overflow: hidden;
}

.image-slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
}

.carousel-item {
    flex-shrink: 0;
    width: 100%;
}

.product-image img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.product-image img:hover {
    transform: scale(1.05);
}

/* Carousel Control Button Styles */
.carousel-control-prev,
.carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 2rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s ease;
}

.carousel-control-prev {
    left: 10px;
}

.carousel-control-next {
    right: 10px;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
    background: rgba(0, 0, 0, 0.7);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    font-size: 1.5rem;
}

.whatsapp-btn {
    background-color: var(--highlight-color);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
}

.whatsapp-btn:hover {
    background-color: var(--highlight-color-dark);
}

.product-details {
    max-width: 600px;
    text-align: center;
}

.product-details h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--highlight-color);
    margin-bottom: 1rem;
}

.product-details p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-color);
    margin-bottom: 1rem;
}

.product-details strong {
    font-weight: bold;
}

.similar-items {
    width: 100%;
    margin-top: 3rem;
}

.similar-items h2 {
    font-size: 2rem;
    color: var(--highlight-color);
    text-align: center;
    margin-bottom: 2rem;
}

.similar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    justify-items: center;
}

.similar-item {
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%;
    max-width: 250px;
    height: 350px;
}

.similar-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.similar-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.similar-item:hover img {
    transform: scale(1.05);
}

.similar-item p {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: var(--text-color);
}

.similar-item p:hover {
    color: var(--highlight-color);
}

.similar-item p::after {
    content: '→';
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
}

.similar-item:hover p::after {
    transform: translateX(5px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .pdp-container {
        flex-direction: column;
        align-items: center;
    }

    .product-image {
        max-width: 90%;
    }

    .product-details h1 {
        font-size: 2rem;
    }

    .product-details p {
        font-size: 1rem;
    }

    .similar-items h2 {
        font-size: 1.5rem;
    }

    .similar-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    .carousel-control-prev,
    .carousel-control-next {
        font-size: 1.5rem;
        width: 35px;
        height: 35px;
    }

    .product-image img {
        max-width: 100%;
        height: auto;
    }
}
</style>
