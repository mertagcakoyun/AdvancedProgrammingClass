"use strict";
const toplama = ({ sayi1, sayi2, ...args }) => {
    let sonuc = sayi1 + sayi2;
    for (let sayi in args) {
        sonuc += args[sayi];
    }
    return sonuc;
}
const sayilar = {
    sayi1: 8,
    sayi2: 4,
    sayi3: 7,
    sayi4: 9,
    sayi5: 11
}
toplama(sayilar); // 39 doner
