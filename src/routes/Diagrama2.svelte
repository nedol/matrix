<script>
  // import calculate from './calculate';
  let B_diagram;
  let B1_diagram;
  let B2_diagram;
  let B3_diagram;
  let E_diagram;
  let E1_diagram;
  let E2_diagram;
  let F_diagram;
  let F1_diagram;
  let F2_diagram;
  let A_diagram;
  let A1_diagram;
  let A2_diagram;
  let A3_diagram;
  let C_diagram;
  let C1_diagram;
  let C2_diagram;
  let Y_diagram;
  let H_diagram;
  let H1_diagram;
  let H2_diagram;
  let G_diagram;
  let G1_diagram;
  let G2_diagram;
  let G4_diagram;
  let L_diagram;
  let M_diagram;
  let D_diagram;
  let D1_diagram;
  let D2_diagram;
  let X_diagram;

  export let data;

</script>

<div>
<div class="matrix-parent">
  <img
    class="matrix"
    src="https://humanmatrix.ru/wp-content/themes/matrix_new/img/matrix.png"
    alt="matrix"
  />
  <div class="numbers number1">{data.B_diagram}</div>
  <div class="numbers number12">{data.B1_diagram}</div>
  <div class="numbers number13">{data.B2_diagram}</div>
  <div class="numbers number14">{data.B3_diagram}</div>
  <div class="numbers number2">{data.E_diagram}</div>
  <div class="numbers number22">{data.E1_diagram}</div>
  <div class="numbers number23">{data.E2_diagram}</div>
  <div class="numbers number3">{data.F_diagram}</div>
  <div class="numbers number32">{data.F1_diagram}</div>
  <div class="numbers number33">{data.F2_diagram} </div>
  <div class="numbers number4">{data.A_diagram}</div>
  <div class="numbers number42">{data.A1_diagram}</div>
  <div class="numbers number43">{data.A2_diagram}</div>
  <div class="numbers number44">{data.A3_diagram}</div>
  <div class="numbers number5">{data.C_diagram}</div>
  <div class="numbers number52">{data.C1_diagram}</div>
  <div class="numbers number53">{data.C2_diagram}</div>
  <div class="numbers number54">{data.Y_diagram}</div>
  <div class="numbers number6">{data.H_diagram}</div>
  <div class="numbers number62">{data.H1_diagram}</div>
  <div class="numbers number63">{data.H2_diagram}</div>
  <div class="numbers number7">{data.G_diagram}</div>
  <div class="numbers number72">{data.G1_diagram}</div>
  <div class="numbers number73">{data.G2_diagram}</div>
  <div class="numbers number74">{data.G4_diagram}</div>
  <div class="numbers number75">{data.L_diagram} </div>
  <div class="numbers number76">{data.M_diagram}</div>
  <div class="numbers number8">{data.D_diagram}</div>
  <div class="numbers number82">{data.D1_diagram} </div>
  <div class="numbers number83">{data.D2_diagram}</div>
  <div bind:this={X_diagram} class="numbers number-center">{data.X_diagram}</div>
</div>
</div>
<style src="./calculator.css"></style>
