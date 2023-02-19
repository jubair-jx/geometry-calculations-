// init value
let serial = 0;

/*==================First cart operation Start==================== */
document.getElementById("triangle-btn").addEventListener("click", function () {
  serial++;

  //get from data using ID in HTML
  let triangleArea = document.getElementById("triangle-land");
  let triangleAreaNumber = triangleArea.value;
  let triangleAreaHeigth = document.getElementById("triangle-heigth");
  let triangleAreaHeigthNumber = triangleAreaHeigth.value;
  let totalAreaCalculte =
    0.5 * parseFloat(triangleAreaNumber) * parseFloat(triangleAreaHeigthNumber);
  let newTotalAreaCalculte = totalAreaCalculte.toFixed(2);

  //first cart validation
  if (
    triangleAreaNumber == "" ||
    triangleAreaHeigthNumber == "" ||
    triangleAreaNumber <= 0 ||
    triangleAreaHeigthNumber <= 0
  ) {
    return alert("Please Input a Valid Number");
  }

  //get h1 value
  let triangleheader = document.getElementById("triangle-head").innerText;
  //display data function call
  displayData(serial, triangleheader, newTotalAreaCalculte);

  //recall disabled button  common function
  disabledButton("triangle-btn");

  //clear data from input field function recall
  clearInputField(triangleArea, triangleAreaHeigth);
});
/*==================First cart operation End==================== */
/*==================Second cart operation Start==================== */

document.getElementById("rectangle-btn").addEventListener("click", function () {
  //init value increment
  serial++;
  // get from data using ID in HTML
  let rectangleAreaWidth = document.getElementById("rectangle-width");
  let rectangleAreaWidthNumber = rectangleAreaWidth.value;
  let rectangleAreaHeigth = document.getElementById("rectangle-length");
  let rectangleAreaHeigthNumber = rectangleAreaHeigth.value;
  let totalRectangularArea =
    parseFloat(rectangleAreaWidthNumber) *
    parseFloat(rectangleAreaHeigthNumber);
  let newTotalRectangularArea = totalRectangularArea.toFixed(2);

  //second cart validation
  if (
    rectangleAreaWidthNumber == "" ||
    rectangleAreaHeigthNumber == "" ||
    rectangleAreaWidthNumber <= 0 ||
    rectangleAreaHeigthNumber <= 0
  ) {
    return alert("Please Input a Valid Number");
  }

  //get element data from h1
  let rectangleHeader = document.getElementById("rectangle-header").innerText;
  displayData(serial, rectangleHeader, newTotalRectangularArea);

  //recall disabled button  common function
  disabledButton("rectangle-btn");

  //clear data from input field function recall
  clearInputField(rectangleAreaWidth, rectangleAreaHeigth);
});
/*==================Second cart operation End==================== */
/*==================Third cart operation Start==================== */

document.getElementById("para-btn").addEventListener("click", function () {
  //   init value increment
  serial++;
  // get from data using ID in HTML
  let paraAreaWidth = document.getElementById("para-width");
  let paraAreaWidthNumber = paraAreaWidth.value;
  let paraAreaHeigth = document.getElementById("para-heigth");
  let paraAreaHeigthNumber = paraAreaHeigth.value;
  let totalParaArea =
    parseFloat(paraAreaWidthNumber) * parseFloat(paraAreaHeigthNumber);
  let newtotalParaArea = totalParaArea.toFixed(2);

  //third cart validation
  if (
    paraAreaWidthNumber == "" ||
    paraAreaHeigthNumber == "" ||
    paraAreaWidthNumber <= 0 ||
    paraAreaHeigthNumber <= 0
  ) {
    return alert("Please Input a Valid Number");
  }

  //get element data from h1
  let paraHeader = document.getElementById("para-header").innerText;
  displayData(serial, paraHeader, newtotalParaArea);

  //recall disabled button  common function
  disabledButton("para-btn");

  //clear data from input field function recall
  clearInputField(paraAreaHeigth, paraAreaWidth);
});
/*==================Third cart operation End==================== */
/*==================Fourth cart operation Start==================== */

document.getElementById("rhombus-btn").addEventListener("click", function () {
  //   init value increment
  serial++;
  // get from data using ID in HTML
  let rhombusD1 = document.getElementById("rhombus-d1");
  let rhombusD1Number = rhombusD1.value;
  let rhombusD2 = document.getElementById("rhombus-d2");
  let rhombusD2Number = rhombusD2.value;
  let totalrhombusNumber =
    0.5 * parseFloat(rhombusD1Number) * parseFloat(rhombusD2Number);
  let newTotalrhombusNumber = totalrhombusNumber.toFixed(2);

  //fourth cart validation
  if (
    rhombusD1Number == "" ||
    rhombusD2Number == "" ||
    rhombusD1Number <= 0 ||
    rhombusD2Number <= 0
  ) {
    return alert("Please Input a Valid Number");
  }

  //get element data from h1
  let rhombusHeader = document.getElementById("rhombus-header").innerText;
  displayData(serial, rhombusHeader, newTotalrhombusNumber);

  //recall disabled button  common function
  disabledButton("rhombus-btn");

  //clear data from input field function recall
  clearInputField(rhombusD1, rhombusD2);
});
/*==================Fourth cart operation End==================== */
/*==================Fifth cart operation Start==================== */

