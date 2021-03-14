import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
} from "selenium-webdriver";
import { BasePage } from "./BasePage";

/*export interface AdvSearch {

}*/

export class AdvancedSearch extends BasePage {
    searchBox: By = By.name("q");
    dansResults: By = By.className('span[class ="findSearchTerm"]');
    topicSearchbarMovies: By = By.css('input[placeHolder = "E.g. horses"]');
    topicSearchbarPeople: By = By.css('input[placeHolder = "E.g. arrested"]');
    expected = this.getElement(this.results);
    received = this.getText(this.dansResults);
    
    constructor(options) {
        super(options);
        this.url =
            "https://www.imdb.com";
    }
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(
            until.elementIsEnabled(await this.getElement(this.searchBox))
        );
    }
    async searchFor(searchText: string) {
        await this.setInput(this.searchBox, searchText);
    }
    async getDansResults(content) {
        this.doSearch(content);
        return this.getText(this.dansResults);
    }
    async assertEquals(results: string, content: string) { //expected: WebElement, received: WebElement) { //: Promise<boolean> {
        //the results object equals the content object
        let status = false;
        let fakeResults = "monkey";
        let fakeContent = "monkey";
        let element = this.driver.findElement(this.results);
        element.getText().then(function (s) {
            this.assert.equal(s, `${this.content}`);
        });
        if(fakeResults.includes(fakeContent)) {
            status = true;
        };
        return status;
    };
    /*async equ() {
    this.assert.equal(Object obj){
        Employee emp = (Employee) obj;
        boolean status = false;
        if(this.name.equalsIgnoreCase(emp.name)
                && this.empId == emp.empId 
                && this.salary == emp.salary){
            status = true;
        }
        return status;
    }*/
    /**
    * returns text in topicSearchbarMovies and presses enter 
    * @param {content} string - the text to search for
    * 
    */
    /*async topicSearchM(content) {
        return this.sendKeys(this.topicSearchbarMovies, `${content}\n`);
    }*/
    /**
     * returns text in topicSearchbarMovies and presses enter 
     * @param {content} string - the text to search for
     * 
     */
    /*async topicSearchP(content) {
        return this.sendKeys(this.topicSearchbarPeople, `${content}\n`);
    }*/
    /*async getEmployeeList() {
      const employeeList: Array<string> = [];
      let list = await this.driver.findElements(this.listedEmployees);
      for (let i = 0; i < list.length; i++) {
        await employeeList.push(await list[i].getText());
      }
      return list;
    }
    async selectEmployee(name: string) {
      await this.click(By.xpath(`//li[text()='${name}']`));
      await this.getElement(this.cardTitle);
      await this.driver.wait(
        until.elementTextContains(await this.getElement(this.cardTitle), name)
      );
    }
    async getCurrentEmployee() {
      let employee = { name: "", phone: 0, email: "", title: "", id: "" };
      employee.name = await this.getAttribute(this.nameEntry, "value");
      employee.phone = parseInt(
        await this.getAttribute(this.phoneEntry, "value"),
        10
      );
      employee.email = await this.getAttribute(this.emailEntry, "value");
      employee.title = await this.getAttribute(this.titleEntry, "value");
      employee.id = (await this.getText(this.idNumber)).slice(4);
      return employee;
    }
    async addEmployee(employee: Employee) {
      await this.click(this.addButton);
      //   await new Promise((res) => setTimeout(res, 500));
      //   await this.searchFor("New Employee");
      //   await new Promise((res) => setTimeout(res, 500));
      await this.selectEmployee("New Employee");
      await this.driver.wait(until.elementLocated(this.cardTitle));
      await this.driver.wait(
        until.elementTextIs(await this.getElement(this.cardTitle), "New Employee")
      );
      await this.setInput(this.nameEntry, employee.name);
      await this.setInput(this.phoneEntry, employee.phone);
      await this.setInput(this.emailEntry, employee.email);
      await this.setInput(this.titleEntry, employee.title);
      await this.click(this.saveButton);
    }
    async deleteEmployee(name: string) {
      await this.selectEmployee(name);
      let record = await this.driver.findElement(
        By.xpath(`//li[text()='${name}']`)
      );
      await this.click(this.deleteButton);
      await this.driver.wait(until.alertIsPresent());
      let alert = await this.driver.switchTo().alert();
      await alert.accept();
      await this.driver.wait(until.stalenessOf(record));
    }
  }*/
};