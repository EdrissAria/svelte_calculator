<script>
  let total = 0;
  let outPut = "";
  let state = null;
  function resolveState() {
    switch (state) {
      case "add":
        total += parseFloat(outPut);
        outPut = "0";
        break;
      case "substract":
        total -= parseFloat(outPut);
        outPut = "0";
        break;
      case "multiply":
        total *= parseFloat(outPut);
        outPut = "0";
        break;
      case "divide":
        total /= parseFloat(outPut);
        outPut = "0";
        break;
      case "modolus":
        total %= parseFloat(outPut);
        outPut = "0";
        break;
      default:
        total = parseFloat(outPut);
        outPut = "0";
    }
  }

  function setOperation(operation) {
    resolveState();
    state = operation;
  }
  function setValue(value) {
    if (outPut.toString() == "0" || state == "equal") {
      outPut = "";
    }
    if (state == "equal") {
      state = null;
    }
    if (value == "del") {
      total = 0;
      state = null;
      outPut = "";
      return;
    }
    outPut += value;
  }
  function equal() {
    resolveState();
    outPut = total;
    state = "equal";
  }
</script>

<main>
  <div id="circle1" />
  <div id="circle2" />
  <div class="calculator">
    <table>
      <tr>
        <td colspan="4"><input type="text" id="output" bind:value={outPut} readonly={true} /></td>
      </tr>
      <tr>
        <td><input type="button" value="9" on:click={() => setValue(9)} /></td>
        <td><input type="button" value="8" on:click={() => setValue(8)} /></td>
        <td><input type="button" value="7" on:click={() => setValue(7)} /></td>
        <td
          ><input
            type="button"
            value="+"
            on:click={() => setOperation("add")}
          /></td
        >
      </tr>
      <tr>
        <td><input type="button" value="6" on:click={() => setValue(6)} /></td>
        <td><input type="button" value="5" on:click={() => setValue(5)} /></td>
        <td><input type="button" value="4" on:click={() => setValue(4)} /></td>
        <td
          ><input
            type="button"
            value="-"
            on:click={() => setOperation("substract")}
          /></td
        >
      </tr>
      <tr>
        <td><input type="button" value="3" on:click={() => setValue(3)} /></td>
        <td><input type="button" value="2" on:click={() => setValue(2)} /></td>
        <td><input type="button" value="1" on:click={() => setValue(1)} /></td>
        <td
          ><input
            type="button"
            value="*"
            on:click={() => setOperation("multiply")}
          /></td
        >
      </tr>
      <tr>
        <td><input type="button" value="0" on:click={() => setValue(0)} /></td>
        <td><input type="button" value="." on:click={() => setValue(".")} /></td
        >
        <td
          ><input
            type="button"
            value="%"
            on:click={() => setOperation("modolus")}
          /></td
        >
        <td
          ><input
            type="button"
            value="/"
            on:click={() => setOperation("divide")}
          /></td
        >
      </tr>
      <tr>
        <td><input type="button" value="=" on:click={equal} /></td>
        <td
          ><input
            type="button"
            value="DEL"
            on:click={() => setValue("del")}
          /></td
        >
      </tr>
    </table>
  </div>
</main>

<style>
  :root {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: black;
    overflow: hidden;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  .calculator {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 320px;
    height: 440px;
    transform: translate(-50%, -50%);
    padding: 10px 10px;
    backdrop-filter: blur(16px);
    border: 1px solid rgb(20, 20, 20);
  }
  #output {
    width: 100%;
    font-size: 26px;
    font-family: cursive;
    padding: 10px 20px;
    border: none;
    border-bottom: 1px solid rgb(20, 20, 20);
    color: rgb(41, 58, 209);
    background-color: transparent;
  }
  input[type="button"] {
    width: 60px;
    height: 60px;
    font-size: 26px;
    font-family: cursive;
    margin: 5px 5px;
    border: none;
    cursor: pointer;
    color: rgb(41, 58, 209);
    background-color: transparent;
    transition: 0.5s;
  }
  input[type="button"]:hover {
    background-color: rgb(36, 36, 36);
  }

  #circle1 {
    width: 80%;
    height: 100%;
    border-radius: 50%;
    background: transparent linear-gradient(109deg, #55ecb2 0%, #2dd393 100%) 0%
      0% no-repeat padding-box;
    position: absolute;
    top: -230px;
    left: -300px;
  }
  #circle2 {
    width: 60%;
    height: 100%;
    border-radius: 50%;
    background: transparent linear-gradient(112deg, #b050d1 0%, #2b26a7 100%);
    position: absolute;
    bottom: -230px;
    right: -200px;
  }
</style>