document.getElementById("pentagon-btn").addEventListener("click", function () {
  //   init value increment
  serial++;
  // get from data using ID in HTML
  let pentagonHeigth = document.getElementById("pentagon-height");
  let pentagonHeigthNumber = pentagonHeigth.value;
  let pentagonWidth = document.getElementById("pentagon-width");
  let pentagonWidthNumber = pentagonWidth.value;
  let totalpentagonWidthNumber =
    0.5 * parseFloat(pentagonHeigthNumber) * parseFloat(pentagonWidthNumber);
  let newTotalpentagonNumber = totalpentagonWidthNumber.toFixed(2);

  //fifth cart validation
  if (
    pentagonHeigthNumber == "" ||
    pentagonWidthNumber == "" ||
    pentagonHeigthNumber <= 0 ||
    pentagonWidthNumber <= 0
  ) {
    return alert("Please Input a Valid Number");
  }

  //get element data from h1
  let pentagonHeader = document.getElementById("pentagon-header").innerText;
  displayData(serial, pentagonHeader, newTotalpentagonNumber);

  //   //recall disabled button  common function
  disabledButton("pentagon-btn");

  //clear data from input field function recall
  clearInputField(pentagonHeigth, pentagonWidth);
  //clear data from input field
});

/*==================Fifth cart operation End==================== */

/* =================Sixth cart operation Start================== */

document.getElementById("ellipse-btn").addEventListener("click", function () {
  //   init value increment
  serial++;
  // get from data using ID in HTML
  let elispseHeigth = document.getElementById("ellipse-height");
  let elispseHeigthNumber = elispseHeigth.value;
  let elispseWidth = document.getElementById("ellipse-width");
  let elispseWidthNumber = elispseWidth.value;
  let totaleElispseNumber =
    3.1416 * parseFloat(elispseHeigthNumber) * parseFloat(elispseWidthNumber);
  let newtotaleElispseNumber = totaleElispseNumber.toFixed(2);

  //sixth cart validation
  if (
    elispseHeigthNumber == "" ||
    elispseWidthNumber == "" ||
    elispseHeigthNumber <= 0 ||
    elispseWidthNumber <= 0
  ) {
    return alert("Please Input a Valid Number");
  }

  //get element data from h1
  let elipseHeader = document.getElementById("ellipse-header").innerText;
  displayData(serial, elipseHeader, newtotaleElispseNumber);

  //recall disabled button  common function
  disabledButton("ellipse-btn");

  //clear data from input field function recall
  clearInputField(elispseHeigth, elispseWidth);
});

/* =================Sixth cart operation Start================== */

/*===================== Cart Hover Effect Area Section Start============ */

/* ======cart-01 effect start======= */
const card1 = document.getElementById("card-hover1");

card1.addEventListener("mouseover", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  card1.style.backgroundColor = "#" + randomColor;
});

card1.addEventListener("mouseout", function () {
  card1.style.backgroundColor = "transparent";
});
/* ======cart-01 effect End======= */

/* ======cart-02 effect start======= */
const card2 = document.getElementById("card-hover2");

card2.addEventListener("mouseover", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  card2.style.backgroundColor = "#" + randomColor;
});

card2.addEventListener("mouseout", function () {
  card2.style.backgroundColor = "transparent";
});
/* ======cart-02 effect end======= */
/* ======cart-03 effect start======= */
const card3 = document.getElementById("card-hover3");

card3.addEventListener("mouseover", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  card3.style.backgroundColor = "#" + randomColor;
});

card3.addEventListener("mouseout", function () {
  card3.style.backgroundColor = "transparent";
});
/* ======cart-03 effect end======= */
/* ======cart-04 effect start======= */
const card4 = document.getElementById("card-hover4");

card4.addEventListener("mouseover", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  card4.style.backgroundColor = "#" + randomColor;
});

card4.addEventListener("mouseout", function () {
  card4.style.backgroundColor = "transparent";
});
/* ======cart-04 effect end======= */
/* ======cart-05 effect Start======= */
const card5 = document.getElementById("card-hover5");

card5.addEventListener("mouseover", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  card5.style.backgroundColor = "#" + randomColor;
});

card5.addEventListener("mouseout", function () {
  card5.style.backgroundColor = "transparent";
});
/* ======cart-05 effect end======= */

/* ======cart-06 effect Start======= */
const card6 = document.getElementById("card-hover6");

card6.addEventListener("mouseover", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  card6.style.backgroundColor = "#" + randomColor;
});

card6.addEventListener("mouseout", function () {
  card6.style.backgroundColor = "transparent";
});
/* ======cart-06 effect end======= */
/*===================== Cart Hover Effect Area Section End============ */
