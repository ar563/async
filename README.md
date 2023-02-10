Napisz uniwersalny komponent Async, którego dałoby się użyć np. do wczytania dowolnych danych w poniższy sposób: 
```
<Async action={() => getProductByld(id)}> {product => <div> <h1>{product.name}</h1> {product.description} </div>) </Async> 
```
- funkcja getProductByld zwraca Promise rozwiązany dowolnymi danymi (np. informacjami o produkcie)
- w czasie wykonywania tej akcji należy wyświetlić tekst "Ładowanie..."
- w przypadku wystąpienia błędu należy wyświetlić błąd na ekranie (wystarczy użycie natywnej funkcji alert)
- w przypadku poprawnego załadowania danych należy wyrenderować element zwrócony przez funkcję przekazaną jako elementy potomne Async
