// Vous devez exporter la fonction que vous souhaitez exécuter.
// QuickAdd passe automatiquement un paramètre, qui est un objet contenant l'application Obsidian
// et l'API QuickAdd.
module.exports = async (params) => {
    // Destructuration de l'objet. On extrait inputPrompt de l'API QuickAdd dans params.
    const {
        quickAddApi: { inputPrompt },
    } = params;
        

    const commandId = "quickadd:choice:0fb9237f-8d44-49fa-9abe-fe27430ca70e"; // Exemple : "file-explorer:open"
    await app.commands.executeCommandById(commandId);

    const commandId3 = "templater-obsidian:jump-to-next-cursor-location"; // Exemple : "file-explorer:open"
    await app.commands.executeCommandById(commandId3);

    

        // Vous pouvez ajouter ici d'autres actions, comme mettre à jour un fichier ou une propriété.
        // Exemple : Mettre à jour une propriété dans un fichier journalier avec MetaEdit (si installé).
        // const { update } = app.plugins.plugins["metaedit"].api;
        // const date = window.moment().format("gggg-MM-DD - ddd MMM D");
        // await update("Nom", userInput, `dossier/journal/${date}.md`);
    
};