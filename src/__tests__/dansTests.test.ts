import { BasePage } from "../page objects/BasePage";
import { AdvancedSearch, AdvSearch } from "../page objects/AdvSearchPage";

describe("advanced search", () => {
    const page = new AdvancedSearch({ browser: "chrome" });
    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test("Screenshotting the 'monkey' result", async () => {
        //var elem = elem.getText().then(string => assert.equal(string, "content"));
        //await page.navigate();
        //await page.doSearch("monkey");
        await page.getDansResults("monkey");
        // we need to search for the results
        //await page.searchFor("monkey");
        // and then we can take the screenshot -- though I did have to make the folder "screenshots" manually first
        await page.takeScreenshot("./src/files/screenshots/Screenshot");
        //expect(await (await JSON.stringify(page.getDansResults()).toLowerCase())).toContain("monkey");
        
        expect(await page..then(string => page.assertEquals(s, content)));
    });
});
    /*test("search bar", async () => {
        await page.doSearch("monkey");
        //console.log(`${await page.getDansResults()}`);
        await page.getDansResults();
        //expect(await page.getDansResults()).toContain("");
        //expect(await page.getResults()).toContain("");
    });*/
    /*test("search movies", async () => {
        //await page.navigate();
        await page.topicSearchM("banana");
        //expect(await page.getResults()).toContain("banana");
        expect(await page.getResults()).toBeVisible();
    });*/
    /*test("search people", async () => {
        //await page.navigate();
        await page.topicSearchP("raffle");
        //expect(await page.getResults()).toContain("raffle");
        expect(await page.getResults()).toBeVisible();
    });*/
    /*afterAll(async () => {
        await page.driver.quit();
    });*/
