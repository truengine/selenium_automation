package bindings;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class E2E {

    WebDriver driver;
    String NameInputText = "Midas Welgo Aftorhall";
    String EmailInputText = "midastouch.com";

    @Given("^profile landing page$")
    public void profile_landing_page() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\FosterR01\\Desktop\\Selenium\\webdriver_chrome\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
        driver.get("http://localhost:8081/");
        driver.manage().window().maximize();
    }

    @When("^i add text to the name field$")
    public void i_add_text_to_the_name_field() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[1]/div/div[1]/div/input")).sendKeys(NameInputText);
    }

    @When("^i add text to the email field$")public void i_add_text_to_the_email_field() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[1]/div/div[2]/div/input")).sendKeys(EmailInputText);
    }

    @When("^i add text to the country field$")
    public void i_add_text_to_the_country_field() throws Throwable {
        // open drop down, could stop here and would select default
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[1]/div/div[3]/i")).click();
        // make selection 1 = Ireland 2= England 3=Germany
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[1]/div/div[3]/div[2]/div[2]")).click();
    }
    @Then("^text viewable in console output$")
    public void text_viewable_in_console_output() throws Throwable {
        Boolean SubmitSuccess = false;
        String NameFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();
        if(NameFieldInput == NameInputText){
            SubmitSuccess = true;
        }
        Assert.assertFalse("Name not submitted!", SubmitSuccess);

        SubmitSuccess = false;

        String EmailFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();

        if(EmailFieldInput == EmailInputText){
            SubmitSuccess = true;
        }
        Assert.assertFalse("Email not submitted!", SubmitSuccess);

        // should put in a check for country selection but putting off for now...
    }

    //==========================================================================================================
    String SummaryInputText = "This is my summary";
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
