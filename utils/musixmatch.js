/*
Extracts & parses the sync into text
(WIP)

Step 1: Inspect Element, click on any of the lyrics
Step 2: Go up a parent element until you find the first element that contains all lyrics
Step 3: Right click that element, select "Use in console"
Step 4: Run the following code
*/

temp0.innerText.replace("...", "").replace("End of lyrics", "").replace(/^Verse/gm, "\n#Verse").replace(/^Chorus/gm, "\n#Chorus").replace(/\n(?!\d{1,2}:\d{1,2}.\d{1,2}|#)/gm, "\t")
