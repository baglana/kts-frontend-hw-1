// @ts-nocheck

const patchArrays = (): void => {
  Array.prototype.count = function () {
    return this.length;
  };

  Array.prototype.insert = function (ind, el) {
    if (typeof ind !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    if (ind < 0) {
      ind = 0;
    }
    if (ind > this.length) {
      ind = this.length;
    }
    this.splice(ind, 0, el);
    return this;
  };

  Array.prototype.remove = function (val) {
    this.splice(this.indexOf(val), 1);
    return this;
  };
};

export default patchArrays;
