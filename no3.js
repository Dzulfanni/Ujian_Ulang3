var angkaAcak = [77,62,55,16,26,66,75,79,39,62,59,92,45,54,8];
var newAngka=angkaAcak.filter(a=>a>=60)
.map(a=>a/5)
.filter(a=>a<10)
.map(angkaAcak.length/a)
.reduce((acc, cr)=>(acc/3)+cr)

console.log(newAngka)