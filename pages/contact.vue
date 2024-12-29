<template>
    <section class="leave-comment">
        <div class="comment-content">
            <h2>Leave Your Comment</h2>
            <p>We'd love to hear your thoughts, queries, or feedback. Please share your contact details, and we'll get
                back to you!</p>

            <!-- Form to Leave a Comment -->
            <form @submit.prevent="submitForm" class="comment-form">
                <div class="form-group">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required />
                </div>

                <div class="form-group">
                    <label for="email">Your Email:</label>
                    <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
                </div>

                <div class="form-group">
                    <label for="message">Your Message:</label>
                    <textarea id="message" v-model="form.message" placeholder="Enter your message" required></textarea>
                </div>

                <div class="form-group">
                    <label for="whatsapp">WhatsApp (optional):</label>
                    <input type="tel" id="whatsapp" v-model="form.whatsapp"
                        placeholder="Enter your WhatsApp number (optional)" />
                </div>

                <button type="submit" class="cta-button">Submit</button>
            </form>

            <!-- WhatsApp & Call Direct Contact Options -->
            <div class="direct-contact-options">
                <h3>Or Connect Directly:</h3>
                <div class="contact-buttons">
                    <a href="https://wa.me/+918826190095" target="_blank" class="cta-button">Chat on WhatsApp</a>
                    <a href="tel:+918826190095" class="cta-button">Call Us</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from 'emailjs-com'; // Import EmailJS SDK

export default {
    name: 'LeaveCommentSection',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
                whatsapp: '',
            }
        }
    },
    methods: {
        submitForm() {
            // Call EmailJS service to send the form data
            // const serviceID = 'service_wpj7f78';
            const serviceID = 'gmail';
            const templateID = 'your_template_id';
            const userID = '1IqNR3RqDx9DxsAN3'; // Replace with your EmailJS User ID

            const templateParams = {
                from_name: this.form.name,
                from_email: this.form.email,
                message: this.form.message,
                whatsapp: this.form.whatsapp || 'Not Provided',
            };

            // Send email using EmailJS
            emailjs.send(serviceID, templateID, templateParams, userID)
                .then((response) => {
                    console.log('Email sent successfully!', response);
                    this.resetForm();
                    alert('Your message has been sent!');
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    alert('There was an error sending your message. Please try again later.');
                });
        },
        resetForm() {
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
            this.form.whatsapp = '';
        }
    }
}
</script>


<style scoped>
/* Leave Comment Section Styles */
.leave-comment {
    background-color: var(--primary-background);
    padding: 6rem 2rem;
    text-align: center;
}

.comment-content {
    max-width: 800px;
    margin: 0 auto;
}

.leave-comment h2 {
    font-size: 2.8rem;
    font-weight: bold;
    color: var(--heading-color);
    margin-bottom: 1rem;
}

.leave-comment p {
    font-size: 1.2rem;
    color: var(--text-color);
    margin-bottom: 2rem;
}

.comment-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-size: 1.1rem;
    color: var(--highlight-color);
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid var(--form-input-border-color);
    border-radius: 8px;
    outline: none;
    background-color: var(--primary-background);
    color: var(--text-color);
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--highlight-color);
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
}

.cta-button {
    background-color: var(--cta-color);
    padding: 1rem 2rem;
    color: var(--cta-text-color);
    font-size: 1.1rem;
    text-decoration: none;
    border-radius: 30px;
    transition: background-color 0.3s ease;
    border: none;
    cursor: pointer;
}

.cta-button:hover {
    background-color: var(--cta-hover-color);
}

.direct-contact-options {
    margin-top: 3rem;
    padding: 2rem;
    background-color: var(--secondary-background);
    border-radius: 8px;
}

.direct-contact-options h3 {
    font-size: 2rem;
    color: var(--highlight-color);
    margin-bottom: 1.5rem;
}

.contact-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
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
    .leave-comment h2 {
        font-size: 2.5rem;
    }

    .leave-comment p {
        font-size: 1.1rem;
    }
}
</style>