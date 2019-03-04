    var oDiv=null;
    

		function Drag(id)
    {
      var _this=this;
      this.disX=0;
      this.disY=0;

			this.oDiv = document.getElementById(id);
			this.oDiv.onmousedown=function(ev)
      {
        _this.fndown(ev);
      };


		};

    Drag.prototype.fndown=function (ev){
                 var _this=this;
                 var oEvent = ev||event;

                 this.disX =oEvent.clientX-this.oDiv.offsetLeft;
                 this.disY =oEvent.clientY-this.oDiv.offsetTop;

                 document.onmousemove =function(ev){
                  _this.fnmove(ev);
                 };

                 document.onmouseup= function(){
                  _this.fnup();
                 };

    Drag.prototype.fnmove=function (ev){
                  
                  var oEvent = ev||event;

                  this.oDiv.style.left=oEvent.clientX-this.disX+'px';
                  this.oDiv.style.top=oEvent.clientY-this.disY+'px';
                 };

    Drag.prototype.fnup=function (){
                  document.onmousedown=null;
                  document.onmousemove=null;
                 }

      };