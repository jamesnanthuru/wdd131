const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        hamburgerBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    }
];

function renderTemples(templeArray) {
    const grid = document.getElementById('temple-grid');
    if (!grid) return;

    let html = '';
    templeArray.forEach(temple => {
        html += `
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            </figure>
        `;
    });

    grid.innerHTML = html;
}

function filterOld(temples) {
    return temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year < 1900;
    });
}

function filterNew(temples) {
    return temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year > 2000;
    });
}

function filterLarge(temples) {
    return temples.filter(t => t.area > 90000);
}

function filterSmall(temples) {
    return temples.filter(t => t.area < 10000);
}

document.addEventListener('DOMContentLoaded', () => {
    renderTemples(temples);

    const homeLink = document.getElementById('filter-home');
    const oldLink = document.getElementById('filter-old');
    const newLink = document.getElementById('filter-new');
    const largeLink = document.getElementById('filter-large');
    const smallLink = document.getElementById('filter-small');

    function setActiveLink(activeLink) {
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.classList.remove('active');
        });
        if (activeLink) activeLink.classList.add('active');
    }

    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveLink(homeLink);
            renderTemples(temples);
        });
    }

    if (oldLink) {
        oldLink.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveLink(oldLink);
            const filtered = filterOld(temples);
            renderTemples(filtered);
        });
    }

    if (newLink) {
        newLink.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveLink(newLink);
            const filtered = filterNew(temples);
            renderTemples(filtered);
        });
    }

    if (largeLink) {
        largeLink.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveLink(largeLink);
            const filtered = filterLarge(temples);
            renderTemples(filtered);
        });
    }

    if (smallLink) {
        smallLink.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveLink(smallLink);
            const filtered = filterSmall(temples);
            renderTemples(filtered);
        });
    }
});