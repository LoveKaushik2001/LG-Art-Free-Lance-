<template>
    <section class="pdp">
        <!-- Product Details Section -->
        <div class="pdp-container">
            <div class="product-image">
                <img :src="product.productImage" alt="Product Image" />
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
                        <img :src="item.productImage" alt="Similar Product Image" />
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
            similarItems: []
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
            const message = `Hi, I would like to buy the ${this.product.productName}.`;  // Pre-written message
            const encodedMessage = encodeURIComponent(message); // URL encode the message
            const url = `https://wa.me/+918826190095?text=${encodedMessage}`;
            window.open(url, "_blank"); // Open WhatsApp in a new tab
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

.product-image img {
    width: 100%;
    max-width: 500px;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.product-image img:hover {
    transform: scale(1.05);
}

.whatsapp-btn {
    background-color: var(--highlight-color);
    /* Match the main color theme */
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
    /* Darker shade for hover */
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

@media (max-width: 768px) {
    .pdp-container {
        flex-direction: column;
        align-items: center;
    }

    .product-image img {
        max-width: 90%;
        /* Make image occupy more space */
        height: auto;
        /* Allow the height to adjust based on aspect ratio */
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
}
</style>
