/*
Extracts & parses the sync into text
(WIP)

Step 1: Go to the Sync tab. Try not to open the Tag tab, it seems to goof it up
Step 2: Inspect Element, click on any of the lyrics
Step 3: Go up a parent element until you find the first element that contains all lyrics
Step 4: Right click that element, select "Use in console"
Step 5: Run the following code
*/

temp0.innerText.replace("...", "").replace("End of lyrics", "").replace(/\n^(?=Intro|Verse|Pre-Chorus|Chorus|Hook|Bridge|Outro)/gmi, "\n#").replace(/\n(?!\d{1,2}:\d{1,2}.\d{1,2}|#)/gm, "\t")
