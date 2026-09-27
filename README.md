# MISSION HEAT COOLER

### ☀️ Solar-Assisted Thermal Management for Parked Vehicles

**Mission Heat Cooler** is an interactive engineering prototype that explores a solar-assisted approach to managing heat buildup inside parked vehicles.

The project combines a **solar energy source, battery storage, thermoelectric cooling modules, and a browser-based simulation engine** to model whether the available energy budget can support a defined parking mission.

> **Mission:** Estimate the energy required to prepare a parked vehicle for extreme heat conditions using an intelligent, solar-assisted cooling concept.

---

## 🚀 Live Prototype

### [Launch Mission Heat Cooler](https://koppakarushil-sys.github.io/mission-heat-cooler-/)

The prototype runs directly in the browser and requires no installation.

---

## 🔍 Why This Matters

A vehicle exposed to sunlight can accumulate substantial heat while parked.

Traditional vehicle air-conditioning is primarily designed around active vehicle operation. Mission Heat Cooler explores a different approach:

**Use available solar energy during the parking period to support a dedicated thermal-management system.**

The prototype focuses on the **energy-management problem** behind that idea.

---

## 🧠 How It Works

The system models the following energy pathway:

```text
             ☀️ SOLAR ENERGY
                    │
                    ▼
              ┌───────────┐
              │   SOLAR   │
              │   PANEL   │
              └─────┬─────┘
                    │
                    ▼
              ┌───────────┐
              │  BATTERY  │
              │   STORAGE │
              └─────┬─────┘
                    │
                    ▼
              ┌───────────┐
              │ CONTROLLER│
              └─────┬─────┘
                    │
                    ▼
              ┌───────────┐
              │  PELTIER  │
              │  MODULES  │
              └─────┬─────┘
                    │
                    ▼
             🚗 VEHICLE CABIN
```

The user provides mission conditions, and the simulation calculates the resulting energy budget.

---

## ⚙️ Mission Parameters

The dashboard accepts six primary inputs:

| Parameter               | Purpose                                      |
| ----------------------- | -------------------------------------------- |
| **Outside Temperature** | Represents the surrounding thermal condition |
| **Parking Duration**    | Defines the simulated mission duration       |
| **Solar Panel Power**   | Represents available solar generation        |
| **Battery Capacity**    | Represents stored electrical energy          |
| **Peltier Modules**     | Defines the number of cooling modules        |
| **Power per Module**    | Defines the electrical demand of each module |

---

## 📊 Mission Outputs

After running the simulation, the dashboard reports:

* ☀️ **Solar Energy Generated**
* 🔋 **Total Energy Available**
* ⚡ **Peltier Power Demand**
* ⏱️ **Estimated Runtime**
* 🌡️ **Heat Risk**
* 🛰️ **Mission Status**

The interface updates these values dynamically whenever the mission is executed.

---

## 🧮 Simulation Engine

The prototype currently uses a simplified energy-budget model.

### Solar Energy

```text
Solar Energy = Solar Panel Power × Parking Duration
```

### Cooling Power Demand

```text
Peltier Demand = Number of Modules × Power per Module
```

### Total Available Energy

```text
Available Energy = Battery Capacity + Solar Energy
```

### Estimated Runtime

```text
Runtime = Available Energy ÷ Peltier Power Demand
```

### Thermal Risk

The entered outside temperature is used to classify the simulated environment as:

```text
LOW
MEDIUM
HIGH
```

This provides a simple decision layer on top of the energy calculations.

---

## 🖥️ Interface

Mission Heat Cooler is designed as a compact engineering dashboard rather than a static webpage.

### Core Interface

**Mission Inputs → Simulation Engine → Live Mission Report**

The user changes the mission parameters, executes the simulation, and immediately receives updated results.

---

## 🛠️ Technology Stack

| Technology       | Role                                    |
| ---------------- | --------------------------------------- |
| **HTML5**        | Application structure                   |
| **CSS3**         | Interface, layout and responsive design |
| **JavaScript**   | Simulation engine and interaction       |
| **GitHub Pages** | Web deployment                          |

The prototype has **no external framework dependency**.

---

## 📁 Project Structure

```text
mission-heat-cooler/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

> The current working prototype keeps the simulation logic in the deployed HTML implementation.

---

## ✨ Design Principles

### 01 — Energy Awareness

The system treats available solar and battery energy as a limited mission resource.

### 02 — Interactive Modeling

Instead of displaying fixed results, t
