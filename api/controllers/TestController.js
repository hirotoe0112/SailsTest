/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `TestController.index()`
   */
  index: async function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  }

};

