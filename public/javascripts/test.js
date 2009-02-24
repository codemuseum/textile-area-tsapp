var Tester = {
  init: function() {
    TSEditor.registerOnEdit('textile-area', Tester.editor);
  },
  editor: function(el) {
    alert("Starting to edit "+ el.id + "!");
  }
}
Tester.init();