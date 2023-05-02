# Report for Simple React Application for User List

## Introduction:

The task was to create a simple React application that displays a list of users and their associated information. The application should make a network request to fetch data from an external API and use that data to populate the list.

## Implementation:

The implementation of the project started by creating the basic file structure and setting up the development environment. Next, we created a UserList component that fetches the data from the given API using the useEffect hook and renders the list of users.

Each user in the list displays the required information, which includes name, username, email, phone number, website, and company name. We used the useState hook to manage the loading state of the component and showed a loading spinner while the data is being fetched from the API. for Loading component I have used the mui components. 

The UserList component also implements pagination, allowing only a certain number of users to be displayed per page. The pagination was implemented using the useState hook to keep track of the current page number and displaying the appropriate list of users based on that.

To allow users to search for users by name or email, we created a search component that takes input from the user and filters the list of users based on the search query. We used the useState hook to manage the search query and filtered the list of users using the filter method.

Finally, we added routing functionality to navigate to a /user/:id route that displays the selected user's details when a user is clicked. We used the react-router-dom package to implement this functionality.

## Conclusion:

The implementation of the Simple React Application for User List met all the requirements specified in the task. The application uses the useEffect and useState hooks to fetch and display data from an external API. It also implements pagination, search functionality, and routing to display the selected user's details. Overall, the project was a success and met the project's objectives.