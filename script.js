const apikey=`668e14a5f9a8a98a7f32852d2c53e714`;
//const city="aligarh";

async function fetchweatherdata(city){
	try{
	const response =await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&
		units=metric&appid=${apikey}`
	);

  //trow a error

  if(!response.ok){
	throw new Error("unable to fetch data");
  }
   const data= await response.json();
   console.log(data);
//    console.log(data.main.temp);
//    console.log(data.name);
//    console.log(data.wind.speed);
//    console.log(data.main.humidity);
//    console.log(data.visibility);
   
   //calling fuction 
   updateweatherui(data);
}
catch (error) {
	console.error(error);
}

}


const cityelement=document.getElementById("citytext");
const  temperature=document.querySelector(".temp");
const windspeed=document.querySelector(".wind-speed");

const humidity=document.querySelector(".humidity");

const visibility=document.querySelector(".visibility-distance");

const descriptionText=document.querySelector(".decription-text");

const date=document.querySelector(".date");


//fetchweatherdata();

function updateweatherui(data){
	cityelement.innerHTML = data.name;
	temperature.innerHTML = `${Math.round(data.main.temp)}`;
	windspeed.textContent=`${data.wind.speed} km/h `;
	humidity.innerHTML=`${data.main.humidity}%`;
visibility.textContent=`${data.visibility/1000} km`;
 
descriptionText.textContent=data.weather[0].description;


const currdate=new Date();   //updating the currdate variable with current date
date.textContent=currdate.toDateString(); //calling function to date string

}

//working on searching bar
const formelement= document.querySelector(".search_from");
const inputelement=document.querySelector(".city-input");

formelement.addEventListener("submit",function(e){
	e.preventDefault();

const city=	inputelement.value;
if(city!==""){
	fetchweatherdata(city);
	inputelement.value="";
}

});