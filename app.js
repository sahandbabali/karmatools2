var karmadata = [
  { name: "E1A", small: 1, large: 0, I: 0, II: 0, III: 0, A: 4, B: 0, C: 0 },
  { name: "E1B", small: 0, large: 1, I: 0, II: 0, III: 0, A: 2, B: 2, C: 0 },
  { name: "E2A", small: 2, large: 0, I: 1, II: 0, III: 0, A: 2, B: 2, C: 0 },
  { name: "E3A", small: 3, large: 0, I: 2, II: 0, III: 0, A: 2, B: 0, C: 2 },
  { name: "E2C", small: 1, large: 1, I: 1, II: 0, III: 0, A: 2, B: 0, C: 2 },
  { name: "E3L", small: 3, large: 0, I: 1, II: 0, III: 0, A: 3, B: 3, C: 0 },
  { name: "E2L", small: 1, large: 1, I: 0, II: 0, III: 0, A: 3, B: 3, C: 0 },
  { name: "E3B", small: 2, large: 1, I: 1, II: 1, III: 0, A: 0, B: 4, C: 0 },
  { name: "E4A", small: 4, large: 0, I: 2, II: 1, III: 0, A: 0, B: 4, C: 0 },
  { name: "E2B", small: 0, large: 2, I: 0, II: 1, III: 0, A: 0, B: 4, C: 0 },
  { name: "E5A", small: 4, large: 1, I: 3, II: 0, III: 1, A: 0, B: 2, C: 2 },
  { name: "E6A", small: 6, large: 0, I: 4, II: 0, III: 1, A: 0, B: 2, C: 2 },
  { name: "E4C", small: 2, large: 2, I: 2, II: 0, III: 1, A: 0, B: 2, C: 2 },
  { name: "E4B", small: 2, large: 2, I: 1, II: 2, III: 0, A: 0, B: 2, C: 2 },
  { name: "E5B", small: 4, large: 1, I: 2, II: 2, III: 0, A: 0, B: 2, C: 2 },
  { name: "E9A", small: 9, large: 0, I: 0, II: 0, III: 2, A: 0, B: 0, C: 4 },
  { name: "E6B", small: 3, large: 3, I: 0, II: 0, III: 0, A: 0, B: 0, C: 4 },
  { name: "E7A", small: 5, large: 2, I: 0, II: 0, III: 0, A: 0, B: 0, C: 4 },
];

var inputArray = [];
var totalorders = 0;
var smalls = 0;
var largs = 0;
var A = 0;
var B = 0;
var C = 0;
var I = 0;
var II = 0;
var III = 0;
var totalwood = 0;
var nom = 0;

const date = new Date();
const weekday = new Intl.DateTimeFormat("fa", {
  weekday: "long",
}).format(date);

const faDate = new Intl.DateTimeFormat("fa", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date);

var fadatetext = `${weekday} - ${faDate}`;
document.getElementById("fadatebox").innerHTML = fadatetext;

document.getElementById("titleinp").defaultValue = "عنوان سفارش";

document.getElementById("reset").addEventListener("click", function () {
  location.reload();
});

karmadata.forEach(function (arrayItem) {
  document.getElementById("cardbox").innerHTML += `<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-4 ">
      <img src="https://raw.githubusercontent.com/sahandbabali/karmatools2/main/img/${arrayItem.name}.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-8 ">
      <div class="card-body">
      <h5>${arrayItem.name}</h5>

      <div class="row borderdark">
      <div class="col-6">
      <p>کوچک: <span>${arrayItem.small}</span></p>
      </div>
      
      <div class="col-6">
      <p>بزرگ: <span>${arrayItem.large}</span></p>
      </div>
      </div>
     

<div class=" borderdark row">

            <div class="col-6">
            فریم:
            <p>A: <span>${arrayItem.A}</span></p>
            <p>B: <span>${arrayItem.B}</span></p>
            <p>C: <span>${arrayItem.C}</span></p>
            </div>

            <div class="col-6">
            قفسه:
            <p>I: <span>${arrayItem.I}</span></p>
            <p>II: <span>${arrayItem.II}</span></p>
            <p>III: <span>${arrayItem.III}</span></p>
            </div>
            
            </div>

            <label for="quant">تعداد:</label>
            <input class="form-control quantinp" id="${arrayItem.name}"  type="number" name="quant" value=0>

      </div>
    </div>
  </div>
</div>`;
});

document.getElementById("cal").addEventListener("click", function () {
  inputArray = Array.from(document.getElementsByClassName("quantinp"));

  inputArray.forEach(function (inp, i) {
    if (parseInt(inp.value) > 0) {
      nom += 1;
      document.getElementById("tbody").innerHTML += `<tr><td>${nom}</td><td>${
        karmadata[i].name
      }</td><td>${parseInt(inp.value)}</td></tr>`;
    }

    totalorders += parseInt(inp.value);
    smalls += karmadata[i].small * parseInt(inp.value);
    largs += karmadata[i].large * parseInt(inp.value);
    A += karmadata[i].A * parseInt(inp.value);
    B += karmadata[i].B * parseInt(inp.value);
    C += karmadata[i].C * parseInt(inp.value);

    I += karmadata[i].I * parseInt(inp.value);
    II += karmadata[i].II * parseInt(inp.value);
    III += karmadata[i].III * parseInt(inp.value);

    totalwood = A * 11 + B * 22 + C * 33 + I * 8 + II * 18 + III * 27;
  });

  document.getElementById("totalorders").innerHTML = totalorders;
  document.getElementById("smalls").innerHTML = smalls;
  document.getElementById("largs").innerHTML = largs;

  document.getElementById("A").innerHTML = A;
  document.getElementById("B").innerHTML = B;
  document.getElementById("C").innerHTML = C;

  document.getElementById("I").innerHTML = I;
  document.getElementById("II").innerHTML = II;
  document.getElementById("III").innerHTML = III;

  document.getElementById("totalwood").innerHTML = totalwood;
});

document.getElementById("printkon").addEventListener("click", printkon);

function printkon() {
  var element = document.getElementById("infobox");

  var tempname = document.getElementById("titleinp").value;

  var opt = {
    // margin: 1,
    filename: `${tempname}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "cm", format: "a4", orientation: "portrait" },
  };

  html2pdf(element, opt);
}

up();
