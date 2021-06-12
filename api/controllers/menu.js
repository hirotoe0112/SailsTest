module.exports = {


  friendlyName: 'Menu',


  description: 'Menu something.',


  inputs: {
    username:{
      type: 'string',
      required: false
    }
  },


  exits: {

    success: {
      viewTemplatePath: 'home/menu'
    }

  },


  fn: async function ({username}) {

    console.log(username);
    if(!username){
      username = 'ゲスト';
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // All done.
    return{
      day: currentYear + '/' + currentMonth + '/' + currentDay,
      username: username
    };

  }


};
