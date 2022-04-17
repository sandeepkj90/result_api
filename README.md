# Examination Report Generation 
Web application for examination result report generation for each Student

# Installation

To start the Application use command 
'sh start.sh' 

# API Detail
Api postman Collection for each API designed. 

## Login API 
curl --location --request POST 'http://localhost:3000/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userName":"",
    "password":""
}'

