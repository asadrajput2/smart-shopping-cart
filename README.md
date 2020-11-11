App for smart shopping cart. This cart allows customers to make payment on the cart itself, saving their as well as the store's time. The cart contains a RaspberryPi with a touch screen, weight sensor, bar code reader and camera(s). Customers can see the items along with the price, amount bought and total on the display, after scanning. They can choose to pay at any time by clicking the "Checkout" button on the display. The weight sensors and cameras help prevent theft and fraud. One camera keeps looking in the cart and uses Machine Learning to make sure there is no unscanned item in the cart. 

Customers can see their purchase history at any time on the site/app.

**Tech Stack**: React, Redux, Django, Tensorflow, Raspberry Pi 3

To use the app:

***Python 3.8.5+ . Node 12.16.3+***

1. Download the code

1. Make a python environment 
>`python3 -m venv <environment name>`

2. Activate the environment

    - For Windows:
    >`./<environment name>/Scripts/activate`

    - For Linux:
    >`source <environment name>/bin/activate`

3. Download the requirements
>`pip install -r requirements.txt`

4. Run migrations to create sqlite database
>`python3 ./manage.py migrate`

5. Build JS chunk (single JS file for all the React):
> `npm run build`

5. Run server
>`python3 ./manage.py runserver`


> API documentation is available at `/api_doc` and documentation with Swagger UI at `/api_doc_swagger`
