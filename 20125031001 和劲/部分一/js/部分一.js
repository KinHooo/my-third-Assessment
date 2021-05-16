
/*顶部栏隐藏*/
window.onscroll=function(){
    var topScroll =document.body.scrollTop || document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
    console.log(topScroll,'topScroll')
    var space  = document.getElementById("headtext");
    var bignav  = document.getElementById("fixx");//获取到导航栏id
    var spaceOffsetHeight = space.offsetTop    //以spce的滚动高度为参照
    console.log(spaceOffsetHeight,'fixxOffsetHeight')
    if(topScroll > spaceOffsetHeight){  
        bignav.style.position = 'fixed';
        bignav.style.top = '0';
        bignav.style.left = "0";
        bignav.style.right = "0";
        bignav.style.zIndex = '9999';
    } else {
        bignav.style.position = 'static';
    }
}
/*点击菜单事件*/
  function menus()
{
    var leftcd = document.getElementById("cdboxx");
    var greyb = document.getElementById("greybox");
    leftcd.style.display = "block";
    greyb.style.display = "block";
    /*隐藏滚动条*/
    document.documentElement.style.overflowY = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    /*回到顶部*/ 
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
/*关闭菜单事件*/ 
  function menuss()
{
    var leftcd = document.getElementById("cdboxx");
    var greyb = document.getElementById("greybox");
    leftcd.style.display = "none";
    greyb.style.display = "none";
    /*显示滚动条*/
    document.documentElement.style.overflowY = 'scroll';
    document.documentElement.style.overflowX = 'scroll';
}
/*点击搜索事件*/
  function ss()
{
    var sous = document.getElementById("searchk");
    var sstb = document.getElementById("search1");
    var ssan = document.getElementById("sousbu");
    var qdgjs = document.getElementById("qdgjkk");
    var qdsjs = document.getElementById("qdsjkk");
    var qdgjbs = document.getElementById("qdgjbb");
    var qdsjbs = document.getElementById("qdsjbb");  
    var wys = document.getElementById("wytext");
    var qxb = document.getElementById("qxbut");
    qxb.style.display = "block";
    sous.style.display = "block";
    sstb.style.display = "none";
    ssan.style.display = "none";
    qdgjs.style.display = "none";
    qdgjbs.style.display = "none";
    qdsjs.style.display = "none";
    qdsjbs.style.display = "none";
    wys.style.display = "none";
}
  function sss()
{
    var sous = document.getElementById("searchk");
    var sstb = document.getElementById("search1");
    var ssan = document.getElementById("sousbu");
    var qdgjs = document.getElementById("qdgjkk");
    var qdsjs = document.getElementById("qdsjkk");
    var qdgjbs = document.getElementById("qdgjbb");
    var qdsjbs = document.getElementById("qdsjbb");  
    var wys = document.getElementById("wytext");
    var qxb = document.getElementById("qxbut");
    qxb.style.display = "none";
    sous.style.display = "none";
    sstb.style.display = "block";
    ssan.style.display = "block";
    qdgjs.style.display = "block";
    qdgjbs.style.display = "block";
    qdsjs.style.display = "block";
    qdsjbs.style.display = "block";
    wys.style.display = "block";
    history.go(0);
};
/*轮播图*/
  var i = 0;
 function f()
 {
   var arr = ["./img/图一.png","./img/图二.png","./img/图三.png"];
   var img = document.getElementById("img");
     i++;
     if(i>=arr.length){
           i=0;
            }
            img.src=arr[i];
            var list = document.getElementById("list");
            var li = list.getElementsByTagName("li");
            for(var j=0;j<li.length;j++)
            {
                li[j].classList.remove("bg");
            }
            li[i].classList.add("bg");
 }
    setInterval("f()",3000);
 function chang(){
        img.src=arr[i];
        var list = document.getElementById("list");
        var li = list.getElementsByTagName("li");
        for(var j=0;j<li.length;j++)
        {
        li[j].classList.remove("bg");
        }
        li[i].classList.add("bg");
 };
    var i = 0;
    var lis = document.getElementsByTagName("li");
    for (var k=0;k<lis.length;k++) {
        lis[k].index=i;
        lis.onclick=function(){
            i=this.index;
            chang();
        }
    }
/*前端时间*/
 /*鼠标点击变色*/ 
  function add3()
{
    //获取前端时间checkbox点击状态
    var qdsjcheckbox = document.getElementById("qdsjbb");
    var qdsjo = document.getElementById("qidtime");
    var qdsjk = document.getElementById("qdsjkk");
    var qdgjo = document.getElementById("qdgjbox");
    var qdgjk = document.getElementById("qdgjkk");
    var arrowk = document.getElementById("arrow");
    if(qdsjcheckbox.checked){
      qdsjo.style.display = "block";
      qdsjk.style.color = "#49c5b6";
      qdsjk.style.borderColor = "#49c5b6";
      if(qdgjo.style.display="block"){
        qdgjo.style.display = "none";
        qdgjk.style.color = "black";
        qdgjk.style.borderColor = "black";
        arrowk.style.transform = "rotateX(0deg)"; 
      }
    }
    else{
      qdsjo.style.display = "none";
      qdsjk.style.color = "black";
      qdsjk.style.borderColor = "black";
    }
}
    
/*鼠标第二次点击前端时间隐藏下框并恢复黑色*/
  function ad3(){
    var qdsjo = document.getElementById("qidtime");
    qdsjo.style.display = "none";
    var qdsjk = document.getElementById("qdsjkk");
    qdsjk.style.color = "black";
    qdsjk.style.borderColor = "black";
}
/*鼠标移走选择区域恢复原状*/
  function add4()
{
    var qdsjo = document.getElementById("qidtime");
    qdsjo.style.display = "none";
    var qdsjk = document.getElementById("qdsjkk");
    qdsjk.style.color = "black";
    qdsjk.style.borderColor = "black";
}
/*前端时间鼠标移入移走变色*/
  function add7()
{
    var qdsjk = document.getElementById("qdsjkk");
    qdsjk.style.color = "#49c5b6";
    qdsjk.style.borderColor = "#49c5b6";
    var qdgjk = document.getElementById("qdgjkk");
    qdgjk.style.color = "black";
    qdgjk.style.borderColor = "black";
}

/*前端工具*/
/*鼠标点击变色*/ 
  function add2()
{
    //前端工具复选框
    //获取前端工具复选框选中状态
    var qdgjcheck = document.getElementById("qdgjbb");
    var qdgjo = document.getElementById("qdgjbox");
    var qdgjk = document.getElementById("qdgjkk");
    var arrowk = document.getElementById("arrow");
    var qdsjo = document.getElementById("qidtime");
    var qdsjk = document.getElementById("qdsjkk");
    if(qdgjcheck.checked){
      qdgjo.style.display = "block";
      qdgjk.style.color = "#49c5b6";
      qdgjk.style.borderColor = "#49c5b6";
      arrowk.style.transform = "rotateX(180deg)";
      if(qdsjo.style.display="block"){
        qdsjo.style.display = "none";
        qdsjk.style.color = "black";
        qdsjk.style.borderColor = "black";
      }
    }
    else{
      qdgjo.style.display = "none";
      qdgjk.style.color = "black";
      qdgjk.style.borderColor = "black";
      arrowk.style.transform = "rotateX(0deg)"; 
    }
}
/*鼠标第二次点击前端工具隐藏下框并恢复黑色*/
  function ad22(){
    var qdgjo = document.getElementById("qdgjbox");
    qdgjo.style.display = "none";
    var qdgjk = document.getElementById("qdgjkk");
    qdgjk.style.color = "black";
    qdgjk.style.borderColor = "black";
    var arrowk = document.getElementById("arrow");
    arrowk.style.transform = "rotateX(0deg)"; 
}
/*鼠标移走选择区域恢复原状*/
  function add1()
{
    var qdgjo = document.getElementById("qdgjbox");
    qdgjo.style.display = "none";
    var qdgjk = document.getElementById("qdgjkk");
    qdgjk.style.color = "black";
    qdgjk.style.borderColor = "black";
    var arrowk = document.getElementById("arrow");
    arrowk.style.transform = "rotateX(0deg)"; 
}
/*前端工具鼠标移入移走变色*/
   function ad2()
{
    var qdgjk = document.getElementById("qdgjkk");
    qdgjk.style.color = "#49c5b6";
    qdgjk.style.borderColor = "#49c5b6";
    var qdsjk = document.getElementById("qdsjkk");
    qdsjk.style.color = "black";
    qdsjk.style.borderColor = "black";
}

/*四个动态点击爱心事件*/ 
  function aixin4()
{
    var aixin = document.getElementById("aixin44");
    aixin.style.color = "#f87d7d";
    var shuzi = document.getElementById("sz4");
    shuzi.innerHTML = "05";
}
  function aixin44()
{
    var aixin = document.getElementById("aixin44");
    aixin.style.color = "#fff";
    var shuzi = document.getElementById("sz4");
    shuzi.innerHTML = "04";
    alert("你已取消喜欢!");
    history.go(0); 
}
  function aixin3()
{
    var aixin = document.getElementById("aixin33");
    aixin.style.color = "#f87d7d";
    var shuzi = document.getElementById("sz3");
    shuzi.innerHTML = "05";
}
  function aixin33()
{
    var aixin = document.getElementById("aixin33");
    aixin.style.color = "#fff";
    var shuzi = document.getElementById("sz3");
    shuzi.innerHTML = "04";
    alert("你已取消喜欢!");
    history.go(0); 
}
  function aixin2()
{
    var aixin = document.getElementById("aixin22");
    aixin.style.color = "#f87d7d";
    var shuzi = document.getElementById("sz2");
    shuzi.innerHTML = "05";
}
  function aixin22()
{
    var aixin = document.getElementById("aixin22");
    aixin.style.color = "#fff";
    var shuzi = document.getElementById("sz2");
    shuzi.innerHTML = "04";
    alert("你已取消喜欢!");
    history.go(0); 
}
  function aixin1()
{
    var aixin = document.getElementById("aixin11");
    aixin.style.color = "#f87d7d";
    var shuzi = document.getElementById("sz1");
    shuzi.innerHTML = "05";
}
  function aixin11()
{
    var aixin = document.getElementById("aixin11");
    aixin.style.color = "#fff";
    var shuzi = document.getElementById("sz1");
    shuzi.innerHTML = "04";
    alert("你已取消喜欢!");
    history.go(0); 
}
/*四个动态点击收集事件*/
  function sj4()
{
    var sj4 = document.getElementById("shouji44");
    sj4.innerHTML = "已收集";
}
  function sj44()
{
    var sj44 = document.getElementById("shouji44");
    sj44.innerHTML = "收集";
    alert("你已取消收集!");
    history.go(0); 
}
  function sj3()
{
    var sj3 = document.getElementById("shouji33");
    sj3.innerHTML = "已收集";
}
  function sj33()
{
    var sj33 = document.getElementById("shouji33");
    sj33.innerHTML = "收集";
    alert("你已取消收集!");
    history.go(0); 
}
  function sj2()
{
    var sj2 = document.getElementById("shouji22");
    sj2.innerHTML = "已收集";
}
  function sj22()
{
    var sj22 = document.getElementById("shouji22");
    sj22.innerHTML = "收集";
    alert("你已取消收集!");
    history.go(0); 
}
  function sj1()
{
    var sj1 = document.getElementById("shouji11");
    sj1.innerHTML = "已收集";
}
  function sj11()
{
    var sj11 = document.getElementById("shouji11");
    sj11.innerHTML = "收集";
    alert("你已取消收集!");
    history.go(0); 
}
/*四个动态点击返回事件*/
  function retur4()
{
    var retur44 = confirm("是否分享?");
    if (retur44==true) {
      alert("分享成功!");
    }
}
/*四个动态点击投票事件*/
  function tp4()
{
  alert("你已投票成功!");
}
  function tp44()
{
  alert("你已经进行投票,请勿重复投票!");
  history.go(0);
}

