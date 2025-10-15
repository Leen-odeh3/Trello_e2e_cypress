class DeleteListAssertions {
  checkListInArchivedItems() {
    cy.get("span").contains("List archived").should('be.visible');
  }
}
export default DeleteListAssertions;
