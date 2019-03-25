$(function () {
	$('.left>p').on('click',function () {
		$('.r_bottom').html('')
		var data_name=$(this).attr('data_name')
		$.get('js/package.json',function (data) {
			var _data=eval(data)
			$.each(_data,function (i) {
				var oList=_data[i].list;
				var _name=_data[i].name;
				var _img=_data[i].img;
				if (data_name==_name) {
				$('#img').attr('src',_img)		
				$.each(oList,function (i) {
					$("<li>"+"<p>"+oList[i].geming+"</p>"+
					"<p>"+oList[i].geshou+"</p>"+
					"<p>"+oList[i].chuchu+"</p>"+"</li>").appendTo(".r_bottom")
				})
		      }
			  if(data_name=='shitingliebiao'){
				  $('.r_bottom').html('莫得数据')
			  }
			})
		})
	})
})





