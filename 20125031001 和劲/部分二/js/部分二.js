/*页面加载时首先执行函数*/
  window.onload = function (todo){
      var todos = Array.from(todoList.children).map(li => {
    return {
      completed: li.firstElementChild.checked,
      content: li.firstElementChild.nextElementSibling.textContent,
    }
  })
    console.log(todos)
    /*将todos转换成字符串进行储存*/
      localStorage.todos = JSON.stringify(todos);

/*first打开页面第一项*/
    var lione = document.getElementById("lione");
    var checkboxone = document.getElementById("cone");
    checkboxone.type = 'checkbox'
    checkboxone.checked = todo.completed;
/*默认选中*/
    checkboxone.checked=  true;
    lione.classList.add('completed');
    lione.style.cssText = "decoration: line-through";
      setSelectAllAndLeftCountAndClearBtn()
      checkboxone.onchange = e => {
    if (checkboxone.checked) {
      lione.classList.add('completed');
      lione.style.cssText = "decoration: line-through";

    } else {
      lione.classList.remove('completed');
      lione.style.cssText = "decoration: none";
    }
     setSelectAllAndLeftCountAndClearBtn()
  }

/*second*/
    var litwo = document.getElementById("litwo");
    var checkboxtwo = document.getElementById("ctwo");
    checkboxtwo.type = 'checkbox'
    checkboxtwo.checked = todo.completed;
/*默认选中*/
    checkboxtwo.checked=  true;
    litwo.classList.add('completed');
    litwo.style.cssText = "decoration: line-through";
      setSelectAllAndLeftCountAndClearBtn()
      checkboxtwo.onchange = e => {
    if (checkboxtwo.checked) {
      litwo.classList.add('completed');
      litwo.style.cssText = "decoration: line-through";
    } else {
      litwo.classList.remove('completed');
      litwo.style.cssText = "decoration: none";
    }
    setSelectAllAndLeftCountAndClearBtn()
  }


/*three*/
    var lithree = document.getElementById("lithree");
    var checkboxthree = document.getElementById("cthree");
    checkboxthree.type = 'checkbox'
    checkboxthree.checked = todo.completed;
      checkboxthree.onchange = e => {
    if (checkboxthree.checked) {
      lithree.classList.add('completed');
      lithree.style.cssText = "decoration: line-through";

    } else {
      lithree.classList.remove('completed');
      lithree.style.cssText = "decoration: none";
    }
    setSelectAllAndLeftCountAndClearBtn()
  }

/*four*/
    var lifour = document.getElementById("lifour");
    var checkboxfour = document.getElementById("cfour");
    checkboxfour.type = 'checkbox'
    checkboxfour.checked = todo.completed;
      checkboxfour.onchange = e => {
    if (checkboxfour.checked) {
      lifour.classList.add('completed');
      lifour.style.cssText = "decoration: line-through";

    } else {
      lifour.classList.remove('completed');
      lifour.style.cssText = "decoration: none";
    }
    setSelectAllAndLeftCountAndClearBtn()
  }

/*five*/
    var lifive = document.getElementById("lifive");
    var checkboxfive = document.getElementById("cfive");
    checkboxfive.type = 'checkbox'
    checkboxfive.checked = todo.completed;
      checkboxfive.onchange = e => {
    if (checkboxfive.checked) {
      lifive.classList.add('completed');
      lifive.style.cssText = "decoration: line-through";

    } else {
      lifive.classList.remove('completed');
      lifive.style.cssText = "decoration: none";
    }
    setSelectAllAndLeftCountAndClearBtn()
  }      
}

/*点击删除事项事件*/
  function add1(){
    var lione = document.getElementById("lione");
/*用lione的父节点即ul删除lione自身*/
    lione.parentNode.removeChild(lione);
    setSelectAllAndLeftCountAndClearBtn();
}
  function add2(){
    var litwo = document.getElementById("litwo");
    litwo.parentNode.removeChild(litwo);
    setSelectAllAndLeftCountAndClearBtn();
}
  function add3(){
    var lithree = document.getElementById("lithree");
    lithree.parentNode.removeChild(lithree);
    setSelectAllAndLeftCountAndClearBtn();
}
  function add4(){
    var lifour = document.getElementById("lifour");
    lifour.parentNode.removeChild(lifour);
    setSelectAllAndLeftCountAndClearBtn();
}
  function add5(){
    var lifive = document.getElementById("lifive");
    lifive.parentNode.removeChild(lifive);
    setSelectAllAndLeftCountAndClearBtn();
}

