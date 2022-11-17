function transText(char: String) {
  const code = char.charCodeAt(0);
  if (code === 32) return " ";
  else if (code === 65) return "어";
  else if (code === 66) return "배";
  else if (code === 67) return "카카오TV";
  else if (code === 68) return "Dreadnought";
  else if (code === 69) return "엄";
  else if (code === 70) return "엌";
  else if (code === 71) return "가";
  else if (code === 72) return "어떻게";
  else if (code === 73) return "미안하다";
  else if (code === 74) return "진짜";
  else if (code === 75) return "이거";
  else if (code === 76) return "보여주려고";
  else if (code === 77) return "엄마";
  else if (code === 78) return "이름";
  else if (code === 79) return "오";
  else if (code === 80) return "피닉스박";
  else if (code === 81) return "어그로";
  else if (code === 82) return "ㄹㅇ";
  else if (code === 83) return "세계관";
  else if (code === 84) return "최강자";
  else if (code === 85) return "의";
  else if (code === 86) return "이다";
  else if (code === 87) return "끌었다";
  else if (code === 88) return "금지";
  else if (code === 89) return "사람";
  else if (code === 90) return "ㅋ";
  else if (code === 97) return "아";
  else if (code === 98) return "이냐";
  else if (code === 99) return "화이팅";
  else if (code === 100) return "동탄";
  else if (code === 101) return "이";
  else if (code === 102) return "익";
  else if (code === 103) return "그";
  else if (code === 104) return "한";
  else if (code === 105) return "이요법";
  else if (code === 106) return "준";
  else if (code === 107) return "비";
  else if (code === 108) return "사";
  else if (code === 109) return "무무";
  else if (code === 110) return "안은우";
  else if (code === 111) return "엄신";
  else if (code === 112) return "은";
  else if (code === 113) return "살아있다";
  else if (code === 114) return "방송";
  else if (code === 115) return "식";
  else if (code === 116) return "에";
  else if (code === 117) return "는";
  else if (code === 118) return "도배";
  else if (code === 119) return "인게";
  else if (code === 120) return "실화";
  else if (code === 121) return "냐";
  else if (code === 122) return "라";
  else if (code === 96) return "\n";
  else return char;
}

export function transUm(text: String) {
  const input = [...text];
  const trans = [];
  for (let i=0; i<=input.length-1; i++) {
    trans.push(transText(input[i]));
  }
  return trans.join("");
}
