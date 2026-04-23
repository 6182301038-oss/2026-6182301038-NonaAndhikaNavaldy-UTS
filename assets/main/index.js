System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameController.ts"],(function(e){var t,i,n,o,r,l,s,a,c,p,u,h,d,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,s=e.SpriteFrame,a=e.CCFloat,c=e.Collider2D,p=e.Contact2DType,u=e.find,h=e.Sprite,d=e.Component},function(e){v=e.GameController}],execute:function(){var C,f,g,m,y,B,T;r._RF.push({},"1ef28OJh8JL8pS2QdIiuT7e","Bird",void 0);var b=l.ccclass,R=l.property;e("Bird",(C=b("Bird"),f=R({type:[s]}),g=R({type:[a]}),C((B=t((y=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(t,"spriteBird",B,o(t)),n(t,"scaleList",T,o(t)),t.listToRemove=[],t.level=0,t}i(t,e);var r=t.prototype;return r.start=function(){var e=this.getComponent(c);e&&(e.on(p.BEGIN_CONTACT,this.onBeginContact,this),e.on(p.END_CONTACT,this.onEndContact,this))},r.onBeginContact=function(e,i,n){e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelUp(),u("Canvas").getComponent(v).addMerge(),this.listToRemove.push(i.node))},r.onEndContact=function(e,t,i){console.log("onEndContact")},r.levelUp=function(){this.level+1<this.spriteBird.length&&(this.level++,this.getComponent(h).spriteFrame=this.spriteBird[this.level%this.spriteBird.length],this.node.scale.multiplyScalar(1.2)),console.log("level: "+this.level)},r.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(d)).prototype,"spriteBird",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),T=t(y.prototype,"scaleList",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=y))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Bird.ts"],(function(e){var t,r,n,o,i,a,l,u,s,c,p,f,h,d,g,b,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Prefab,u=e.Node,s=e.Label,c=e.input,p=e.Input,f=e.instantiate,h=e.RigidBody2D,d=e.ERigidBody2DType,g=e.director,b=e.Component},function(e){m=e.Bird}],execute:function(){var y,C,v,T,P,R,S,w,D;i._RF.push({},"b6f29aXcR9KT4R5SbiSKpyX","GameController",void 0);var L=a.ccclass,_=a.property;e("GameController",(y=L("GameController"),C=_({type:l}),v=_(u),T=_(s),y((S=t((R=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,n(t,"birdPrefab",S,o(t)),n(t,"resultPanel",w,o(t)),t.mergeCount=0,n(t,"mergeLabel",D,o(t)),t}r(t,e);var i=t.prototype;return i.start=function(){this.resultPanel.active=!1,c.on(p.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(e){for(var t=f(this.birdPrefab),r=t.getComponent(m),n=Math.floor(3*Math.random()),o=0;o<n;o++)r.levelUp();var i=e.getUILocation();t.setParent(this.node),t.setWorldPosition(i.x,400,0),t.getComponent(h).type=d.Dynamic,t.getComponent(h).wakeUp()},i.addMerge=function(){this.mergeCount++,console.log("Merge Count:",this.mergeCount),this.mergeCount>=30&&this.showResult()},i.showResult=function(){this.resultPanel.active=!0,c.off(p.EventType.TOUCH_START,this.onTouchStart,this)},i.restartGame=function(){g.loadScene("game")},i.update=function(e){},t}(b)).prototype,"birdPrefab",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=t(R.prototype,"resultPanel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(R.prototype,"mergeLabel",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=R))||P));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});