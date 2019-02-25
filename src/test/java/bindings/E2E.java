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
        if(NameFieldInput.equals(NameInputText)){
            SubmitSuccess = true;
        }
        Assert.assertFalse("Name not submitted!", SubmitSuccess);

        SubmitSuccess = false;

        String EmailFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();

        if(EmailFieldInput.equals(EmailInputText)){
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
      //  driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[11]/button")).click();
    }

    @Then("^i can view the added text in the console outputb$")
    public void i_can_view_the_added_text_in_the_console_outputb() throws Throwable {
        Boolean SubmitSuccess = false;
        String SummaryFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();
        if(SummaryFieldInput.equals(SummaryInputText)){
            SubmitSuccess = true;
        }
        Assert.assertFalse("Summary not submitted!", SubmitSuccess);
    }

    //==================================================================================================================
        // KEY ROLES

    //==================================================================================================================
    String KeyRolesInputText = "This is my key role";

    @When("^i add text to the role field$")
    public void i_add_text_to_the_role_field() throws Throwable {

        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[4]/div[2]/div[1]/div[1]/div[1]/div/div[1]/div/div/input")).click();
    }

    @When("^i add select role months$")
    public void i_add_select_role_months() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[4]/div[2]/div[1]/div[1]/div[1]/div/div[2]/div/i")).click();
    }

    @When("^i add select role years$")
    public void i_add_select_role_years() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[4]/div[2]/div[1]/div[1]/div[1]/div/div[3]/div/i")).click();
    }

    @Then("^keyrole text viewable in console output$")
    public void keyrole_text_viewable_in_console_output() throws Throwable {
        Boolean SubmitSuccess = false;
        String KeyRolesFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();
        if(KeyRolesFieldInput.equals(KeyRolesInputText)){
            SubmitSuccess = true;
        }
        Assert.assertFalse("Key Role(s) not submitted!", SubmitSuccess);
    }

    //==================================================================================================================
    // TECHNICAL SKILLS

    //==================================================================================================================
    String BasicTechSkillsInputText;
    String IntermediateTechSkillsInputText;
    String AdvancedTechSkillsInputText;

    @When("^i select basic skills$")
    public void i_select_basic_skills() throws Throwable {

        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[6]/div/div[1]/div/i")).click();
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[6]/div/div[1]/div/div[2]/div[1]")).click();
        BasicTechSkillsInputText = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[6]/div/div[1]/div/div[2]/div[1]")).getText();
    }

    @When("^i select intermediate skills$")
    public void i_select_intermediate_skills() throws Throwable {

        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[7]/div/div[1]/div/i")).click();
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[7]/div/div[1]/div/div[2]/div[2]")).click();
        IntermediateTechSkillsInputText = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[7]/div/div[1]/div/div[2]/div[2]")).getText();
    }

    @When("^i select advanced skills$")
    public void i_select_advanced_skills() throws Throwable {

        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[8]/div/div[1]/div/i")).click();
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[8]/div/div[1]/div/div[2]/div[3]")).click();
        AdvancedTechSkillsInputText = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[8]/div/div[1]/div/div[2]/div[3]")).getText();
    }

    @Then("^skills viewable in console output$")
    public void skills_viewable_in_console_output() throws Throwable {

        Boolean basicSkill = false;
        Boolean intermediateSkill = false;
        Boolean advancedSkill = false;
        String TechSkillsFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();
        if(TechSkillsFieldInput.equals(BasicTechSkillsInputText)){
            basicSkill = true;
        }
        if(TechSkillsFieldInput.equals(IntermediateTechSkillsInputText)){
            intermediateSkill = true;
        }
        if(TechSkillsFieldInput.equals(AdvancedTechSkillsInputText)){
            advancedSkill = true;
        }
        Assert.assertFalse("basic skill not submitted!", basicSkill);
        Assert.assertFalse("intermediate skill not submitted!", intermediateSkill);
        Assert.assertFalse("advanced skill not submitted!", advancedSkill);
    }

    //==================================================================================================================
    // INDUSTRY EXPERIENCE

    //==================================================================================================================

    String industryInputText = "this is my industry";
    String areaInputText = "this is my area";

    @When("^i add text to the industry field$")
    public void i_add_text_to_the_industry_field() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[2]/div[2]/div/div[1]/div[1]/div/div[1]/div/div/input")).sendKeys(industryInputText);
    }

    @When("^i add text to the area field$")
    public void i_add_text_to_the_area_field() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[2]/div[2]/div/div[1]/div[1]/div/div[2]/div/div/input")).sendKeys(areaInputText);
    }

    @When("^i add text to the industry months field$")
    public void i_add_text_to_the_industry_months_field() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[2]/div[2]/div/div[1]/div[1]/div/div[3]/div/i")).click();
    }

    @When("^i add text to the industry years field$")
    public void i_add_text_to_the_industry_years_field() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[2]/div[2]/div/div[1]/div[1]/div/div[4]/div/i")).click();
    }

    @Then("^industry values viewable in console output$")
    public void industry_values_viewable_in_console_output() throws Throwable {
        Boolean industryInput = false;
        Boolean areaInput = false;
        String industryFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();
        if(industryFieldInput.equals(industryInputText)){
            industryInput = true;
        }
        if(industryFieldInput.equals(areaInputText)){
            areaInput = true;
        }
        Assert.assertFalse("industry not submitted!", industryInput);
        Assert.assertFalse("area not submitted!", areaInput);
    }

    //==================================================================================================================
    // QUALIFICATIONS

    //==================================================================================================================
  //  String qualInputText = "this is my qual";
    String courseInputText = "this is my course";
    String universityInputText = "this is my university";

    @When("^i add qualification type$")
    public void i_add_qualification_type() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[6]/div/div[1]/div[1]/div/div[1]/div/i")).click();
    }

    @When("^i add course title$")
    public void i_add_course_title() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[6]/div/div[1]/div[1]/div/div[2]/div/div/input")).sendKeys(courseInputText);

    }

    @When("^i add university$")
    public void i_add_university() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[6]/div/div[1]/div[1]/div/div[3]/div/div/input")).sendKeys(universityInputText);

    }

    @When("^i add gradyear")
    public void i_add_gradyear() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[6]/div/div[1]/div[1]/div/div[4]/div/i")).click();
    }

    @Then("^quals viewable in console output$")
    public void quals_viewable_in_console_output() throws Throwable {
        Boolean qualTypeInput = false;
        Boolean courseNameInput = false;
        Boolean universityNameInput = false;
        String qualFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();
        if(qualFieldInput.equals(courseInputText)){
            courseNameInput = true;
        }
        if(qualFieldInput.equals(universityInputText)){
            universityNameInput = true;
        }
        Assert.assertFalse("qual not submitted!", qualTypeInput);
        Assert.assertFalse("course not submitted!", courseNameInput);
        Assert.assertFalse("university not submitted!", universityNameInput);

    }

    //==================================================================================================================
    // SCHEDULE OF EXPERIENCE

    //==================================================================================================================

    String companyInputText = "my company";
    String expRoleInputText = "this is my role";
    String responInputText = "you had ONE job...";

    @When("^i add text to the exp company field$")
    public void i_add_text_to_the_exp_company_field() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[9]/div[2]/div/div[1]/div[1]/div[1]/div/div/input")).sendKeys(companyInputText);
    }

    @When("^i add text to the exp role field$")
    public void i_add_text_to_the_exp_role_field() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[9]/div[2]/div/div[1]/div[1]/div[2]/div/div/input")).sendKeys(expRoleInputText);

    }

    @When("^i add start month$")
    public void i_add_start_month() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[9]/div[2]/div/div[1]/div[2]/div[1]/div/i")).click();
    }

    @When("^i add start year$")
    public void i_add_start_year() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[9]/div[2]/div/div[1]/div[2]/div[2]/div/i")).click();
    }

    @When("^i select currently work here$")
    public void i_select_currently_work_here() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[9]/div[2]/div/div[1]/div[2]/div[3]/div/label")).click();
    }

    @When("^i add responsibilities$")
    public void i_add_responsibilities() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[10]/div[9]/div[2]/div/div[1]/div[4]/textarea")).sendKeys(responInputText);

    }

    @When("^i submit form$")
    public void i_submit_form() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/form/div[11]/button")).click();
    }
    @Then("^sched exp viewable in console output$")
    public void sched_exp_viewable_in_console_output() throws Throwable {

        Boolean companyInput = false;
        Boolean roleInput = false;
        Boolean responInput = false;
        String schedExpFieldInput = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/div/pre")).getText();
        if(schedExpFieldInput.equals(companyInputText)){
            companyInput = true;
        }
        if(schedExpFieldInput.equals(expRoleInputText)){
            roleInput = true;
        }
        if(schedExpFieldInput.equals(responInputText)){
            responInput = true;
        }
        Assert.assertFalse("qual not submitted!", companyInput);
        Assert.assertFalse("course not submitted!", roleInput);
        Assert.assertFalse("university not submitted!", responInput);

      //  driver.close();
    }
    //==================================================================================================================
    // END

    //==================================================================================================================
}
