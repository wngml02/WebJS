영어단어장

let myVoca = {
  addVoca: function(voca, meaning){
    myVoca[voca] = meaning;
  },
  
  deleteVoca: function(voca){
    delete myVoca[voca];
  },
  
  printVoca: function(voca){
    console.log(`"${voca}"의 뜻은 "${myVoca[voca]}"입니다.`);
  }
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');


# 1) 여러 메소드 연결 ',' 반드시 작성
# 2) 점 표기법보다 대괄호 표기법을 하면 더 효율적
# 3) string과 파라미터 연결시 ``와 ${}
