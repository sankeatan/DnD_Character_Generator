
const dropDown = $('#dropdown_options');
const label = $('#label_options');
const select = $('#select_options');
const statArray = [15, 14, 13, 12, 10, 8];

function show(value) {
    document.querySelector(".text-box").value = value;
  }
  
  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
      console.log()
  }

function classDropDown(){
    const classArray = ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    label.text("Choose your Class:");
    for (var i = 0; i<classArray.length; i++){
        var option = $('<option>').val(classArray[i]).text(classArray[i]);
        console.log(option);
        option.appendTo(select);
    }

}

classDropDown();


