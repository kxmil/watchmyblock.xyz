function typing(el, string){
  for (let i = 1; i < string.length; i++){
    setTimeout( function(){
      string = string.toLowerCase();
      el.textContent = string.substr(0, i + 1)
    }, i*50)
  }
}

const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch('https://api.opensea.io/api/v1/assets', options)
  .then(response => response.json())
  .then(function(response) {
    var contract_address = document.querySelector('#contract_address'),
    contract_type = document.querySelector('#contract_type'),
    schema_name = document.querySelector('#schema_name'),
    created_date = document.querySelector('#created_date'),
    creator_address = document.querySelector('#creator_address'),
    dev_seller_fee_basis_points = document.querySelector('#dev_seller_fee_basis_points'),
    owner_address = document.querySelector('#owner_address'),
    name = document.querySelector('#name'),
    block_id = document.querySelector('#block_id'),
    token_id = document.querySelector('#token_id'),
    random = Math.floor(Math.random() * 20);

    setTimeout(function(){

      typing(contract_address, "??????????????")
      typing(contract_type, "??????????????")
      typing(schema_name, "??????????????")
      typing(created_date, "??????????????")
      typing(creator_address  , "??????????????")
      typing(dev_seller_fee_basis_points, "??????????????")
      typing(owner_address, "??????????????")
      typing(document.querySelector('#name'), "??????????????")
      typing(block_id, "??????????????")
      typing(token_id, "??????????????")

      setTimeout( function() {
        typing(contract_address, response.assets[random].asset_contract.address.substring(0, 26) + "...")
      }, 500)

      setTimeout( function(){
        typing(contract_type, response.assets[random].asset_contract.asset_contract_type)
      }, 1500);

      setTimeout( function(){
        typing(schema_name, response.assets[random].asset_contract.schema_name)
      }, 2000);

      setTimeout( function(){
        typing(created_date, response.assets[random].asset_contract.created_date)
      }, 2500);

      setTimeout( function(){
        typing(creator_address, response.assets[random].creator.address.substring(0, 26) + "...")
      }, 3000);

      setTimeout( function(){
        typing(dev_seller_fee_basis_points, response.assets[random].asset_contract.dev_seller_fee_basis_points)
      }, 3500);

      setTimeout( function(){
        typing(owner_address, response.assets[random].owner.address.substring(0, 26) + "...")
      }, 4000);

      setTimeout( function(){
        typing(name, response.assets[random].name)
      }, 4500);

      setTimeout( function(){
        typing(block_id, response.assets[random].id.toString().substring(0, 26) + "...")
      }, 5000);

      setTimeout( function(){
        typing(token_id, response.assets[random].token_id.substring(0, 26) + "...")
      }, 5500);

    }, 1000)

    return response
  })
.catch(err => console.error(err));

var button = document.querySelector('button');

button.addEventListener("click", function(){
  block = document.querySelector('iframe');
  block.style.opacity = 0;

  fetch('https://api.opensea.io/api/v1/assets', options)
  .then(response => response.json())
  .then(function(response) {
    var contract_address = document.querySelector('#contract_address'),
    contract_type = document.querySelector('#contract_type'),
    schema_name = document.querySelector('#schema_name'),
    created_date = document.querySelector('#created_date'),
    creator_address = document.querySelector('#creator_address'),
    dev_seller_fee_basis_points = document.querySelector('#dev_seller_fee_basis_points'),
    owner_address = document.querySelector('#owner_address'),
    name = document.querySelector('#name'),
    block_id = document.querySelector('#block_id'),
    token_id = document.querySelector('#token_id'),
    random = Math.floor(Math.random() * 20);

    setTimeout(function(){

      typing(contract_address, "??????????????")
      typing(contract_type, "??????????????")
      typing(schema_name, "??????????????")
      typing(created_date, "??????????????")
      typing(creator_address  , "??????????????")
      typing(dev_seller_fee_basis_points, "??????????????")
      typing(owner_address, "??????????????")
      typing(document.querySelector('#name'), "??????????????")
      typing(block_id, "??????????????")
      typing(token_id, "??????????????")

      setTimeout( function(){
        typing(contract_address, response.assets[random].asset_contract.address.substring(0, 26) + "...")
      }, 1000)

      setTimeout( function(){
        typing(contract_type, response.assets[random].asset_contract.asset_contract_type)
        block.style.opacity = 1;
      }, 1500);

      setTimeout( function(){
        typing(schema_name, response.assets[random].asset_contract.schema_name)
      }, 2000);

      setTimeout( function(){
        typing(created_date, response.assets[random].asset_contract.created_date)
      }, 2500);

      setTimeout( function(){
        typing(creator_address, response.assets[random].creator.address.substring(0, 26) + "...")
      }, 3000);

      setTimeout( function(){
        typing(dev_seller_fee_basis_points, response.assets[random].asset_contract.dev_seller_fee_basis_points)
      }, 3500);

      setTimeout( function(){
        typing(owner_address, response.assets[random].owner.address.substring(0, 26) + "...")
      }, 4000);

      setTimeout( function(){
        typing(name, response.assets[random].name)
      }, 4500);

      setTimeout( function(){
        typing(block_id, response.assets[random].id.toString().substring(0, 26) + "...")
      }, 5000);

      setTimeout( function(){
        typing(token_id, response.assets[random].token_id.substring(0, 26) + "...")
      }, 5500);

    }, 500)

    return response
  })
  .catch(err => console.error(err));

})