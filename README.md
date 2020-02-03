# CSV Converter

Schreib ein Programm, das [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)-Dateien in JSON-Dateien konvertiert. Nutze dafür die [`csvtojson`](https://www.npmjs.com/package/csvtojson)-Bibliothek

## Anforderungen

* Das Programm soll einen oder zwei Argumente annehmen können. Wenn keine Argumente angegeben wurden, soll das Programm sich beenden und eine Meldung ausgeben (siehe Beispiele).

* Wenn nur ein Argument angegeben wird, soll das Programm die angegebene Datei in eine JSON-Datei im Selben Ordner konvertieren.

* Wenn zwei Argumente angegeben wurden, soll die konvertierte Datei in den Ordner gelegt werden, der im zweiten Argument angegeben ist.

* Wenn das programm die Datei nicht lesen oder speichern kann, soll eine Meldung für den Nutzer ausgegeben werden (siehe Beispiel).

## Beispiele

### One argument passed (Source CSV)

```bash
$ node index.js demo.csv
> "JSON file saved at: demo.json"
```

### Zwei Argumente angegeben (CSV-Datei, JSON-Pfad)

```bash
$ node index.js demo.csv hello.json
> "JSON file saved at: hello.json"
```

### Keine Argumente angegeben

```bash
$ node index.js
> "Please provide a csv file to convet to JSON"
```

### Fehler

```bash
$ node index.js dem.csv hello.json
> "Something went wrong, Could not write json to: hello.json"
```
