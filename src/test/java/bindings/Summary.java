package bindings;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.util.concurrent.TimeUnit;
import static org.junit.Assert.assertTrue;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
//import utils.excelutils.ExcelUtil;

import java.util.List;
import static junit.framework.TestCase.assertTrue;

public class Summary {

  //  public void setupTestData(){
  //      ExcelUtil.setExcelFileSheet("UserProfileSummaryInput");
  //  }

    WebDriver driver;
  //  public static final String testDataExcelFileName = "testdata.xlsx";
    String SummaryInputText = "life is good!";


    @Given("^I am on the profile creation pageb$")
    public void i_am_on_the_profile_creation_pageb() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\FosterR01\\Desktop\\Selenium\\webdriver_chrome\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
        driver.get("http://localhost:8081/");
        driver.manage().window().maximize();
    }

    @When("^i add text to the Summary fieldb$")
    public void i_add_text_to_the_Summary_fieldb() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[2]/div[2]/textarea")).sendKeys(SummaryInputText);
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[11]/button")).click();
    }

    @Then("^i can view the added text in the console outputb$")
    public void i_can_view_the_added_text_in_the_console_outputb() throws Throwable {
        Boolean SubmitSuccess = false;
        String SummaryFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();
        if(SummaryFieldInput == SummaryInputText){
            SubmitSuccess = true;
        }
        Assert.assertFalse("Summary not submitted!", SubmitSuccess);
        driver.quit();
    }
}