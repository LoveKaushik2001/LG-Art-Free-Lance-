<template>
    <footer class="footer">
        <div class="footer-content">
            <!-- Left Side: Brand Name or Logo -->
            <div class="footer-left">
                <h3>Lakshya Gora Art</h3>
                <p>Bringing resin and paint together in beautiful harmony.</p>
            </div>

            <!-- Middle: Quick Links -->
            <div class="footer-middle">
                <h4>Quick Links</h4>
                <ul>
                    <li>
                        <NuxtLink to="/" class="footer-link">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/gallery" class="footer-link">Gallery</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="footer-link">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Right Side: Social Media Links -->
            <div class="footer-right">
                <h4>Follow Me</h4>
                <div class="social-links">
                    <a href="https://www.instagram.com/artbylakshya/" target="_blank" class="social-link"><i
                            class="fab fa-instagram"></i> Instagram</a>
                    <a href="https://www.facebook.com/lakshyagora/" target="_blank" class="social-link"><i
                            class="fab fa-facebook-f"></i> Facebook</a>
                    <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://in.linkedin.com/in/lakshya-gora-8181191b1&ved=2ahUKEwjU3c6OgtCJAxX8XmwGHTqcH6IQFnoECA4QAQ&usg=AOvVaw0aZfbiLwMjjWhksWxU5VhP"
                        target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
                </div>
            </div>
        </div>

        <!-- Footer Bottom: Contact Info and Copyright -->
        <div class="footer-bottom">
            <div class="footer-contact">
                <p>Email: <a href="mailto:lakshya@example.com">lakshya@example.com</a></p>
                <p>Phone: <a href="tel:+918826190095">+918826190095</a></p>
            </div>
            <p>&copy; 2024 Lakshya Gora Art. All Rights Reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
/* Footer Styles */
.footer {
    background-color: var(--beige);
    color: var(--text-color);
    padding: 3rem 1.5rem;
    text-align: center;
    font-size: 1rem;
    border-top: 2px solid var(--highlight-color);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
}

.footer-left {
    max-width: 250px;
}

.footer-left h3 {
    font-size: 2.2rem;
    color: var(--highlight-color);
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.footer-left p {
    font-size: 1.1rem;
    color: var(--text-color);
}

.footer-middle {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.footer-middle h4 {
    font-size: 1.5rem;
    color: var(--highlight-color);
    margin-bottom: 1rem;
    font-weight: 500;
}

.footer-middle ul {
    list-style-type: none;
    padding: 0;
}

.footer-middle li {
    margin-bottom: 0.5rem;
}

.footer-link {
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.footer-link:hover {
    color: var(--highlight-color);
}

.footer-right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
}

.footer-right h4 {
    font-size: 1.5rem;
    color: var(--highlight-color);
    margin-bottom: 1rem;
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
}

.social-link {
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: var(--highlight-color);
}

.social-link i {
    font-size: 1.5rem;
}

.footer-bottom {
    padding-top: 1.5rem;
    margin-top: 2rem;
    font-size: 1.1rem;
}

.footer-bottom .footer-contact {
    margin-bottom: 1rem;
}

.footer-bottom .footer-contact a {
    text-decoration: none;
    color: var(--highlight-color);
}

.footer-bottom p {
    color: var(--text-color);
    font-size: 0.9rem;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
    }

    .footer-middle {
        text-align: center;
    }

    .footer-left,
    .footer-right {
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .footer-bottom {
        font-size: 1rem;
    }
}
</style>