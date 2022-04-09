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
loader = document.querySelector('h1');

function typing(el, string){
  for (let i = 1; i < string.length; i++){
    setTimeout( function(){
      string = string.toLowerCase();
      el.textContent = string.substr(0, i + 1)
    }, i*50)
  }
}

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
}, 1500)
setTimeout(function(){
  typing(contract_address, "c0n%r4c%-4dr355")
  typing(contract_type, "c0n%r4c%-%/p3")
  typing(schema_name, "5ch3m4-n4m3")
  typing(created_date, "cr34t3d-d4%3")
  typing(creator_address  , "cr34%0r-4ddr355")
  typing(dev_seller_fee_basis_points, "d3v-s3ll3r-f33-b4s1s-p01nt5")
  typing(owner_address, "0wn3r-4ddr355")
  typing(document.querySelector('#name'), "n4m3")
  typing(block_id, "bl0ck-1d")
  typing(token_id, "t0k3n-1d")
}, 2500)
setTimeout(function(){
  typing(contract_address, "c0ntr4ct_4dr355")
  typing(contract_type, "c0ntr4ct_t/p3")
  typing(schema_name, "5ch3m4_n4m3")
  typing(created_date, "cr34t3d_d4t3")
  typing(creator_address  , "cr34t0r_4ddr355")
  typing(dev_seller_fee_basis_points, "d3v_s3ll3r_f33_b4s1s_p01nt5")
  typing(owner_address, "0wn3r_4ddr355")
  typing(document.querySelector('#name'), "n4m3")
  typing(block_id, "bl0ck_1d")
  typing(token_id, "t0k3n_1d")
}, 3500)
setTimeout(function(){
  typing(contract_address, "c0ntr4ct-4dr3ss")
  typing(contract_type, "c0ntr4ct-typ3")
  typing(schema_name, "5ch3m4-n4m3")
  typing(created_date, "cr34t3d_d4t3")
  typing(creator_address  , "cr34t0r-4ddr355")
  typing(dev_seller_fee_basis_points, "d3v-s3ll3r-f33-b4s1s-p01nt5")
  typing(owner_address, "0wn3r-4ddr355")
  typing(document.querySelector('#name'), "n4m3")
  typing(block_id, "bl0ck-1d")
  typing(token_id, "t0k3n-1d")
}, 4000)
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
}, 4500)

let block = document.createElement('iframe');
block.src = "cell.html"
setTimeout(function(){
  loader.style.opacity = 1;
  document.querySelector('body').append(block);
}, 5500)

setTimeout(function(){
  loader.style.opacity = 0;
}, 8000)