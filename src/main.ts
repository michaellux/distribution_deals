export default function (widget) {
  widget.callbacks = {
    settings: function () { },
    init: function () {
      console.log('[MS] Распределение сделок (init)');
      return true;
    },
    bind_actions: function () {
      return true;
    },
    render: function () {
      console.log('[MS] Распределение сделок (render)');
      return true;
    },
    dpSettings: function () { },
    advancedSettings: function () { },
    destroy: function () { },
    contacts: {
      selected: function () { }
    },
    onSalesbotDesignerSave: function (handler_code, params) { },
    leads: {
      selected: function () { }
    },
    todo: {
      selected: function () { }
    },
    onSave: function () {
      return true;
    },
    onAddAsSource: function (pipeline_id) { }
  }

  return widget
}

