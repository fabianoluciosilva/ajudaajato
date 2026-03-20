export const openRD = () => {
  // (window as any)?.neurolead?.open();
  const button = document.getElementById("rd-floating_button-ljn8xa4w");
  if (!button) {
    alert("Botão do RD não encontrado");
    return;
  }

  button.click();
};
