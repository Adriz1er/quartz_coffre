// Vous devez exporter la fonction que vous souhaitez exécuter.
// QuickAdd passe automatiquement un paramètre, qui est un objet contenant l'application Obsidian
// et l'API QuickAdd.
module.exports = async (params) => {
    // Destructuration de l'objet. On extrait inputPrompt de l'API QuickAdd dans params.
    const {
        quickAddApi: { inputPrompt },
        app, // L'objet app d'Obsidian est également disponible dans params
    } = params;

    try {
        // Appel de la fonction inputPrompt pour demander une saisie à l'utilisateur
        const userInput = await inputPrompt(
            "statut de l'élément", // En-tête
            "",                       // Placeholder (optionnel)
            ""                              // Valeur par défaut (optionnel)
        );
        const userInput2 = await inputPrompt(
            "description de l'élément", // En-tête
            "",                       // Placeholder (optionnel)
            ""                              // Valeur par défaut (optionnel)
        );
        // Affiche la valeur saisie par l'utilisateur dans la console
        console.log("L'utilisateur a saisi :", userInput);

        // Obtenir la note courante (active)
        const activeFile = app.workspace.getActiveFile();
        if (!activeFile) {
            throw new Error("Aucune note n'est active.");
        }

        // Lire le contenu actuel de la note
        const currentContent = await app.vault.read(activeFile);

        // Ajouter le nom de l'invité à la fin de la note
        const newContent = `${currentContent}\n- [${userInput}] ${userInput2}`;

        // Écrire le nouveau contenu dans la note
        await app.vault.modify(activeFile, newContent);

        console.log("Le nom de l'invité a été ajouté à la note courante.");
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
    }
};