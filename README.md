# NodeJS Blogs Backend API

This Repository contains a Project which has the Node Backend for Blogs.\
This Project is created using a Modular approach, where various functionalities are divided into various Modules.

# Api End Points:

The Endpoint to get All the Blogs is:

    /blogs

The Endpoint to get a single blog by Id is:

    /blogs/blogId

Here, the blogId will be replaced by the actual Id which will be used to search for the Blog.

# Data Source:

The Blogs Data is currently stored in a Static Json File.\
It means that this Server is serving static data at the moment.

# Main Component:

The Main Component is responsible for starting the Node Express Server on Localhost at the specified Port Number.\
The other function of the Main Component is to redirect any request on "/blogs" to the Routes Component.

# Routes Component:

The Routes Component is used to process any request received on "/blogs".\
Depending on the request route(path) & the http request type, the router will redirect the process to it's equivalent Controllers.

# Controllers Component:

The Controllers Component is used to process the request, perform some operations depending on the type of request, & sending back a response, either a Success Response or an Error Response.\
The Controller for the Endpoint "/blogs" will return all the Blog Objects if the Blogs are present, otherwise it will return an Error Message.\
The Controller for the Endpoint "/blogs/blogId" will return the Blog Object with matching Id if the Blog is present, otherwise it will return an Error Message.\
The Controllers use Helper Functions to generate a Success Message or an Error Message.

# Helper Functions Component:

The Helper Functions Component will be used to provide various helper functions to the Controllers.\
The Send Response Helper Function will generate a Response Message for a Successful Request.\
It takes the Status Code, Message & Blog Data as Parameters to generate the Response Message.\
The Send Error Helper Function will generate a Response Message for an Unsuccessful Request.\
It takes the Error Object as the Parameter to generate the Error Message.\
The App Error Class Helper Function will generate an Error which will be used by the Send Error Helper Function.\
It takes the Status Code, Error Status & Message as Parameters to generate an Error Object.

# Demo:

Live Demo of the NodeJS Blogs Backend API can be found here:\
https://node-blogs-backend.herokuapp.com/blogs/
