
### Context and Reducer

Contentx API --global state management
Bazen statelerin en aşağı componentlere erişmesi gerekir
Özellikle ;

- login,authenticate
- language
- theme 
- token 
ayarlarında kullanılabilir.

Avantajları:

Props Drilling engeller.
ÖR: Dolmuş örneği 
Muavin -context 
props paylaşımı tek yönlüdür.
native 
Yukarı akış yoktur
one-way

Context yapısı-Redux
Global state büyüdükçe Redux ile bu yönetim sağlanabilir.
State yapısı küçükse context ile state büyüdkçe redux kullanılır.Redux boiler peater code yapısını neden olur.
Redux third party 


Dezavantajları:

1- Componetin yeniden kullanımı engeller.
(Çünkü component sadece
globale bağlı kalacağından reuseable olmaktan çıkar.Lokalde
kullanılan props ve stateleri başka componentlere aktarabilir veya değişiklik yapabiliriz.)

2- Reactın yapısını bozar.globaldeki değişim componentleri 
render hale getirecek bu da performans etkileyecektir.


## Medium yazısı!!!

### Context Yapısı ve Dağıtımı

- Create Context

- Provider

- Consume (useContext)

Steps

1. Create 
   export const StudentContext =  create Context
2. Provider
< StudentContext.Provider value = {{a,b,c}} >
 # nereyi sarmayalacaksak <App.js>
</StudentContext.Provider>

3. Consume

# nerede tüketilecekse;
const {a,b,c} useContext(StudentContext)

Bir component hem lokal hemde global state kullanabilir.