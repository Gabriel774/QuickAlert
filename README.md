# Quick Alert
Quick Alert is a simple way to add personalized alerts in your project

the use of an Quick alert is very simple, there is four proprieties:

title: The title of your alert. 

message: The message of your alert (You can set just a message or just a title).

trigger: The event trigger of the alert, it must be a JavaScript event trigger (the trigger propriety is optional),
        example: "click", "mouseleave", "mouseenter"

target: if you set a trigger propriety, you must set an target for the trigger, it's selected by a querySelecctor, so you must use his
        synthax. for example use "#target" to select an element by id.

both trigger and target proprieties are optionals, you can just add a message and title!

  - Simple use:
        
        new quickal({
            title: "This is a Quick Alert :D",
            message: "A simple way to make a personalized alert in your project!",
            trigger: "click",
            target: "#alertbtn1"
        })

  - Personalized use:
   
        function showalert() {
            const txt2 = document.querySelector("#text2")
            const txt = document.querySelector("#text")
            if (txt.value.length == 0 && txt2.value.length == 0) {
                new quickal({
                    title: "Error",
                    message: "There is no text :("
                })
            } else {
                new quickal({
                    title: txt.value,
                    message: txt2.value
                })
            }
        }
        
  Check the demo to see more of how it works.
