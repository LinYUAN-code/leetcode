/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let mp = {};
  for (let x of cpdomains) {
    let arr = x.split(" ");
    let num = parseInt(arr[0], 10);
    let domain = arr[1];
    let ss = domain.split(".");
    for (let i = 0; i < ss.length; i++) {
      let s = ss.slice(i).join(".");
      if (!mp[s]) mp[s] = 0;
      mp[s] += num;
    }
  }
  let ans = [];
  for (let key in mp) {
    ans.push(`${mp[key]} ${key}`);
  }
  return ans;
};
