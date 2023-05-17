

# SERVERLESS DEPLOY
````bash
aws configure --profile ""
serverless deploy --aws-profile ""
````


# GENERATE TOKEN
````bash
openssl rand -base64 172 | tr -d '\n'
Yqer2yzevjftJLjl57l3F65yZkJapAZunEA2plAExOTXS+OEX/X+52Pz0P3Q/Dek77oxIRsfITansYDhshVi4HvxN1SP6OTeL+2O3eaK68xsx6yRVksJ7+vcUpLG5U6OiTKlTZklr4u8E5PJgJnS40HzUhq6523OOELW0s7sqUbNmOIPAtHAgjTQXsPrVaHlDmLEcRRY9R1xdYaIU2BOEYjcizppNf5vQyXODA==
````



# FUNCTION CALL - dinoh_lambda_jwt_get
````bash
endpoints:GET - https://pndgwv9to6.execute-api.ap-northeast-2.amazonaws.com/dev/jwt

exec - https://pndgwv9to6.execute-api.ap-northeast-2.amazonaws.com/dev/jwt?user_id=spark&name=dinoh

response -
{
"token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzcGFyayIsIm5hbWUiOiJkaW5vaCIsInJhbmsiOjEwfSwiaWF0IjoxNjg0MzE1NjIyLCJleHAiOjE2ODQzMjU3MDIsImlzcyI6InNwYXJrIiwic3ViIjoicnVieXdhdmUifQ.DW0kh966lwGNj2cwpoB36aaY_lgIu7ZKn9_pZQRAD-ahVv0HBH6F7Fx6ke9Jw5_iRzHxpJKLg-3-YT16BRkcPg"
}
````



# FUNCTION CALL - dinoh_lambda_jwt_decode_get
````bash
endpoints:GET - https://pndgwv9to6.execute-api.ap-northeast-2.amazonaws.com/dev/jwt/decode

exec - https://pndgwv9to6.execute-api.ap-northeast-2.amazonaws.com/dev/jwt/decode?token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzcGFyayIsIm5hbWUiOiJkaW5vaCIsInJhbmsiOjEwfSwiaWF0IjoxNjg0MzE1NjIyLCJleHAiOjE2ODQzMjU3MDIsImlzcyI6InNwYXJrIiwic3ViIjoicnVieXdhdmUifQ.DW0kh966lwGNj2cwpoB36aaY_lgIu7ZKn9_pZQRAD-ahVv0HBH6F7Fx6ke9Jw5_iRzHxpJKLg-3-YT16BRkcPg

response -
{
"decoded": {
"data": {
"user_id": "spark",
"name": "dinoh",
"rank": 10
},
"iat": 1684315622,
"exp": 1684325702,
"iss": "spark",
"sub": "rubywave"
}
}
````




# FUNCTION CALL - dinoh_lambda_jwt_permission_get
````bash
endpoints:GET - https://pndgwv9to6.execute-api.ap-northeast-2.amazonaws.com/dev/jwt/permission

exec - https://pndgwv9to6.execute-api.ap-northeast-2.amazonaws.com/dev/jwt/permission?token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzcGFyayIsIm5hbWUiOiJkaW5vaCIsInJhbmsiOjEwfSwiaWF0IjoxNjg0MzE1NjIyLCJleHAiOjE2ODQzMjU3MDIsImlzcyI6InNwYXJrIiwic3ViIjoicnVieXdhdmUifQ.DW0kh966lwGNj2cwpoB36aaY_lgIu7ZKn9_pZQRAD-ahVv0HBH6F7Fx6ke9Jw5_iRzHxpJKLg-3-YT16BRkcPg

response -
{
"allow": true
}
````


