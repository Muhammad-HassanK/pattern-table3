function drawSquarePattern() {
    const size = document.getElementById("size").value;
    let patternOutput = '';

    for (let i = 1; i <= size; i++) {
      let row = " ";
      for (let j = 1; j <= i; j++) {
        row +="* ";
      }
      patternOutput += row + '<br>';
    }

    document.getElementById("patternOutput").innerHTML = patternOutput;

  }