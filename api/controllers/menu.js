module.exports = {


  friendlyName: 'Menu',


  description: 'Menu something.',


  inputs: {

  },


  exits: {

    success: {
      viewTemplatePath: 'home/menu'
    }

  },


  fn: async function (inputs) {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // All done.
    return{
      day: currentYear + '/' + currentMonth + '/' + currentDay
    };

  }


};
