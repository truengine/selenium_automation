package bindings;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class ContactInfo {

    WebDriver driver;
    public static final String testDataExcelFileName = "testdata.xlsx";
    String userName = "Jane Doe";
    String userEmail = "Janedoe@email.com";

    @Given("^I am on the profile creation page again$")
    public void i_am_on_the_profile_creation_page() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\FosterR01\\Desktop\\Selenium\\webdriver_chrome\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
        driver.get("http://localhost:8081/");
        driver.manage().window().maximize();
    }

    @When("^i add text to the name, email, and country text fields$")
    public void i_add_text_to_the_name_email_and_country_text_fields() throws Throwable {
        // enter contact info text
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[1]/div/div[1]/div/input")).sendKeys(userName);
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[1]/div/div[2]/div/input")).sendKeys(userEmail);
        // submit the form
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[11]/button")).click();
    }

    @Then("^i can view the added texts in the console output$")
    public void i_can_view_the_added_texts_in_the_console_output() throws Throwable {
        // check to see if form has registered in OnChange block
        Boolean SubmitSuccess = false;
        String usernameInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[1]/div/div[1]/div/input")).getText();
        String useremailInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[1]/div/div[2]/div/input")).getText();
        //String usercountryInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();
        if((usernameInput == userName) && (useremailInput == userEmail)){
            SubmitSuccess = true;
        }
        Assert.assertFalse("Name, email, and country not submitted!", SubmitSuccess);
        driver.quit();
    }





}
