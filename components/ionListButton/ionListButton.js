
Template.ionListButton.helpers({
  classes: function(){
    
    var classes = [];

    var action = this.action || 'delete';
    var side = this.side || 'left';
    classes.push('item-' + action);
    classes.push('item-' + side + '-edit');

    classes.push('enable-pointer-events');
    classes.push(this.class);
    
    return classes.join(' ');

  }
})
