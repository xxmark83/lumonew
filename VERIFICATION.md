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

## Verze 4.1.0 — finální doladění

- Produkční build TypeScript/Vite prošel.
- Cílený test běžnými vstupy: štít získán za sérii, zásah zachycen bez ztráty životů, počet použitých štítů zvýšen, restart štít i počítadlo obnovil.
- Kompletní dosavadní sada testů prošla: portrétová rozhraní a ovládání, celý běh se záchranou strážce, aktivace mostu, houby, porážka a restart, celý průzkum a lokální ukládání.
- Výsledková obrazovka obsahuje medaili a čtyři přehledné statistiky.
- Bez nových závislostí. Nadále nebyl proveden test na fyzickém telefonu ani garance 60 FPS.

## Verze 5.0.0 — přepracovaný Level 1

- TypeScript + Vite build prošel.
- Kompletní regresní sada prošla: štít, portrétové ovládání a simulovaný multitouch, původní impulz, celý běh, přehrání, prohra, průzkum všech světel a svatyní a persistence.
- Všechny tři obtížnosti prošly od startu po výhru s novými ručně sestavenými sekvencemi; po čtyřech odrazech bosse. Houby: Pohoda 3, Dobrodružství 3, Výzva 2. Ověřena také prohra a reset na každé obtížnosti.
- Cílený test nových funkcí běžnými vstupy: klepnutí rozbilo bednu, X zničilo hlídače, magnet aktivní, Level zůstává 1, bez JavaScript chyb.
- Vizuálně zkontrolován mobilní obraz s novým modelem a palmami; tři portrétové rozměry 320/390/430 px a desktop prošly kontrolou ovládání.
- Nové horizontové objekty sloučeny podle materiálů. Znovu ověřen build a runtime po tomto sloučení.
- Přetrvává limit: bez fyzického iPhonu/Androidu, Safari a bez garance mobilních 60 FPS.

## Verze 5.1.0 — pohyb scenérie, zákruty a kopce

- Reprodukce původní chyby v indexování: při každé nové osmimetrové buňce měnily stanici všechny segmenty současně. Nově má každý slot stabilní stanici až do projetí za kameru.
- Celý Level 1 na Dobrodružství i Výzvě: 277 jednotlivých recyklací, žádný viditelný segment neskočil zpět dopředu; všechny tři dráhy zůstaly v obraze 28 m vpřed.
- Ověřená změna směru až přibližně 18 stupňů a celkové rozpětí výšek asi 14,2 m. Jde o relativní herní rozměry, nikoli novou rychlost nebo délku levelu.
- Kompletní regresní sada ovládání, úderu, štítu, běhu, bossových odrazů, restartu a průzkumu prošla po změně terénu.
- Snímky portrétového obrazu zkontrolovány. Automatická projekce drah neprokazuje absenci každého možného zakrytí objektem. Fyzické telefony a Safari nadále neověřeny.
- Produkční TypeScript/Vite build prošel.
