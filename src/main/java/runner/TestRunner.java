package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="F:\\UdymeSelenium\\ShopizerCucumberBDDFramework\\src\\main\\java\\cucumber\\feature\\Login.feature",// path of the features file
		glue={"stepDefinition"},//path of the step def file
		format= {"pretty", "html:test-output","json:json_output/cucumber.json","junit:junit.xlm/cucumber.xml"},//generating the report in many format like html,json,xml etc
		 /**Mapping feature steps to definition steps. If all steps in feature file are implemented in step def.
		If dryRun=true then immediately it run and 
		shows the result on console so it will display all steps with methods if u have written.
		
		Always we have to use dryRun =false bcoz it will executing all the steps on chrome. 
		dryRun=true then it will print the steps and methosd on console.
		
				*/
		//dryRun= true
		dryRun=false,//to check the mapping is proper bet fetaure file and step def file.
		strict=true,// it will check if ny step def is not define inside the step def file.
		monochrome=true   // display the output on console in  readable format .
		)


public class TestRunner {

}
	