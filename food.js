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
       <div class="col">
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