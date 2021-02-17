import { ProxyState } from "../AppState.js"
import { housesServices } from "../Services/HousesService.js"

function _draw() {
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(house=> template += house.Template)
    document.getElementById('house').innerHTML = template
    console.log(ProxyState.houses)
}

export default class HousesController{
constructor(){
    console.log("houses controller working")
    console.log(ProxyState.houses);
    _draw()
    ProxyState.on("houses", _draw)
}

createHouse(event) {
    console.log('creating house')
    let form = event.target
    console.log(form)
    let rawHouse = {
        bedrooms: form.bedrooms.value,
        bathrooms:  form.bathrooms.value,
        levels: form.levels.value,
        imgUrl: form.imgUrl.value,
        year: form.year.value,
        price: parseFloat(form.price.value),
        description:  form.description.value,
    }
    console.log(rawHouse)
    housesServices.createHouse(rawHouse)
}

deleteHouse(id) {
    console.log(id)
    housesServices.deleteHouse(id)
}


}
