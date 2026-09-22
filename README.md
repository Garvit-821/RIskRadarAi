# 🌍 RiskRadar AI

### Next-Generation AI-Powered Disaster Risk Prediction & Early Warning System
*Built with React 18, TypeScript, Vite, Leaflet, and Real-Time USGS Seismic & Atmospheric APIs*

---

## 📖 Table of Contents
- [🌟 Introduction & Purpose](#-introduction--purpose)
- [✨ Key Features](#-key-features)
- [🏗️ System Architecture & Data Flow](#️-system-architecture--data-flow)
- [🧩 Deep-Dive into System Modules](#-deep-dive-into-system-modules)
- [📐 AI Risk Scoring Algorithm Explained](#-ai-risk-scoring-algorithm-explained)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Directory Structure](#-project-directory-structure)
- [🚀 Quickstart Guide for Beginners](#-quickstart-guide-for-beginners)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [📡 Live Telemetry APIs Used](#-live-telemetry-apis-used)
- [🤖 RadarBot AI Copilot](#-radarbot-ai-copilot)
- [❓ Frequently Asked Questions & Troubleshooting](#-frequently-asked-questions--troubleshooting)
- [🔮 Roadmap & Future Enhancements](#-roadmap--future-enhancements)
- [👨‍💻 Author & Acknowledgments](#-author--acknowledgments)

---

## 🌟 Introduction & Purpose

Natural disasters such as earthquakes, cyclonic storms, flash floods, heatwaves, and wildfires often strike with minimal warning, leaving communities and emergency responders vulnerable. 

**RiskRadar AI** is an intelligent early warning and disaster risk intelligence platform. It bridges the gap between raw scientific data and actionable safety protocols by:
1. Ingesting **real-time global sensor data** (live earthquake faultlines from the USGS and global atmospheric conditions from Open-Meteo & OpenWeather).
2. Synthesizing these telemetry streams into a **single 0–100 AI Risk Index**.
3. Plotting live epicenters and hazard zones on an **interactive dark-mode geospatial radar map**.
4. Providing 24/7 disaster survival guidance through **RadarBot AI** and an interactive **72-Hour Survival Go-Bag checklist**.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| 🌦 **Live Weather Center** | Real-time meteorological telemetry (Temperature, Feels Like, Humidity, Wind Velocity & Direction, Barometric Pressure, UV Index, Visibility, 24-Hour Timeline & 5-Day Forecast). |
| 🌍 **USGS Earthquake Tracker** | Real-time global seismic feed from the USGS. Filter by magnitude (All, M2.5+, M4.5+, M6.0+), view focal depth, calculate exact distance from your target city (km), and monitor tsunami alerts. |
| 🚨 **Disaster Alerts Feed** | Multi-hazard alerts for Cyclones, Floods, Heatwaves, Earthquakes, Wildfires, and Storms with severity ratings and synthesized emergency broadcast siren testing. |
| ⚠️ **AI Risk Prediction & Sandbox** | Multi-factor neural hazard model evaluating thermal extremes, wind shear, low-pressure depressions, and seismic proximity. Includes an interactive "What-If" simulation sandbox. |
| 🤖 **RadarBot AI Copilot** | Floating conversational assistant with rapid emergency prompt chips for earthquakes, cyclones, floods, fires, and survival go-bags. |
| 🗺 **Interactive Disaster Map** | Geospatial dark-mode Leaflet canvas with color-coded magnitude pins, danger radiuses, and regional emergency safe havens. |
| 📍 **Monitored Regional Hubs** | Multi-city tracking hub with live risk mini-badges and 1-click focus switching. |
| 🦺 **72-Hour Survival Go-Bag** | Interactive checklist of FEMA-recommended survival essentials with celebratory confetti completion and quick-dial emergency hotlines. |
| 👤 **Operator Auth & 1-Click Demo** | Instant 1-click demo guest login with local session persistence. |
| 🏎 **Motorsport Engineering Design** | High-contrast dark theme (`#000000` canvas), UPPERCASE display typography, 1.5px tracking, 0px precision rectangles, and signature 4px M-stripe dividers. |

---

## 🏗️ System Architecture & Data Flow

```mermaid
flowchart TD
    subgraph Data Sources ["Live Global Telemetry Sources"]
        USGS["USGS Global Seismic API\n(GeoJSON Real-time Feed)"]
        OM["Open-Meteo API\n(Zero-Key Worldwide Weather)"]
        OW["OpenWeatherMap API\n(Custom Key Support)"]
    end

    subgraph Core Services ["RiskRadar AI Engine (React + TypeScript)"]
        WS["Weather Service\n(weatherService.ts)"]
        ES["Earthquake Service\n(earthquakeService.ts)"]
        RA["AI Risk Scoring Engine\n(riskAnalysisService.ts)"]
        AI["RadarBot AI Engine\n(aiChatService.ts)"]
        AS["Disaster Alerts & Audio Siren\n(alertsService.ts)"]
    end

    subgraph State Management ["Global React Contexts"]
        DC["DisasterContext.tsx\n(Live Weather, Quakes, Alerts, Target City)"]
        AC["AuthContext.tsx\n(Operator Profile, Demo State)"]
    end

    subgraph UI Presentation ["Operator Interface Views"]
        HUD["Overview HUD Dashboard"]
        WTH["Weather Telemetry Center"]
        EQ["Earthquake Seismic Monitor"]
        ALT["Disaster Alerts Feed"]
        RSK["AI Risk Analysis & Sandbox"]
        MAP["Interactive Leaflet Radar Map"]
        KIT["72h Survival Kit & SOS Directory"]
        BOT["RadarBot AI Floating Assistant"]
    end

    USGS --> ES
    OM --> WS
    OW --> WS
    
    WS --> DC
    ES --> DC
    AS --> DC
    
    DC --> RA
    DC --> UI Presentation
    AC --> UI Presentation
    RA --> HUD & RSK
    AI --> BOT
```

---

## 🧩 Deep-Dive into System Modules

### 1. 🏠 Landing Page (`LandingPage.tsx`)
- High-impact hero section with **UPPERCASE** display headlines.
- Quick City Search scanner allowing instant location targeting.
- Live Spec-Cell telemetry banner showing current temperature, recorded earthquakes, active hazards, and AI risk index.
- 4-Step interactive workflow illustrating sensor ingestion to proactive response.

### 2. 📊 Overview HUD (`DashboardOverview.tsx`)
- Central command center displaying the current city's weather, AI Risk Score, and global earthquake count.
- Dynamic **AI Safety Briefing** synthesized in real time.
- Quick switch buttons for fast regional jumping (e.g. Hyderabad, Delhi, Tokyo, San Francisco).
- Active disaster alerts summary and recent global tremors feed.

### 3. 🌦 Weather Center (`WeatherCenter.tsx`)
- 6 primary sensor spec-cells: Relative Humidity, Wind Velocity & Direction, Barometric Pressure, UV Index, Visibility, and Apparent Temperature Delta.
- 24-Hour hourly temperature and precipitation probability strip.
- 5-Day synoptic forecast with highs, lows, and conditions.

### 4. 🌍 Earthquake Tracker (`EarthquakeTracker.tsx` & `EarthquakeDetailModal.tsx`)
- Real-time USGS feed integration.
- Filtering by minimum magnitude (All, M2.5+, M4.5+, M6.0+).
- Sorting by Time, Magnitude, Distance, and Focal Depth.
- **Earthquake Inspector Modal**: Displays UTC/local timestamps, focal depth, coordinates, tsunami warnings, and USGS bulletin link.

### 5. 🚨 Disaster Alerts Center (`AlertsCenter.tsx`)
- Live multi-hazard warnings categorized by severity (Critical, High, Moderate, Low).
- Official civil protection safety advisories for each alert.
- Synthesized acoustic broadcast siren testing using the **Web Audio API**.
- One-click alert copying for fast team dissemination.

### 6. ⚠️ AI Risk Analysis & Sandbox (`RiskAnalysisView.tsx`)
- Factor breakdown with weights: Thermal Exposure (25%), Precipitation (30%), Wind Velocity (20%), Seismic Proximity (15%), Barometric Pressure (10%).
- Actionable emergency recommendations.
- **Interactive "What-If" Sandbox**: Operators can move sliders for temperature, wind speed, pressure, and weather conditions to simulate severe events and observe dynamic AI risk threshold changes.

### 7. 🗺 Interactive Disaster Map (`DisasterMap.tsx`)
- Dark-themed Leaflet canvas with custom map pins.
- Layer toggles for USGS Earthquakes, Active Alerts, and Emergency Evacuation Safe Havens.
- 1-click recenter button on current target location.

### 8. 🦺 72-Hour Survival Kit (`EmergencyKit.tsx`)
- 12 FEMA-standard survival essentials across hydration, food, medical, power, tools, and documents.
- Real-time completion percentage with confetti celebration at 100%.
- National emergency hotlines directory (112, 1078 NDRF, 1070 SDMA, 108 Ambulance, 101 Fire).

### 9. 🤖 RadarBot AI Copilot (`AIAssistantModal.tsx`)
- Floating circular launcher button.
- Expandable dock with quick-topic action chips.
- Multi-turn domain advice for earthquakes (Drop, Cover, Hold), cyclones, floods, fires, and survival kits.

---

## 📐 AI Risk Scoring Algorithm Explained

RiskRadar AI computes a weighted risk score ($R$) between **0 and 100** based on five environmental factors:

$$R = \min\Big(100, \max\big(5, 0.25 \cdot T + 0.30 \cdot P + 0.20 \cdot W + 0.15 \cdot S + 0.10 \cdot B\big)\Big)$$

### Factor Breakdown:
1. **$T$ (Thermal Exposure - 25% Weight)**:
   - $T \ge 42^\circ\text{C} \implies 95\text{ pts}$ (Extreme heatstroke danger)
   - $T \ge 38^\circ\text{C} \implies 75\text{ pts}$ (Severe heat advisory)
   - $T \le -10^\circ\text{C} \implies 80\text{ pts}$ (Severe freeze hazard)
   - Normal ($18^\circ\text{C} - 28^\circ\text{C}$) $\implies 15\text{ pts}$

2. **$P$ (Precipitation & Storms - 30% Weight)**:
   - Thunderstorm / Cyclone / Violent Rain $\implies 90\text{ pts}$
   - Heavy Downpour $\implies 70\text{ pts}$
   - Moderate Rain $\implies 35\text{ pts}$
   - Clear Skies $\implies 10\text{ pts}$

3. **$W$ (Wind Velocity & Shear - 20% Weight)**:
   - Wind $\ge 75\text{ km/h} \implies 95\text{ pts}$ (Gale / Storm force)
   - Wind $\ge 45\text{ km/h} \implies 65\text{ pts}$ (Strong breeze)
   - Wind $< 25\text{ km/h} \implies 10\text{ pts}$ (Safe)

4. **$S$ (Seismic Proximity - 15% Weight)**:
   - Evaluated via the **Haversine Distance Formula** ($d$) to the nearest recorded earthquake:
     - $M \ge 6.0 \text{ and } d \le 300\text{ km} \implies 95\text{ pts}$
     - $M \ge 5.0 \text{ and } d \le 400\text{ km} \implies 70\text{ pts}$
     - $M \ge 4.0 \text{ and } d \le 500\text{ km} \implies 40\text{ pts}$
     - No significant quake within $800\text{ km} \implies 5\text{ pts}$

5. **$B$ (Barometric Drop - 10% Weight)**:
   - Pressure $< 995\text{ hPa} \implies 85\text{ pts}$ (Deep low pressure depression)
   - Pressure $< 1005\text{ hPa} \implies 45\text{ pts}$
   - Normal ($1013\text{ hPa}$) $\implies 15\text{ pts}$

### Hazard Levels:
- **Critical (75–100)**: Immediate life-safety threat; evacuation / emergency shelter readiness.
- **High (55–74)**: Significant hazard; avoid non-essential transit.
- **Moderate (35–54)**: Elevated vigilance required.
- **Low (0–34)**: Stable baseline conditions.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 / 19, TypeScript
- **Bundler & Build Tool**: Vite
- **Styling**: Vanilla CSS (`DESIGN.md` motorsport engineering spec), CSS Custom Properties, Glassmorphism
- **Mapping**: Leaflet.js, OpenStreetMap
- **Icons**: Lucide React
- **Animations**: Canvas Confetti, CSS Keyframes
- **APIs**: USGS Earthquake GeoJSON API, Open-Meteo Realtime API, OpenWeatherMap API, Web Audio API

---

## 📂 Project Directory Structure

```text
RiskRadar-AI
│
├── src/
│   ├── components/
│   │   ├── alerts/
│   │   │   └── AlertsCenter.tsx         # Multi-hazard alerts & acoustic siren
│   │   ├── auth/
│   │   │   └── AuthModal.tsx            # Operator registration & 1-click demo login
│   │   ├── chat/
│   │   │   └── AIAssistantModal.tsx     # Floating RadarBot AI conversational copilot
│   │   ├── common/
│   │   │   ├── LivePulse.tsx            # Telemetry status indicator dot
│   │   │   └── RiskBadge.tsx            # Standardized severity badge
│   │   ├── dashboard/
│   │   │   └── DashboardOverview.tsx    # Central HUD overview & telemetry summary
│   │   ├── earthquakes/
│   │   │   ├── EarthquakeDetailModal.tsx # Seismic focal depth & USGS inspector
│   │   │   └── EarthquakeTracker.tsx    # Live earthquake matrix with sorting/filtering
│   │   ├── landing/
│   │   │   └── LandingPage.tsx          # High-impact hero & workflow showcase
│   │   ├── layout/
│   │   │   ├── Footer.tsx               # 4-column footer with credits & M-stripe
│   │   │   ├── Navbar.tsx               # 64px top bar with search & quick actions
│   │   │   └── Sidebar.tsx              # Telemetry navigation sidebar
│   │   ├── locations/
│   │   │   └── LocationsManager.tsx     # Multi-city monitoring hub
│   │   ├── map/
│   │   │   └── DisasterMap.tsx          # Dark Leaflet geospatial radar map
│   │   ├── preparedness/
│   │   │   └── EmergencyKit.tsx         # 72h survival go-bag & SOS hotline directory
│   │   ├── risk/
│   │   │   └── RiskAnalysisView.tsx     # AI Risk calculation & simulation sandbox
│   │   └── weather/
│   │       └── WeatherCenter.tsx        # 6-metric weather center & forecast timelines
│   │
│   ├── context/
│   │   ├── AuthContext.tsx              # Operator session state & demo credentials
│   │   └── DisasterContext.tsx          # Real-time weather, earthquakes & alerts state
│   │
│   ├── services/
│   │   ├── aiChatService.ts             # RadarBot AI conversational engine & protocols
│   │   ├── alertsService.ts             # Hazard data & Web Audio API siren generator
│   │   ├── earthquakeService.ts         # USGS GeoJSON feeds & Haversine formula
│   │   ├── riskAnalysisService.ts       # Multi-factor AI risk algorithm & safety briefs
│   │   └── weatherService.ts            # Open-Meteo & OpenWeather dual-engine fetcher
│   │
│   ├── types/
│   │   └── index.ts                     # TypeScript schemas & data contracts
│   │
│   ├── App.tsx                          # App shell, routing & global modal mounts
│   ├── index.css                        # Design system tokens from DESIGN.md
│   └── main.tsx                         # React application entry point
│
├── index.html                           # HTML5 template with Google Fonts & Leaflet
├── package.json                         # Dependencies & npm scripts
├── tsconfig.json                        # TypeScript compiler configuration
├── vite.config.ts                       # Vite bundler configuration
├── DESIGN.md                            # Design specification reference
└── README.md                            # Project documentation
```

---

## 🚀 Quickstart Guide for Beginners

### Prerequisites
Make sure you have **Node.js** (version 18 or higher) and **npm** installed on your system.
Verify in your terminal:
```bash
node -v
npm -v
```

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Garvit-821/RIskRadarAi.git
   ```

2. **Navigate to the project root directory**:
   ```bash
   cd RIskRadarAi
   ```

3. **Install npm dependencies**:
   ```bash
   npm install
   ```

### Running the Development Server
Start the local Vite development server:
```bash
npm run dev
```

Open your browser at the URL shown in your terminal (typically **`http://localhost:3000/`** or **`http://localhost:3001/`**).

### Building for Production
To compile and bundle the application for production deployment:
```bash
npm run build
```
The optimized output will be generated in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 📡 Live Telemetry APIs Used

RiskRadar AI uses free, publicly accessible real-time APIs with zero required initial setup:

1. **USGS Earthquake GeoJSON API**:
   - URL: `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`
   - Description: Real-time global seismic sensor feeds updated every 60 seconds.
2. **Open-Meteo Realtime Forecast API**:
   - URL: `https://api.open-meteo.com/v1/forecast`
   - Description: Worldwide weather telemetry with temperatures, hourly timelines, wind velocity, humidity, and barometric pressure. Requires no API key.
3. **Open-Meteo Geocoding API**:
   - URL: `https://geocoding-api.open-meteo.com/v1/search`
   - Description: Geocodes city names into exact latitude & longitude coordinates.
4. **OpenWeatherMap API (Optional)**:
   - Supported as a custom user key in the **Settings** view.

---

## 🤖 RadarBot AI Copilot

The platform features **RadarBot AI**, a built-in disaster assistant accessible via the circular floating button in the bottom-right corner.

### Common Prompts You Can Try:
- *"What is my current city risk?"*
- *"What to do during an earthquake?"*
- *"Cyclone safety protocol"*
- *"Flood evacuation rules"*
- *"What goes in a 72-hour survival go-bag?"*
- *"Emergency hotlines and SOS numbers"*

---

## ❓ Frequently Asked Questions & Troubleshooting

#### Q1: Do I need an OpenWeather API key to run the project?
**No!** RiskRadar AI includes an automatic live fallback engine powered by Open-Meteo and the USGS. It works out-of-the-box with zero API key configuration.

#### Q2: How do I change the monitored city?
Type any city name (e.g. `Tokyo`, `San Francisco`, `London`, `Mumbai`) into the search bar in the top navigation and press **Enter** or click **Scan**. Alternatively, click the GPS crosshair icon to use your browser's current location.

#### Q3: How does the emergency siren work?
The emergency siren in the **Disaster Alerts** tab uses the standard browser **Web Audio API** to synthesize acoustic alert tones, requiring no external MP3/WAV assets.

#### Q4: Why are borders sharp (0px radius)?
RiskRadar AI follows the **Motorsport Engineering Design System** specified in `DESIGN.md`, which uses rectangular precision silhouettes (`rounded: 0px`) and UPPERCASE typography.

---

## 🔮 Roadmap & Future Enhancements

- [ ] AI Satellite Imagery Integration for flood inundation mapping.
- [ ] Push Notifications for instant seismic alerts (Web Push API).
- [ ] Multi-Language Localization (Hindi, Japanese, Spanish, French).
- [ ] Offline PWA (Progressive Web App) caching with Service Workers.
- [ ] SMS / WhatsApp emergency SOS beacon integration.

---

## 👨‍💻 Author & Acknowledgments

**Developed by:**

- **Garvit Prakash** (React + TypeScript Modern Rebuild & Design Implementation)

*Developed for educational, hackathon, and civil protection resilience purposes.*
