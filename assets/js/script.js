var textareaEl = $("<textarea>");

for (var i = 0; i < 9; i++) {
  $(".container").append(textareaEl).attr("id", i);
  console.log(i);
}
