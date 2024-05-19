
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error('The two arrays must have the same length');
    }

    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}


const originalNames = ["Kodwo", "Kwame", "Ama", "Kofi", "Esi"];
const modifiedNames = ["kodwo", "KWAME", "ama", "KOFI", "esi"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

