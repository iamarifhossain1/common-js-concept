// callback

function pakhiBhai(callMeBack, patro, patri) {
  console.log("value of patro", patro);
  //   console.log("call me back parameter", callMeBack);
  if (patri) {
    // console.log(callMeBack);
    callMeBack(patro);
  } else {
    console.log("Kopale biya nai");
  }
}

function callingSomeOne(person) {
  console.log("calling person", person);
}

// callingSomeOne('jodu')

pakhiBhai(callingSomeOne, "jodu", "modhu");
