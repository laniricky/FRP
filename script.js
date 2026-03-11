/**
 * List of Android Intent Shortcuts
 * Based on android.provider.Settings
 * Format: intent:#Intent;action=android.settings.[ACTION_NAME];end
 */

const intentData = [
    {
        category: "Network & Internet",
        icon: "ri-wifi-line",
        items: [
            { title: "Wi-Fi Settings", desc: "Manage wireless networks", intent: "ACTION_WIFI_SETTINGS", icon: "ri-wifi-line" },
            { title: "Mobile Network", desc: "Manage cellular data and roaming", intent: "ACTION_DATA_ROAMING_SETTINGS", icon: "ri-cellphone-line" },
            { title: "Bluetooth Settings", desc: "Connect devices like headphones", intent: "ACTION_BLUETOOTH_SETTINGS", icon: "ri-bluetooth-line" },
            { title: "Airplane Mode", desc: "Toggle wireless connections off", intent: "ACTION_AIRPLANE_MODE_SETTINGS", icon: "ri-flight-takeoff-line" },
            { title: "VPN Settings", desc: "Configure Virtual Private Network", intent: "ACTION_VPN_SETTINGS", icon: "ri-shield-keyhole-line" },
            { title: "NFC Settings", desc: "Near Field Communication config", intent: "ACTION_NFC_SETTINGS", icon: "ri-nfc-line" },
            { title: "NFC Payment", desc: "Tap & pay configuration", intent: "ACTION_NFC_PAYMENT_SETTINGS", icon: "ri-bank-card-line" },
            { title: "Tethering / Hotspot", desc: "Share your internet connection", intent: "ACTION_WIRELESS_SETTINGS", icon: "ri-router-line" } // Using more general wireless as tethering isn't a direct standard ACTION
        ]
    },
    {
        category: "Display & Sound",
        icon: "ri-tv-2-line",
        items: [
            { title: "Display Settings", desc: "Brightness, wallpaper, timeout", intent: "ACTION_DISPLAY_SETTINGS", icon: "ri-sun-line" },
            { title: "Sound Settings", desc: "Volumes, ringtones, vibrations", intent: "ACTION_SOUND_SETTINGS", icon: "ri-volume-up-line" },
            { title: "Cast Settings", desc: "Cast screen to other devices", intent: "ACTION_CAST_SETTINGS", icon: "ri-cast-line" },
            { title: "Night Display", desc: "Blue light filter schedule", intent: "ACTION_NIGHT_DISPLAY_SETTINGS", icon: "ri-moon-clear-line" }
        ]
    },
    {
        category: "Apps & Storage",
        icon: "ri-apps-line",
        items: [
            { title: "Manage All Apps", desc: "List of all installed applications", intent: "ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS", icon: "ri-apps-fill" },
            { title: "Default Apps", desc: "Choose default browser, phone, etc.", intent: "ACTION_MANAGE_DEFAULT_APPS_SETTINGS", icon: "ri-star-line" },
            { title: "Storage Settings", desc: "Internal storage and SD card", intent: "ACTION_INTERNAL_STORAGE_SETTINGS", icon: "ri-hard-drive-2-line" },
            { title: "Usage Access", desc: "Apps with usage tracking rights", intent: "ACTION_USAGE_ACCESS_SETTINGS", icon: "ri-pie-chart-line" },
            { title: "Manage Overlay", desc: "Apps that can draw over others", intent: "ACTION_MANAGE_OVERLAY_PERMISSION", icon: "ri-layers-line" },
            { title: "Write System Settings", desc: "Apps modifying system config", intent: "ACTION_MANAGE_WRITE_SETTINGS", icon: "ri-settings-4-line" }
        ]
    },
    {
        category: "Security & Privacy",
        icon: "ri-shield-check-line",
        items: [
            { title: "Security Settings", desc: "Device security status", intent: "ACTION_SECURITY_SETTINGS", icon: "ri-lock-line" },
            { title: "Location Settings", desc: "GPS and location tracking", intent: "ACTION_LOCATION_SOURCE_SETTINGS", icon: "ri-map-pin-line" },
            { title: "Privacy Settings", desc: "Permissions and privacy dashboard", intent: "ACTION_PRIVACY_SETTINGS", icon: "ri-eye-off-line" },
            { title: "Biometrics Enrollment", desc: "Add fingerprint or face", intent: "ACTION_FINGERPRINT_ENROLL", icon: "ri-fingerprint-line" },
            { title: "Set Screen Lock", desc: "Change PIN, Pattern, or Password", intent: "ACTION_SET_NEW_PASSWORD", icon: "ri-key-line" },
            { title: "Device Admin Apps", desc: "Manage admin applications", intent: "ACTION_SECURITY_SETTINGS", icon: "ri-admin-line" } // Maps to security root usually
        ]
    },
    {
        category: "System & Advanced",
        icon: "ri-cpu-line",
        items: [
            { title: "Main Settings", desc: "Root of the settings app", intent: "ACTION_SETTINGS", icon: "ri-settings-3-line" },
            { title: "Developer Options", desc: "Advanced debugging features", intent: "ACTION_APPLICATION_DEVELOPMENT_SETTINGS", icon: "ri-bug-line" },
            { title: "Accessibility Settings", desc: "Vision, hearing, and interaction", intent: "ACTION_ACCESSIBILITY_SETTINGS", icon: "ri-wheelchair-line" },
            { title: "Date & Time", desc: "Timezone, format, network time", intent: "ACTION_DATE_SETTINGS", icon: "ri-calendar-event-line" },
            { title: "Language & Input", desc: "Keyboard and system language", intent: "ACTION_INPUT_METHOD_SETTINGS", icon: "ri-translate-2" },
            { title: "Locale Settings", desc: "System region and language", intent: "ACTION_LOCALE_SETTINGS", icon: "ri-earth-line" },
            { title: "Battery saver", desc: "Manage power saving modes", intent: "ACTION_BATTERY_SAVER_SETTINGS", icon: "ri-battery-low-line" }
        ]
    },
    {
        category: "Accounts & Sync",
        icon: "ri-user-settings-line",
        items: [
            { title: "Sync Settings", desc: "Manage account synchronization", intent: "ACTION_SYNC_SETTINGS", icon: "ri-refresh-line" },
            { title: "Add Account", desc: "Register a new Google/Email account", intent: "ACTION_ADD_ACCOUNT", icon: "ri-user-add-line" },
        ]
    },
    {
        category: "Notifications & Do Not Disturb",
        icon: "ri-notification-3-line",
        items: [
             { title: "Notification Settings", desc: "Manage app alerts", intent: "ACTION_APP_NOTIFICATION_SETTINGS", icon: "ri-notification-line" },
             { title: "Do Not Disturb", desc: "Set quiet hours and exceptions", intent: "ACTION_ZEN_MODE_PRIORITY_SETTINGS", icon: "ri-moon-line" },
             { title: "Notification Access", desc: "Apps reading your alerts", intent: "ACTION_NOTIFICATION_LISTENER_SETTINGS", icon: "ri-message-3-line" },
             { title: "Notification Bubbles", desc: "Manage chat head bubbles", intent: "ACTION_APP_NOTIFICATION_BUBBLE_SETTINGS", icon: "ri-chat-smile-line" }
        ]
    },
    {
        category: "Bypass / Exploit (Common Targets)",
         icon: "ri-door-open-line",
         items: [
            { title: "Open Google Play Store", desc: "Launch the Play Store directly", uri: "intent://com.android.vending/#Intent;scheme=android-app;end", icon: "ri-google-play-line" },
            { title: "Open Google Search App", desc: "Launch the Google App", uri: "intent://com.google.android.googlequicksearchbox/#Intent;scheme=android-app;end", icon: "ri-google-fill" },
            { title: "Open Samsung Galaxy Store", desc: "Samsung Store bypass target", uri: "intent://com.sec.android.app.samsungapps/#Intent;scheme=android-app;end", icon: "ri-store-2-line" },
            { title: "Open YouTube App", desc: "Launch YouTube", uri: "intent://com.google.android.youtube/#Intent;scheme=android-app;end", icon: "ri-youtube-line" },
            { title: "Open My Files / File Manager", desc: "Samsung files bypass target", uri: "intent://com.sec.android.app.myfiles/#Intent;scheme=android-app;end", icon: "ri-folder-open-line" },
             { title: "Open Alliance Shield X", desc: "Common bypass utility", uri: "intent://com.allianceshield.x/#Intent;scheme=android-app;end", icon: "ri-shield-flash-line" },
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
                
                // Determine the correct href
                // If it's a specific URI provided, use it.
                // Otherwise format it as a standard android.settings action
                let href = '';
                if(item.uri) {
                     href = item.uri;
                } else if (item.intent) {
                     href = `intent:#Intent;action=android.settings.${item.intent};end`;
                }

                card.href = href;
                
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
