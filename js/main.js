console.clear();
$('input').on('click', inputHandler);

function inputHandler() {
  $(this).parents('.courses_items_flex').removeClass('courses_items_flex_visible');
  checkIfLast();
}

function checkIfLast() {
  var block = document.querySelectorAll('.courses_items_flex_visible'),
      elementsLength = block.length;
  if (!elementsLength) {
    $('#one').show();
  }
}
