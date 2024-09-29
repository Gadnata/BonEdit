import requests
from bs4 import BeautifulSoup

link = 'https://www.motortrend.com/'
responce = requests.get(link).text
soup = BeautifulSoup(responce, 'lxml')
block = soup.find('div', class_='CuratedPage')

print(block)