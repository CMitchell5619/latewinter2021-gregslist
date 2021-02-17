import { ProxyState } from "../AppState";
import House from "../Models/House.js";

class HousesService{


constructor() {
    console.log('houses service');
}

createHouse(rawHouse) {
    let temp = ProxyState.houses
    temp.push(new House(rawHouse))
    ProxyState.houses = temp
}

deleteHouse(id) {
    let temp = ProxyState.houses
    let house = temp.find(h=>  h.id === id)
    house.price += 100
    ProxyState.houses = temp
}

bid(id) {
    let temp = ProxyState.cars
    let car = temp.find(c=> c.id === id)
    car.price += 100
    ProxyState.cars = temp
  }


}

export const housesServices = new HousesService()