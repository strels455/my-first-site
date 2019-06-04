//comment
var budget = prompt( "Ваш бюджет?","");
var nameshop = prompt('Какое название Вашего магазина?','');

	alert('У магазина '+ nameshop +' бюджет '+budget+' грн '); 

var MainList={};
var employers={};
var shopGoods=[];

	shopGoods[0] = prompt("Какой тип товаров будем продавать?","");
	shopGoods[1] = prompt("Какой тип товаров будем продавать?","");
	shopGoods[2] = prompt("Какой тип товаров будем продавать?","");

	alert(shopGoods);

		MainList.buget = budget;
		MainList.nameshop = nameshop;
		MainList.shopGoods = shopGoods;
		MainList.employers = employers;
		MainList.open = true;


console.log(MainList);

var budgetDay = (budget/30);
	alert(budgetDay); 