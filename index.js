// code your solution here
function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`;
  }
  
  const mondayWork = function (fun = "go to the office") {
    return `This Monday, I will ${fun}.`;
  };
  
  function wrapAdjective(wrap = "*") {
    return function (adjective = "special") {
      return `You are ${wrap}${adjective}${wrap}!`;
    };
  }