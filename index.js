/*const culcFuction = function(num1,operator,num2){
  switch(operator){
    case '+': {
    return num1 + num2;
    break;
    }
    case '-': {
      return num1 - num2;
      break; 
    }
    case '*': {
      return num1 * num2;
      break; 
    }
    case '/': {
      return num1 / num2;
      break; 
    }
    default:{
      return 'Не верное значение';
    }
    
  }
  
}
const num1 = +prompt('Введите любое число');
const operator = prompt('Введите один из знаков операторов');
const num2 = +prompt('Введите любое число');
const resultCulc = culcFuction(num1,operator,num2);
alert(resultCulc);*/


/*const color = function(par1){
  if(colorLight === 'red'){
    return 'Stop';
  }
  if(colorLight === 'orange'){
    return 'getting ready';
  }
  if(colorLight === 'green'){
    return 'Go!'
  }else{
    return 'У светофора нет такого "сигнала!)"'
  }
}
const colorLight = prompt('Введите "сигнал" светофора');
const whatDo = color(colorLight);
alert(whatDo);*/

const year = function(parampampam){
  switch(numberMonth){
    case '12':
      case '1':
      case '2':
      {
      return 'winter';
      break;}
      case '3':
        case '4':
        case '5':
        {
        return 'spring';
        break;}
        case '6':
      case '7':
      case '8':
      {
      return 'summer';
      break;}
      case '9':
      case '10':
      case '11':
      {
      return 'autumn';
      break;}
    }
}
const numberMonth = prompt('Введите порядковый номер месяца года))');
const result = year(numberMonth);
alert(result);
