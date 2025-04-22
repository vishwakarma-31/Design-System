// postcss.config.js
export default {
    plugins: {
        '@tailwindcss/postcss': {}, // 👈 Add this instead of `tailwindcss`
        autoprefixer: {},
    },
}
