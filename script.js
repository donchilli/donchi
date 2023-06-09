document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
  
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
  
    var bmi = calculateBMI(weight, height);
    var result = interpretBMI(bmi);
  
    document.getElementById('result').innerHTML = '당신의 BMI는 ' + bmi.toFixed(2) + '입니다. ' + result;
  });
  
  function calculateBMI(weight, height) {
    var heightMeters = height / 100;
    return weight / (heightMeters * heightMeters);
  }
  
  function interpretBMI(bmi) {
    if (bmi < 18.5) {
      return '저체중입니다.';
    } else if (bmi < 25) {
      return '정상 체중입니다.';
    } else if (bmi < 30) {
      return '과체중입니다.';
    } else {
      return '비만입니다.';
    }
  }
  