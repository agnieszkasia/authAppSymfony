# authAppSymfony
	
## Technologie
* PHP 8.0
* Symfony 6
* MySQL database
* mailhog
	
## Instalacja
To run this project:

* Pobrać project
* Umieścić projektw folderze htdocs(XAMP)
* Uruchomić server Apache i MySQL
* W phpmyAdmin dodać bazę danych (schema znajduje się w pliku authapp.sql)
* W terminalu przejść do folderu projektu
```
composer install
docker-compose up -d --build mailhog
```
* przejść w przeglądarce na localhost