/*获取id,类名等的首元素并返回静态变量*/
    var toggleAllInput = document.querySelector('#toggle-select-all');
    var todoInput = document.querySelector('#todo-input');
    var todoList = document.querySelector('#todo-list');
    var stateWrap = document.querySelector('.state');
    var leftCount = document.querySelector('.left-count');
    var clearCompletedBtn = document.querySelector('#clear-completed');
    var categorySelect = document.querySelector('#category-select');
/*设置断点进行调试*/
/*这里用e代表的是点击选择all active complete时的事件event对象*/
    categorySelect.onclick = e => {
      if (e.target.matches('input')) {
        debugger
        console.log(e)
/*删除原先类名再添加目前选中的类名*/
        todoList.classList.remove('all', 'active', 'completed')
        todoList.classList.add(e.target.value)
      }
}


/*关联已完成与未完成的条目，同步更新全选按钮、底部待办事项计数器*/
    function setSelectAllAndLeftCountAndClearBtn() {
      var actives = todoList.querySelectorAll('input:first-child:not(:checked)')
      var completeds = todoList.querySelectorAll('input:first-child:checked')
      if (actives.length) {
        toggleAllInput.checked = false;
      } else {
        toggleAllInput.checked = true;
      }
      if (actives.length==1){
        leftCount.textContent = "1 item left" 
      } else{
      leftCount.textContent = actives.length + " items left"
      }
      if (completeds.length) {
        clearCompletedBtn.style.display = 'inline-block';
      } else {
        clearCompletedBtn.style.display = 'none';
      }
  }

/*全选按钮*/
    toggleAllInput.onclick = e => {
      var completeds = todoList.querySelectorAll('li.completed')
      if (completeds.length == todoList.children.length) {
/*将todoList的子元素类数组转化成数组并遍历数组中的元素*/
/*如果已完成事件元素长度=所有事件长度,则点击完成事件会导致不全选已完成事件*/
/*it代表todoList的所有节点的集合*/
        Array.from(todoList.children).forEach(it => {
          it.classList.remove('completed')
          it.firstElementChild.checked = false;
        })
/*如果已完成事件元素长度!==所有事件长度,则点击所有未完成事件会全选已完成事件*/
      } else {
        Array.from(todoList.children).forEach(it => {
          it.classList.add('completed')
          it.firstElementChild.checked = true;
        })
      }
      setSelectAllAndLeftCountAndClearBtn()
      save()
    }
/*在输入框输入后松开按键时执行事件e*/
    todoInput.onkeyup = function (e) {
// console.log(e)
// var todo = this.value

/*添加待办事项以及编辑待办事项*/
    function addTodo(todo) {
      var todoText = todo.content;
/*用trim函数去除首尾空格判断是否为空文本*/
      if (todoText.trim() !== '') { 
        this.value = ''
/*创建li元素节点*/
        var li = document.createElement('li')
/*给新建的清单表项加样式，是todo-item的CSS的样式*/
        li.classList.add('todo-item') 
        todo.completed && li.classList.add('completed')
/*创建选择框*/
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.checked = todo.completed;
        checkbox.onchange = e => {
          if (checkbox.checked) {
            li.classList.add('completed')
          } else {
            li.classList.remove('completed')
          }
          setSelectAllAndLeftCountAndClearBtn()
          save()
        }
/*创建span元素节点*/
        var span = document.createElement('span');
/*获得添加的待办事项的文本内容*/
        span.textContent = todoText
        span.style.position = "relative";
        span.style.top = "2px";
/*使用ondblclick双击事件,降低误触编辑事件的概率*/
        li.ondblclick = e => {
          li.classList.add('editing')
/*为编辑文本域设置焦点*/
          setTimeout(() => {
            editBox.focus()
          })
        }

        var editBox = document.createElement('input');
        editBox.type = 'text'
/*匹配在添加待办事项时输入的文本*/
        editBox.value = todoText 
        editBox.onkeyup = e => {
          if (e.key == 'Enter') {
            span.textContent = editBox.value
            li.classList.remove('editing')
            save()
            if (editBox.value.trim() == '') {
              li.parentNode.removeChild(li);
              li.classList.remove('editing')
              save() 
              setSelectAllAndLeftCountAndClearBtn()
            }
          }
        }

        editBox.onkeydown = e => {
          if (e.key == 'Escape') {
            span.textContent = editBox.value
            li.classList.remove('editing')
            save()
          } 
        }

/*当编辑框失去焦点时删除editing类名*/
        editBox.onblur = e => {
          span.textContent = editBox.value
          li.classList.remove('editing')
          save()
        }

/*添加删除事项按钮*/
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
/*删除条目*/
        deleteBtn.onclick = e => {
          todoList.removeChild(li)
          setSelectAllAndLeftCountAndClearBtn()
          if (todoList.children.length == 0) {
            stateWrap.style.display = 'none'
          }
          save()
        }

        li.append(checkbox, span, editBox, deleteBtn)
        todoList.append(li)
        stateWrap.style.display = 'block'
        setSelectAllAndLeftCountAndClearBtn()
      }
    }
/*创建save函数用来保存添加或编辑修改的待办事项*/
/*用map函数遍历li数组中的元素并返回li元素更新后的值*/
    function save() {
      var todos = Array.from(todoList.children).map(li => {
        return {
          completed: li.firstElementChild.checked,
          content: li.firstElementChild.nextElementSibling.textContent,
        }
      })
      console.log(todos)
/*将todos转换成字符串进行储存*/
      localStorage.todos = JSON.stringify(todos)
    }

/*按回车添加待办事项*/
      if (e.key == "Enter") {
        addTodo({
          content: e.target.value.trim(),
          completed: false,
        })
        e.target.value = ''
        save()
      }
}

