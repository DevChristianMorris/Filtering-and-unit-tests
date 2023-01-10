const properties = require("./properties.json");

const filterProperties = require("./filterProperties.js")

describe ("filterProperties", () => {
    it("should only display false properties", () => {
        const properties = [{
            "id": 1,
            "askingPrice": "$891822.26",
            "description": "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
            "address": "8 Shasta Pass",
            "title": "A Beauty on Shasta",
            "img": "https://placeimg.com/640/480/arch",
            "private": false
          },
          {
            "id": 2,
            "askingPrice": "$876330.57",
            "description": "Large Executive townhouse bordering On Town Centre",
            "address": "2 Bowman Avenue",
            "title": "Bowman Brilliance – Style and Value!",
            "img": "https://placeimg.com/640/480/arch",
            "private": true
          },
          {
            "id": 3,
            "askingPrice": "$946446.87",
            "description": "Combining contemporary comforts with a functional layout",
            "address": "8237 Moland Hill",
            "title": "Rare Moland Hill Stunner",
            "img": "https://placeimg.com/640/480/arch",
            "private": false
          }];
        const result = filterProperties(properties);
        const expected = [
            {
            "id": 1,
            "askingPrice": "$891822.26",
            "description": "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
            "address": "8 Shasta Pass",
            "title": "A Beauty on Shasta",
            "img": "https://placeimg.com/640/480/arch",
            "private": false
          },
          {
            "id": 3,
            "askingPrice": "$946446.87",
            "description": "Combining contemporary comforts with a functional layout",
            "address": "8237 Moland Hill",
            "title": "Rare Moland Hill Stunner",
            "img": "https://placeimg.com/640/480/arch",
            "private": false
          }];
        expect(result).toEqual(expected);
    });
});