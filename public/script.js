// Data
const data = {
    site: {
        name: "livest",
        copyright: "All Rights Reserved 2024 | Livest"
    },
    navigation: {
        menu: [
            { label: "Home", href: "#hero" },
            { label: "Properties", href: "#properties" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" }
        ],
        footer: {
            nav: ["Home", "Services", "Invest", "Properties"],
            legal: ["About", "Contact", "Privacy Policy", "Terms & Conditions"]
        },
        social: [
            { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
            { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
            { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
            { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }
        ]
    },
    hero: {
        breadcrumbs: "Home / Properties",
        title: "Find your perfect investment properties",
        description: "Explore a selection of high-value real estate opportunities designed for financial growth and stability."
    },
    properties: {
        total: 72,
        showing: "1-9",
        sort: "Most Popular",
        items: [
            {
                image: "🏠",
                title: "Modern downtown condo with stunning city views",
                location: "Austin, Texas",
                sqft: "1,250 sqft",
                beds: "2",
                baths: "2",
                price: "$4,500",
                percentage: "56%"
            },
            {
                image: "🏘️",
                title: "Luxury suburban home in gated community",
                location: "Dallas, Texas",
                sqft: "2,800 sqft",
                beds: "4",
                baths: "3",
                price: "$6,200",
                percentage: "42%"
            },
            {
                image: "🏢",
                title: "Historic loft apartment in arts district",
                location: "Houston, Texas",
                sqft: "1,100 sqft",
                beds: "1",
                baths: "1",
                price: "$3,800",
                percentage: "38%"
            },
            {
                image: "🏡",
                title: "Waterfront property with private dock",
                location: "Galveston, Texas",
                sqft: "3,200 sqft",
                beds: "5",
                baths: "4",
                price: "$8,500",
                percentage: "61%"
            },
            {
                image: "🏰",
                title: "Contemporary townhouse near tech hub",
                location: "Austin, Texas",
                sqft: "1,800 sqft",
                beds: "3",
                baths: "2",
                price: "$5,400",
                percentage: "49%"
            },
            {
                image: "🏗️",
                title: "Renovated bungalow with modern amenities",
                location: "San Antonio, Texas",
                sqft: "1,500 sqft",
                beds: "2",
                baths: "2",
                price: "$4,200",
                percentage: "44%"
            },
            {
                image: "🏛️",
                title: "Penthouse suite with rooftop terrace",
                location: "Dallas, Texas",
                sqft: "2,200 sqft",
                beds: "3",
                baths: "3",
                price: "$7,800",
                percentage: "55%"
            },
            {
                image: "🏙️",
                title: "Cozy starter home in family-friendly neighborhood",
                location: "Fort Worth, Texas",
                sqft: "1,350 sqft",
                beds: "3",
                baths: "2",
                price: "$3,600",
                percentage: "40%"
            },
            {
                image: "🏕️",
                title: "Investment property with high rental yield",
                location: "El Paso, Texas",
                sqft: "1,900 sqft",
                beds: "4",
                baths: "3",
                price: "$4,900",
                percentage: "52%"
            }
        ]
    },
    contact: {
        title: "Get Started Today",
        description: "Join thousands of investors using Livest to find their perfect property",
        form: {
            title: "Contact Us",
            submitText: "Get Started",
            successMessage: "Thank you! We'll be in touch soon.",
            errorMessage: "Failed to send message. Please try again.",
            loadingText: "Sending...",
            captchaSiteKey: (typeof window !== 'undefined' && window.__RECAPTCHA_SITE_KEY__) || ""
        }
    }
};

// Load and render data
function loadData() {
    try {
        renderPage(data);
    } catch (error) {
        console.error('Error loading data:', error);
        document.body.innerHTML = '<div class="p-10 text-center"><h1 class="text-2xl font-bold mb-4">Error loading data</h1><p class="mt-2 text-sm text-gray-600">Error: ' + error.message + '</p></div>';
    }
}

function renderPage(data) {
    renderSite(data.site);
    renderNavigation(data.navigation);
    renderHero(data.hero);
    renderProperties(data.properties);
    renderContact(data.contact);
    renderFooter(data.navigation, data.site);
}

function renderSite(site) {
    const siteLogo = document.getElementById('siteLogo');
    if (siteLogo) {
        siteLogo.textContent = site.name;
    }

    const footerWatermark = document.getElementById('footerWatermark');
    if (footerWatermark) {
        footerWatermark.textContent = site.name;
    }

    const copyright = document.getElementById('footerCopyright');
    if (copyright) {
        copyright.textContent = site.copyright;
    }
}

function renderNavigation(nav) {
    // Render desktop menu
    const desktopMenu = document.getElementById('desktopMenu');
    if (desktopMenu) {
        desktopMenu.innerHTML = nav.menu.map(item => {
            const dropdownIcon = item.hasDropdown ? '<svg class="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>' : '';
            return `<a href="${item.href}" class="nav-link text-gray-700 font-medium flex items-center hover:text-emerald-500">${item.label}${dropdownIcon}</a>`;
        }).join('');
    }

    // Render mobile menu
    const mobileMenuItems = document.getElementById('mobileMenuItems');
    if (mobileMenuItems) {
        mobileMenuItems.innerHTML = nav.menu.map(item =>
            `<a href="${item.href}" class="nav-link text-gray-700 font-medium py-2">${item.label}</a>`
        ).join('');
    }
}

function renderHero(hero) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    if (breadcrumbs) {
        breadcrumbs.textContent = hero.breadcrumbs;
    }

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = hero.title.replace('investment properties', '<br>investment properties');
    }

    const heroDescription = document.getElementById('hero-description');
    if (heroDescription) {
        heroDescription.textContent = hero.description;
    }
}

function renderProperties(properties) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${properties.showing} of total ${properties.total} results`;
    }

    const propertiesGrid = document.getElementById('propertiesGrid');
    if (propertiesGrid && properties.items) {
        propertiesGrid.innerHTML = properties.items.map(property => `
            <div class="bg-white rounded-xl shadow-md border border-gray-100 property-card overflow-hidden">
                <div class="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center text-6xl">
                    ${property.image}
                </div>
                <div class="p-5">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">${property.title}</h3>
                    <div class="flex items-center gap-1 text-gray-600 mb-3 text-sm">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        ${property.location}
                    </div>
                    <div class="flex items-center gap-4 text-gray-600 text-sm mb-4">
                        <div class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                            </svg>
                            ${property.sqft}
                        </div>
                        <div class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                            ${property.beds}
                        </div>
                        <div class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3H3m18-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            ${property.baths}
                        </div>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <span class="text-2xl font-bold text-emerald-500">${property.price}</span>
                            <span class="text-gray-600 ml-2">(${property.percentage})</span>
                        </div>
                    </div>
                    <button class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors">
                        Invest now
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function renderFooter(nav, site) {
    // Footer navigation links
    const footerNavLinks = document.getElementById('footerNavLinks');
    if (footerNavLinks && nav.footer) {
        footerNavLinks.innerHTML = nav.footer.nav.map(link =>
            `<li><a href="#" class="text-gray-300 hover:text-white transition-colors">${link}</a></li>`
        ).join('');
    }

    // Footer legal links
    const footerLegalLinks = document.getElementById('footerLegalLinks');
    if (footerLegalLinks && nav.footer) {
        footerLegalLinks.innerHTML = nav.footer.legal.map(link =>
            `<li><a href="#" class="text-gray-300 hover:text-white transition-colors">${link}</a></li>`
        ).join('');
    }

    // Social icons
    const socialIcons = document.getElementById('socialIcons');
    if (socialIcons && nav.social) {
        socialIcons.innerHTML = nav.social.map(social => `
            <a href="#" class="text-gray-300 hover:text-white transition-colors" aria-label="${social.name}">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="${social.icon}"/>
                </svg>
            </a>
        `).join('');
    }
}

function renderContact(contact) {
    const contactTitle = document.getElementById('contactTitle');
    if (contactTitle) {
        contactTitle.textContent = contact.title;
    }

    const contactDescription = document.getElementById('contactDescription');
    if (contactDescription) {
        contactDescription.textContent = contact.description;
    }

    // Initialize contact widget
    if (contact.form) {
        initializeContactWidget(contact.form);
    }
}

function initializeContactWidget(formConfig) {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initWidget(formConfig);
        });
    } else {
        initWidget(formConfig);
    }
}

