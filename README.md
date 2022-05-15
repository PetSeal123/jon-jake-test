# Jon/Jake test
 Repo for the API and Cuke tests

	- make sure git is installed
 
	Create a new folder on you computer to clone the repo to
	 Go to the repo in github and select the https link under 'code'
 
	In your new folder right click and open terminal
 
	type git clone [httpslink]
	 you should now be able to open the repo in your code editor.
 
	At this point you might need to install npm in order to run the tests.
	In your terminal make sure you are in the repo directory and type npm -v
	if it says "command npm not found' you need to install npm. 
	depending on your operating system this will vary. 
 
	Lets assume 
	Type in sudo apt install npm
	npx cypress open
	This will tell you you need to install 
	hit y to continue
	npx cypress open 
	
	npm install --save-dev cypress-cucumber-preprocessor
