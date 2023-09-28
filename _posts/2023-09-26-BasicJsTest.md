<!-- Makes a button, able to be referenced in CSS and JSS by the id "coolButton"  -->
<button  id="coolButton">Click Me</button>

<style>
/* CSS for the button */
#coolButton {
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 10%;
    margin-left: 45%;
    transition: 0.3s;
}

/* When the user hovers over */
#coolButton:hover {
  transform: scale(1.1);
}

</style>

<script>
//When the button is clicked, this function runs
document.getElementById('coolButton').addEventListener('click', () => {
    //this variable is defined by the function getRandomColor
    const randomColor = getRandomColor();
    //Sets the background of the button to the variable "randomColor"
    document.getElementById('coolButton').style.backgroundColor = randomColor;
});

//This function randomly selects a color
function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}
</script>