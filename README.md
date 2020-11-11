# This repository only holds the backend of the app.
This backend will serve the APIs to both mobile and web frontends

To use the server:

***Python 3.8.5+ is required***
***Node 12.16.3+ is required***


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
