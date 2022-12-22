const trials = [
    // ---  Compare parameters of algos

    //Compare jitter border park
    ['park_border_J=0,0', 'park_border_J=0,1'],
    ['park_border_J=0,0', 'park_border_J=0,2'],
    ['park_border_J=0,1', 'park_border_J=0,2'],
    //Compare jitter uniform park
    ['park_uniform_J=0,0', 'park_uniform_J=0,1'],
    ['park_uniform_J=0,0', 'park_uniform_J=0,2'],
    ['park_uniform_J=0,1', 'park_uniform_J=0,2'],
    //Compare n cluster park
    ['park_cluster_n=3', 'park_cluster_n=4'],
    ['park_cluster_n=3', 'park_cluster_n=5'],
    ['park_cluster_n=4', 'park_cluster_n=5'],

    //Compare jitter border square
    ['square_border_J=0,0', 'square_border_J=0,1'],
    ['square_border_J=0,0', 'square_border_J=0,2'],
    ['square_border_J=0,1', 'square_border_J=0,2'],
    //Compare jitter uniform square
    ['square_uniform_J=0,0', 'square_uniform_J=0,1'],
    ['square_uniform_J=0,0', 'square_uniform_J=0,2'],
    ['square_uniform_J=0,1', 'square_uniform_J=0,2'],
    //Compare n cluster square
    ['square_cluster_n=3', 'square_cluster_n=4'],
    ['square_cluster_n=3', 'square_cluster_n=5'],
    ['square_cluster_n=4', 'square_cluster_n=5'],

    // --- Compare contexts

    //Compare park/square
    ['square_border_J=0,0', 'park_border_J=0,0'],
    ['square_border_J=0,1', 'park_border_J=0,1'],
    ['square_border_J=0,2', 'park_border_J=0,2'],
    ['square_uniform_J=0,0', 'park_uniform_J=0,0'],
    ['square_uniform_J=0,1', 'park_uniform_J=0,1'],
    ['square_uniform_J=0,2', 'park_uniform_J=0,2'],
    ['square_cluster_n=3', 'park_cluster_n=3'],
    ['square_cluster_n=4', 'park_cluster_n=4'],
    ['square_cluster_n=5', 'park_cluster_n=5'],

    // --- Compare algos

    //Compare border vs cluster park
    ['park_border_J=0,0', 'park_cluster_n=3'],
    ['park_border_J=0,1', 'park_cluster_n=3'],
    ['park_border_J=0,2', 'park_cluster_n=3'],
    ['park_border_J=0,0', 'park_cluster_n=4'],
    ['park_border_J=0,1', 'park_cluster_n=4'],
    ['park_border_J=0,2', 'park_cluster_n=4'],
    ['park_border_J=0,0', 'park_cluster_n=5'],
    ['park_border_J=0,1', 'park_cluster_n=5'],
    ['park_border_J=0,2', 'park_cluster_n=5'],
    //Compare border vs uniform park
    ['park_border_J=0,0', 'park_uniform_J=0,0'],
    ['park_border_J=0,1', 'park_uniform_J=0,0'],
    ['park_border_J=0,2', 'park_uniform_J=0,0'],
    ['park_border_J=0,0', 'park_uniform_J=0,1'],
    ['park_border_J=0,1', 'park_uniform_J=0,1'],
    ['park_border_J=0,2', 'park_uniform_J=0,1'],
    ['park_border_J=0,0', 'park_uniform_J=0,2'],
    ['park_border_J=0,1', 'park_uniform_J=0,2'],
    ['park_border_J=0,2', 'park_uniform_J=0,2'],
    //Compare uniform vs cluster park
    ['park_uniform_J=0,0', 'park_cluster_n=3'],
    ['park_uniform_J=0,1', 'park_cluster_n=3'],
    ['park_uniform_J=0,2', 'park_cluster_n=3'],
    ['park_uniform_J=0,0', 'park_cluster_n=4'],
    ['park_uniform_J=0,1', 'park_cluster_n=4'],
    ['park_uniform_J=0,2', 'park_cluster_n=4'],
    ['park_uniform_J=0,0', 'park_cluster_n=5'],
    ['park_uniform_J=0,1', 'park_cluster_n=5'],
    ['park_uniform_J=0,2', 'park_cluster_n=5'],

    //Compare border vs cluster square
    ['square_border_J=0,0', 'square_cluster_n=3'],
    ['square_border_J=0,1', 'square_cluster_n=3'],
    ['square_border_J=0,2', 'square_cluster_n=3'],
    ['square_border_J=0,0', 'square_cluster_n=4'],
    ['square_border_J=0,1', 'square_cluster_n=4'],
    ['square_border_J=0,2', 'square_cluster_n=4'],
    ['square_border_J=0,0', 'square_cluster_n=5'],
    ['square_border_J=0,1', 'square_cluster_n=5'],
    ['square_border_J=0,2', 'square_cluster_n=5'],
    //Compare border vs uniform square
    ['square_border_J=0,0', 'square_uniform_J=0,0'],
    ['square_border_J=0,1', 'square_uniform_J=0,0'],
    ['square_border_J=0,2', 'square_uniform_J=0,0'],
    ['square_border_J=0,0', 'square_uniform_J=0,1'],
    ['square_border_J=0,1', 'square_uniform_J=0,1'],
    ['square_border_J=0,2', 'square_uniform_J=0,1'],
    ['square_border_J=0,0', 'square_uniform_J=0,2'],
    ['square_border_J=0,1', 'square_uniform_J=0,2'],
    ['square_border_J=0,2', 'square_uniform_J=0,2'],
    //Compare uniform vs cluster square
    ['square_uniform_J=0,0', 'square_cluster_n=3'],
    ['square_uniform_J=0,1', 'square_cluster_n=3'],
    ['square_uniform_J=0,2', 'square_cluster_n=3'],
    ['square_uniform_J=0,0', 'square_cluster_n=4'],
    ['square_uniform_J=0,1', 'square_cluster_n=4'],
    ['square_uniform_J=0,2', 'square_cluster_n=4'],
    ['square_uniform_J=0,0', 'square_cluster_n=5'],
    ['square_uniform_J=0,1', 'square_cluster_n=5'],
    ['square_uniform_J=0,2', 'square_cluster_n=5'],
];
const trialOrder = [...trials.keys()];
shuffleArray(trialOrder);
const numTrials = trials.length;
let currentTrialIndex = -1;
const pageDelay = 50;
const trialDelay = 10;
let startTime = new Date();
let results = []

