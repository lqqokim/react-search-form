const data = [
  {
    id: 1,
    name: '[강아지 검색결과1]',
    image:`https://placedog.net/320/240/id=1`
  },
  {
    id: 2,
    name: '[강아지 검색결과2]',
    image: `https://placedog.net/320/240/id=2`
  },
  {
    id: 3,
    name: '[강아지 검색결과3]',
    image: `https://placedog.net/320/240/id=3`
  },
  {
    id: 4,
    name: '[강아지 검색결과4]',
    image: `https://placedog.net/320/240/id=4`
  },
  {
    id: 5,
    name: '[강아지 검색결과5]',
    image: `https://placedog.net/320/240/id=5`
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}