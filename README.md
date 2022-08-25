# authAppSymfony
	
## Technologie
* PHP 8.0
* Symfony 6
* MySQL database
* mailhog
	
## Instalacja
To run this project:

* Fetch project
* Fetch dependencies locally (in the project dir)
    * composer install
    * npm install 
* Set up containers by executing `docker-compose up -d`
* Execute migrations by hand
    * docker exec -i mysql8-container mysql -u root --password=1234 authapp < authapp.sql
* Go to address in a browser `http://localhost:8080`
