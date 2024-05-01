# Restaurant Finder

Restaurant Finder is a React application that allows groups of people to create and join sessions to share their restaurant preferences. At the end of the session, one restaurant is randomly selected from the choices provided by the participants.

## Information
1. Session details is storing in browser local storage and expected to clean the the browse local storage before starting a flow
2. Please call the api in same orders in which they are in header to avoid run time erros, as we have user local storage

## Features
- **Show All User**: Users can show all the Users added to the system.
- **Add User**: Add User the to the system before joining the session.
- **Show Active Session**: Users can see the Active session is present to participate.
- **Create Session**: Any one user can create the session
- **Show session User**: Users can see the users who have already joined the session.
- **Join Session**: Participants can join existing sessions using a session code.
- **Add Restaurant**: Each participant can input their restaurant preferences within the session.
- **Terminate session**: User who has created the session can terminate it and one restuarant will be selected
- **Show all selected restaurant**: All Restaurant will be dispalyed, those are selected in any session.

## Installation

1. Clone the repository:

   git clone (https://github.com/ashutobh/restaurant-finder-app.git)

2. cd restaurant-selector
    npm install

3. Usage
    Create a new session or join an existing session using the provided code or link.
    Participants can input their restaurant preferences.
    At the end of the session, the application will randomly select one restaurant from the choices provided.
    The selected restaurant will be displayed to all participants in the session.
4. Technologies Used
    React
