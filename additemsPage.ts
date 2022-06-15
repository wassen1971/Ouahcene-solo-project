import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./mainBase";
//import {BasePage} from "./basePage";

//this page has the selectors to do:
//remove search term, add item to cart,
// how many gift cards, gift card bounday value

export class AddItems extends BasePage{
    //remove search term
    removeSearchTerm: By = By.xpath('//button[@class="absolute bn bg-transparent h-100 right-2"]')
    //Add to cart Button because no matter what item the button is the same
    addToCartButton: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
   
    //gift card amount field
    giftCardCount: By = By.xpath('//span[@class="flex items-center center f6 b"]')
    //gift card boundry field
    giftCardBoundary: By = By.xpath('//input[@id="price-input-field"]')

    //lg 55" class 4k customer review
    lgCustomerReview: By = By.xpath('//h2[@class="f2 dib lh-title ma0 dark-gray"]')

    constructor(){
        super ({url: "https://www.walmart.com"})
    }
}


/* //yoga pant
yogaPantAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
//blankets
blanketsAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
//milk
milkAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
//baby glass bottle
babyGlassBottleAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
//raspberries
raspberriesAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
//outdoor furniture set
outdoorFurnitureSetAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
//gift card to cart
giftCardAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
//gift card amount field h
giftCardCount: By = By.xpath('//span[@class="flex items-center center f6 b"]')
//gift card boundry field h
giftCardBoundary: By = By.xpath('//input[@id="price-input-field"]')
//lg 55" class 4k to cart
lgAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
//lg 55" class 4k add-on h
//lg 55" class 4k customer review h
lgCustomerReview: By = By.xpath('//h2[@class="f2 dib lh-title ma0 dark-gray"]')
//smart drying machine to cart
smartDryingMachineAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]')
//smart drying machine add-on h
//scotch tape
scotchTapeAdd: By = By.xpath('//button[@class="w_Bw w_By w_B3"]') */