(this.webpackJsonpbio=this.webpackJsonpbio||[]).push([[0],{21:function(e,t,n){e.exports=n(63)},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),c=n.n(s),u=n(3),i=n(4),o=n(6),l=n(5),A=n(7),C=n(10),m=n.n(C),p=n(2),T=n.n(p),G=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("textarea",{className:this.props.className,type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:this.props.onChange,onFocus:this.props.onFocus,onBlur:this.props.onBlur,disabled:this.props.disabled,style:this.props.style,autoFocus:this.props.autoFocus})}}]),t}(r.a.Component),h=m.a.Textarea()(G),d=([["F","Phe","Phenylananine"],["L","Leu","Leucine"],["I","Ile","Isoleucine"],["M","Met","Methionine"],["V","Val","Valine"],["S","Ser","Serine"],["P","Pro","Proline"],["T","Thr","Threonine"],["A","Ala","Alanine"],["Y","Tyr","Tyrosine"],["H","His","Histidine"],["Q","Gln","Glutamine"],["K","Lys","Lysine"],["D","Asp","Aspartic Acid"],["E","Glu","Glutamic Acid"],["C","Cys","Cysteine"],["W","Trp","Tryptophane"],["R","Arg","Arginine"],["S","Ser","Serine"],["G","Gly","Glycine"],["U","Sec","Selenocysteine"],["O","Pyr","Pyrrolysine"]].map((function(e){return{l:e[0],short:e[1],name:e[2]}})),function(e){switch(e){case"TTT":case"TTC":return"F";case"TTG":case"TTA":case"CTT":case"CTC":case"CTA":case"CTG":return"L";case"ATA":case"ATT":case"ATC":return"I";case"ATG":return"M";case"GTT":case"GTC":case"GTA":case"GTG":return"V";case"TCT":case"TCC":case"TCA":case"TCG":return"S";case"CCT":case"CCC":case"CCA":case"CCG":return"P";case"ACT":case"ACC":case"ACA":case"ACG":return"T";case"GCT":case"GCC":case"GCA":case"GCG":return"A";case"TAT":case"TAC":return"Y";case"TAA":return")";case"TAG":return"]";case"CAT":case"CAC":return"H";case"CAA":case"CAG":return"Q";case"AAT":case"AAC":return"N";case"AAA":case"AAG":return"K";case"GAT":case"GAC":return"D";case"GAA":case"GAG":return"E";case"TGT":case"TGC":return"C";case"TGA":return"}";case"TGG":return"W";case"CGT":case"CGC":case"CGA":case"CGG":return"R";case"AGT":case"AGC":return"S";case"AGA":case"AGG":return"R";case"GGT":case"GGC":case"GGA":case"GGG":return"G";default:return null}}),y=function(e){return Array.from(e).map((function(e){switch(e){case"A":return"T";case"T":return"A";case"G":return"C";case"C":return"G";case"U":return"A";default:return null}})).join("")},f=function(e){return Array.from(e).map((function(e){switch(e){case"A":case"G":case"C":return e;case"T":return"U";default:return null}})).join("")},v=function(e){var t=e.match(/.{1,3}/g);return t?t.map(d).join(""):""},b=function(e){switch(e){case 1:return f;case 2:return y;case 3:return v;default:return f}},E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onChange=function(e){var t=T.a.ds.updateObject(n.state.form,e);n.setState({form:t})},n.compute=function(e){var t=n.state.form,a=b(e)(t.in);n.setState({out:a,typeid:e})},n.renderOptions=function(){var e=n.state.typeid;return r.a.createElement("ul",{className:"nav"},[{typeid:1,name:"DNA to RNA"},{typeid:2,name:"AntiCodon"},{typeid:3,name:"Codon to AAs"}].map((function(t){var a=e===t.typeid?"btn-primary":"btn-secondary";return r.a.createElement("li",{key:t.typeid,className:"nav-item"},r.a.createElement("button",{className:"btn btn-sm ".concat(a),onClick:function(){return n.compute(t.typeid)}},t.name))})))},n.state={form:{in:""},out:null,typeid:null},n}return Object(A.a)(t,e),Object(i.a)(t,[{key:"renderResult",value:function(){var e=this.state.out;return e&&""!==e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Result"),r.a.createElement("pre",null,e)):null}},{key:"render",value:function(){var e=this.state,t=(e.out,e.form);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"DNA Manipulations"),r.a.createElement("p",null,"Insert input in following textarea"),r.a.createElement(h,{name:"in",value:t.in,onChange:this.onChange}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},this.renderOptions())),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},this.renderResult())))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.78ef9912.chunk.js.map