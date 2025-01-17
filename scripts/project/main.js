
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
javascript
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 79) { // 79 is the key code for KEYCODE_HEADSETHOOK
        // Trigger a function in Construct 3
        runtime.callFunction('HandleHeadsetButtonPress');
    }
});
}
