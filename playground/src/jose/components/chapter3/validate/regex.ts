// 여담으로 정규식을 직접 작성하라는 분들이 간혹있어요
// 개인적으로 제일 이해안되는게 정규식 외우고 쓰라는분들 입니다.
// 그냥 쳇지피티한테 부탁하면 아주아주 잘 만들어주니까 이건 쳇지피티한테 부탁합시다!
export const regex = {
  space: /\s/,
  firstSpace: /^\S/, // 첫번째 글자 공백 체크
  lastSpace: /\S$/, // 마지막 글자 공백 체크
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&^]{8,}$/,
  phoneNumber: /^\d{10,15}$/,
  url: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,6}(:[0-9]{1,5})?(\/.*)?$/,
};
