const keylist = require('../../assets/js/keylist');
module.exports = {


  friendlyName: 'Key',


  description: 'Key something.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'home/key'
    }
  },


  fn: async function (inputs) {

    //keyの数を取得
    const keycount = Object.keys(keylist['key']).length;
    //ランダムな値を取得
    const num = Math.floor(Math.random() * keycount);

    const todaykey = keylist['key'][num];
    // All done.
    return {
      todaykey: todaykey
    };

  }


};
