function addOutfitConfirmation () {
	var clothingInput, tagsInput; 

	clothingInput = document.forms["add-outfit-form"]["clothing_types"].value;
	tagsInput = document.forms["add-outfit-form"]["tags"].value;

	if (clothingInput == "" || tagsInput== ""){
		alert("Form must be filled out before submitting!");
		return false;
	}

	confirm("Outfit added to Closet!");
	return true;
}
