/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern':
                    "url('../public/assets/herobackgroundimage.jpg')",
                'mainTopog-pattern':
                    "url('../public/assets/ai_gen_golfcourse.png')",
                'trackerbg-pattern':
                    "url('../public/assets/abstract_bg_altered.png')",
            },
            colors: {
                midnightBlue: {
                    100: '#0300A1',
                    200: '#01004A',
                    300: '#010021',
                },
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
