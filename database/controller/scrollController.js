const Scroll = require('./../model/scrollModel.js');
const scrollController = {};

scrollController.createScroll = (data) => {
  return Scroll.create({
    scrollPercent: data.scrollPercent
  })
}

module.exports = scrollController;