function sum(a, b) {
    if(Array.isArray(a) || Array.isArray(b))
    {
        return false
    }
    if (typeof a === 'string' || typeof b === 'string') 
    {
        return false
    }
    if(a>Number.MAX_SAFE_INTEGER || b>Number.MAX_SAFE_INTEGER)
    {
        return false
    }
    if(!a)
        return b
    if(!b)
        return a
    return a + b;
  }
  module.exports = sum;