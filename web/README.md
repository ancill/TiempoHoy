# HI

## Folder Structure

### pages

This folder should contain one folder for each page in your application. Inside of those page specific folders should be a single root file that is your page (generally index.js) alongside all the files that are only applicable to that page. For example in the above image we have a Login page which contains the root file index.js, a component called LoginForm, and a custom hook called useLogin. This component and hook are only ever used in the Login page so they are stored with this page instead of being stored in the global hooks or components folders.

## components

Components folder is further broken down into subfolders. These subfolders are really useful since they help keep your components organized into different sections instead of just being one massive blob of components. In our example we have a ui folder which contains all our UI components like buttons, modals, cards, etc. We also have a form folder for form specific controls like checkboxes, inputs, date pickers, etc.

## hooks

The final folder that is a repeat from the simple folder structure is the hooks folder.

## context

The context folder stores all your React context files that are used across multiple pages. I find on larger projects you will have multiple context you use across your application

## data

The data folder is similar to the assets folder, but this is for storing our data assets such as JSON files that contain information used in our code (store items, theme information, etc). This folder can also store a file that contains global constant variables. This is useful when you have lots of constants you use across your application, such as environment variables.

## utils

The final new folder is the utils folder. This folder is for storing all utility functions such as formatters. T

## assets

The assets folder contains all images, css files, font files, etc. for your project.
