# Frontend recruitment task in ReactJS

W ramach zadania kandydat powinien stworzy? stron? html z zaimplementowan? obs?ug? formularza po stronie front-end'u.

```html
<form method="POST" action="">
    <fieldset>
        <label for="email">email</label>
        <input type="text" name="email" id="email">
        <label for="password">password</label>
        <input type="password" name="password" id="password">
        <label for="remember">Remember me</label>
        <input type="checkbox" name="remember" id="remember">
      	<input type="submit" value="login">
    </fieldset>
</form>
```

## Wymagania funkcjonalne
### Wymagania walidacji
- pola email i password nie mog? by? puste
- warto?? wprowadzona dla pola email powinna spe?nia? warunki poprawnego adresu email
- warto?? pola password powinna sk?ada? si? co najmniej z 6 znak?w (w tym co najmniej 1 du?ej litery, 1 ma?ej i jednej cyfry
)

### Wymagania integracji z serwerem
Zadanie nie wymaga integracji z serwerem. Odpowied? od serwera ma by? zamockowana i powinna przepuszcza? u?ytkownika test@test.pl/Password1.

#### Obs?uga odpowiedzi z serwera zgodnie ze specyfikacj? status?w:
**Poprawne logowanie**
- wy?wietlenie komunikatu: "login successful"; ukrycie formularza

**Brak autoryzacji**
- wy?wietlenie komunikatu: "invalid email or password"

**Niepoprawne dane w inputach** (z wymaga? walidacji)
- wy?wietlenie komunikatu: "invalid email" / "invalid password"


#### wygl?d formularza
- Formularz powinien by? estetycznie zaprojektowany wykorzystuj?c do tego mo?liwo?ci HTML5/CSS3 bez u?ycia bibliotek typu Bootstrap/Materialize,
- Formularz powinien dobrze wygl?da? na r??nych urz?dzeniach mobile/tablet/desktop,

## Wymagania niefunkcjonalne
- Zadanie powinno by? wykonane z u?yciem jednego z popularnych framework?w np. React/Backbone/Angular 2,
- Zgodno?? ze standardem ~ECMASCRIPT 2015, HTML5, CSS3,
- Kodowanie UTF8,
- Wspierane przegl?darki IE10+, Firefox, Chrome (2 ostatnie stabilne wersje),
- Testy jednostkowe dla dostarczonej implementacji,
- Implementacja cz??ci serwerowej nie jest w zakresie powy?szego zadania


## Wymagane oprogramowanie

* node > 8

## Uruchamianie

```bash
npm install
npm start
```

## Uruchamianie testow

```bash
npm test
```