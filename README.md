# Automation: JavaScript using Hermione
## Prerequisites:
##### 1. `npm` _(or another package manager)_ installed on your computer.
````
https://www.npmjs.com/get-npm
````
##### 2. `Selenium` installed using npm _(or another package manager)_
````
npm install selenium-standalone@latest -g
selenium standalone install
````
## Quick start:
#### 1. Using Terminal (Bash, Command Prompt etc.) go to the directory where you store the Projects:
````
e.g. C:\Projects>
````
#### 2. Clone this repository to your Projects folder.
````
git clone https://github.com/artsenius/automation-hermione.git
````
#### 3. Install necessary modules
````
npm install
npm install hermione-allure-reporter -g
````
#### 4. Run `Selenium Standalone Server` in separate Terminal tab.
````
selenium-standalone start
````
#### 5. Run your first test in the first Terminal tab.
````
hermione
````
If everything is ok, you will see the following result:
````
✓ First test passed [chrome:5b87660ad1675b881284c291b933f1c1] - 4031ms
Total: 1 Passed: 1 Failed: 0 Skipped: 0 Retries: 0
````