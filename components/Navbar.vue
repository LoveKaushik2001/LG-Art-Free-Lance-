<template>
    <header>
        <nav class="navbar">
            <!-- Logo -->
            <div class="navbar-brand">
                <NuxtLink to="/" class="logo">Lakshya Gora Art</NuxtLink>
            </div>

            <!-- Toggle Button for Mobile View -->
            <button class="navbar-toggle" @click="toggleMenu">
                <span :class="menuOpen ? 'toggle-icon open' : 'toggle-icon'"></span>
            </button>

            <!-- Nav Links with overlay for mobile view -->
            <div :class="['navbar-links', { 'is-active': menuOpen }]">
                <NuxtLink to="/" class="nav-link" @click.native="closeMenu" exact-active-class="active">Home</NuxtLink>
                <NuxtLink to="/gallery" class="nav-link" @click.native="closeMenu" exact-active-class="active">Gallery
                </NuxtLink>
                <NuxtLink to="/about" class="nav-link" @click.native="closeMenu" exact-active-class="active">About
                </NuxtLink>
                <NuxtLink to="/contact" class="nav-link" @click.native="closeMenu" exact-active-class="active">Contact
                </NuxtLink>
            </div>
        </nav>

        <!-- Dark overlay for menu background in mobile view -->
        <div :class="['overlay', { 'is-active': menuOpen }]" @click="closeMenu"></div>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            menuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        closeMenu() {
            this.menuOpen = false;
        }
    }
}
</script>

<style scoped>
/* Navbar Styling */
* {
    box-sizing: border-box;
}

.navbar {
    background: linear-gradient(135deg, var(--beige) 40%, var(--off-white) 60%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    font-size: 1rem;
    position: -webkit-sticky;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100%;
    /* Ensures it sticks to the top */
    z-index: 20;
    /* Makes sure it stays above the content */
    transition: background 0.3s ease;
}

/* Add your off-white and beige colors as CSS variables */
:root {
    --off-white: #f7f7f7;
    --beige: #f0e5d8;
    --highlight-color: #BB8C72;
    --text-color: #1C1210;
    --hover-color: #9e7c56;
}

/* Logo Styling */
.logo {
    font-size: 1.8rem;
    color: var(--highlight-color);
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 1px;
}

/* Toggle Button for Mobile View */
.navbar-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--highlight-color);
    cursor: pointer;
    position: relative;
    z-index: 20;
}

/* Toggle Icon Styles */
.toggle-icon {
    display: block;
    width: 30px;
    height: 2px;
    background-color: var(--highlight-color);
    position: relative;
    transition: background-color 0.3s ease;
}

.toggle-icon::before,
.toggle-icon::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: var(--highlight-color);
    transition: transform 0.3s ease;
}

.toggle-icon::before {
    transform: translateY(-8px);
}

.toggle-icon::after {
    transform: translateY(8px);
}

.toggle-icon.open {
    background-color: transparent;
}

.toggle-icon.open::before {
    transform: rotate(45deg);
}

.toggle-icon.open::after {
    transform: rotate(-45deg);
}

/* Nav Links Styling */
.navbar-links {
    display: flex;
    gap: 2rem;
    transition: transform 0.5s ease, opacity 0.5s ease;
    padding: 0 1rem;
}

/* Styling for Nav Links */
.nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease, padding 0.3s ease, letter-spacing 0.3s ease;
}

/* Hover Effect for Nav Links */
.nav-link:hover {
    color: var(--highlight-color);
    padding-bottom: 5px;
    letter-spacing: 1px;
}

/* Underline effect on hover */
.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: var(--highlight-color);
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
}

/* Show underline on hover */
.nav-link:hover::after {
    transform: scaleX(1);
}

/* Active Link Styling */
.nav-link.active {
    color: var(--highlight-color);
    font-weight: bold;
    letter-spacing: 1px;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .navbar-links {
        display: none;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 80%;
        max-width: 350px;
        background-color: var(--beige);
        padding-top: 6rem;
        gap: 2rem;
        transform: translateX(100%);
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
        z-index: 15;
    }

    .navbar-links.is-active {
        display: flex;
        transform: translateX(0);
    }

    .navbar-toggle {
        display: inline-block;
    }

    .nav-link {
        text-decoration: none;
        color: var(--text-color);
        font-size: 1.4rem;
        padding: 1.2rem 2rem;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: var(--highlight-color);
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
        z-index: 5;
    }

    .overlay.is-active {
        opacity: 1;
        pointer-events: all;
    }
}

/* Logo Styling */
.logo {
    font-size: 1.8rem;
    color: var(--highlight-color);
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
    /* Required for the underline effect */
    transition: color 0.3s ease;
}

/* Hover Effect on Logo */
.logo:hover {
    color: var(--hover-color);
    /* Change color on hover */
}

/* Underline Effect on Hover */
.logo::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    /* Adjust based on your design */
    width: 100%;
    height: 2px;
    background-color: var(--highlight-color);
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
}

/* Show underline on hover */
.logo:hover::after {
    transform: scaleX(1);
}
</style>
