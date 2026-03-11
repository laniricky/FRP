/**
 * List of Android Intent Shortcuts
 * Based on android.provider.Settings
 * Format: intent:#Intent;action=android.settings.[ACTION_NAME];end
 */

const intentData = [
    {
        category: "System Access (12 items)",
        icon: "ri-settings-3-line",
        items: [
            { title: "Settings App", desc: "Main device settings", uri: "intent://com.android.settings/#Intent;scheme=android-app;end", icon: "ri-settings-4-line" },
            { title: "Google Play Services", desc: "Open to Disable (Crucial Bypass Step)", uri: "intent://com.google.android.gms/#Intent;scheme=android-app;end", icon: "ri-google-fill" },
            { title: "Screen Smart Lock Menu", desc: "Setup screen lock (PIN/Password)", uri: "intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end", icon: "ri-lock-line" },
            { title: "ADB Settings", desc: "Samsung USB Debugging", uri: "intent://com.sec.android.app.modemui.activities.USB.settings/#Intent;scheme=android-app;end", icon: "ri-bug-line" },
            { title: "Samsung Hidden Menu", desc: "Factory Keystring", uri: "intent://com.sec.android.app.hwmoduletest/#Intent;scheme=android-app;end", icon: "ri-terminal-window-line" },
            { title: "Choose Screen Lock (A03s)", desc: "Direct to Lock Setup", uri: "intent://com.android.settings.password.ChooseLockGeneric/#Intent;scheme=android-app;end", icon: "ri-key-2-line" },
            { title: "Developer Options", desc: "Advanced Settings", uri: "intent://com.android.settings.DevelopmentSettings/#Intent;scheme=android-app;end", icon: "ri-code-line" },
            { title: "Wi-Fi Settings Direct", desc: "Wi-Fi networks", uri: "intent://com.android.settings.wifi.WifiSettings/#Intent;scheme=android-app;end", icon: "ri-wifi-line" },
            { title: "Bluetooth Settings Direct", desc: "Bluetooth pairings", uri: "intent://com.android.settings.bluetooth.BluetoothSettings/#Intent;scheme=android-app;end", icon: "ri-bluetooth-line" },
            { title: "Apps Manager", desc: "Manage installed apps", uri: "intent://com.android.settings.ManageApplications/#Intent;scheme=android-app;end", icon: "ri-apps-line" },
            { title: "Accessibility Settings", desc: "Accessibility menu", uri: "intent://com.android.settings.AccessibilitySettings/#Intent;scheme=android-app;end", icon: "ri-wheelchair-line" },
            { title: "Location Settings", desc: "GPS Settings", uri: "intent://com.android.settings.SecuritySettings/#Intent;scheme=android-app;end", icon: "ri-map-pin-line" }
        ]
    },
    {
        category: "Samsung Specific (14 items)",
        icon: "ri-smartphone-line",
        items: [
            { title: "Galaxy Store", desc: "Samsung Store bypass target", uri: "intent://com.sec.android.app.samsungapps/#Intent;scheme=android-app;end", icon: "ri-store-2-line" },
            { title: "Install Alliance Shield X", desc: "Open directly in Galaxy Store", uri: "intent://ProductDetail/com.rrivenllc.shieldx/#Intent;scheme=samsungapps;action=android.intent.action.VIEW;end", icon: "ri-download-cloud-2-line" },
            { title: "Install Package Disabler", desc: "Open directly in Galaxy Store", uri: "intent://ProductDetail/com.ospolice.packagedisablerpro/#Intent;scheme=samsungapps;action=android.intent.action.VIEW;end", icon: "ri-download-cloud-2-line" },
            { title: "My Files / File Manager", desc: "Samsung files bypass target", uri: "intent://com.sec.android.app.myfiles/#Intent;scheme=android-app;end", icon: "ri-folder-open-line" },
            { title: "Calculator (Exploit)", desc: "Samsung Calculator", uri: "intent://com.sec.android.app.popupcalculator/#Intent;scheme=android-app;end", icon: "ri-calculator-line" },
            { title: "Phone Dialer", desc: "Open the dial pad to run codes", uri: "tel:1234567890/#Intent;scheme=android-app;end", icon: "ri-phone-line" },
            { title: "Contacts", desc: "Launch Contacts App", uri: "intent://com.samsung.android.app.contacts/#Intent;scheme=android-app;end", icon: "ri-contacts-line" },
            { title: "Samsung Notes", desc: "Launch Notes app", uri: "intent://com.samsung.android.app.notes/#Intent;scheme=android-app;end", icon: "ri-draft-line" },
            { title: "Internet Browser", desc: "Samsung Browser", uri: "intent://com.sec.android.app.sbrowser/#Intent;scheme=android-app;end", icon: "ri-global-line" },
            { title: "Samsung Email", desc: "Email client", uri: "intent://com.samsung.android.email.provider/#Intent;scheme=android-app;end", icon: "ri-mail-line" },
            { title: "Bixby Voice", desc: "Voice assistant", uri: "intent://com.samsung.android.bixby.agent/#Intent;scheme=android-app;end", icon: "ri-mic-line" },
            { title: "Bixby Vision", desc: "Vision assistant", uri: "intent://com.samsung.android.visionintelligence/#Intent;scheme=android-app;end", icon: "ri-eye-line" },
            { title: "Samsung Health", desc: "Health app", uri: "intent://com.sec.android.app.shealth/#Intent;scheme=android-app;end", icon: "ri-heart-pulse-line" },
            { title: "Samsung Wearable", desc: "Galaxy Wearable", uri: "intent://com.samsung.android.app.watchmanager/#Intent;scheme=android-app;end", icon: "ri-watch-line" }
        ]
    },
    {
        category: "Google Suite (12 items)",
        icon: "ri-google-fill",
        items: [
            { title: "Google Play Store", desc: "Launch the Play Store directly", uri: "intent://com.android.vending/#Intent;scheme=android-app;end", icon: "ri-google-play-line" },
            { title: "Google Search App", desc: "Launch the Google App", uri: "intent://com.google.android.googlequicksearchbox/#Intent;scheme=android-app;end", icon: "ri-google-fill" },
            { title: "YouTube App", desc: "Launch YouTube", uri: "intent://com.google.android.youtube/#Intent;scheme=android-app;end", icon: "ri-youtube-line" },
            { title: "Google Chrome", desc: "Open another browser tab", uri: "intent://com.android.chrome/#Intent;scheme=android-app;end", icon: "ri-chrome-line" },
            { title: "Google Maps", desc: "Open Maps", uri: "intent://com.google.android.apps.maps/#Intent;scheme=android-app;end", icon: "ri-map-pin-line" },
            { title: "Google Photos", desc: "Photos app", uri: "intent://com.google.android.apps.photos/#Intent;scheme=android-app;end", icon: "ri-image-line" },
            { title: "Google Drive", desc: "Cloud storage", uri: "intent://com.google.android.apps.docs/#Intent;scheme=android-app;end", icon: "ri-drive-line" },
            { title: "Gmail", desc: "Mail client", uri: "intent://com.google.android.gm/#Intent;scheme=android-app;end", icon: "ri-mail-send-line" },
            { title: "Google Calendar", desc: "Calendar app", uri: "intent://com.google.android.calendar/#Intent;scheme=android-app;end", icon: "ri-calendar-line" },
            { title: "Google Translate", desc: "Translator", uri: "intent://com.google.android.apps.translate/#Intent;scheme=android-app;end", icon: "ri-translate" },
            { title: "Google Keep", desc: "Note taking", uri: "intent://com.google.android.keep/#Intent;scheme=android-app;end", icon: "ri-sticky-note-line" },
             { title: "Google Messages", desc: "SMS app", uri: "intent://com.google.android.apps.messaging/#Intent;scheme=android-app;end", icon: "ri-message-3-line" }
        ]
    },
    {
        category: "Exploits & Targets (10 items)",
         icon: "ri-door-open-line",
         items: [
             { title: "Alliance Shield X", desc: "Launch Alliance Shield", uri: "intent://com.allianceshield.x/#Intent;scheme=android-app;end", icon: "ri-shield-flash-line" },
             { title: "Activity Manager", desc: "Launch Activity Manager", uri: "intent://com.activitymanager/#Intent;scheme=android-app;end", icon: "ri-list-settings-line" },
             { title: "QuickShortcutMaker", desc: "Launch QuickShortcutMaker", uri: "intent://com.sika524.android.quickshortcut/#Intent;scheme=android-app;end", icon: "ri-shortcut-line" },
             { title: "Package Disabler Pro", desc: "Launch Package Disabler", uri: "intent://com.ospolice.packagedisablerpro/#Intent;scheme=android-app;end", icon: "ri-close-circle-line" },
             { title: "Apex Launcher", desc: "Bypass to home screen", uri: "intent://com.anddoes.launcher/#Intent;scheme=android-app;end", icon: "ri-home-gear-line" },
             { title: "Nova Launcher", desc: "Alternative launcher bypass", uri: "intent://com.teslacoilsw.launcher/#Intent;scheme=android-app;end", icon: "ri-layout-grid-line" },
             { title: "FRP Bypass APK", desc: "Standard generic bypass app", uri: "intent://com.frp.bypass/#Intent;scheme=android-app;end", icon: "ri-key-2-line" },
             { title: "Technocare APK", desc: "FRP tool", uri: "intent://com.technocare.tricks/#Intent;scheme=android-app;end", icon: "ri-tools-fill" },
             { title: "Root Explorer", desc: "File explorer bypass", uri: "intent://com.speedsoftware.rootexplorer/#Intent;scheme=android-app;end", icon: "ri-folder-keyhole-line" },
             { title: "ES File Explorer", desc: "Legacy file manager target", uri: "intent://com.estrongs.android.pop/#Intent;scheme=android-app;end", icon: "ri-folder-2-line" }
         ]
    },
    {
        category: "Other OEM Brands (7 items)",
        icon: "ri-smartphone-line",
        items: [
            { title: "Moto Actions", desc: "Motorola gestures", uri: "intent://com.motorola.actions/#Intent;scheme=android-app;end", icon: "ri-hand-coin-line" },
            { title: "OnePlus Settings", desc: "OnePlus specific settings", uri: "intent://com.oneplus.settings/#Intent;scheme=android-app;end", icon: "ri-settings-line" },
            { title: "Xiaomi Security", desc: "MIUI Security app", uri: "intent://com.miui.securitycenter/#Intent;scheme=android-app;end", icon: "ri-shield-star-line" },
            { title: "Huawei AppGallery", desc: "Huawei Store", uri: "intent://com.huawei.appmarket/#Intent;scheme=android-app;end", icon: "ri-store-3-line" },
            { title: "Vivo App Store", desc: "Vivo Store", uri: "intent://com.bbk.appstore/#Intent;scheme=android-app;end", icon: "ri-store-3-line" },
            { title: "Oppo App Market", desc: "Oppo Store", uri: "intent://com.heytap.market/#Intent;scheme=android-app;end", icon: "ri-store-3-line" },
            { title: "OnePlus Launcher", desc: "OnePlus Home screen", uri: "intent://net.oneplus.launcher/#Intent;scheme=android-app;end", icon: "ri-home-gear-line" }

        ]
    },
    {
        category: "Third Party Media (6 items)",
        icon: "ri-share-line",
        items: [
            { title: "Facebook", desc: "Launch Facebook app", uri: "intent://com.facebook.katana/#Intent;scheme=android-app;end", icon: "ri-facebook-box-line" },
            { title: "Twitter/X", desc: "Launch Twitter app", uri: "intent://com.twitter.android/#Intent;scheme=android-app;end", icon: "ri-twitter-x-line" },
            { title: "Instagram", desc: "Launch Instagram", uri: "intent://com.instagram.android/#Intent;scheme=android-app;end", icon: "ri-instagram-line" },
            { title: "WhatsApp", desc: "Launch WhatsApp", uri: "intent://com.whatsapp/#Intent;scheme=android-app;end", icon: "ri-whatsapp-line" },
            { title: "TikTok", desc: "Launch TikTok", uri: "intent://com.zhiliaoapp.musically/#Intent;scheme=android-app;end", icon: "ri-tiktok-line" },
            { title: "Netflix", desc: "Launch Netflix", uri: "intent://com.netflix.mediaclient/#Intent;scheme=android-app;end", icon: "ri-netflix-fill" }
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
