import "./styles.css";

export default function App() {
  var maxSequence = function (arr) {
    var min = 0,
      ans = 0,
      i,
      sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  };

  var maxSequence2 = function (arr) {
    var min = 0,
      ans = 0,
      i,
      sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  };

  var maxSequence3 = function (arr) {
    var max = 0;
    var cur = 0;
    arr.forEach(function (i) {
      cur = Math.max(0, cur + i);
      max = Math.max(max, cur);
    });
    return max;
  };

  var maxSequence4 = function (arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = arr.length; j > i; j--) {
        var total = arr.slice(i, j).reduce(function (a, b) {
          return a + b;
        });
        if (max < total) max = total;
      }
    }
    return max;
  };

  const maxSequence5 = (a, sum = 0) =>
    a.reduce((max, v) => Math.max((sum = Math.max(sum + v, 0)), max), 0);

  const maxSequence6 = (arr, sum = 0) =>
    arr.reduce((pre, val) => Math.max((sum = Math.max(sum + val, 0)), pre), 0);

  //const a = SubArrayMaxSum2([-23,-15,-37,-47,-24,45,42,5,-48,-28,25,-19,6,-14,-24,-7,-4,18,14,15,5,7,-7]);
  //const a = SubArrayMaxSum2([-89,2, 1, -3, 4,8]);
  const a = maxSequence5([-2, -1, -3, -4, -1, -2, -1, -5, -4]);
  console.log(a);
  //[-23,-15,-37,-47,-24,45,42,5,-48,-28,25,-19,6,-14,-24,-7,-4,18,14,15,5,7,-7]

  return (
    <div className="App">
      <input />
    </div>
  );
}
