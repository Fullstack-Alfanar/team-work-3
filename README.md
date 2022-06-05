
# team-work2 readme

This is a web page for online book reading.You can sign in for in your account for reading the book you saved.
There is a sign-in/sign-up page, a forget password with renew password page , and the dashboard which there you will see the books you liked.
The online library is called nerds and we have a logo (as you can see in each page).
The web page very easy to use and accessible to everyone at any age .

### The Technology we used
We used html for the main layout of the page, scss for designing (more flexible than css ), and used JavaScript and Json for the scripting/coding part.


## Sections
- Index/ Loading page.
- Sign-up / sign-in page.
- Forget password / renew password page.
- Dashboard page. 

## Index/ Loading page
The index page is the loading screen we used it so it feels like realtime waiting .
It is some sort of animation we build with css/scss coding ( with the help of the internet).

_**Flow of the page:**_
> The page checks if there is cookies saved 
  >If there is the page will be redirected to the dashboard page
  > other wise the sign in/up page will be shown 

The loading page will appear for 2 seconds.

## Sign-up / sign-in page
We build the html page to be the same for the sign-in page and the sign-up because of the similarity, also in the coding has similar functions .

_**Flow of the page:**_
> - The sign-in will be shown first and the user can change for the the sign-up by pressing on the sign-up button .
> - The sign-in contain the following :
    - A field for the user's email address 
    - A field for the password
    - Forget password button/href 
> - When pressing the button of sign-in , it checks if the user exist in the database which we have stored in array of objects and local storage.
    - if the user exist the dashboard page will be shown 
    - otherwise an appropriate message will be shown 
> - If user want to sign-up and pressed on the sign up button, the sing-up page will be shown and it contain the following:
    - Field for username
    - Field for email
    - Field for password
    - Field for confirm password
> -  When pressing the button of sign-up, it checks the following validations
    - username validation
    - email validation
    - password validation
    - confirming the password
> - If all the fields is valid then the dashboard page will be shown and the user will be saved in local storage and the array of objects
    **Note: it also save the user in cookies for 2 hours**

## Forget password / renew password page
Also here we felt it is easier for the user and us to make it in the same html page.
This page is opened whenever the forget-password is pressed.

_**Flow of the page:**_
> - The forget-password part will be shown user must enter the email address and press on the reset button 
> - The renew part will be shown and user then can change the password:
    - the password must be valid 
    - whenever the user enter a valid password, confirms it and press on the submit button the dashboard page will be shown 
    - it is also update the password in the local storage 

## Dashboard page
_**The dashboard page include the following:**_
  - Logout button that when pressed redirect page to the sign-in/sign-up page.
  - Books that are recommended for the user 
  - Each book has its title and maybe a description. 

# Project Flowchart
<center>

![alt text](/images/FLowchart.jpg)


_**©NERDS**_
</center>