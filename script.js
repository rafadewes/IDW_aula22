function calcular(){
    
    var dataVencimento = new Date(document.getElementById("dataVencimento").value);
    var dataPagamento = new Date(document.getElementById("dataPagamento").value);
    var valorTitulo = document.getElementById("valorTitulo").value;
    var adicionais = document.getElementById("adicionais").value;
    var diasAtraso = document.getElementById("diasAtraso").value;
    var juros = document.getElementById("juros").value;
    var multa = document.getElementById("multa").value;
    var mora = document.getElementById("mora").value;
    var valorTotal = document.getElementById("valorTotal").value;


    valorTitulo = parseFloat(valorTitulo);
    adicionais = parseFloat(adicionais);
    juros = parseFloat(juros);
    multa = parseFloat(multa);
    mora = parseFloat(mora);
    valorTotal = parseFloat(valorTotal);
    diasAtraso = parseFloat(diasAtraso);
    
    multa = Math.round(multa);
    mora = Math.round(mora);
    juros = Math.round(juros);
    valorTotal = Math.round(valorTotal);

    var diferenca = Math.abs(dataPagamento - dataVencimento);
    var diasAtraso = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    multa = valorTitulo*0.02;
    mora = (valorTitulo*0.0033) * diasAtraso;
    juros = multa + mora + adicionais;
    valorTotal = valorTitulo + multa + mora + adicionais;

    document.getElementById("diasAtraso").value = diasAtraso;
    document.getElementById("multa").value = "R$ " + multa;
    document.getElementById("mora").value = "R$ " + mora;
    document.getElementById("juros").value = "R$ " + juros;
    document.getElementById("valorTotal").value = "R$ " + valorTotal;

}
