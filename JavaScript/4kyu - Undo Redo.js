function undoRedo(object) {
  let obj = object;
  let actions = [];
  let undos = [];

  function Action(type, key, oldValue, newValue) {
    this.type = type;
    this.key = key;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }

  function UndoLimitExeption() {
    this.name = 'UndoLimitExeption';
    this.message = 'Cannot undo.';
  }

  function RedoLimitExeption() {
    this.name = 'RedoLimitExeption';
    this.message = 'Cannot redo.';
  }

  return {
    set: function(key, newValue) {
      actions.push(obj.hasOwnProperty(key)
                   ? new Action('set', key, obj[key], newValue)
                   : new Action('new', key, null, newValue));
      obj[key] = newValue;
      undos.length = 0;
    },
    get: function(key) {
      return obj[key];
    },
    del: function(key) {
      actions.push(new Action('del', key, obj[key], null));
      delete obj[key];
      undos.length = 0;
    },
    undo: function() {console.log('un ' + JSON.stringify(obj));
      if (!actions.length) throw new UndoLimitExeption();
      let x = actions.pop();
      if (x.type === 'set' || x.type === 'del') obj[x.key] = x.oldValue;
      if (x.type === 'new') delete obj[x.key];
      undos.push(x);
    },
    redo: function() {
      if (!undos.length) throw new RedoLimitExeption();
      let y = undos.pop();
      if (y.type === 'set' || y.type === 'new') obj[y.key] = y.newValue;
      if (y.type === 'del') delete obj[y.key];
      actions.push(y);
    }
  };
}
