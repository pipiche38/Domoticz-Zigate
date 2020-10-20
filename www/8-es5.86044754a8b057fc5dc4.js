!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FQ1g:function(t,o,i){"use strict";i.r(o),i.d(o,"AboutModule",(function(){return m}));var a=i("ofXK"),c=i("sYmb"),r=i("tyNb"),b=i("ey9i"),s=i("AytR"),h=i("fXoL");new b.c("GroupComponent");var u,l,p,L=[{path:"",component:(u=function(){function t(){n(this,t),this.version=s.a.version}var o,i,a;return o=t,(i=[{key:"ngOnInit",value:function(){}}])&&e(o.prototype,i),a&&e(o,a),t}(),u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=h.Hb({type:u,selectors:[["app-about"]],decls:118,vars:1,consts:[[1,"text-center"],["translate",""],[1,"far","fa-bookmark"],[1,"mt-5","row"],[1,"col-sm","text-center"],["href","https://zigate.fr","target","_blank"],["href","https://github.com/pipiche38/Domoticz-Zigate-Wiki/blob/master/en-eng/Home.md","target","_blank"],[1,"mt-5"],[1,"mt-3","row"],[1,"col-sm-2"],[1,"col-sm"],[1,"text-justify"],["href","https://www.domoticz.com/forum/viewforum.php?f=68","target","_blank"],["href","https://easydomoticz.com/forum/viewforum.php?f=28","target","_blank"],["href","https://github.com/pipiche38/Domoticz-Zigate","target","_blank"],["href","https://www.paypal.com/paypalme/my/profile","target","_blank"]],template:function(n,e){1&n&&(h.Tb(0,"div",0),h.Lc(1,"\n  "),h.Tb(2,"h1"),h.Lc(3,"\n    "),h.Tb(4,"span",1),h.Lc(5,"APP_NAME"),h.Sb(),h.Lc(6,"\n  "),h.Sb(),h.Lc(7,"\n  "),h.Tb(8,"p"),h.Ob(9,"i",2),h.Lc(10," "),h.Tb(11,"span",1),h.Lc(12,"Version"),h.Sb(),h.Lc(13),h.Sb(),h.Lc(14,"\n"),h.Sb(),h.Lc(15,"\n"),h.Tb(16,"div",3),h.Lc(17,"\n  "),h.Tb(18,"div",4),h.Lc(19,"\n    The aim of the plugin is to bridge "),h.Tb(20,"a",5),h.Lc(21," Zigate"),h.Sb(),h.Lc(22," hardware to the Domoticz\n    Home Automation.\n    "),h.Tb(23,"p"),h.Lc(24,"\n      This will allow you to manage all your devices through widgets created on the Domoticz side. For information\n      around the Zigate Plugin, please refer to\n      "),h.Tb(25,"a",6),h.Lc(26,"\n        Plugin Wiki"),h.Sb(),h.Lc(27,"\n      for more informations.\n    "),h.Sb(),h.Lc(28,"\n\n    "),h.Tb(29,"h3",7),h.Lc(30,"How to deal with issues and Questions"),h.Sb(),h.Lc(31,"\n  "),h.Sb(),h.Lc(32,"\n"),h.Sb(),h.Lc(33,"\n"),h.Tb(34,"div",8),h.Lc(35,"\n  "),h.Ob(36,"div",9),h.Lc(37,"\n  "),h.Tb(38,"div",10),h.Lc(39,"\n    "),h.Tb(40,"div",11),h.Lc(41,"\n      "),h.Tb(42,"p"),h.Lc(43,"You have several alternatives to deal with those and here is the most efficient way to get good support"),h.Sb(),h.Lc(44,"\n      "),h.Tb(45,"ul"),h.Lc(46,"\n        "),h.Tb(47,"li"),h.Lc(48,"\n          In case of question and problem please use the Domoticz Forum to ask your questions and/or problem.\n          "),h.Tb(49,"p"),h.Lc(50,"\n            You can either use the\n            "),h.Tb(51,"a",12),h.Lc(52,"English Domoticz forum"),h.Sb(),h.Lc(53," or if\n            you want to interact in French you might want to use\n            "),h.Tb(54,"a",13),h.Lc(55,"Easydomoticz French Forum"),h.Sb(),h.Lc(56,"\n            In addition, you can also connect with us on zigateforum (english), zigate (french) channel on keybase.io.\n            Feel free to join and benefit from instant messaging.\n          "),h.Sb(),h.Lc(57,"\n        "),h.Sb(),h.Lc(58,"\n\n        "),h.Tb(59,"li"),h.Lc(60,"\n          In both cases, please be as detailed as possible and make sure that you document at least:\n          "),h.Tb(61,"ul"),h.Lc(62,"\n            "),h.Tb(63,"li"),h.Lc(64,'\n              Plugin version ( you can get it from the domoticz log, when starting the Zigate plugin ). Tell us if you\n              are using the "stable(default)" or "developement(beta)" branch\n            '),h.Sb(),h.Lc(65,"\n\n            "),h.Tb(66,"li"),h.Lc(67,"Attached log file if applicable which can help in understanding the problem."),h.Sb(),h.Lc(68,"\n          "),h.Sb(),h.Lc(69,"\n        "),h.Sb(),h.Lc(70,"\n        "),h.Tb(71,"p"),h.Lc(72,"\n          "),h.Tb(73,"li"),h.Lc(74,'\n            If this is a zigate plugin "bug", you might create an issue in the\n            '),h.Tb(75,"a",14),h.Lc(76,"Zigate GitHub repository"),h.Sb(),h.Lc(77,". In such\n            please provide as much details as possible. Don't use it for asking question.\n          "),h.Sb(),h.Lc(78,"\n        "),h.Sb(),h.Lc(79,"\n      "),h.Sb(),h.Lc(80,"\n    "),h.Sb(),h.Lc(81,"\n  "),h.Sb(),h.Lc(82,"\n  "),h.Ob(83,"div",9),h.Lc(84,"\n"),h.Sb(),h.Lc(85,"\n\n"),h.Ob(86,"hr"),h.Lc(87,"\n"),h.Tb(88,"div",0),h.Lc(89,"\n  We would like to aknowledge our main contributors which are listed here.\n  "),h.Tb(90,"p"),h.Lc(91,"\n    @2m2, @d2e2n2o, @karstenbakker, @ricky74, @sbhc68, @thiklop"),h.Ob(92,"br"),h.Lc(93,"\n    @gemies for Dutch translation , @martial83, @hydci for French translation of the Web Admin interface"),h.Ob(94,"br"),h.Lc(95,"\n    @hairv and @badz for their great contribution to the engineering of the Schneider Wiser part"),h.Ob(96,"br"),h.Lc(97,"\n    Fabrice for his sponsorship to the Legrand integration"),h.Ob(98,"br"),h.Lc(99,"\n  "),h.Sb(),h.Lc(100,"\n\n  "),h.Tb(101,"p"),h.Lc(102,"a big thanks to @ben33880 for all the work done to make the Plugin Admin Interface real and live."),h.Sb(),h.Lc(103,"\n  "),h.Ob(104,"p"),h.Lc(105,"\n  "),h.Tb(106,"p"),h.Lc(107,"\n    Last I would like to express my gratitude to the great users whom have supported (by donation) this project. It\n    helping to purchase devices in order to test, integrate and certify them.\n  "),h.Sb(),h.Lc(108,"\n  "),h.Tb(109,"a",15),h.Lc(110,"Cagnotte"),h.Sb(),h.Lc(111,"\n"),h.Sb(),h.Lc(112,"\n\n"),h.Ob(113,"hr"),h.Lc(114,"\n"),h.Tb(115,"div",0),h.Lc(116,"\n  @zaraki673,@pipiche38 - 2018, 2019, 2020\n"),h.Sb(),h.Lc(117,"\n")),2&n&&(h.Ab(13),h.Nc(" ",e.version,""))},directives:[c.a],styles:[""]}),u),data:{title:Object(b.d)("About")}}],d=((p=function e(){n(this,e)}).\u0275mod=h.Lb({type:p}),p.\u0275inj=h.Kb({factory:function(n){return new(n||p)},providers:[],imports:[[r.i.forChild(L)],r.i]}),p),m=((l=function e(){n(this,e)}).\u0275mod=h.Lb({type:l}),l.\u0275inj=h.Kb({factory:function(n){return new(n||l)},imports:[[a.c,c.b,d]]}),l)}}])}();