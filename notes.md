our front end type and back end types are different.
transformers take the backend type and convert it into a front end type.
to get data from a database the services file gets the back end type and then maps each element into a front end type using the transformer.
`

- why do we have the same methods in services and controller files
  - e.g. Controller.get, create, update and Services.get, create, update
  - when do we use the services methods and when do we use the controller methods

is the purpose of express to create api endpoints so that other users can read and write to our database without having to run code within this codebase? i.e. they can just make http requests instead?

are the types in the shared dir the front end types?

does 'shared' signify that the types are shared in the front and back ends or that they are shared within the front end?

why do we need to have a different type for front and back end?

in a real world context, would we give more specific names to our query arg objects
i imagine that there would be many different types of query args that we would want to use
e.g. including deleted projects vs not including deleted projects

- controllers
  - used by routes
  - interacts with front end types
- routes
  - sets up endpoints that can be called using http?
- services
  - interacts with the back end types
  - returns front end types
  - wouldn't it be better if our services 
- transformers
  - transform back end types into front end types
