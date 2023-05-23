/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern':
                    "url('../public/assets/herobackgroundimage.jpg')",
                'mainTopog-pattern':
                    "url('../public/assets/ai_gen_golfcourse.png')",
                'trackerbg-pattern':
                    "url('../public/assets/abstract_bg_altered.png')",
                '18th-hole': "url('../public/assets/18th_hole.png')",
                'magnolia-lane': "url('../public/assets/magnolialane.jpg')",
                'golf-course': "url('../public/assets/golf_course.png')",
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
    plugins: [],
};
