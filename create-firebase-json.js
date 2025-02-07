const fs = require("fs");
const path = require("path");

// create-csp-nonce-txt.js
const cspNonce = fs.readFileSync(path.join(__dirname, "csp-nonce.txt"), { encoding: "utf-8" });

const objectToCspHeader = object => {
    const cspHeader = [];
    for (const [key, values] of Object.entries(object)) {
        if (values.length > 0) {
            cspHeader.push(`${key} ${values.join(" ")}`);
        } else {
            cspHeader.push(`${key}`);
        }
    }
    return cspHeader.join(";");
};

const firebaseJson = {
    hosting: {
        public: "./dist",
        trailingSlash: true,
        cleanUrls: true,
        ignore: [
            "firebase.json",
            "**/.*",
            "**/node_modules/**"
        ],
        rewrites: [
            {
                source: "**",
                destination: "/404.html"
            }
        ],
        headers: [
            {
                source: "**",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: objectToCspHeader({
                            "base-uri": [
                                "'self'"
                            ],
                            "object-src": [
                                "'none'"
                            ],
                            "script-src": [
                                "'self'",
                                `'nonce-${cspNonce}'`,
                                "'unsafe-inline'",
                                // "'strict-dynamic'",
                                "https://www.google.com/recaptcha/",
                                "https://www.gstatic.com/recaptcha/",
                                "https://www.googletagmanager.com",
                                "https://cdn.jsdelivr.net" // For Workbox
                            ],
                            "frame-src": [
                                "'self'",
                                "https://www.google.com/recaptcha/",
                                "https://recaptcha.google.com/recaptcha/"
                            ],
                            "img-src": [
                                "'self'",
                                "data:",
                                "www.googletagmanager.com"
                            ],
                            "style-src": [
                                "'self'",
                                `'nonce-${cspNonce}'`,
                                "fonts.googleapis.com"
                            ],
                            "font-src": [
                                "fonts.gstatic.com"
                            ]
                        })
                    }
                ]
            },
            {
                source: "/sw.js",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-cache, no-store, must-revalidate"
                    }
                ]
            },
            {
                source: "/index.html",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-cache, no-store, must-revalidate"
                    }
                ]
            },
            {
                source: "**/*.@(jpg|jpeg|gif|png|svg|webp|js|css|eot|otf|ttf|ttc|woff|woff2|font.css|mp4|webm)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "max-age=31536000"
                    }
                ]
            }
        ],
        redirects: [
            {
                source: "/konsol-vergisi-hesaplayici/apple-vision-pro/",
                destination: "/telefon-vergisi-hesaplayici/apple-vision-pro/",
                type: 301
            },

            {
                source: "/konsol-vergisi-hesaplayici/playstation-5/",
                destination: "/konsol-vergisi-hesaplayici/sony-playstation-5/",
                type: 301
            },
            {
                source: "/konsol-vergisi-hesaplayici/playstation-vr2/",
                destination: "/konsol-vergisi-hesaplayici/sony-playstation-vr2/",
                type: 301
            },
            {
                source: "/konsol-vergisi-hesaplayici/xbox-series-s/",
                destination: "/konsol-vergisi-hesaplayici/microsoft-xbox-series-s/",
                type: 301
            },
            {
                source: "/konsol-vergisi-hesaplayici/xbox-series-x/",
                destination: "/konsol-vergisi-hesaplayici/microsoft-xbox-series-x/",
                type: 301
            },
            {
                source: "/konsol-vergisi-hesaplayici/steam-deck/",
                destination: "/konsol-vergisi-hesaplayici/valve-steam-deck/",
                type: 301
            },

            {
                source: "/hesaplayicilar/telefon-vergisi-hesaplayici",
                destination: "/telefon-vergisi-hesaplayici/",
                type: 301
            },
            {
                source: "/hesaplayicilar/konsol-vergisi-hesaplayici",
                destination: "/konsol-vergisi-hesaplayici/",
                type: 301
            },
            {
                source: "/hesaplayicilar/kdv-hesaplayici",
                destination: "/kdv-hesaplayici/",
                type: 301
            },
            {
                source: "/hesaplayicilar/telefon-vergisi-hesaplayici/",
                destination: "/telefon-vergisi-hesaplayici/",
                type: 301
            },
            {
                source: "/hesaplayicilar/konsol-vergisi-hesaplayici/",
                destination: "/konsol-vergisi-hesaplayici/",
                type: 301
            },
            {
                source: "/hesaplayicilar/kdv-hesaplayici/",
                destination: "/kdv-hesaplayici/",
                type: 301
            },

            {
                source: "/yazilar/zirai-kazanc-vergisi-nedir/",
                destination: "/yazilar/zirai-kazanc-gelir-vergisi-nedir/",
                type: 301
            },
            {
                source: "/yazilar/luks-tuketimden-daha-fazla-vergi-alinmali-midir/",
                destination: "/yazilar/luks-tuketimden-daha-fazla-vergi-alinmali-mi/",
                type: 301
            },
            {
                source: "/yazilar/verginin-vergisi-hangi-ulke-icat-etmistir/",
                destination: "/yazilar/verginin-vergisini-hangi-ulke-icat-etmistir/",
                type: 301
            }
        ]
    },
    emulators: {
        hosting: {
            port: 8080
        },
        ui: {
            enabled: true
        }
    }
};

fs.writeFileSync(path.join(__dirname, "firebase.json"), JSON.stringify(firebaseJson));

console.log("firebase.json created");
