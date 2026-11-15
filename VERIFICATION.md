# Ověření verze 2.0

## Úspěšně ověřeno

- TypeScript a produkční build Vite.
- Chromium se simulovaným mobilním viewportem 390 × 844 a desktopem 1440 × 900; vizuální kontrola screenshotů, bez JavaScript chyb.
- Volný pohyb WASD, skok, impulz, joystick přes pointer události, otáčení kamery, pauza a pozice po obnovení stránky.
- Kompletní průzkumná výprava: všech 36 světel, všechny 3 svatyně, odemčený rychlý úskok. Automatizované ovládání prošlo 775 pohybovými kroky, všechny mosty a oblasti, bez teleportování či modifikace stavu.
- Zachování všech tří obnovených svatyní po reloadu.
- Regrese původního runneru: změna dráhy, skok, pauza, impulz bez chyb; celá trať skončila vítězstvím na 1740 m se 3 životy a 228 energiemi. Reštart a cílené kolize vedly k prohře při přibližně 84 m.
- Statická geometrie nového světa sloučena podle materiálů, na konci testu 44 vykreslovacích volání. Nejde o měření FPS na mobilu.

## Hranice ověření

Simulovaný mobil není fyzický telefon. Pointer události nejsou plnohodnotný multitouch test na iOS/Androidu. Celé průchody používají virtuální čas prohlížeče, nikoli měření skutečné doby nebo výkonu. Fyzický iPhone, Android a Safari nebyly dostupné. Vite hlásí nezávazné upozornění na velikost sdíleného Three.js chunku (~131 kB gzip).

Produkční HTTPS náhled na Vercelu zatím nebyl nasazen; připojení nebylo k dispozici. Lokální náhled běží přes Vite.

## Verze 3.0 — mobil na výšku

- Hlavní režim je opět automatický běh ve třech dráhách. Průzkum zůstává na `?mode=explore`.
- Portrétová rozhraní 320 × 568, 390 × 844 a 430 × 932, desktop 1440 × 900: tlačítko Hrát zůstává v obraze; vizuální kontrola snímků.
- Gesto mění dráhu již během tahu, před zvednutím prstu. Ověřen skok a skluz, přepnutí na tlačítka a simulovaný současný dotyk dvou prstů (změna dráhy + impulz).
- Všechny tři obtížnosti prošly od startu po vítězství na 1740 m: Pohoda 5 životů / 187 světel; Dobrodružství 3 životy / 247 světel; Výzva 2 životy / 312 světel. Na každé úrovni ověřena také prehra po cílených kolizích a obnovení životů při restartu.
- Znovu prošel celý průzkum všech 36 světel a tří svatyní včetně ukládání.
- Zostavení TypeScript + Vite uspělo. Upozornění na velikost sdíleného Three.js chunku trvá; není chybou sestavení.
- Nadále jde o Chromium a simulované dotyky; fyzické telefony ani Safari nebyly testovány. Není to potvrzení 60 FPS na zařízení.

## Verze 4.0.0 — Probuzení ostrova

- TypeScript + Vite: úspěšný produkční build.
- Kompletní sada portrétových vstupů a simulovaného multitouch, původní ovládání, pauza, reštart, porážka a celý průzkum 36 světel / 3 svatyní: prošlo.
- Běh Dobrodružství dokončen na 2220 m se 3 životy, 4 odrazy bosse a 3 použitými houbami; všechny 4 příběhové spouštěče aktivovány.
- Pořízeny snímky mořského poutníka, mostů, krystalové oblasti a bossova úseku. Nové modely používají pevný počet objektů.
- Fyzický iPhone, Android, Safari ani 60 FPS na nich nejsou ověřeny. Simulovaný čas není benchmark. Bez nových externích závislostí.
- Samostatně prošly celé běhy a cílené prohry na úrovních Pohoda, Dobrodružství i Výzva; v každém vítězném běhu 4 odrazy a 3 použité houby.
- Dodatečný cílený běh ověřil aktivaci mechanismu mostu impulzem (`bridgeAwake: true`) a následnou záchranu bosse.
