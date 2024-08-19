CRUD API is bulit off of Node.js and uses Express as the web framework. Mongodb database (demo) is on local server and use 
Mongooose (ODM) to connect Node to demo database on local server. In Mongodb demo have collection called dogs which comes 
from the Mongoose Model Dog. The Model Dog is bulit off of the schema written in file from models folder.

Dog CRUD API has base url of http://localhost:3000/api/dogs following REST conventions. 
Have the index, show, create, update, and delete pages for the Dog Resource. 
No new and edit pages since there are no forms(no frontend for this project). 

Dog endpoints have their routes file in routes folder and Model Methods/async operations are wrapped in file from controllers 
folder so other files are clean.