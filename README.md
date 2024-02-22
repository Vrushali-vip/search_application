# Project Name
## Search Application using currency code
Brief description of the project.
  The search application project appears to be a web application developed using React.js. Here's a brief overview:

**Objective:** The objective of the project is to be building a search application that allows users to search for countries based on their currency codes. Users can input a currency code (e.g., INR, EUR) into the search bar, and the application will filter and display countries that use the specified currency.

**Technologies:** The project utilizes the React.js library for building user interfaces. It may also include additional libraries or tools such as react-icons for displaying icons and potentially other npm packages for managing state, handling routing, or styling components.

**Functionality:** The application likely consists of at least two main components:

**Search Component:** Contains a search bar where users can input currency codes. This component dynamically filters and displays countries based on the entered currency code.
**Country Component:** Displays information about countries matching the search criteria. Each country is likely represented as a separate component, displaying details such as the country name, capital, currency, and currency symbol.

**Data Source:** This project is utilizing data from a JSON file named TemplateData.json, which likely contains information about various countries, including their names, capitals, currencies, and currency symbols.

**Styling:** The application's styling is managed using CSS, with styles defined either in a separate CSS file or potentially using CSS-in-JS solutions like styled-components or Emotion.

Overall, the project aims to provide a user-friendly interface for searching and retrieving information about countries based on their currency codes. It demonstrates the use of React.js for building dynamic and interactive web applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)

## Installation

Instructions on how to install the project, including any dependencies that need to be installed.

```bash
$ https://github.com/Vrushali-vip/search_application.git
$ cd search_application
$ npm start  # or yarn start

```
## Usage

**Search by Currency Code:**

**1. Input a currency code** (e.g., USD, EUR, INR) into the search bar.
Press Enter or click the search icon.
The application will filter and display countries that use the specified currency.

**2. View Country Details:**
Once the search is performed, the application will display a list of countries that match the entered currency code.
Each country entry includes:
Country name
Capital
Currency
Currency symbol
Clear Search:

**3. To clear the search** and view all countries, simply delete the currency code from the search bar.

## Features
**1. Search by Currency Code:** Users can input a currency code (e.g., INR, EUR) into the search bar to filter countries based on the entered currency code.

**2. Dynamic Filtering:** As the user types in the search bar, the application dynamically filters the list of countries based on the entered currency code, displaying only the countries that match the search criteria.

**3. Display Country Information:** For each country matching the search criteria, the application displays relevant information including:
Country name
Capital
Currency code
Currency symbol

**4. Error Handling:** If the entered currency code does not match any countries in the dataset, **the application provides an error message informing the user that the entered currency code is incorrect. It also provides a link to a document containing correct currency codes for reference.**

**5. Responsive Design:** The user interface is likely designed to be responsive, allowing users to access and interact with the application across different devices and screen sizes.

**6. Additional Feature:** Currency symbols are added as extra feature.

Overall, the project provides a simple and intuitive interface for users to search and view information about countries based on their currency codes, with error handling and a reference document for correct currency codes.

## Screenshots
# Homepage
![image](https://github.com/Vrushali-vip/search_application/assets/71547087/6e7a0f04-8b6d-4fef-9a63-acd9281a27fb)
# Search Result
![image](https://github.com/Vrushali-vip/search_application/assets/71547087/18c945e4-7451-4ab0-b2df-8a8bb354ab99)
# Responsive Design
![image](https://github.com/Vrushali-vip/search_application/assets/71547087/9647c6f8-e91c-4b8d-a5b9-b5c35ce38ab1)
# Mobile view
![image](https://github.com/Vrushali-vip/search_application/assets/71547087/abe7fc22-df90-4902-b284-00662806cffd)
# If search does not match
![image](https://github.com/Vrushali-vip/search_application/assets/71547087/83f15fc8-43de-41b1-bc7b-647e519e0a92)







