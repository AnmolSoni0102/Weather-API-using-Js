console.log("i am weather api");
let city = document.getElementById("city")
let cityName = document.getElementById("cityName")
let cityReigion = document.getElementById("cityReigion")
let cityCountry = document.getElementById("cityCountry")
let temp = document.getElementById("temp")
async function dataGet (cityName) {
    let promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c8cbbfe6c03d41d785952458241002&q=${cityName}&aqi=yes`
    )
    return await promise.json()
}
document.getElementById("btn").addEventListener('click', async () => {
    let val = city.value
    let finalResult = await dataGet(val)
    cityName.innerText = `${finalResult.location.name}`
    cityReigion.innerText = `${finalResult.location.region}`
    cityCountry.innerText = `${finalResult.location.country}`
    temp.innerText = `${finalResult.current.temp_c}`
})


// http://api.weatherapi.com/v1/current.json?key=c8cbbfe6c03d41d785952458241002&q=Mathura&aqi=yes