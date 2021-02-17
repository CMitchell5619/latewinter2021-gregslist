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


}

export const housesServices = new HousesService()