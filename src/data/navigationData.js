// navigationData.js

const navigationData = [
    {
        category: 'Makeup',
        subcategories: [
            {
                title: 'Face',
                items: ['Foundation', 'Concealer', 'Blush', 'Bronzer', 'Highlighter']
            },
            {
                title: 'Eyes',
                items: ['Mascara', 'Eyeliner', 'Eyeshadow', 'Eyebrow products']
            },
            // Add more subcategories of 'Makeup' here if needed
        ]
    },
    {
        category: 'Skin',
        subcategories: [
            {
                title: 'Cleansers',
                items: ['Cleansing foam', 'Cleansing oil', 'Cleansing water']
            },
            {
                title: 'Moisturizers',
                items: ['Face cream', 'Face lotion', 'Face oil']
            },
            // Add more subcategories of 'Skin' here if needed
        ]
    },
    // Add more main categories here if needed
];

export default navigationData;
