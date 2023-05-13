import transactions from "./transactions.js";

const transactTableRef = document.querySelector('.js-transaction-table');
const tableMarkup = transactions.map(tableRowMaker);

function tableRowMaker(transaction) {
  const tableRow = document.createElement('tr');
 
  const tableID = document.createElement('th');
  tableID.textContent = transaction.id;

  const tableAmount = document.createElement('th');
  tableAmount.textContent = transaction.amount;

  const tableDate = document.createElement('th');
  tableDate.textContent = transaction.date;

  const tableBusiness = document.createElement('th');
  tableBusiness.textContent = transaction.business;

  const tableName = document.createElement('th');
  tableName.textContent = transaction.name;

  const tableType = document.createElement('th');
  tableType.textContent = transaction.type;

  const tableAccount = document.createElement('th');
  tableAccount.textContent = transaction.account;

  tableRow.append(tableID, tableAmount, tableDate, tableBusiness, tableName, tableType, tableAccount);

  return tableRow;
}

transactTableRef.append(...tableMarkup);

