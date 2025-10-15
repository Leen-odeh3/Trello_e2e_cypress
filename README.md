# 🧪 Trello E2E Automation Testing

This project is an **End-to-End (E2E)** automation testing framework built with **Cypress**, following the **BDD (Behavior Driven Development)** approach using **Cucumber** syntax and the **Page Object Model (POM)** design pattern.

---

##  Project Overview

The project automates the main functionalities of a Trello-like application using Trello's public API and UI.  
It ensures the reliability of board, list, card, and template management features through reusable test flows and modular design.

---

##  Tech Stack

| Category | Technology |
|-----------|-------------|
| Test Framework | [Cypress](https://www.cypress.io/) |
| BDD Framework | [Cucumber (cypress-cucumber-preprocessor)](https://github.com/badeball/cypress-cucumber-preprocessor) |
| Language | JavaScript (ES6) |
| Design Pattern | Page Object Model (POM) |
| API | [Trello REST API](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/) |

---

##  Features Covered

| Feature | Description |
|----------|-------------|
| ✅ Create Board | Validates board creation through Trello API |
| ✅ Create List | Tests adding lists to boards |
| ✅ Create Card | Verifies card creation within a list |
| ✅ Create Card Template | Ensures templates can be created and reused |
| ✅ Update List | Tests updating list titles |
| ✅ Update Template Name | Validates template renaming |
| ✅ Move Template | Checks moving template between lists |
| ✅ Hide Template | Validates hiding a template from list view |
| ✅ Delete Card | Ensures card deletion works properly |
| ✅ Delete List | Ensures List deletion works properly |

---

## 🧩 How It Works

Each test feature file (`.feature`) follows **Gherkin** syntax:

```gherkin
Feature: Create Board
  As a user
  I want to create a new board
  So that I can manage my tasks

  @smoke @api
  Scenario: User successfully creates a board
    Given the user has valid Trello API credentials
    When the user sends a request to create a board named "My Board"
    Then the board should be created successfully

```



#### Feel free to fork this repository and submit pull requests for new features or improvements!


