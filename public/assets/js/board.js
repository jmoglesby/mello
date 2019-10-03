const $logoutButton = $('#logout');
const $boardContainer = $('.container');
const $boardName = $('header > h1');
const $createListInput = $('#create-list input');
const $saveListButton = $('#create-list .save');
const $createCardInput = $('#create-card textarea');
const $saveCardButton = $('#create-card .save');



let board;
let listID;

init();

function init() {
  let boardID = location.pathname.split('/')[2];
  getBoard(boardID);
}

function getBoard(id) {
  $.ajax({
    url: `/api/boards/${id}`,
    method: 'GET'
  }).then(function(data) {
    board = data;
    renderBoard();
  }).catch(function(err) {
    location.replace('/boards');
  });
}

function handleLogout() {
  $.ajax({
    url: '/logout',
    method: 'DELETE'
  }).then(function() {
    localStorage.clear();
    location.replace('/');
  });
}

function createLists(lists) {
  let $listContainers = lists.map(function(list) {
    let $listContainer = $(`<div class="list" id="${list.id}">`);
    let $header = $('<header>');
    let $headerButton = $('<button>').text(list.title);
    let $addCardButton = $('<button>Add a card...</button>')
      .on('click', openCardCreateModal);
    let $cardContainer = $('<ul>');
    let $cards = createCards(list.cards);

    $header.append($headerButton);
    $listContainer.append($header);
    $cardContainer.append($cards);
    $listContainer.append($cardContainer);
    $listContainer.append($addCardButton);

    return $listContainer;
  });

  let $addListContainer = $('<div class="list add">');
  let $addListButton = $('<button>')
    .text('+ Add another list')
    .on('click', openListCreateModal);

  $addListContainer.append($addListButton);
  $listContainers.push($addListContainer);

  return $listContainers;
}

function createCards(cards) {
  let $cardContainers = cards.map(function(card) {
    let $card = $('<li>');
    let $cardButton = $('<button>').text(card.text);

    $card.append($cardButton);
    return $card;
  });

  return $cardContainers;
}

function renderBoard() {
  let $lists = createLists(board.lists);

  $boardName.text(board.name);

  $boardContainer.empty();
  $boardContainer.append($lists);
}

function openListCreateModal() {
  $createListInput.val('');
  MicroModal.show('create-list');
}

function openCardCreateModal(event) {
  $createCardInput.val('');
  listID = event.target.parentNode.id;
  MicroModal.show('create-card');
}

function handleListCreate(event) {
  event.preventDefault();

  let listTitle = $createListInput.val().trim();

  if (!listTitle) {
    MicroModal.close('create-list');
    return;
  }

  $.ajax({
    url: '/api/lists',
    method: 'POST',
    data: {
      board_id: board.id,
      title: listTitle
    }
  }).then(function() {
    init();
    MicroModal.close('create-list');
  });
}

function handleCardCreate(event) {
  event.preventDefault();

  let cardText = $createCardInput.val().trim();

  if (!cardText) {
    MicroModal.close('create-card');
    return;
  }

  $.ajax({
    url: '/api/cards',
    method: 'POST',
    data: {
      list_id: listID,
      text: cardText
    }
  }).then(function(data) {
    init();
    console.log(data);
    MicroModal.close('create-card');
  });
}

$saveCardButton.on('click', handleCardCreate);
$saveListButton.on('click', handleListCreate);
$logoutButton.on('click', handleLogout);
