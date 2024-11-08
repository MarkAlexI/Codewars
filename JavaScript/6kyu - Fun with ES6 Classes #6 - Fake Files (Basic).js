class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    let arr = fullName.split('.');
    this._extension = arr.pop();
    this._filename = arr.join('.');
    this._contents = contents;
    this._currLine = 0;
    this._currChar = 0;
  }
  get fullName() {
    return this._fullName;
  }
  get filename() {
    return this._filename;
  }
  get extension() {
    return this._extension;
  }
  getContents() {
    return this._contents;
  }
  write(str) {
    this._contents = `${this._contents.length ? this._contents+'\n':''}${str}`;
  }
  gets() {
    return this._contents.split('\n')[this._currLine++];
  }
  getc() {
    return this._contents[this._currChar++];
  }
}
