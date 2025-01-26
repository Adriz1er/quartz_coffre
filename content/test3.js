// Vous devez exporter la fonction que vous souhaitez exécuter.
// QuickAdd passe automatiquement un paramètre, qui est un objet contenant l'application Obsidian
// et l'API QuickAdd.
module.exports = async (params) => {
    // Destructuration de l'objet. On extrait executeChoice de l'API QuickAdd dans params.
    const {
        quickAddApi: { executeChoice },
    } = params;

    try {
        // Données à traiter (exemple : une liste d'invités)
        const massiveDataArray = [
            { nom: "Alice", date: "2023-10-25", note: "VIP" },
            { nom: "Bob", date: "2023-10-26", note: "Standard" },
            { nom: "Charlie", date: "2023-10-27", note: "VIP" },
        ];

        // Exécuter le choix QuickAdd pour chaque élément du tableau
        for (const data of massiveDataArray) {
            await executeChoice("Capture Choice", {
                Nom: data.nom,       // Variable "Nom" accessible via {{VALUE:Nom}}
                Date: data.date,     // Variable "Date" accessible via {{VALUE:Date}}
                Note: data.note,     // Variable "Note" accessible via {{VALUE:Note}}
            });

            console.log(`Le choix a été exécuté pour : ${data.nom}`);
        }

        console.log("Tous les choix ont été exécutés avec succès.");
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
    }
};