/*清除所有已完成事项,同时隐藏该按钮和下面栏目*/
    clearCompletedBtn.onclick = e => {
      var tobeDeleted = document.querySelectorAll('.completed')
      // var threebbb = document.getElementById("thirdbut");
      tobeDeleted.forEach(it => {
        todoList.removeChild(it)
      })
      clearCompletedBtn.style.display = 'none';
      var actives = todoList.querySelectorAll('input:first-child:not(:checked)')
      var completeds = todoList.querySelectorAll('input:first-child:checked')
      if (actives.length) {
        toggleAllInput.checked = false;
        categorySelect.style.display = "inline-block";

      } 
      else {
         toggleAllInput.checked = true;
      }
      if (actives.length==false&&completeds.length==false) {
        toggleAllInput.checked = false;
        stateWrap.style.display = "none";
      }
      if (actives.length==1){
        leftCount.textContent = "1 item left" 
      } 
      else{
      leftCount.textContent = actives.length + " items left"
      }
      if (completeds.length) {
        clearCompletedBtn.style.display = 'inline-block';
      } 
      else {
        clearCompletedBtn.style.display = 'none';
      }
      var threebbb = document.getElementById("thirdbut");
      if (threebbb.checked==true&&completeds.length==true) {

       }
      // if(threebbb.checked==true){
      //   stateWrap.style.display = "none";
      //   toggleAllInput.checked = false;
      // }
   }
// /*用JSON.parse()方法将localStorage.todos转化成JS对象*/
//     var todos = JSON.parse(localStorage.todos) || []
// /*遍历todos数组*/
//     // todos.forEach(todo => {
//     //   addTodo(todo)
//     // })


/*接口*/
  // var str = '{"Data":"Uncomplete":"Data":"\u7b2c\u4e09\u8f6e\u8003\u6838","\u6210\u4e3a\u7f51\u56ed\u4e00\u4efd\u5b50","\u52aa\u529b\u5b66\u4e60","Length":3,"Complete":"Data":"\u5927\u4e00\u4e0a\u5b66\u671f","\u9ad8\u4e2d\u4e09\u5e74","Length":2}';
  // var str = '{"Data":[{"Uncomplete":[{"Data":["\u7b2c\u4e09\u8f6e\u8003\u6838","\u6210\u4e3a\u7f51\u56ed\u4e00\u4efd\u5b50","\u52aa\u529b\u5b66\u4e60"],"Length":3}],"Complete":[{"Data":["\u5927\u4e00\u4e0a\u5b66\u671f","\u9ad8\u4e2d\u4e09\u5e74"],"Length":2}]}]}';
  // var obj = JSON.parse(str);
  // console.log(obj);

/*接入数据*/
// XMLHttpRequest对象用于在后台与服务器交换数据
    // var xhr = new XMLHttpRequest();            
    // xhr.open('GET', 'http://test.zzkweb.online/api/', true);
    // xhr.onreadystatechange = function() {
    // // readyState == 4说明请求已完成
    //   if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
    //   // 从服务器获得数据 
    //     console.log(xhr.responseText)
    //   }
    // };
    // xhr.send();


//jiegou
    var xhr = new XMLHttpRequest();            
    xhr.open('GET', 'http://192.168.10.175/Test', true);
    xhr.onreadystatechange = function() {
    // readyState == 4说明请求已完成
      if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
      // 从服务器获得数据 
        console.log(xhr.responseText)
      }
    };
    xhr.send();