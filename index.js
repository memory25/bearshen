const delay = (s) => new Promise((resolve,rej)=>{
  setTimeout(()=>{
    resolve()
  }, s*1000)
})

const leng = 3;
const list = (new Array(leng)).fill(0);
const textList = [
  '2016/6/10是個很熱的一天，軒軒熊一如往常睡到下午',
  '但是還有點睏',
  '想要在賴一下',
  '不過肚子又有點餓',
  '在家裡找點東西吃',
  '但只有一點餅乾，吃不飽，有點沒精神',
  '但是想到下午要跟一個正妹去看電影，覺得很興奮',
  '到電影院門口後，突然有一道很閃耀的光芒',
  '揉揉眼睛',
  '原來是偉大的蝦大人降臨了',
  '看著眼前的女神，熊熊覺得在作夢',
  '她擄走了小熊的心，並且過了一段幸福的日子',
  '一段時間後，慢慢地越來越多的爭吵',
  '熊熊很愛生氣',
  '熊熊越來越不耐煩',
  '到最後已經趨近於放爛',
  '蝦大人受不了了想離開',  
  '看著大人一步一步遠離，直到消失',
  '腦筋一片空白',
  '熊熊才明白，好像要被遺棄了',
  '蝦大人不要走',
  '蝦大人不見之後，小熊覺得哪裡怪怪的',  
  '漸漸得覺得心情鬱悶、空虛、寂寞',
  '這時候才發現，蝦大人很重要，可是她不見了',
  '熊熊非常懊惱',
  '希望能把蝦大人找回來',
]

const stopIndex = 26;
function appear(i){
  if(i === stopIndex){
    document.querySelector('.goNext').style.display = 'block';
    document.querySelector('.goNext').addEventListener('click', ()=>{
      document.querySelector('audio').pause()
    })
    return null
  }
  const str = textList[i];

  const target = '.p' + (i+1);
  document.querySelector(target).style.display = 'block';
  const options = {
    strings: [ str ],
    typeSpeed: 100,
    onComplete(self){
      self.cursor.remove()
      delay(i === 0 ? 4 : 2.5).then(()=>{appear(i+1)})
    }
  };
  new Typed(target + ' .story', options)
}
  
document.querySelector('#start button').addEventListener('click', ()=>{
  appear(0)
  document.querySelector('audio').play()
  document.querySelector('#start').style.display = 'none'
})
