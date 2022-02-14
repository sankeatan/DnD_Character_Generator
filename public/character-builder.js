
const dropDown = $('#dropdown_options');
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
    var label = $('<label>').text("Choose your Class:");
    var select = $('<select>').addClass("dropdown-list");
    for (var i = 0; i<classArray.length; i++){
        var option = $('<option>').value(classArray[i]).text(classArray[i]);
        select.append(option);
    }
    dropDown.append(label);
    dropDown.append(select);

}

classDropDown();
/* <label for="dropdown_options">Choose your Class: </label>
            <select class="dropdown-list" name="languages">
                <option value="artificer">Artificer</option>
                <option value="barbarian">Barbarian</option>
                <option value="bard">Bard</option>
                <option value="cleric">Cleric</option>
                <option value="druid">Druid</option>
                <option value="fighter">Fighter</option>
                <option value="monk">Monk</option>
                <option value="paladin">Paladin</option>
                <option value="ranger">Ranger</option>
                <option value="rogue">Rogue</option>
                <option value="sorcerer">Sorcerer</option>
                <option value="warlock">Warlock</option>
                <option value="wizard">Wizard</option>
            </select> */

