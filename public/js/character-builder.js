const classOptions = $('#class_option');
const raceOptions = $('#race_option');

const choices = $('#choice_options');


function show(value) {
    document.querySelector(".text-box").value = value;
  }
  
  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
      console.log()
  }

function classDropDown(){
    const classArray = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    for (var i = 0; i<classArray.length; i++){
        const imageUrl = `${classArray[i]}Icon.png`
        var optionDiv = $('<div>').addClass('option-Div')
        var optionImg = $('<img>').addClass('option-Img').attr("href", imageUrl)
        var option = $('<button>').val(classArray[i]).text(classArray[i]).addClass('option-Btn');
        optionImg.appendTo(optionDiv);
        option.appendTo(optionDiv);
        optionDiv.appendTo(choices);
    }
}

function raceDropDown(){
    const raceArray = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
    label.text("Choose your Race:");
    for (var i = 0; i<classArray.length; i++){
        var option = $('<option>').val(raceArray[i]).text(raceArray[i]);
        option.appendTo(select);
    }
}

const statArray = [15, 14, 13, 12, 10, 8];

classDropDown();

//classOptions.addEventListener('click', classDropDown);
//raceOptions.addEventListener('click', raceDropDown)




