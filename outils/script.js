// Script pour afficher l'année actuelle dans le pied de page
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Fonction pour charger et afficher les outils depuis le fichier JSON
  async function loadTools() {
    const toolsContainer = document.getElementById('tools-container');
    if (!toolsContainer) {
      console.error("L'élément '#tools-container' n'a pas été trouvé.");
      return;
    }

    try {
      // Récupérer les données du fichier JSON
      const response = await fetch('tools.json');
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }
      const tools = await response.json();

      // Vider le contenu actuel (par exemple, "Chargement des outils...")
      toolsContainer.innerHTML = '';

      // Créer et ajouter une carte pour chaque outil
      tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card'; // Applique la classe CSS

        toolCard.innerHTML = `
          <h3>${tool.name}</h3>
          <p>${tool.description}</p>
          <p style="font-size: 0.8em;">Par: ${tool.credit}</p>
          <a href="${tool.url}" rel="noopener noreferrer">Accéder à l'outil</a>
        `;

        toolsContainer.appendChild(toolCard);
      });
    } catch (error) {
      console.error("Erreur lors du chargement des outils :", error);
      toolsContainer.innerHTML = '<p class="error-message">❌ Impossible de charger les outils. Veuillez réessayer plus tard.</p>';
    }
  }

  // Appeler la fonction pour charger les outils au chargement de la page
  loadTools();
});