setTimeout(() => $("#continueButton").prop("disabled", false), pageDelay);

if (window.screen.height < 600 || window.screen.width < 1000) {
    $("#consentPage").hide();
    $("#screenSizeWarning").show();
    $("#screenSize").text(`Your current screen size is ${window.screen.width}x${window.screen.height}.`);
}

function continueButtonPressed() {
    $("#consentPage").hide();
    $("#instructionPage").show();
    $("#welcomeHeading").hide();
    setTimeout(() => $("#startButton").prop("disabled", false), pageDelay);
}

function startButtonPressed() {
    $("#instructionPage").hide();
    //$("#referencePage").show();
    //setTimeout(() => $("#trialStartButton").prop("disabled", false), pageDelay);
    $("#referencePage").hide();
    startTrials();
}

function trialStartButtonPressed() {
    $("#referencePage").hide();
    startTrials();
}

function startTrials() {
    $("#trialPage").show();
    setButtonEnableTimer("realismButton", trialDelay);
    nextTrial();
}

function realismSubmit(button) {
    setButtonEnableTimer("realismButton", trialDelay);
    results.push(getTrialResult(button));
    nextTrial();
}

function getTrialResult(button) {
    let imageString = "";
    let otherImageString = "";
    if (button === "Left") {
        imageString = $("#leftImage").attr("src");
        otherImageString = $("#rightImage").attr("src");
    } else {
        imageString = $("#rightImage").attr("src");
        otherImageString = $("#leftImage").attr("src");
    }
    return {
        trialNum: trialOrder[currentTrialIndex],
        selectedImage: imageString.substring(4, imageString.length - 4),
        otherImage: otherImageString.substring(4, otherImageString.length - 4),
        selectedButton: button
    }
}

function nextTrial() {
    currentTrialIndex += 1;
    if (currentTrialIndex >= numTrials) {
        finishTrials();
    } else {
        $("#trialNumber").text(`Trial ${currentTrialIndex + 1}`)
        if (Math.random() < 0.5) {
            $("#leftImage").attr("src", `img/${trials[trialOrder[currentTrialIndex]][0]}.png`);
            $("#rightImage").attr("src", `img/${trials[trialOrder[currentTrialIndex]][1]}.png`);
        } else {
            $("#leftImage").attr("src", `img/${trials[trialOrder[currentTrialIndex]][1]}.png`);
            $("#rightImage").attr("src", `img/${trials[trialOrder[currentTrialIndex]][0]}.png`);
        }
    }
}

function finishTrials() {
    $("#trialPage").hide();
    $("#demographicsPage").show();
}

function verifyAndGatherData() {
    let potentialAge  = parseInt($("input[name=age]").val(), 10);
    let potentialCountry = $("input[name=country]").val();

    if (Number.isInteger(potentialAge) && potentialCountry) {
        let data = {
            gender: $("select[name=gender]").find(":selected").text(),
            age: potentialAge,
            education: $("select[name=education]").find(":selected").text(),
            country: potentialCountry,
            experience: $("select[name=experience]").find(":selected").text(),
            vision: $("select[name=vision]").find(":selected").text(),
            comments: $("textarea[name=comments]").val(),
            duration: 0.001 * (new Date() - startTime),
            trialResults: results
        }

        $("input[name=Data]").val(JSON.stringify(data));
        $("#dataForm").submit();
        $("#demographicsPage").hide();
    } else {
        alert("Incorrect data, correct any errors and try again.");
    }
}

function setButtonEnableTimer(className, delay) {
    $(`.${className}`).prop("disabled", true);
    setTimeout(() => $(`.${className}`).prop("disabled", false), delay);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}
