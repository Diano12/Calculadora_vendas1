document.getElementById('calcular').addEventListener('click', function() {
    // Obter valores dos inputs
    const valorBase = parseFloat(document.getElementById('valorbruto').value) || 0;
    const percentual1 = parseFloat(document.getElementById('Margemperdas').value) || 0;
    const valorAdicional1 = parseFloat(document.getElementById('Etiquetas').value) || 0;
    const valorAdicional2 = parseFloat(document.getElementById('Tarracha').value) || 0;
    const gramas = parseFloat(document.getElementById('Peso').value) || 0;
    const valorPorGrama = parseFloat(document.getElementById('Ouro').value) || 0;
    const multiplicador = parseFloat(document.getElementById('Camada').value) || 0;
    const percentualFinal = parseFloat(document.getElementById('Margem').value) || 0;
    
    // Realizar cálculos passo a passo
    let steps = [];
    let total = valorBase;
    
    // Passo 1: Valor base + primeiro percentual
    const valorPercentual1 = total * (percentual1 / 100);
    total += valorPercentual1;
    steps.push({
        description: `Valor Bruto (R$ ${valorBase.toFixed(2)}) + ${percentual1}% (R$ ${valorPercentual1.toFixed(2)})`,
        value: total.toFixed(2)
    });
    
    // Passo 2: Adicionar valor adicional 1
    total += valorAdicional1;
    steps.push({
        description: `Etiquetas (R$ ${valorAdicional1.toFixed(2)})`,
        value: total.toFixed(2)
    });
    
    // Passo 3: Adicionar valor adicional 2
    total += valorAdicional2;
    steps.push({
        description: `Tarrachas (R$ ${valorAdicional2.toFixed(2)})`,
        value: total.toFixed(2)
    });
    
    // Passo 4: Cálculo das gramas
    const valorGramas = gramas * valorPorGrama * multiplicador;
    total += valorGramas;
    steps.push({
        description: `Calculo do ouro - ${gramas}g × R$ ${valorPorGrama.toFixed(2)} × ${multiplicador} = R$ ${valorGramas.toFixed(2)}`,
        value: total.toFixed(2)
    });
    
    // Passo 5: Aplicar percentual final
    const valorPercentualFinal = total * (percentualFinal / 100);
    total += valorPercentualFinal;
    steps.push({
        description: `+ ${percentualFinal}% sobre o total (R$ ${valorPercentualFinal.toFixed(2)})`,
        value: total.toFixed(2)
    });
    
    // Exibir resultados
    const stepsContainer = document.getElementById('steps');
    stepsContainer.innerHTML = '';
    
    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';
        stepElement.innerHTML = `
            <p><strong>Passo ${index + 1}:</strong> ${step.description}</p>
            <p><strong>Subtotal:</strong> R$ ${step.value}</p>
        `;
        stepsContainer.appendChild(stepElement);
    });
    
    document.getElementById('finalResult').textContent = `Total Final: R$ ${total.toFixed(2)}`;
    document.getElementById('results').style.display = 'block';
});

// Calcular automaticamente ao carregar a página
window.addEventListener('load', function() {
    document.getElementById('calcular').click();
});
