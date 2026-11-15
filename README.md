# LUMO — Ztracené ostrovy · 3.0.0

Hratelná česká 3D hra pro mobil i počítač. TypeScript, Vite, Three.js, bez účtů, backendu a API klíčů.

## Spuštění

Node.js 22.12+ nebo podporované novější LTS:

```sh
npm ci
npm run dev
```

Otevřete http://localhost:5173. Mobil ve stejné Wi-Fi může použít síťovou adresu vypsanou Vite. Počítač musí zůstat zapnutý a povolit port 5173.

```sh
npm run build
npm run preview
```

## Mobil na výšku a tři obtížnosti

Hlavní režim je svižný automatický běh ve třech dráhách s kamerou za postavou. Obraz a ovládání byly ověřeny v portrétových rozměrech 320 × 568, 390 × 844 a 430 × 932. Gesto reaguje už při překročení prahu během tahu, ne až při zvednutí prstu. Pravý palec má samostatné tlačítko impulzu; současně lze druhým prstem měnit dráhu. Nastavení „Tlačítka místo gest“ zobrazí čtyři velká tlačítka vlevo. Volný průzkum má vlastní levý joystick a pravou sestavu tří tlačítek.

| Obtížnost | Rychlost | Životy | Rozestup řad | Obnova impulzu |
|---|---|---|---|---|
| Pohoda | 9,5–11 m/s | 5 | 30 m | 2,4 s |
| Dobrodružství | 10,5–12,5 m/s | 3 | 22 m | 3,2 s |
| Výzva | 12–14 m/s | 2 | 18 m | 4 s |

Úvodní řady mají na všech úrovních 32 m odstup. Kombinace se dvěma překážkami přibývají u střední a vysoké obtížnosti, vždy zůstává volná dráha. Celý běh trvá přibližně 2:10–2:45 podle úrovně. Obtížnost i její rekord se ukládají odděleně. Bedny s modrou značkou lze rozbít impulzem do 9 m (+2 světla), nebo se jim vyhnout. Sbírání bez zásahu tvoří sérii; zásah ji vynuluje. Při bossových střelách se zobrazí cílová dráha.

Nová paleta: jantárový hrdina v modrém obleku s korálovou šálou, písečné pobřeží, lososové koruny stromů, tyrkysová voda, dřevěné mosty, fialové soutěsky a teplé kamenné ruiny. Každý průzkumný ostrov má odlišnou barvu povrchu i vegetace.

## Volný průzkum (vedlejší režim)

Odkaz v menu nebo `?mode=explore`. Čtyři volně přístupné ostrovy s mosty: Mechové útočiště, Šeptající háj, Sluneční ruiny a Koruna pramenů. Žádný automatický běh ani časový limit. Sbírejte 36 světel a probuďte tři svatyně. První vyžaduje 6 celkem nalezených světel, druhá 12 a třetí 18. Světla se nespotřebovávají. První svatyně odemkne rychlejší úskok s kratší obnovou. Po obnově všech svatyní lze dál hledat zbývající světla.

- **Počítač:** WASD / šipky pohyb vzhledem ke kameře; tažení myší otáčí kameru; mezerník skok; Shift úskok; E obnova svatyně; F impulz; M velká mapa; Escape pauza.
- **Mobil:** levý joystick pohyb; tažení po světě kamera; pravá tlačítka skok, úskok, impulz; kontextové tlačítko pro svatyni. Ťuknutí na mapu ji zvětší.
- Impulz přitáhne světla v okruhu 5 metrů a aktivuje blízkou svatyni, pokud máte dost světel. Obnova 3 s.
- Stromy blokují pohyb, okraj ostrova vás bezpečně zastaví. Skok není určen k přeskakování moře. Mosty spojují všechny čtyři oblasti.
- Pozice, nasbíraná světla, svatyně a odemčená schopnost se ukládají lokálně každé 3 sekundy, při sběru, pauze a opuštění stránky. V nastavení je dvojím stiskem dostupná nová výprava.

## Dobrodružný běh (hlavní režim)

Výchozí režim při otevření hry; také `?mode=runner`. Trať 1740 metrů, asi 155 sekund: háj, mosty, kořenový tunel a útěk před mechanickým strážcem. Počet životů podle obtížnosti, postupné zrychlování, skóre a rekord.

Gesta do stran přepínají dráhy, nahoru skok, dolů skluz. Tlačítko ✦ nebo mezerník aktivuje impulz. Na počítači šipky / WASD. Impulz odráží oranžové střely a probouzí mátové mechanismy do 22 m. Nízké kmeny přeskočte, vysoké brány podklouzněte, skály obejděte.

## Grafika, výkon a zvuk

Nový svět má barevné koruny stromů, opotřebené ruiny, prkenné mosty, animované vodní vlnky, vodopády, létající drobné tvory, plovoucí světla a procedurálně animovanou postavu. Kamera sleduje hráče s tlumením a přibližuje se před korunami stromů. Statické prostředí je sloučeno podle materiálů; nová scéna měla přibližně 44–80 vykreslovacích volání podle viditelnosti.

Zvuk se zapíná interakcí. Jemnější pohyb a úsporné rozlišení jsou v nastavení. Při přepnutí aplikace se hra pozastaví. Automatická kvalita může snížit rozlišení při pomalých snímcích.

## Nasazení na Vercel

Importujte repozitář `xxmark83/lumonew` do Vercelu. Framework **Vite**, build **npm run build**, výstup **dist**, kořen projektu **`/`**. `vercel.json` je připraven. Žádná tajemství ani databáze. Po nasazení získáte HTTPS odkaz pro telefon nezávislý na lokálním počítači. V této relaci nebylo dostupné připojení k Vercelu; nasazení nebylo provedeno.

## Ověření

```sh
npx playwright install chromium
# V jiném terminálu ponechte npm run dev.
npm test
```

Volitelně `PLAYWRIGHT_CHROMIUM_PATH` určuje existující prohlížeč. Testy používají běžné vstupy, diagnostika herního stavu je pouze pro čtení. Nová výprava je testována od začátku po všech 36 světel a 3 svatyně, bez teleportování a bez zápisů do stavu hry. Viz VERIFICATION.md.

## Známá omezení

Jde o procedurálně vytvořený prototyp, nikoli velký otevřený svět. Nový průzkum nemá boj, inventář předmětů, NPC dialogy ani rozsáhlý příběh. Boss zůstává v závodním režimu. Výškový pohyb v průzkumu tvoří skok; povrch ostrovů je plochý. Modely nejsou profesionálně rigované a zvuk zatím nemá hudební soundtrack. Není cloudové ukládání. Fyzický iPhone/Android a Safari nebyly testovány; 60 FPS na nich nelze garantovat. Fonty Google Fonts mají systémový fallback. Procedurální assety a licence jsou v ASSETS.md.

`npm run test:levels` projde všechny tři obtížnosti od startu po výsledek. Testy jsou v Chromiu se simulovaným časem; nenahrazují kontrolu na fyzickém telefonu.
