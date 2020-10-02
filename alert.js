 function simpleal(params) {
     this.$target = document.querySelector(params.target)
     this.$message = params.message
     this.$target.addEventListener('click', () => {
         this.$maindiv = document.createElement("div")
         this.$maindiv.setAttribute('id', 'almaindiv')
         this.$divalert = document.createElement("div")
         this.$nmessage = document.createTextNode(this.$message)
         this.$divalert.appendChild(this.$nmessage)
         this.$divalert.classList.add("divmessage")
         this.$maindiv.appendChild(this.$divalert)
         this.$albtn = document.createElement("input")
         this.$albtn.classList.add("albtn")
         this.$albtn.setAttribute('value', "Ok")
         this.$albtn.setAttribute('type', "button")
         this.$backg = document.createElement("div")
         this.$backg.setAttribute('id', 'backg')
         this.$albtn.addEventListener('click', _ => {
             document.body.removeChild(this.$maindiv)
             document.body.removeChild(this.$backg)
         })
         this.$backg.addEventListener('click', () => {
            document.body.removeChild(this.$maindiv)
            document.body.removeChild(this.$backg)
         })
         document.body.appendChild(this.$backg)
         this.$divalert.appendChild(this.$albtn)
         document.body.appendChild(this.$maindiv)
     })
 }