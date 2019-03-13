"use strict";

/**
 * A mode to select a single node in a graph.
 */
define(function (require) {

  const { d3 } = window;
  const GraphMode = require('../Mode');

  return class SelectClickMode extends GraphMode {

    constructor() {
      super();
      this.name = 'select-node';
      this.label = 'Select Node';
    }

    didActivate() {
      super.didActivate();
      this.listenTo(this.graph, 'click:node', (e) => {
        let data = d3.select(e.target).datum();
        let isSelected = this.graph.isNodeSelected(data['id']);
        if (!isSelected) {
          this.graph.selectNode(data['id']);
        } else {
          this.graph.unselectNode(data['id']);
        }
      });
    }

    didDeactivate() {
      super.didDeactivate();
      this.stopListening();
    }
  }

})
;
