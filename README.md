# Folk Webshop

Folk Webshop är ett elevprojekt som skapats med hjälp av [Create React App](https://github.com/facebook/create-react-app).
Projektet är en enkel e-handelsida som använder sig av Typescript och Material-UI. Projektet innehåller sidorna home page, details page, checkout page, confirmation page samt en notfound page. 

Folk Webshop erbjuder köpfilmer av filmbolaget Marvel. Varje filmtitel har egen produktsida som innehåller specifik information om produkten. Möjlighet att lägga till produkter i kundkorgen finns på både framsidan och produktsidan. 

## Struktur

Projektet är komponentbaserat och använder sig av både egenskrivna och importerade React-komponenter från externa biblioteket Material-UI. För navigering används BrowserRouter från node modules's react-router-dom. 

**Komponenter som används från Material UI:**

[Button](https://material-ui.com/components/buttons/)

[Paper](https://material-ui.com/components/paper/)

[Grid](https://material-ui.com/components/grid/)

[Table](https://material-ui.com/components/tables/)

[Snackbar](https://material-ui.com/components/snackbars/)

[Typography](https://material-ui.com/components/typography/)

[Icons](https://material-ui.com/components/material-icons/)

## Installation
Klona repot och kör `npm install` en gång för att installera alla dependencies som projektet behöver. 

## Tillgängliga scripts

När du står i projektkatalogen kan du köra:

#### `npm start`

Kör appen i utvecklingsläget.
Öppna [localhost:3000](http://localhost:3000) i webbläsaren för att se projektet.

Om du ändrar i projektet i det här läget kommer sidan/projektet att omrenderas.
Du har även möjlighet att se felmeddelanden från lint i konsolen.

#### `npm run build`

Kör appen för produktion till `build`- mappen.
Kommandot buntar ihop React i produktionsläge och optimerar bygget för bästa prestanda.

Den ska innehålla en titel, beskrivning av projektet, info om hur
projektet byggs och körs samt länk till dokumentationen för designsystemet som används,
mm.
