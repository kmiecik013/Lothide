  const head = function(array) {
    return array[0];
  }

  const assertEqual = function(a, b) {

    if (head(array) === b) {
      return "Passed"
    } else {
      return "Failed";
    }
  }
 assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");