import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver"; 
import { createSolutionBuilderWithWatch, toEditorSettings } from "typescript";

 const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();


class Imdb {
    driver: WebDriver;
    url: string = "https://www.imdb.com/";

    //this is the locators 
    imdbSignIn:By = By.xpath("//*[@id='imdbHeader']/div[2]/div[6]/a/div")
    // this locter is for signWith imdb
    imdbSignWithImdb:By = By.xpath("//*[@id='signin-options']/div/div[1]/a[1]")
    imdbUserId:By = By.xpath("//*[@id='ap_email']");
    imdbPassWord:By = By.xpath("//*[@id='ap_password']");
    imdbLogIn: By = By.xpath("//*[@id='signInSubmit']");
    imdbWatchList:By = By.xpath("//*[@id='imdbHeader']/div[2]/div[5]");
    imdbSearch:By = By.xpath("//*[@id='suggestion-search']");
    imdbSelect:By = By.xpath("//*[@id='title-overview-widget']/div[1]/div[2]/div/div[2]/div[1]/div[1]/div");
    imdbSelectList: By = By.xpath('//*[@data-testid="search-result--const"]');
    imdbAddmovie:By = By.xpath("//*[@id='title-overview-widget']/div[2]/div[2]/div[3]");
    imdbWatchListCounter:By = By.xpath("//*[@id='imdbHeader']/div[2]/div[5]/a/div/span");
    imdbWatchlisted:By = By.xpath("//*[@id='imdbHeader']/div[2]/div[5]");
    
    
    // i create the  constractor to assign unassgin property or the class constructor
    constructor(driver:WebDriver){
        this.driver = driver;
    }


  // this is function take you the page
    async navigate() {
        await this.driver.get(this.url);       
    };
    // this fuction sigin in to the app
    async signInWithEmail(){
        await driver.wait(until.elementLocated(this.imdbSignIn));
        await driver.findElement(this.imdbSignIn).click();
        await driver.findElement(this.imdbSignWithImdb).click();
        await driver.findElement(this.imdbUserId).sendKeys("Tsionasmamaw@gmail.com");
        await driver.findElement(this.imdbPassWord).sendKeys("Abigail@2020");
        await  driver.findElement(this.imdbLogIn).click();
    }
    // Add movies function
    async addMovies(movieName:string){
        await driver.findElement(imdb.imdbSearch).sendKeys(movieName);
        await driver.wait(until.elementLocated(imdb.imdbSelectList));
        await driver .findElement(imdb.imdbSelectList).click();
        await driver.wait(until.elementLocated(imdb.imdbAddmovie));
        await driver .findElement(imdb.imdbAddmovie).click();

    }
}
// create new project of the above class
    const imdb = new Imdb (driver);
    describe ("the imdb app", ()=>{
        jest.setTimeout(30000);
        beforeEach(async()=>{
            await imdb.navigate();
            
        });
        afterAll(async() =>{
                
        });

        it("watchlist" ,async () =>{
            await imdb.signInWithEmail();

           
           await imdb.addMovies("the office");
             const watchlisted = await driver.findElements(imdb.imdbWatchlisted);
             await (await driver.wait(until.elementLocated(imdb.imdbWatchlisted))).click();
             expect(watchlisted).toBeTruthy();
             expect(watchlisted.length).toBe(1);
        })
    })