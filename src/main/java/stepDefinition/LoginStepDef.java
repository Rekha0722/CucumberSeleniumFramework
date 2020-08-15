package stepDefinition;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {

	WebDriver driver;
	
	@Given("^User is present on login page$")
	public void user_is_present_on_login_page()
	{
		Map<String, Object> prefs = new HashMap<String, Object>();

		//add key and value to map as follow to switch off browser notification
		//Pass the argument 1 to allow and 2 to block
		prefs.put("profile.default_content_setting_values.notifications", 2);

		//Create an instance of ChromeOptions 
		ChromeOptions options = new ChromeOptions();

		// set ExperimentalOption - prefs 
		options.setExperimentalOption("prefs", prefs);
		System.setProperty("webdriver.chrome.driver", "F:\\UdymeSelenium\\FrameworkDevelopment\\Drivers\\chromedriver.exe");
		driver=new ChromeDriver(options);
		driver.get("https://www.fabindia.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Then("^User clicks on Popup Close button$")
	public void user_clicks_on_Popup_Close_Button()
	{
		driver.findElement(By.xpath("//button[@class='btn btn-default']")).click();
	}
	
	@When("^title of login page is FabIndia$")
	public void title_of_login_page_is_FabIndia()  {
	    // Write code here that turns the phrase above into concrete actions
		String str=driver.getTitle();
		System.out.println(str);
	   
	}
	
	/* Data driven using example keyword.
	 * Use any of one regular expr
	 * 1. \"[(^\")*]"\    
	 * 2. \"(.*)\"      */

	/*@Then("^enter \"(.*)\" and \"(.*)\"$")
	public void enter_username_and_Passowrd(String uname,String pass)  {
		driver.findElement(By.xpath("//a[@id='CC-loginHeader-login']")).click();
		driver.findElement(By.xpath("//input[@id='CC-login-input']")).sendKeys(uname);
		driver.findElement(By.xpath("//input[@id='CC-login-password-input']")).sendKeys(pass);
		
	}*/

	/*Data driven using data table
	      */

	@Then("^enter username and password")
	public void enter_username_and_Passowrd(DataTable credentials)  {
		List<List<String>> dataValues= credentials.raw();

		driver.findElement(By.xpath("//a[@id='CC-loginHeader-login']")).click();
		driver.findElement(By.xpath("//input[@id='CC-login-input']")).sendKeys(dataValues.get(0).get(0));
		driver.findElement(By.xpath("//input[@id='CC-login-password-input']")).sendKeys(dataValues.get(0).get(1));
		
	}

	@Then("^User clicks on Login Button$")
	public void user_clicks_on_Login_Button() {
		driver.findElement(By.xpath("//button[@id='CC-userLoginSubmit']")).click();

	}

	@Then("^User is on Home Page$")
	public String user_is_on_Home_Page() {
		
		return driver.findElement(By.xpath("//a[@class='customer_points_container']//span")).getText();
		

	}
}
