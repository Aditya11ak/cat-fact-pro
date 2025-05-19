let URL = "https://meowfacts.herokuapp.com/?count=91";
let para = document.querySelector("#data");
let btn = document.querySelector(".btn");

const getFacts = async () => {
  // console.log("Getting Data.... ");

  para.innerText = "loding data....";
  let response = await fetch(URL);
  console.log(response); //this received response is in JSON format
  let Data = await response.json(); // this will convert the JSON format into the js object form.
  let number = Math.floor(Math.random() * 10);
  // console.log(Data.data[number]);
  para.innerText = Data.data[number];
};

// this runs the function when the button is clicked!!
btn.addEventListener("click", getFacts);
