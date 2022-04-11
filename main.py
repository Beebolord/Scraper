# selenium 4
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()))
URL = "https://virtuo.ciussscn.rtss.qc.ca/GuichetWeb/"

driver.get(URL)



login = driver.find_element(By.XPATH("/html/body/ng-include/div/div/div/div/ng-include[1]/div/div[2]/form/div[1]/div[1]/input"))
password = driver.find_element(By.XPATH("/html/body/ng-include/div/div/div/div/ng-include[1]/div/div[2]/form/div[2]/div[1]/input"))
page = driver.find_element(By.XPATH("/html/body/ng-include/div/div/div/div/ng-include[1]"))
page.click()
login.sendKeys("510217")
login.click().sendKeys("510217")
login.click().sendKeys("510217")
login.click().sendKeys("510217")

login.sendKeys(Keys.TAB)
password.sendKeys("Satan258069911!")
login.sendKeysw
