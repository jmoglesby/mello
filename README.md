# Mello
This is a Rails app with heavy ES6/jQuery on the front-end to create a single-page-app style UI. The app emulates Trello, including the drag-and-drop functionality of lists and cards in a board.

Some notable gems and libraries used in this project include: 
* `Rails 5.2.2` - User, Board, List, and Card API's
* `jQuery CDN` - DOM manipulation and AJAX requests
* `devise & devise-jwt` - User authentication and Auth tokens (stored in user's `localStorage`)
* `acts_as_list` - ORM/back end implementation of object list-position
* `Sortable.js` - front end implementation of object list-position/sorting via drag-and-drop
* `Micromodal.js` - modal forms for create/edit/delete

Feel free to sign in as `user@example.com` with password: `password`:

![img](https://github.com/jmoglesby/mello/blob/master/public/gifs/sign_in.gif)

Create boards, create lists, create cards.
Edit and delete lists:

![img](https://github.com/jmoglesby/mello/blob/master/public/gifs/edit_lists.gif)

Edit and delete cards:

![img](https://github.com/jmoglesby/mello/blob/master/public/gifs/edit_cards.gif)

And drag-and-drop lists and cards -- all without page refreshes:

![img](https://github.com/jmoglesby/mello/blob/master/public/gifs/drag_lists.gif)

![img](https://github.com/jmoglesby/mello/blob/master/public/gifs/drag_cards.gif)
