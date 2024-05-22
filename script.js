/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
const navigateToFormStep = (stepNumber) => {
    /**
     * Hide all form steps.
     */
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("d-none");
    });
    /**
     * Mark all form steps as unfinished.
     */
    document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
    });
    /**
     * Show the current form step (as passed to the function).
     */
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
    /**
     * Mark the current form step as active.
     */
    formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
    formStepCircle.classList.add("form-stepper-active");
    /**
     * Loop through each form step circles.
     * This loop will continue up to the current step number.
     * Example: If the current step is 3,
     * then the loop will perform operations for step 1 and 2.
     */
    for (let index = 0; index < stepNumber; index++) {
        /**
         * Select the form step circle (progress bar).
         */
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
        /**
         * Check if the element exist. If yes, then proceed.
         */
        if (formStepCircle) {
            /**
             * Mark the form step as completed.
             */
            formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
            formStepCircle.classList.add("form-stepper-completed");
        }
    }
};
/**
 * Select all form navigation buttons, and loop through them.
 */
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
    /**
     * Add a click event listener to the button.
     */
    formNavigationBtn.addEventListener("click", () => {
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        /**
         * Call the function to navigate to the target form step.
         */
        navigateToFormStep(stepNumber);
    });
});

function FuncJeu(jeu) {
    console.log(jeu);
    document.cookie = "jeu=" + jeu + "; max-age=600;";
    var acc = document.getElementById("accblock");
    var ac = document.getElementById("acblock");
    if (jeu == "acc") {
        ac.style.display = "none";
        acc.style.display = "block";
    } else if (jeu == "ac") {
        acc.style.display = "none";
        ac.style.display = "block";
    }

}

function FuncCircuit(circuit) {
    console.log(circuit);
    document.cookie = "circuit=" + circuit + "; max-age=600;";
}

function FuncVoiture(voiture) {
    console.log(voiture);
    document.cookie = "voiture=" + voiture + "; max-age=600;";

    var astomMartin = document.getElementById("Astom Martin Vantage GT3");
    var bentley = document.getElementById("Bentley GT3");
    var bmwm = document.getElementById("BMW M4 GT3");
    var audirhuit = document.getElementById("Audi R8 LMS Evo II");
    var mustanggt = document.getElementById("Mustang gt3");
    var honda = document.getElementById("Honda NSX GT3 Evo");
    var lambo = document.getElementById("Lamborghini Huracan GT3 EVO2");
    var missan = document.getElementById("Nissan GT-R Nismo GT3");
    var ferrarigt_296_acc = document.getElementById("ferrari 296 gt3");
    var lexusrcfgt = document.getElementById("lexus rc f gt3");
    var mcLaren = document.getElementById("McLaren 720S GT3 Evo");
    var porschegt = document.getElementById("porsche 992 gt3");
    var mercedesamg = document.getElementById("Mercedes-AMG GT3 Evo");
    
    var gtm = document.getElementById("GT-M");
    var urdloire = document.getElementById("URD Loire");
    var bmwmph = document.getElementById("BMW MP-H");
    var tcr = document.getElementById("tcr");
    var mazdacup = document.getElementById("mazda cup");
    var ferrarigt_296_ac = document.getElementById("ferrari 296 gt3");
    var lmp3 = document.getElementById("lmp3");
    var f3 = document.getElementById("f3");
    var gt4 = document.getElementById("GT4");

    
}
