///////////////////////////////////////////////////////////////////////////////
// Main Class File:   main.js
// File:              accordian.js
//
// Author:           Vanessa Knoppke-Wetzel
//
// Description:     An accordian-type menu
//                   
// Credits:         code adapted and simplified from Chris Coyier's CSS 
//                  Tricks Tutorial. Thank you!!!
//                  http://css-tricks.com/grid-accordion-with-jquery
//////////////////////////// 80 columns wide //////////////////////////////////

$(function() {

    // Set up variables
    var $el, $parentWrap, $otherWrap, 
        $allTitles = $("dt").css({
            padding: 5, // setting the padding here prevents a weird situation, where it would start animating at 0 padding instead of 5
            "cursor": "pointer" // make it seem clickable
        }),
        $allCells = $("dd").css({
           position: "relative",
           top: -1,
            left: -40,
            display: "none" // info cells are just kicked off the page with CSS (for accessibility)
        });
    
    // clicking image of inactive column just opens column, doesn't go to link   
    $("#accordion").delegate("a.image","click", function(e) { 
        
        if ( !$(this).parent().hasClass("curCol") ) {         
            e.preventDefault(); 
            $(this).next().find('dt:first').click(); 
        } 
        
    });
    
    // clicking on titles does stuff
    $("#accordion").delegate("dt", "click", function() {
        
        // cache this, as always, is good form
        $el = $(this);
        
        // if this is already the active cell, don't do anything
        if (!$el.hasClass("current")) {
        
            $parentWrap = $el.parent().parent();
            $otherWraps = $(".info-col").not($parentWrap);
            
            // remove current cell from selection of all cells
            $allTitles = $("dt").not(this);
            
            // close all info cells
            $allCells.slideUp();
            
            // return all titles (except current one) to normal size
            $allTitles.animate({
                fontSize: "14px",
                paddingTop: 5,
                paddingRight: 0, //40
                paddingBottom: 10,
                paddingLeft: 16
            });
            
            // animate current title to larger size            
            $el.animate({
                "font-size": "20px",
                paddingTop: 5,
                paddingRight: 0,
                paddingBottom: 5,
                paddingLeft: 15
            }).next().slideDown();
            
            // make the current column the large size
            $parentWrap.animate({
                //width: 320
				//width: 400
            }).addClass("curCol");
            
            // make other columns the small size
            $otherWraps.animate({
                //width: 140
				//width: 400
				//width: 380
            }).removeClass("curCol");
            
            // make sure the correct column is current
            $allTitles.removeClass("current");
            $el.addClass("current");  
        
        }
        
    });
    
    $("#starter").trigger("click");
    

});

function onClickMenu(Index, usa){
	
	var hex = "CC7722"; //orange

	var hexTwo = "6889cb";//blue
	
	var chosen = document.getElementById("marriage");
	(chosen).onclick=function(){
		$('#hex').empty()
		$('#hex2').empty()
		$('#hex3').empty()
		$('#hex4').empty()
		$('#hex5').empty()
		$('#hex6').empty()
		$('#hexL').empty()
		$('#noDataL').empty()
		$('#noData1').empty()
		
		indexSelected = indexArray[5];
		index = Index[indexSelected];
		//setMap(usa, index);
		var number = 7;
		hexCreation(hex, hexTwo, number);
		//$('#marriageL').html(indexSelected).css('font-weight','bold');
		
		updateIndex();
	};
	
	var chosen = document.getElementById("housing");
	(chosen).onclick=function(){
		$('#hex').empty()
		$('#hex2').empty()
		$('#hex3').empty()
		$('#hex4').empty()
		$('#hex5').empty()
		$('#hex6').empty()
		$('#hexL').empty()
		$('#noData3').empty()
		$('#noDataL').empty()

	indexSelected = indexArray[4];
	index = Index[indexSelected];
		
		var number = 2;
		hexCreation(hex, hexTwo, number);
//	$('#housingL').html(indexSelected).css('font-weight','bold');		
		updateIndex();
		updateLegend(indexSelected);
	};
	
	var chosen = document.getElementById("adoption");
	(chosen).onclick=function(){
		$('#hex').empty()
		$('#hex2').empty()
		$('#hex3').empty()
		$('#hex4').empty()
		$('#hex5').empty()	
		$('#hex6').empty()
		$('#hexL').empty()
		$('#noData2').empty()
		$('#noDataL').empty()
		
		
	indexSelected = indexArray[0];
	index = Index[indexSelected];
		var number = 4;
		hexCreation(hex, hexTwo, number);
		
		//setMap(usa, index);
		updateIndex();
			updateLegend(indexSelected);
	};
	
	var chosen = document.getElementById("hate_crimes");
	(chosen).onclick=function(){
		$('#hex').empty()
		$('#hex2').empty()
		$('#hex3').empty()
		$('#hex4').empty()
		$('#hex5').empty()
		$('#hex6').empty()
		$('#hexL').empty()
		$('#noData4').empty()
		$('#noDataL').empty()
	indexSelected = indexArray[2];
	index = Index[indexSelected];
		//setMap(usa, index);
		
		var number = 4;
		hexCreation(hex, hexTwo, number);
		updateIndex();
			updateLegend(indexSelected);
	};
	
	var chosen = document.getElementById("hospital");
	chosen.onclick=function(){
		$('#hex').empty()
		$('#hex2').empty()
		$('#hex3').empty()
		$('#hex4').empty()
		$('#hex5').empty()
		$('#hex6').empty()
		$('#hexL').empty()
		$('#noData5').empty()
		$('#noDataL').empty()
		
		
	indexSelected = indexArray[3];
	index = Index[indexSelected];
		//setMap(usa, index);
		var number = 3;
		hexCreation(hex, hexTwo, number);
		
		updateIndex();
			updateLegend(indexSelected);
	};
	
	var chosen = document.getElementById("employment");
	(chosen).onclick=function(){
		
		$('#hex').empty()
		$('#hex2').empty()
		$('#hex3').empty()
		$('#hex4').empty()
		$('#hex5').empty()
		$('#hex6').empty()
		$('#hexL').empty()
		$('#noData6').empty()
		$('#noDataL').empty()
		

	indexSelected = indexArray[1];
	index = Index[indexSelected];
	var number = 2;
	hexCreation(hex, hexTwo, number);
	updateIndex();
		updateLegend(indexSelected);
	};
}

function updateIndex(){
	d3.selectAll(".states")
		.style("fill", function(d) { 
			return colorMap(Index, d.properties.ST, year) 
	});	
	d3.select(".chart").remove();
	d3.select(".matrix").remove();
	createGrid(Index);
	createChart(Index);
}
