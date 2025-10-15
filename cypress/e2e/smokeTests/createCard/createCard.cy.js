///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CreateCardActions from '../../../pageObjects/createCard/actions.cy';
import ShardDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import createCardAssertions from '../../../pageObjects/createCard/assertions.cy';

const createCardAction = new CreateCardActions();
const createCardAssertion = new createCardAssertions();
const shardDataUtils = new ShardDataUtils();
const cardName = 'My card';
const boardName = 'My Board';
let boardUrl;
let boardId;

before(() => {
  shardDataUtils.createBoard(boardName).then((res) => {
    boardUrl = res.body.url;
    boardId = res.body.id;
  });
  cy.login();
});

Given('The user navigates to the board', () => {
  createCardAction.openBoard(boardUrl);
});
When('Clicks on Add a card button', () => {
  cy.wait(3000);
  createCardAction.clicksOnAddACardButton();
});
When('Types card title in textarea field', () => {
  createCardAction.TypesCardTitleInTextareaField(cardName);
});
When('Clicks on Add card button', () => {
  createCardAction.clicksOnAddCardButton();
});
Then('The card will be created successfully', () => {
  createCardAssertion.checkListIsContainCard(cardName);
});

after(() => {
  shardDataUtils.deleteBoard(boardId);
});
