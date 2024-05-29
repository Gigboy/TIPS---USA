function initInputs()
{var inputs=document.getElementsByTagName("input");for(var i=0;i<inputs.length;i++)
{if(inputs[i].type=="text")
{inputs[i].valueHtml=inputs[i].value;inputs[i].onfocus=function()
{if(this.valueHtml==this.value)
this.value="";}
inputs[i].onblur=function()
{this.value!=""?this.value=this.value:this.value=this.valueHtml;}}}}
if(window.addEventListener)
{window.addEventListener("load",initInputs,false);}
else if(window.attachEvent)
{window.attachEvent("onload",initInputs);}