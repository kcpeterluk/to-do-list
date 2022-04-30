# Unicorn To Do List

Unicorn To To List app is a hobby project for getting to understand the basic of Firebase Hosting, Firestore Database and Firebase Authentication with Angular.

The app covers all the basic CRUD operations to Firestore Database:

- List all tasks
- Create new task
- Update a task
- Delete a task

The project has two GitHub Actions that perform CI/CD for releasing the app to Firebase Hosting.

1. Build and deploy the app to a preview channel of Firebase Hosting during pull request.
2. Build and deploy the app to the production channel of Firebase Hosting when merged to main branch.
