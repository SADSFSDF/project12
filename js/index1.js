$(function(){
	 var getUrlParam = function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return unescape(r[2]); return null;
    }; 
    var current= (getUrlParam('curr'))
    if(current!=null){
    	$(".navScroll").each(function(){
			$(this).hide();
		})
		$(".navScroll").eq(current).show();
		$(".navlist").each(function(){
			$(this).removeClass("navactive")
		})
		$(".navlist").eq(current).addClass("navactive");
    }

	//tab
	$(".navlist").on("click",function(){
		if(!$(this).hasClass("navactive")){
			$(".navScroll").each(function(){
				$(this).hide();
			})
			$(".navScroll").eq($(this).attr("attrs")-1).show();
			$(".navlist").each(function(){
				$(this).removeClass("navactive")
			})
			$(this).addClass("navactive");
		};

	})

	//tab2
	$.Huitab("#tab_demo .tabBar span","#tab_demo .tabCon","current","click","1");

	//charts
	// 基于准备好的dom，初始化echarts实例
	$(".hui_chartContainer").width($(window).width()-40);
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
        	grid:{
                  left:15,
                  top:15,
                  right:5,
                  bottom:25
	       },
            xAxis: {
                data: ["4/10","4/11","4/12","4/13","4/14","4/15","4/16"],
          		axisLine: {
			        lineStyle: {
			            color: 'rgba(230,230,230,1)'
			        }
			    },
			    axisLabel: {
	                textStyle: {
	                  color:'#969696'
	                }
	              }
            },
            yAxis: {
            	axisLine: {
			        lineStyle: {
			            color: 'rgba(230,230,230,1)'
			        }
			    },
			    axisLabel: {
	                textStyle: {
	                  color:'#969696'
	                }
	              }
            },
            series: [{
                name: '销量',
                type: 'bar',
                barWidth:20,
                data: [4, 8, 6, 4, 6, 5 ,10],
				itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(250,204,34,0.4)'},   
                        {offset: 1, color: 'rgba(248,54,0,0.4)'}
                    ]
                 )}}
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


        //跳转
        $(".cfgl").on("click",function(){
        	window.location.href="index2.html";
        });
        $(".fxzq").on("click",function(){
            window.location.href="index4.html";
        });
        $(".xsContainer").on("click",function(){
            window.location.href="index11.html";
        });
        $(".payC1").on("click",function(){
            window.location.href="index7.html";
        });
        $(".payC2").on("click",function(){
            window.location.href="index10.html";
        });
        $(".tdgl").on("click",function(){
            window.location.href="index17.html";
        });
        $(".ywgl").on("click",function(){
            window.location.href="index14.html";
        });
        $(".gnsz").on("click",function(){
            window.location.href="index19.html";
        });
        $(".jlgl").on("click",function(){
            window.location.href="index13.html";
        });
        $(".mbsz").on("click",function(){
            window.location.href="index9.html";
        });
        


        // 弹出框
        $(".click1").click(function(){
        	$(".hui_pop_box1").show();
        })
        $(".hui_pop_submit").on("click",function(){
        	$(".hui_pop_box1").hide();
        })

         $(".click2").click(function(){
        	$(".hui_pop_box2").show();
        })
        $(".hui_pop_submit2").on("click",function(){
        	$(".hui_pop_box2").hide();
        })
})