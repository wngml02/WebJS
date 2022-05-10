let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
fruits.splice(1,1,'사과','청포도')


// fruits 배열의 첫 번째 요소를 삭제해 주세요.
fruits.splice(0,1)


// ages 배열에 마지막 요소를 삭제해 주세요.
ages.splice(-1,1)


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
ages.splice(2,2,26,28)



// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 5
numbers[4] = 8
numbers[5] = 9



// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
for(let i = 0; i < numbers.length; i++){
  if(numbers[i]%2 != 0){
    numbers.splice(i,1);
    i--; # *홀수 자리가 삭제될 경우 다시 반복문으로 돌아가게 되면 건너뛰어지기 때문에 i-1 로
  } # 홀수인 경우만 삭제하기 위해 경우 나누기
}


// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);
