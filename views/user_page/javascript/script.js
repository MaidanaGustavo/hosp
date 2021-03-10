/* Date Picker */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  });
  $('.datepicker').on('mousedown', function preventClosing(event) {
    event.preventDefault();
    
  });
  $('.datanasc').pickadate({
    selectMonths: true,
    selectYears: 15,
    // Título dos botões de navegação
    labelMonthNext: 'Próximo Mês',
    labelMonthPrev: 'Mês Anterior',
    // Título dos seletores de mês e ano
    labelMonthSelect: 'Selecione o Mês',
    labelYearSelect: 'Selecione o Ano',
    // Meses e dias da semana
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    // Letras da semana
    weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    //Botões
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Fechar',
    // Formato da data que aparece no input
    format: 'dd/mm/yyyy',
    onClose: function() {
      $(document.activeElement).blur()
    }
  });
 /** Select */ 


 $(document).ready(function() {
  $('select').formSelect();
  // Old way
  // $('select').material_select();
});