/*
1-bakiye görüntüleme
2-para çekme
3-para yatırma
4-çıkış



let yeniSatir="\r\n"
let bakiye=1000;

let metin="1-bakiye görüntüleme"+yeniSatir
+"2-para çekme"+yeniSatir
+"3-para yatırma"+yeniSatir
+"4-çıkış"
+"lütfen bir değer giriniz";

let secim=prompt(metin);

switch(secim){

    case "1":
       alert("bakiyeniz"+bakiye);
        break;
        
    case "2":
        let cekilenmiktar=Number(prompt("çekmek istedğniz tutarı giriniz"));
        if(cekilenmiktar<bakiye){
            bakiye=bakiye-cekilenmiktar
            alert("kalan bakiye"+bakiye)
        }
        else{
            alert("lütfen bakiyenizden fazla para çekemezsiniz"+yeniSatir+"bakiyeniz:"+bakiye)
        }
        break;


    case "3":
        let yatirlacakTutar=Number(prompt("yatırmak istediğiniz tutarı giriniz"))
        bakiye = bakiye+yatirlacakTutar;
        alert("yenibakiyeniz:"+ bakiye);
        break;

        case "4":
            alert("çıkış yapılmıştır");
            break;

            default:
               alert("lütfen 1 ile 4 arasında değer giriniz")
            break;
}
*/


//!Hex-color
// function HexCode() {
//     let characters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let hexColor = [];

//     for (let i = 0; i < 6; i++) {
       
//         let randomChar = characters[Math.floor(Math.random() * characters.length)];

       
//         hexColor.push(randomChar);
//     }

    
//     let hexCode = hexColor.join('');

//     return "#" + hexCode; // "#" işareti ekleyerek hex renk kodunu oluştur
// }


// let randomColor = HexCode();
// console.log(" Hex Code Rengi:", randomColor);