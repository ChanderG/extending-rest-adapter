var attr = DS.attr;
var User = DS.Model.extend({
  name: attr()
});


User.reopenClass({
  FIXTURES: [{
               id: 1,
               name: "Octocat"
             },  
             {
               id: 2,
               name: "Batman"
             } 
  ]
});

export default User;
