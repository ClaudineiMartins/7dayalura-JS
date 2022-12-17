const itemName = document.getElementById('itemName');
const itemSector = document.getElementById('itemSector');
const listaCompras = document.getElementById('listaCompras');
let shoppingList = [];
let sectors = [];

function handleAdd(){
	makeItem(itemName.value,itemSector.value);
	// itemName.value =''; 
	// itemSector.value = '';
	printItems();
}

function makeItem(nome,setor){
	let item = {
		name: nome,
		sector: setor
	}
	shoppingList.push(item);
	addSector(item.sector);
}

function addSector(sec){
	if (sectors.includes(sec) == false){
		sectors.push(sec);
	}
}

function printItems(){
	listaCompras.innerHTML = '';
	// para cada setor, cria a div e o título do setor;
	for (let i=0; i<=sectors.length; i++){
		let sectorDiv = document.createElement('div');
		sectorDiv.id = sectors[i];
		sectorDiv.innerHTML = `<h2>${sectors[i]}</h2>`;
		listaCompras.appendChild(sectorDiv);
		
		// ainda no laço for, para cada item na lista que seja daquele setor, insere o checkbox e label do item
		shoppingList.filter((element) => {
			if (element.sector == sectors[i]){

				let listItem = document.createElement('input');
				listItem.type='checkbox';
				listItem.id=`${element.name}`;
				listItem.value=`${element.name}`;
				let listLabel = document.createElement('label');
				listLabel.setAttribute('for',element.name);
				listLabel.innerHTML = `${element.name}`;
				let itemLocation = document.getElementById(element.sector);
				itemLocation.appendChild(listItem);
				itemLocation.appendChild(listLabel);
			};
		})
	}
}
