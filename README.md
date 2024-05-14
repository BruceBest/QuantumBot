dependency needed: node.js, npm, firebase.

How to use:
  1. download dependencies
  2. login to firebase ```firebase login```
  3. create a project through firebase consle.
  4. initalize firebase. copy your project id, you need it.
  5. write your code 
    5.1. use index.js as main function, connect every module together here.
    5.2. in this case addMessage is the function we have, see detail in comment on file.
	6. deploy impelemtation ```firebase deploy```
	7. test your function usse postman
		7.1 find your function endpoint (link) on firebase consle
		7.2 use post mode with content type ```application/json``` send massage
	8. see if your firestore database 
	9. you finished!!!