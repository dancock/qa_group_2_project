import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
} from "selenium-webdriver";
import { BasePage } from "./BasePage";
const fs = require("fs");

export class AdvancedSearch extends BasePage {
    topicSearchbarMovies: By = By.css('input[placeHolder = "E.g. horses"]');
    topicSearchbarPeople: By = By.css('input[placeHolder = "E.g. arrested"]');
    searchPulldown: By = By.css('label[for = "navbar-search-category-select"]');
    advSrchBtn: By = By.css('a[href = "https://www.imdb.com/search/"]');
    plotKeyword: By = By.css('h1.header');

    constructor(options) {
        super(options);
        this.url = "https://www.imdb.com";
    };
    async pleasePleasePleaseWork(elementBy: By) {
        let element = await this.getElement(elementBy);
        return await element.getText();
    }
    /**
    * returns text to the topicSearchbarMovies and presses enter 
    * @param {content} string - the text to search for
    * 
    */
    async doAdvSrchMov(content) {
        return this.sendKeys(this.topicSearchbarMovies, `${content}\n`);
    }
    /**
     * returns text to the topicSearchbarPeople and presses enter 
     * @param {content} string - the text to search for
     * 
     */
    async doAdvSrchPpl(content) {
        return this.sendKeys(this.topicSearchbarPeople, `${content}\n`);
    };
    async fileExists(path: string, exists: boolean) {
        if (fs.existsSync(path)) {
            // File exists in path
            exists = true;
            return exists;
        } else {
            // File doesn't exist in path
            exists = false;
            return exists;
        }
    };
    async writeToFile(filepath: string, elementBy: By, extension?: string) {
        let element = (await this.pleasePleasePleaseWork(this.plotKeyword)).toString();
        fs.writeFile(
            `${filepath}${extension}`,
            `${element}`,
            'utf8',
            (e) => {
                if (e) console.log(e);
                else return element;
            }
        )
    };
};
