export default {
  data: [
    {keyword: '인기동물'}, 
    {keyword: '귀여운 이미지'}, 
    {keyword: '강아지'}, 
    {keyword: '고양이'}
  ],

  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  }
}
