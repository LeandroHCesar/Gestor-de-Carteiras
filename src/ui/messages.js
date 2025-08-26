export const showMessage = (message, type = "info") => {
  // Remover mensagens existentes para evitar sobreposição
  const existingMessages = document.querySelectorAll(".message-box");
  existingMessages.forEach((msg) => msg.remove());

  const messageBox = document.createElement("div");
  messageBox.className = `message-box ${type}`;

  // Criar estrutura com ícone e texto
  const icon = document.createElement("span");
  icon.className = "message-icon";

  // Definir ícone baseado no tipo
  const icons = {
    success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22,4 12,14.01 9,11.01"></polyline>
    </svg>`,
    error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>`,
    info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>`,
    warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>`,
  };

  icon.innerHTML = icons[type] || icons.info;

  const text = document.createElement("span");
  text.className = "message-text";
  text.textContent = message;

  messageBox.appendChild(icon);
  messageBox.appendChild(text);

  document.body.appendChild(messageBox);

  // Forçar reflow para garantir a animação
  void messageBox.offsetWidth;
  messageBox.classList.add("show");

  // Auto-remover após 4 segundos
  setTimeout(() => {
    messageBox.classList.remove("show");
    messageBox.addEventListener(
      "transitionend",
      () => {
        messageBox.remove();
      },
      { once: true }
    );
  }, 4000);
};
