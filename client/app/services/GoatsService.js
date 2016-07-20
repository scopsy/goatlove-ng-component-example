function GoatsService() {
    "ngInject";

    // private variable to store our goats entries
    const goats = [
        {
            name: "Goat 1",
            age: 23,
            about: "I'm a demo goat, and this is my bio",
            photo: "http://images.northrup.org/picture/xl/animals/billy-goat-profile1.jpg"
        }
    ];

    return {

        // Will retrieve our goats list for displaying
        getGoats() {
            return goats;
        },

        // Creating a new goat entry based on user input.
        createGoat(goat) {

            const {name, age, about, photo} = goat;

            const tempGoat = {
                about,
                photo,
                name,
                age
            };

            goats.push(tempGoat);
        }
    }
}

export default GoatsService;