function initWidget(formConfig) {
    const container = document.getElementById('contactWidgetContainer');
    if (container && window.ContactWidget) {
        new window.ContactWidget(container, {
            theme: {
                primaryColor: '#10b981', // emerald-500
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '100%'
            },
            form: {
                title: formConfig.title,
                submitText: formConfig.submitText,
                successMessage: formConfig.successMessage,
                errorMessage: formConfig.errorMessage,
                loadingText: formConfig.loadingText,
                enableCaptcha: true,
                captchaSiteKey: formConfig.captchaSiteKey
            },
            fields: {
                name: { enabled: true, required: true, label: 'Full Name', placeholder: 'Your full name', type: 'text' },
                email: { enabled: true, required: true, label: 'Email Address', placeholder: 'your@email.com', type: 'email' },
                phone: { enabled: true, required: false, label: 'Phone Number', placeholder: '+1 (555) 123-4567', type: 'tel' },
                message: { enabled: true, required: true, label: 'Message', placeholder: 'Tell us about your property interests...', type: 'textarea', rows: 5 },
                company: { enabled: false },
                linkedin: { enabled: false },
                subject: { enabled: false },
                website: { enabled: false },
                budget: { enabled: false },
                newsletter: { enabled: false }
            }
        });
    }
}

// Load data when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
} else {
    loadData();
}
