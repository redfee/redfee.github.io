


jQuery('document').ready(function() 
{
	
	var i=0;
	var n=["#35c61b","#0ad8d5","#1806e0","red","#ede917","#18d60a","#d60a2f","#000000","#ffffff","#c720d6"];
	
		var array=[2];
		array[0].scr='h.jpg';
	

	//jQuery('body').append('<a href="http://google.com">Google</a>');
	/*jQuery('#b1').on('click', function()
	{
		var n=["#35c61b","#0ad8d5","#1806e0","#ef0e07","#ede917","#18d60a","#d60a2f","#000000","#ffffff","#c720d6"];
		
		
			document.body.style.background=n[i];
			i++;
			if(i>n.length-1)
			{
				i=0;
			}
		
	});*/


	$('#b1').mouseover(function()
		{
			$('body').append('<div id="al" class="alert alert-success" role="alert">Кликните чтобы сменить фоновое изображение!</div>');
		});
	$('#b1').mouseout(function()
		{
			$('#al').remove();
		});
	
	jQuery('#b1').on('click',function(event)
		{	
			
			$('body').append('<div id="d1"></div>');
			$('#d1').append('<button id="b2"></button>');
			$('#d1').append('<button id="b3"></button>');
			$('#d1').append('<button id="b4"></button>');
			$('#d1').hide();
			$('#d1').slideDown('slow');
			

	jQuery('#b2').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf1.jpg')";
		});
	
	jQuery('#b2').on('click',function()
	{
		var bg="url('im/zf1.jpg')"
		
		document.body.style.backgroundImage =bg;
		localStorage.setItem("bg1","url('im/zf1.jpg')");

		setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
		
	});	
	//-------------------------------------------------------------------------------------------------
	jQuery('#b3').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf2.jpg')";
		});
	
	jQuery('#b3').on('click',function()
	{
		
		document.body.style.backgroundImage="url('im/zf2.jpg')";
		localStorage.setItem("bg1","url('im/zf2.jpg')");

		setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
	});
	//-------------------------------------------------------------------------------------------------
	jQuery('#b4').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf3.gif')";
		});
	
	jQuery('#b4').on('click',function()
	{
		
		document.body.style.backgroundImage ="url('im/zf3.gif')";
		localStorage.setItem("bg1","url('im/zf3.gif')");
		
		setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
	});
	//-------------------------------------------------------------------------------------------------
	jQuery('#b5').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf4.jpg')";
		});
	
	jQuery('#b5').on('click',function()
	{
		
		document.body.style.backgroundImage ="url('im/zf4.jpg')";
		localStorage.setItem("bg1","url('im/zf4.jpg')");

		setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		
		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
	});
	//-------------------------------------------------------------------------------------------------
	jQuery('#b6').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf5.jpg')";
		});
	
	jQuery('#b6').on('click',function()
	{
		
		document.body.style.backgroundImage ="url('im/zf5.jpg')";
		localStorage.setItem("bg1","url('im/zf5.jpg')");
		setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
	});
	//-------------------------------------------------------------------------------------------------
	jQuery('#b7').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf6.jpg')";
		});
	
	jQuery('#b7').on('click',function()
	{
		
		document.body.style.backgroundImage ="url('im/zf6.jpg')";
		localStorage.setItem("bg1","url('im/zf6.jpg')");

		setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
	});
	//-------------------------------------------------------------------------------------------------
	jQuery('#b8').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf7.jpg')";
		});
	
	jQuery('#b8').on('click',function()
	{
		
		document.body.style.backgroundImage ="url('im/zf7.jpg')";
		localStorage.setItem("bg1","url('im/zf7.jpg')");
		
		setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
	});
	//-------------------------------------------------------------------------------------------------
	jQuery('#b9').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf8.jpg')";
		});
	
	jQuery('#b9').on('click',function()
	{
		
		document.body.style.backgroundImage ="url('im/zf8.jpg')";
		localStorage.setItem("bg1","url('im/zf8.jpg')");
		
		setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
	});
	//-------------------------------------------------------------------------------------------------
	jQuery('#b10').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf9.jpg')";
		});
	
	jQuery('#b10').on('click',function()
	{
		
		document.body.style.backgroundImage ="url('im/zf9.jpg')";
		localStorage.setItem("bg1","url('im/zf9.jpg')");
		
		setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
	});
	//-------------------------------------------------------------------------------------------------
	jQuery('#b11').mouseover(function()
		{
			document.body.style.backgroundImage ="url('im/zf10.jpg')";
		});
	
	jQuery('#b11').on('click',function()
		{
			
			document.body.style.backgroundImage ="url('im/zf10.jpg')";
			localStorage.setItem("bg1","url('im/zf10.jpg')");
			
			setTimeout(function(){
			document.getElementById('b1').style.display = 'block';
		},600);//очередь анимации

		$('#d1').slideUp('slow', function(){
			$('#d1').remove();
		});//анимация
		});
	document.getElementById('b1').style.display = 'none';
	});
	$('#b1').mouseover(function()
	{
		document.getElementById('b1').style.backgroundImage="url('im/b1pov.jpg')"
	});
	$('#b1').mouseout(function()
	{
		document.getElementById('b1').style.backgroundImage="url('im/b1.jpg')"
	});

	if (localStorage.getItem('bg1')!==null)
	{
		
		var bgcolor=localStorage.getItem('bg1');
		document.getElementsByTagName('body')[0].style.backgroundImage =bgcolor;
	}	
});
