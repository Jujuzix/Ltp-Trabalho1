class Produto{
    constructor(nome,DataCadastro, Descrição, Preco, imagemPrdt){
        this.nome = nome
        this.DataCadastro = DataCadastro
        this.Descrição = Descrição
        this.Preco = Preco
        this.imagemPrdt = imagemPrdt
    
    }

    montdeErro(){
        try{return this.mostrarProdutos();}
        catch(erro){
          console.log(erro.stack);  
        }
    }

    mostrarProdutos(){
     if(this.nome !=""&&  this.imagemPrdt!=""&& this.Preco!=""){
 
       
     
        return `
        <div class= "Produtos">
           <h1> ${this.nome}</h1>
           <img src="${this.imagemPrdt}">
        
           <p>Preço: ${this.Preco}</p>
        </div>
        `
     }
     else{
        throw new Error("Esta faltando atibultos")
     }
        
        //this.nome + this.DataCadastro + this.Descrição + this.Preço
    
}
}

class produtoDestaque extends Produto{
    constructor(nome, DataCadastro,Descrição, Preco, imagemDestaque,){
        super(nome, DataCadastro, Descrição,Preco)
        this.Preço = Preco
        this.imagemDestaque = imagemDestaque
        
        
} 
mostrarDestaq(){
return `
<div class="Prodestaq">
<h1 > ${this.nome}</h1>
        <img src="${this.imagemDestaque}">
       
        <p >${this.Descrição }</p>
       
        <p>Preço: ${this.Preço}</p>
        </div>
        `
    //return this.nome + this.DataCadastro + this.Descrição + this.Preço + this.imagemDestaque
}

}


const produtodestaq = new produtoDestaque("Tenis Telas Coil Refletivo","(01-02 data de cadastro)"," Tesla Coil Inspirado nos tenis dos anos 90, onde o tenis largo era a grande referencia do verdadeiro tenis de skate, para usar com aquela calça larga, o Coil e todo revistido de carmuça de alta resistentencia evitando o desgate rapido tendo contato com a lixa do skate.","R$ 379,90","https://static.dafiti.com.br/p/TESLA-T%C3%AAnis-Tesla-Coil-Refletivo-7135-13945501-1-zoom.jpg")
const produto = new Produto(" ","(01-02 data de cadastro)","Tenis nike dunk","R$ 899,99","https://imgnike-a.akamaihd.net/250x250/024351BP.jpg")
const produto2 = new Produto("Tênis Nike Dunk ","(01-02 data de cadastro)","Tenis ","R$ 999,99","https://imgnike-a.akamaihd.net/250x250/024333P1.jpg")
const produto3 = new Produto("Tênis Air Jordan 4","(01-02 data de cadastro)","Tenis ","R$ 1.799,99","https://imgnike-a.akamaihd.net/250x250/0253927T.jpg")




 const produto1 = document.getElementById("produtoDestaque");
 produto1.insertAdjacentHTML("afterbegin",produtodestaq.mostrarDestaq());
 const padrãoproduto2 = document.getElementById("Produtop");
 padrãoproduto2.insertAdjacentHTML("afterbegin",produto.mostrarProdutos());
 const padrãoproduto3 = document.getElementById("Produtop");
 padrãoproduto2.insertAdjacentHTML("afterbegin",produto2.mostrarProdutos());
 const padrãoproduto4 = document.getElementById("Produtop");
 padrãoproduto2.insertAdjacentHTML("afterbegin",produto3.mostrarProdutos());
 


 console.log(produtodestaq.montdeErro());
 
 
    

    

    