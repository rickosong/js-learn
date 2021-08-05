for(var angkot = 1; angkot <= 10; angkot++) {
    if(angkot <= 6) {
        console.log("angkot no. " + angkot + " seang beroperasi dengan baik.");
    }
    else if (angkot === 8 || angkot === 10) {
        console.log("Angkot no." + angkot + " sedang lembur");
    }
    else{
        console.log("Angkot no." + angkot + " sedang diperbaiki");
    }
}