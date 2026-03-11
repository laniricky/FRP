/**
 * List of Android Intent Shortcuts
 * Based on android.provider.Settings
 * Format: intent:#Intent;action=android.settings.[ACTION_NAME];end
 */

const intentData = [
    {
        category: "System Settings",
        icon: "ri-settings-3-line",
        items: [
            { title: "Settings App", desc: "Main device settings", uri: "intent://com.android.settings/#Intent;scheme=android-app;end", icon: "ri-settings-4-line" },
            { title: "Screen Smart Lock Menu", desc: "Setup screen lock (PIN/Password)", uri: "intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end", icon: "ri-lock-line" },
            { title: "ADB Settings", desc: "Samsung USB Debugging", uri: "intent://com.sec.android.app.modemui.activities.USB.settings/#Intent;scheme=android-app;end", icon: "ri-bug-line" }
        ]
    },
    {
        category: "App Stores",
        icon: "ri-shopping-bag-3-line",
        items: [
            { title: "Google Play Store", desc: "Launch the Play Store directly", uri: "intent://com.android.vending/#Intent;scheme=android-app;end", icon: "ri-google-play-line" },
             { title: "Galaxy Store", desc: "Samsung Store bypass target", uri: "intent://com.sec.android.app.samsungapps/#Intent;scheme=android-app;end", icon: "ri-store-2-line" }
        ]
    },
    {
        category: "Google Apps",
        icon: "ri-google-fill",
        items: [
            { title: "Google Search App", desc: "Launch the Google App", uri: "intent://com.google.android.googlequicksearchbox/#Intent;scheme=android-app;end", icon: "ri-google-fill" },
            { title: "YouTube App", desc: "Launch YouTube", uri: "intent://com.google.android.youtube/#Intent;scheme=android-app;end", icon: "ri-youtube-line" },
            { title: "Google Chrome", desc: "Open another browser tab", uri: "intent://com.android.chrome/#Intent;scheme=android-app;end", icon: "ri-chrome-line" },
            { title: "Google Maps", desc: "Open Maps", uri: "intent://com.google.android.apps.maps/#Intent;scheme=android-app;end", icon: "ri-map-pin-line" }
        ]
    },
    {
        category: "Tools & Utilities",
        icon: "ri-tools-line",
        items: [
            { title: "My Files / File Manager", desc: "Samsung files bypass target", uri: "intent://com.sec.android.app.myfiles/#Intent;scheme=android-app;end", icon: "ri-folder-open-line" },
            { title: "Calculator", desc: "Samsung Calculator (Exploit entry)", uri: "intent://com.sec.android.app.popupcalculator/#Intent;scheme=android-app;end", icon: "ri-calculator-line" },
            { title: "Phone Dialer", desc: "Open the dial pad to run codes", uri: "tel:1234567890/#Intent;scheme=android-app;end", icon: "ri-phone-line" },
            { title: "Contacts", desc: "Launch Contacts App", uri: "intent://com.samsung.android.app.contacts/#Intent;scheme=android-app;end", icon: "ri-contacts-line" },
            { title: "Samsung Notes", desc: "Launch Notes app", uri: "intent://com.samsung.android.app.notes/#Intent;scheme=android-app;end", icon: "ri-draft-line" }
        ]
    },
    {
        category: "Common Bypass Apps (Need Install)",
         icon: "ri-door-open-line",
         items: [
             { title: "Alliance Shield X", desc: "Launch Alliance Shield if installed", uri: "intent://com.allianceshield.x/#Intent;scheme=android-app;end", icon: "ri-shield-flash-line" },
             { title: "Activity Manager", desc: "Launch Activity Manager if installed", uri: "intent://com.activitymanager/#Intent;scheme=android-app;end", icon: "ri-list-settings-line" },
             { title: "QuickShortcutMaker", desc: "Launch QuickShortcutMaker", uri: "intent://com.sika524.android.quickshortcut/#Intent;scheme=android-app;end", icon: "ri-shortcut-line" },
             { title: "Package Disabler Pro", desc: "Launch Package Disabler", uri: "intent://com.ospolice.packagedisablerpro/#Intent;scheme=android-app;end", icon: "ri-close-circle-line" }
         ]
    }
];

// Combine all for easier processing if needed
const flatIntents = intentData.flatMap(cat => cat.items.map(item => ({...item, categoryName: cat.category})));

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('shortcuts-container');
    const searchInput = document.getElementById('search-input');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check local storage or system preference for theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.className = 'ri-sun-line';
    }

    // Toggle Theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.body.removeAttribute('data-theme');
            themeIcon.className = 'ri-moon-line';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeIcon.className = 'ri-sun-line';
            localStorage.setItem('theme', 'light');
        }
    });

    // Generate HTML
    function renderShortcuts(data) {
        container.innerHTML = '';
        
        data.forEach(category => {
            // Check if category has any visible items (important for search)
            if (category.items.length === 0) return;

            const section = document.createElement('section');
            section.className = 'category-section';

            const header = document.createElement('div');
            header.className = 'category-header';
            header.innerHTML = `
                <i class="${category.icon}"></i>
                <h2>${category.category}</h2>
            `;

            const grid = document.createElement('div');
            grid.className = 'shortcuts-grid';

            category.items.forEach(item => {
                const card = document.createElement('a');
                card.className = 'shortcut-card';
                
                // Since FRP bypass URLs rely on strict package launch schemes, 
                // we will only use exact explicitly provided URIs.
                card.href = item.uri;
                
                // Add target blank to prevent current page from reloading if intent fails
                card.target = "_blank";
                card.rel = "noopener noreferrer";
                
                // Store title and desc for search filtering
                card.dataset.title = item.title.toLowerCase();
                card.dataset.desc = item.desc.toLowerCase();

                card.innerHTML = `
                    <div class="shortcut-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="shortcut-content">
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                    </div>
                    <i class="ri-arrow-right-line action-arrow"></i>
                `;

                grid.appendChild(card);
            });

            section.appendChild(header);
            section.appendChild(grid);
            container.appendChild(section);
        });
    }

    // Initial render
    renderShortcuts(intentData);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === '') {
            renderShortcuts(intentData);
            return;
        }

        // Filter the intentData structure
        const filteredData = intentData.map(category => {
            const filteredItems = category.items.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.desc.toLowerCase().includes(query)
            );
            return {
                ...category,
                items: filteredItems
            };
        });

        renderShortcuts(filteredData);
    });
});
