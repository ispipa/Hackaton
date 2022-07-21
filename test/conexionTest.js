import {getDataCards, response} from "../src/js/conexion.js";
describe ('Game_of_Coders', () => {
    
    test ('getDataCards', () => {        
        
        let result = getDataCards(data);
        expect(result).toBe(product);
    });



});