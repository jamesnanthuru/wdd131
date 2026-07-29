// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // ---------- 1. Populate Product Dropdown ----------
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    const selectElement = document.getElementById('productName');
    
    // Loop through the products array and create options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;   // ID goes in the value
        option.textContent = product.name; // Name is displayed
        selectElement.appendChild(option);
    });

    // ---------- 2. Footer Dynamic Dates ----------
    // Set current year
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const lastModifiedP = document.getElementById('lastModified');
    if (lastModifiedP) {
        lastModifiedP.textContent = `Last modified: ${document.lastModified}`;
    }

    //  Notes about radio buttons 
    // The radio buttons for rating all have the name="rating".
    // This groups them so only ONE can be selected at a time.
    // The answer to the question: "Why should each of the radio buttons that are part of this rating have the same name value?"
    // : So they belong to the same group, ensuring the browser allows only one selection, which is required for a single rating scale.
});