let myObj = {
  // add an asyncIterator method to my object
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          
        }
      }
    }
  }
}