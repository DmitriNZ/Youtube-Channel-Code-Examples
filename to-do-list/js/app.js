// app js


(function() {

  $(document).ready(function(){

    var toDoList = {
      init: function() {
        this.cacheDom();
        this.bindEvents();
      },

      cacheDom: function() {
        this.$container = $('.to-do-list');
        this.$button = $('#add-item-submit');
        this.$list = $('.list');
        this.$input = $('#add-item-input');
        this.$completedList = $('.completed-list');
        this.$deleteButton = this.$container.find('.delete');
      },

      bindEvents: function() {
        console.log('bind');
        this.$button.on('click', this.addNewToDo.bind(this));
        this.$list.on('change', 'input[type="checkbox"]', this.completeTask);
        this.$deleteButton.on('click', this.deleteTask);
      },

      addNewToDo: function() {
          var newToDo = this.$input.val();
          this.$list.prepend('<li><input id="complete-check" type="checkbox">' + newToDo + '</li>');
          this.$input.val('');
      },

      completeTask: function() {
        $(this).parent().remove();
        var completedValue = $(this).parent().text();
        console.log(completedValue);

        $('.completed-list').prepend('<li>'+ completedValue +'</li>');
      },

      deleteTask: function() {
        $(this).parent().remove();
      }

    };

    toDoList.init();

  });

})();
