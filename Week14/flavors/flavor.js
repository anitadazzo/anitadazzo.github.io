console.log("script!")

// function toggleImage() {
 //   console.log("click!")
 //   $('#bakingsoda2').toggleClass('hidden');
  //}

//var myButton = $('#theBakingSodaButton')
  //myButton.on('click',toggleImage);
//document.querySelector("#theBakingSodaButton").addEventListener("click", toggleImage)
//   $('#theBakingSodaButton').click(toggleImage);

// function toggleImage() {
//     $('#sugar2').toggleClass('hidden');
//   }

//   $('#button').click(toggleImage);

// function toggleImage() {
//     $('#milk2').toggleClass('hidden');
//   }

//   $('#button').click(toggleImage);

// function toggleImage() {
//     $('#eggs2').toggleClass('hidden');
//   }

//   $('#button').click(toggleImage);

// function toggleImage() {
//     $('#butter2').toggleClass('hidden');
//   }

//   $('#button').click(toggleImage);

// function toggleImage() {
//     $('#chocolate2').toggleClass('hidden');
//   }

//   $('#button').click(toggleImage);

// function toggleImage() {
//     $('#vanilla2').toggleClass('hidden');
//   }

//   $('#button').click(toggleImage);

// function toggleImage() {
//     $('#carrot2').toggleClass('hidden');
//   }

//   $('#button').click(toggleImage);

// function toggleImage() {
//     $('#lemon2').toggleClass('hidden');
//   }

//   $('#button').click(toggleImage);

// function toggleImage() {
//     $('#flour2').toggleClass('hidden');
//   }

//   $('#button').click(toggleImage);
const BakingSodaButton = $("#theBakingSodaButton").on("click", bakingsodafunc);


function bakingsodafunc() {
 $("#bakingsoda2").fadeIn(1000);
}
