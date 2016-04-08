<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>增删列表</title>
	<script type="text/javascript">
		var i=0;
		function addList()
		{
			var para=document.createElement("li");//这段代码创建新的<li>元素
			var node=document.createTextNode(document.getElementsByName("name")[0].value);//如需向<li>元素添加文本，必须首先创建文本节点。这段代码创建了一个文本节点
			para.appendChild(node);//向<li>元素追加了这个文本节点

			//最后必须向一个已有的元素追加这个新元素
			var element=document.getElementById("l");//这段代码找到一个已有的元素
			element.appendChild(para);//这段代码向这个已有的元素追加新元素

			setId();//调用设置id的函数

			var para=document.createElement("button");//创建一个按钮
			var node=document.createTextNode("删除");//按钮文字显为删除
			para.appendChild(node);

			var element=document.getElementById("l"+(i-1));
			element.appendChild(para);	
		}

		//函数功能是给li设置一个id
		function setId(){
			var dlall=document.getElementsByTagName('li');
			dlall[i].id='l'+i;
			i++;
		}

	//function deleteList(){

		//}
		
	</script>

	<style type="text/css">

		#plus{
			padding:0px;margin:0px;
			border:0px;
			width: 25px;height: 25px;
			background: url(plus.gif) no-repeat center;
			background-size: 25px;
		}
		ul{
			margin:8px 0 8px;
			padding:20px;
			width:150px;
			border:3px solid red;
		}
		input{padding:0px;}
	</style>
</head>
<body>
	<ul id="l">
		
	</ul>
	<input type="text" name="name" value="姓名"></input>
	<button id="plus" onclick="addList()">添加</button>
</body>
</html>
