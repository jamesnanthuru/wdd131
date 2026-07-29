// Footer dynamic dates
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const lastModifiedP = document.getElementById('lastModified');
    if (lastModifiedP) {
        lastModifiedP.textContent = 'Last modified: ' + document.lastModified;
    }
});