//thsi function is for get data from the api
const loadFood = (searchedFood) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}


//thsi function is for set data or show data is display.
const displayFood = (loadedFoods) => {
    const foodCard = document.getElementById('foodCard');
    foodCard.innerHTML = '';
    loadedFoods.forEach(food => {
        const div = document.createElement('div');
        div.innerHTML = `
       <div onclick="loadedFoodDetail(${food.idMeal})" class="col">
             <div class="card h-100">
                 <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h5 class="card-title">${food.strMeal}</h5>
                       <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
                    </div>
             </div>
        </div>
       `
        foodCard.appendChild(div);
    });
}


//thsi function is for search button.
const searchButton = () => {
    const getInputValue = document.getElementById('inputField')
    const inputValueText = getInputValue.value;
    loadFood(inputValueText)
    getInputValue.value = '';
}


// //  this function is for show loaded food details.
// const loadedFoodDetails = (idMeal) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayFoodDetails(data.meals))
//         //catch an error by this code and console log it.
//         .catch(error => console.log(error));
// }
// Or we can also use async and await to replace fetch. (it's a alternative for fetch.)
const loadedFoodDetail = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const res = await fetch(url)
    const data = await res.json()
    displayFoodDetails(data.meals);
    ///hear we can use try and catch to manage an error.
}


//this function is for display food details.
const displayFoodDetails = (foodDetails) => {
    const foodDetailsContainer = document.getElementById('foodDetailsContainer');
    foodDetailsContainer.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 30rem;">
        <img src="${foodDetails[0].strMealThumb}" class="card-img-top"  alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${foodDetails[0].strMeal}</h5>
        </div>
    </div>
    `
    foodDetailsContainer.appendChild(div);
}