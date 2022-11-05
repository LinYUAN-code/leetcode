/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  let u = 0;
  const s = expression;
  const parse = () => {
    switch (s[u]) {
      case "f":
        u++;
        return false;
      case "t":
        u++;
        return true;
      case "!": {
        u += 2;
        let inner = parse();
        u++;
        return !inner;
      }
      case "|": {
        u += 2;
        let inner = false;
        while (s[u] !== ")") {
          inner |= parse(u);
          if (s[u] === ",") {
            u++;
          }
        }
        u++;
        return inner;
      }
      case "&": {
        u += 2;
        let inner = true;
        while (s[u] != ")") {
          inner &= parse(u);
          if (s[u] === ",") {
            u++;
          }
        }
        u++;
        return inner;
      }
    }
  };
  return parse();
};
