<script>
  // import calculate from './calculate';
  let B;
  let B1;
  let B2;
  let B3;
  let E;
  let E1;
  let E2;
  let F;
  let F1;
  let F2;
  let A;
  let A1;
  let A2;
  let A3;
  let C;
  let C1;
  let C2;
  let Y;
  let H;
  let H1;
  let H2;
  let G;
  let G1;
  let G2;
  let G4;
  let L;
  let M;
  let D;
  let D1;
  let D2;
  let X;

  export let data;

</script>

<div>
<div class="matrix-parent">
  <img
    class="matrix"
    src="https://humanmatrix.ru/wp-content/themes/matrix_new/img/matrix.png"
    alt="matrix"
  />
  <div class="numbers number1">{data.B}</div>
  <div class="numbers number12">{data.B1}</div>
  <div class="numbers number13">{data.B2}</div>
  <div class="numbers number14">{data.B3}</div>
  <div class="numbers number2">{data.E}</div>
  <div class="numbers number22">{data.E1}</div>
  <div class="numbers number23">{data.E2}</div>
  <div class="numbers number3">{data.F}</div>
  <div class="numbers number32">{data.F1}</div>
  <div class="numbers number33">{data.F2} </div>
  <div class="numbers number4">{data.A}</div>
  <div class="numbers number42">{data.A1}</div>
  <div class="numbers number43">{data.A2}</div>
  <div class="numbers number44">{data.A3}</div>
  <div class="numbers number5">{data.C}</div>
  <div class="numbers number52">{data.C1}</div>
  <div class="numbers number53">{data.C2}</div>
  <div class="numbers number54">{data.Y}</div>
  <div class="numbers number6">{data.H}</div>
  <div class="numbers number62">{data.H1}</div>
  <div class="numbers number63">{data.H2}</div>
  <div class="numbers number7">{data.G}</div>
  <div class="numbers number72">{data.G1}</div>
  <div class="numbers number73">{data.G2}</div>
  <div class="numbers number74">{data.G4}</div>
  <div class="numbers number75">{data.L} </div>
  <div class="numbers number76">{data.M}</div>
  <div class="numbers number8">{data.D}</div>
  <div class="numbers number82">{data.D1} </div>
  <div class="numbers number83">{data.D2}</div>
  <div bind:this={X} class="numbers number-center">{data.X}</div>
</div>
</div>
<style src="./calculator.css"></style>
