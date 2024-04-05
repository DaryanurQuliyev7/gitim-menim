

var yas = prompt("Yasinizi Daxil Edin:");


if (yas >= 18) {
    console.log("Menyu: Steak, somon, ");
    var secim = prompt("Menyudan Hansi Yemyi Isteyirsiz");
    console.log("Sifarisiniz Qebul Olundu: " + secim);
} else {
    console.log("Usaq Menyusu: Pitsaa, hamburger, toyuq fri");
    var secim = prompt("Usaqlar Ucun Menyudan Hansi Yemeyi Isteyirsiniz");
    console.log("Sifarisiniz Qebul Olunmusdur " + secim);
}