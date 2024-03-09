export const getMyAge = () => {
  const myBirthDay = new Date('1996-2-5');
  const dateInstance = new Date();
  const yearDiff = dateInstance.getFullYear() - myBirthDay.getFullYear();
  const monthDiff = dateInstance.getMonth() - myBirthDay.getMonth();
  const dateDiff = dateInstance.getDate() - myBirthDay.getDate();

  // 誕生日が過ぎていない場合は年齢を1歳引く
  const age = monthDiff < 0 || (monthDiff === 0 && dateDiff < 0) ? yearDiff - 1 : yearDiff;

  return age;
};