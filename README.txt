═══════════════════════════════════════════════════════════════
    DEPLOY RÁPIDO EN RENDER.COM - DASHBOARD ESP32
═══════════════════════════════════════════════════════════════

1. CREAR CUENTA EN RENDER
   • Ir a: https://render.com
   • Sign up con GitHub (gratis, sin tarjeta)

2. SUBIR CÓDIGO A GITHUB
   • Crear repo nuevo en GitHub
   • Nombre: esp32-control-leviatanes
   • Subir estos archivos:
     - package.json
     - settings.js
     - flows.json

3. DEPLOY EN RENDER
   • En Render → New → Web Service
   • Connect GitHub repo
   • Configurar:
     - Build Command: npm install
     - Start Command: npm start
   • Click "Create Web Service"
   • Esperar 2-3 minutos

4. OBTENER URL PÚBLICA
   • Render te dará URL: https://tu-app.onrender.com
   • COPIAR ESTA URL

5. ACTUALIZAR ESP32
   • En ESP32_Examen_FINAL.ino línea 22:
     const char* MQTT_SERVER = "tu-app.onrender.com";
   • Compilar y subir al ESP32

6. ACCEDER AL DASHBOARD
   • URL: https://tu-app.onrender.com/ui
   • Login: admin / admin (si pide)

ARCHIVOS LISTOS:
✅ ESP32_Examen_FINAL.ino - Código ESP32
✅ model.h - Red Neuronal
✅ package.json - Config Node.js
✅ settings.js - Config Node-RED
✅ flows.json - Dashboard mejorado

PUERTOS:
• MQTT: 1883 (interno en Render)
• HTTP: Variable (Render asigna automático)
• Dashboard: /ui

TIEMPO TOTAL: ~5 minutos
