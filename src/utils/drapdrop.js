export default (app) => {
  app.directive('drag', (el) => {
      //console.dir(el)
      let son = el.children[0];
      console.log('el1',son)
      
      son.onmousedown = function(e){
        var disx = e.pageX - el.offsetLeft;
        var disy = e.pageY - el.offsetTop;
        son.style.cursor = 'move'
        document.onmousemove = function (e){
          let x = 0;
          let y = 0;
          if(e.pageX - disx > 0){
            x = e.pageX - disx;
          }else{
            x = 0;
          }
          if(e.pageY - disy > 0){
            y = e.pageY - disy;
          }else{
            y = 0;
          }
          el.style.left = x + 'px';
          el.style.top = y + 'px';
        }
        document.onmouseup = function(){
          son.style.cursor = 'default'
          document.onmousemove = document.onmouseup = null;
        }
      }
    

  })


}