function addtr(){var t=document.createElement("tr");t.innerHTML="<td><input type='number' class='x'></td><td><input type='number' class='y'></td>",document.getElementById("tbody").appendChild(t)}function removetr(){var t=document.getElementsByTagName("input").length;t>6&&document.getElementById("tbody").removeChild(tbody.lastChild)}function calc(){function t(){var t=[];for(S=0;S<D.length;S++)t[S]=parseFloat(parseFloat(D[S].value).toFixed(R));return t}function e(){var t=[];for(S=0;S<N.length;S++)t[S]=parseFloat(parseFloat(N[S].value).toFixed(R));return t}function a(){var t=0;for(S=0;k>S;S++)if(isNaN(C[S])||isNaN(A[S])){t=1,alert("All cells X and Y must be filled");break}return 2==q&&4>k&&0==t&&(t=1,alert("You must specify the number of observations >= 4 (n >= 4)")),t}function r(){var t=0;for(S=0;k>S;S++)t+=parseFloat(C[S]);return t}function d(){var t=0;for(S=0;k>S;S++)t+=parseFloat(A[S]);return t}function o(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat(parseFloat(C[S]*C[S]).toFixed(R));return t}function n(){var t=0;for(S=0;k>S;S++)t+=parseFloat(C[S]*C[S]);return t}function l(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat(parseFloat(C[S]*C[S]*C[S]).toFixed(R));return t}function i(){var t=0;for(S=0;k>S;S++)t+=parseFloat(C[S]*C[S]*C[S]);return t}function s(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat(parseFloat(C[S]*C[S]*C[S]*C[S]).toFixed(R));return t}function h(){var t=0;for(S=0;k>S;S++)t+=parseFloat(C[S]*C[S]*C[S]*C[S]);return t}function p(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat((parseFloat(C[S])*parseFloat(A[S])).toFixed(R));return t}function F(){var t=0;for(S=0;k>S;S++)t+=parseFloat(C[S])*parseFloat(A[S]);return t}function u(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat((parseFloat(Z[S])*parseFloat(A[S])).toFixed(R));return t}function b(){var t=0;for(S=0;k>S;S++)t+=parseFloat(Z[S])*parseFloat(A[S]);return t}function f(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat(Math.log(parseFloat(C[S])).toFixed(R));return t}function c(){var t=0;for(S=0;k>S;S++)t+=Math.log(parseFloat(C[S]));return t}function m(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat(Math.log(parseFloat(A[S])).toFixed(R));return t}function x(){var t=0;for(S=0;k>S;S++)t+=Math.log(parseFloat(A[S]));return t}function g(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat(parseFloat(et[S]*et[S]).toFixed(R));return t}function v(){var t=0;for(S=0;k>S;S++)t+=parseFloat(et[S]*et[S]);return t}function X(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat((parseFloat(et[S])*parseFloat(rt[S])).toFixed(R));return t}function Y(){var t=0;for(S=0;k>S;S++)t+=parseFloat(et[S])*parseFloat(rt[S]);return t}function y(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat((parseFloat(C[S])*parseFloat(rt[S])).toFixed(R));return t}function M(){var t=0;for(S=0;k>S;S++)t+=parseFloat(C[S])*parseFloat(rt[S]);return t}function w(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat((parseFloat(et[S])*parseFloat(A[S])).toFixed(R));return t}function T(){var t=0;for(S=0;k>S;S++)t+=parseFloat(et[S])*parseFloat(A[S]);return t}function B(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat((1/C[S]).toFixed(R));return t}function E(){var t=0;for(S=0;k>S;S++)t+=parseFloat(ft[S]);return t}function L(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat((1/(C[S]*C[S])).toFixed(R));return t}function I(){var t=0;for(S=0;k>S;S++)t+=parseFloat(mt[S]);return t}function H(){var t=[];for(S=0;k>S;S++)t[S]=parseFloat((A[S]/C[S]).toFixed(R));return t}function j(){var t=0;for(S=0;k>S;S++)t+=parseFloat(gt[S]);return t}var S,q=document.getElementById("select").value,R=document.getElementById("select-round").value,D=document.getElementsByClassName("x"),C=t(),N=document.getElementsByClassName("y"),A=e(),k=C.length,V=a();if(0==V){var z,G,J,K,O,P,Q,U,W,Z,$,_,tt,et,at,rt,dt,ot,nt,lt,it,st,ht,pt,Ft,ut,bt,ft,ct,mt,xt,gt,vt,Xt,Yt,yt,Mt,wt,Tt,Bt,Et,Lt,It,Ht,jt,St,qt,Rt,Dt=parseFloat(r().toFixed(R)),Ct=parseFloat(d().toFixed(R)),Nt=parseFloat((Ct/k).toFixed(R));0==q&&(Z=o(),$=parseFloat(n().toFixed(R)),_=p(),tt=parseFloat(F().toFixed(R))),1==q&&(et=f(),at=parseFloat(c().toFixed(R)),rt=m(),dt=parseFloat(x().toFixed(R)),ot=g(),nt=parseFloat(v().toFixed(R)),lt=X(),it=parseFloat(Y().toFixed(R))),2==q&&(Z=o(),$=parseFloat(n().toFixed(R)),st=l(),ht=parseFloat(i().toFixed(R)),pt=s(),Ft=parseFloat(h().toFixed(R)),_=p(),tt=parseFloat(F().toFixed(R)),ut=u(),bt=parseFloat(b().toFixed(R))),3==q&&(ft=B(),ct=parseFloat(E().toFixed(R)),mt=L(),xt=parseFloat(I().toFixed(R)),gt=H(),vt=parseFloat(j().toFixed(R))),4!=q&&6!=q||(rt=m(),dt=parseFloat(x().toFixed(R)),Z=o(),$=parseFloat(n().toFixed(R)),Xt=y(),Yt=parseFloat(M().toFixed(R))),5==q&&(et=f(),at=parseFloat(c().toFixed(R)),ot=g(),yt=parseFloat(v().toFixed(R)),Mt=w(),wt=parseFloat(T().toFixed(R))),0==q&&(G=parseFloat(((tt-Dt*Ct/k)/($-Dt*Dt/k)).toFixed(R)),z=parseFloat(((Ct-Dt*G)/k).toFixed(R))),1==q&&(G=parseFloat(((it-at*dt/k)/(nt-at*at/k)).toFixed(R)),z=parseFloat(((dt-at*G)/k).toFixed(R)),U=parseFloat(Math.exp(z).toFixed(R))),2==q&&(K=parseFloat(k*$*Ft+Dt*ht*$+$*Dt*ht-$*$*$-ht*ht*k-Ft*Dt*Dt),O=parseFloat(Ct*$*Ft+Dt*ht*bt+$*tt*ht-bt*$*$-ht*ht*Ct-Ft*tt*Dt),P=parseFloat(k*tt*Ft+Ct*ht*$+$*Dt*bt-$*tt*$-bt*ht*k-Ft*Dt*Ct),Q=parseFloat(k*$*bt+Dt*tt*$+Ct*Dt*ht-$*$*Ct-ht*tt*k-bt*Dt*Dt),z=parseFloat((O/K).toFixed(R)),G=parseFloat((P/K).toFixed(R)),J=parseFloat((Q/K).toFixed(R))),3==q&&(G=parseFloat(((vt-ct*Ct/k)/(xt-ct*ct/k)).toFixed(R)),z=parseFloat(((Ct-ct*G)/k).toFixed(R))),4==q&&(G=parseFloat(((Yt-Dt*dt/k)/($-Dt*Dt/k)).toFixed(R)),z=parseFloat(((dt-Dt*G)/k).toFixed(R)),U=parseFloat(Math.exp(z).toFixed(R))),5==q&&(G=parseFloat(((wt-at*Ct/k)/(yt-at*at/k)).toFixed(R)),z=parseFloat(((Ct-at*G)/k).toFixed(R))),6==q&&(G=parseFloat(((Yt-Dt*dt/k)/($-Dt*Dt/k)).toFixed(R)),z=parseFloat(((dt-Dt*G)/k).toFixed(R)),U=parseFloat(Math.exp(z).toFixed(R)),W=parseFloat(Math.exp(G).toFixed(R)));var At=[];if(0==q)for(S=0;k>S;S++)At[S]=parseFloat((parseFloat(C[S])*G+z).toFixed(R));if(1==q)for(S=0;k>S;S++)At[S]=parseFloat((U*parseFloat(Math.pow(C[S],G))).toFixed(R));if(2==q)for(S=0;k>S;S++)At[S]=parseFloat((z+G*parseFloat(C[S])+J*parseFloat(Z[S])).toFixed(R));if(3==q)for(S=0;k>S;S++)At[S]=parseFloat((z+G/parseFloat(C[S])).toFixed(R));if(4==q)for(S=0;k>S;S++)At[S]=parseFloat((U*Math.exp(G*parseFloat(C[S]))).toFixed(R));if(5==q)for(S=0;k>S;S++)At[S]=parseFloat((z+G*parseFloat(et[S])).toFixed(R));if(6==q)for(S=0;k>S;S++)At[S]=parseFloat((U*Math.pow(W,parseFloat(C[S]))).toFixed(R));if(0==q){for(Bt=[],Et=0,S=0;k>S;S++)Bt[S]=parseFloat(Math.pow(Nt-parseFloat(At[S]),2).toFixed(R)),Et+=Bt[S];for(Lt=[],Rt=0,S=0;k>S;S++)Lt[S]=parseFloat(Math.pow(parseFloat(A[S])-Nt,2).toFixed(R)),Rt+=Lt[S];Et=parseFloat(Et.toFixed(R)),Rt=parseFloat(Rt.toFixed(R)),Tt=parseFloat(Math.pow(Math.abs(Et/Rt),.5).toFixed(R))}if(1==q||2==q||3==q||4==q||5==q||6==q){for(It=[],Ht=0,S=0;k>S;S++)It[S]=parseFloat(Math.pow(parseFloat(A[S])-parseFloat(At[S]),2).toFixed(R)),Ht+=Math.pow(parseFloat(A[S])-parseFloat(At[S]),2);for(Lt=[],Rt=0,S=0;k>S;S++)Lt[S]=parseFloat(Math.pow(parseFloat(A[S])-Nt,2).toFixed(R)),Rt+=Math.pow(parseFloat(A[S])-Nt,2);Ht=parseFloat(Ht.toFixed(R)),Rt=parseFloat(Rt.toFixed(R)),Tt=parseFloat(Math.abs(Math.pow(1-Ht/Rt,.5)).toFixed(R))}var kt=parseFloat(Math.pow(Tt,2).toFixed(R)),Vt=parseFloat((100*kt).toFixed(R)),zt=parseFloat((100-Vt).toFixed(R));if(0==q||1==q||3==q||4==q||5==q||6==q)for(jt=parseFloat((kt/(1-kt)*(k-2)).toFixed(R)),St=["161.45","18.51","10.13","7.71","6.61","5.99","5.59","5.32","5.12","4.96","4.84","4.75","4.67","4.60","4.54","4.49","4.45","4.41","4.38","4.35","4.32","4.30","4.28","4.26","4.24","4.22","4.21","4.20","4.18","4.17"],qt=0,S=0;k-2>S;S++)qt=parseFloat(St[S]);if(2==q)for(jt=parseFloat((kt/(1-kt)*((k-3)/2)).toFixed(R)),St=["199.50","19","9.55","6.94","5.79","5.14","4.74","4.46","4.26","4.10","3.98","3.89","3.81","3.74","3.68","3.63","3.59","3.55","3.52","3.49","3.47","3.44","3.42","3.40","3.38","3.37","3.35","3.34","3.33","3.32"],qt=0,S=0;k-3>S;S++)qt=parseFloat(St[S]);var Gt=0;for(S=0;k>S;S++)Gt+=Math.abs((parseFloat(A[S])-parseFloat(At[S]))/parseFloat(A[S]));Gt=parseFloat((1/k*Gt*100).toFixed(R));var Jt,Kt,Ot=2;2==q&&(Ot=3);var Pt="";0==q&&(Pt="a + (b * x)"),1==q&&(Pt="a * x^b"),2==q&&(Pt="a + (b * x) + (c * x^2)"),3==q&&(Pt="a + (b / x)"),4==q&&(Pt="a * e^bx"),5==q&&(Pt="a + (b * lnx)"),6==q&&(Pt="a + b^x");var Qt="";0==q&&(Qt="a * n + b * ∑X = ∑Y<br>a * ∑X + b * ∑X^2 = ∑(X * Y)"),1==q&&(Qt="lna * n + b * ∑lnX = ∑lnY<br>lna * ∑lnX + b * ∑lnX^2 = ∑(lnX * lnY)"),2==q&&(Qt="a * n + b * ∑X + c * ∑X^2 = ∑Y<br>a * ∑X + b * ∑X^2 + c * ∑X^3 = ∑(X * Y)<br>a * ∑X^2 + b * ∑X^3 + c * ∑X^4 = ∑(X^2 * Y)"),3==q&&(Qt="a * n + b * ∑(1 / X) = ∑Y<br>a * ∑(1 / X) + b * ∑(1 / X^2) = ∑(Y * X)"),4==q&&(Qt="lna * n + lnb * ∑X = ∑lnY<br>lna * ∑X + lnb * ∑X^2 = ∑(X * lnY)"),5==q&&(Qt="a * n + b * ∑lnX = ∑Y<br>a * ∑lnX + b * ∑ln(X^2) = ∑(Y * lnX)"),6==q&&(Qt="lna * n + lnb * ∑lnX = ∑lnY<br>lna * ∑lnX + lnb * ∑lnX^2 = ∑(X * lnY)");var Ut="";0==q&&(Ut="a * "+k+" + b * "+Dt+" = "+Ct+"<br>a * "+Dt+" + b * "+$+" = "+tt),1==q&&(Ut="a * "+k+" + b * "+at+" = "+dt+"<br>a * "+at+" + b * "+nt+" = "+it),2==q&&(Ut="a * "+k+" + b * "+Dt+" + c * "+$+" = "+Ct+"<br>a * "+Dt+" + b * "+$+" + c * "+ht+" = "+tt+"<br>a * "+$+" + b * "+ht+" + c * "+Ft+" = "+bt),3==q&&(Ut="a * "+k+" + b * "+ct+" = "+Ct+"<br>a * "+ct+" + b * "+xt+" = "+vt),4==q&&(Ut="a * "+k+" + b * "+Dt+" = "+dt+"<br>a * "+Dt+" + b * "+$+" = "+Yt),5==q&&(Ut="a * "+k+" + b * "+at+" = "+Ct+"<br>a * "+at+" + b * "+yt+" = "+wt),6==q&&(Ut="a * "+k+" + b * "+Dt+" = "+dt+"<br>a * "+Dt+" + b * "+$+" = "+Yt);var Wt="";0!=q&&1!=q&&3!=q&&4!=q&&5!=q&&6!=q||(Wt="<h3>Lets calculate the values of a and b:<br><br>a = "+z+"; b = "+G+"</h3>"),2==q&&(Wt='<h3>To find a, b, c - we use Cramer method:<br><br>First, lets calculate the Cramer denominator(D), for this we construct a matrix 1:</h3><h4>Matrix 1</h4><table class="generate-table"><tbody><tr><td>'+k+"</td><td>"+Dt+"</td><td>"+$+"</td><td>"+k+"</td><td>"+Dt+"</td></tr><tr><td>"+Dt+"</td><td>"+$+"</td><td>"+ht+"</td><td>"+Dt+"</td><td>"+$+"</td></tr><tr><td>"+$+"</td><td>"+ht+"</td><td>"+Ft+"</td><td>"+$+"</td><td>"+ht+"</td></tr></tbody></table><h3>D = ("+k+" * "+$+" * "+Ft+") + ("+Dt+" * "+ht+" * "+$+") + ("+$+" * "+Dt+" * "+ht+") - ("+$+" * "+$+" * "+$+") - ("+ht+" * "+ht+" * "+k+") - ("+Ft+" * "+Dt+" * "+Dt+") = "+K+'</h3><h3>Now lets calculate the first Cramer numerator(Da), for this we construct a matrix 2:</h3><h4>Matrix 2</h4><table class="generate-table"><tbody><tr><td>'+Ct+"</td><td>"+Dt+"</td><td>"+$+"</td><td>"+Ct+"</td><td>"+Dt+"</td></tr><tr><td>"+tt+"</td><td>"+$+"</td><td>"+ht+"</td><td>"+tt+"</td><td>"+$+"</td></tr><tr><td>"+bt+"</td><td>"+ht+"</td><td>"+Ft+"</td><td>"+bt+"</td><td>"+ht+"</td></tr></tbody></table><h3>Da = ("+Ct+" * "+$+" * "+Ft+") + ("+Dt+" * "+ht+" * "+bt+") + ("+$+" * "+tt+" * "+ht+") - ("+bt+" * "+$+" * "+$+") - ("+ht+" * "+ht+" * "+Ct+") - ("+Ft+" * "+tt+" * "+Dt+") = "+O+'</h3><h3>Now lets calculate the second numerator of Cramer(Db), for this we construct a matrix 3:</h3> <h4>Matrix 3</h4><table class="generate-table"><tbody><tr><td>'+k+"</td><td>"+Ct+"</td><td>"+$+"</td><td>"+k+"</td><td>"+Ct+"</td></tr><tr><td>"+Dt+"</td><td>"+tt+"</td><td>"+ht+"</td><td>"+Dt+"</td><td>"+tt+"</td></tr><tr><td>"+$+"</td><td>"+bt+"</td><td>"+Ft+"</td><td>"+$+"</td><td>"+bt+"</td></tr></tbody></table><h3>Db = ("+k+" * "+tt+" * "+Ft+") + ("+Ct+" * "+ht+" * "+$+") + ("+$+" * "+Dt+" * "+bt+") - ("+$+" * "+tt+" * "+$+") - ("+bt+" * "+ht+" * "+k+") - ("+Ft+" * "+Dt+" * "+Ct+") = "+P+'</h3><h3>Now lets calculate the third numerator of Cramer(Dc), for this we construct a matrix 4:</h3><h4>Matrix 4</h4><table class="generate-table"><tbody><tr><td>'+k+"</td><td>"+Dt+"</td><td>"+Ct+"</td><td>"+k+"</td><td>"+Dt+"</td></tr><tr><td>"+Dt+"</td><td>"+$+"</td><td>"+tt+"</td><td>"+Dt+"</td><td>"+$+"</td></tr><tr><td>"+$+"</td><td>"+ht+"</td><td>"+bt+"</td><td>"+$+"</td><td>"+ht+"</td></tr></tbody></table><h3>Dc = ("+k+" * "+$+" * "+bt+") + ("+Dt+" * "+tt+" * "+$+") + ("+Ct+" * "+Dt+" * "+ht+") - ("+$+" * "+$+" * "+Ct+") - ("+ht+" * "+tt+" * "+k+") - ("+bt+" * "+Dt+" * "+Dt+") = "+Q+"</h3><h3>Now lets calculate the values a, b, c:<br><br>a = Da / D = "+z+";<br>b = Db / D = "+G+";<br>c = Dc / D = "+J+";</h3>");var Zt="";0==q&&(Zt=""+G+" * X + "+z),1==q&&(Zt="e^"+z+" * x^"+G+"<br><br>Lets get rid of the exponent and the equation will take the following form:<br><br>Ymod = "+U+" * x^"+G),2==q&&(Zt=""+z+" + ("+G+" * X) + ("+J+" * X^2)"),3==q&&(Zt=""+z+" + ("+G+" / X)"),4==q&&(Zt=""+U+" * e^("+G+" * X)"),5==q&&(Zt=""+z+" + ("+G+" * lnX)"),6==q&&(Zt="e^"+z+" * e^("+G+"^X)<br><br>Lets get rid of the exponentials and the equation will take the following form:<br><br>Ymod = "+U+" * "+W+"^X");var $t="Index";if(0==q&&($t="Coefficient"),Kt=["<h2>Solution</h2><h3>The regression equation is:<br><br>Y = "+Pt+"</h3><h3>Let us calculate the parameters of the equation through the system of linear equations<br><br>System of linear equations for finding the parameters of the equation:<br><br>"+Qt+"</h3><h3>To solve the system of equations, we construct and calculate the values of table 1:</h3>"],document.getElementById("generate1").innerHTML=Kt.join("\n"),Kt=["<h3>Now the system of linear equations will have the following form:<br><br>"+Ut+"</h3>"+Wt+"<h3>The regression equation will be as follows:<br><br>Ymod = "+Zt+"</h3><h3>For further solution and quality assessment of the model, we will build and calculate the values of the table 2:</h3>"],document.getElementById("generate3").innerHTML=Kt.join("\n"),0==q){for(Jt=['<table class="generate-table"><h4>Table 1<h4>'],Jt.push("<tr><td></td><td>X</td><td>Y</td><td>X^2</td><td>X * Y</td></tr>"),S=0;k>S;S++)Jt.push("<tr><td>"+(S+1)+"</td><td>"+C[S]+"</td><td>"+A[S]+"</td><td>"+Z[S]+"</td><td>"+_[S]+"</td></tr>");for(Jt.push("<tr><td>Sum</td><td>"+Dt+"</td><td>"+Ct+"</td><td>"+$+"</td><td>"+tt+"</td></tr></table>"),document.getElementById("generate2").innerHTML=Jt.join("\n"),Jt=['<table class="generate-table"><h4>Table 2<h4>'],Jt.push("<tr><td></td><td>Y</td><td>Ymod</td><td>(Yaverage - Ymod)^2</td><td>(Y - Yaverage)^2</td></tr>"),S=0;k>S;S++)Jt.push("<tr><td>"+(S+1)+"</td><td>"+A[S]+"</td><td>"+At[S]+"</td><td>"+Bt[S]+"</td><td>"+Lt[S]+"</td></tr>");Jt.push("<tr><td>Sum</td><td>"+Ct+"</td><td></td><td>"+Et+"</td><td>"+Rt+"</td></tr>"),Jt.push("<tr><td>Average</td><td>"+Nt+"</td><td></td><td></td><td></td></tr></table>"),document.getElementById("generate4").innerHTML=Jt.join("\n"),Kt=["<h3>Lets calculate the correlation coefficient according to the formula:<br><br>R = &radic;<span> ∑((Yaverage - Ymod)^2) / ∑((Y - Yaverage)^2)</span><br><br>R = &radic;<span> "+Et+" / "+Rt+"</span> = "+Tt+"</h3><h3>To assess the relationship between X and Y, use the table 3:</h3>"],document.getElementById("generate5").innerHTML=Kt.join("\n")}if(1==q){for(Jt=['<table class="generate-table"><h4>Table 1<h4>'],Jt.push("<tr><td></td><td>lnX</td><td>lnY</td><td>lnX^2</td><td>lnX * lnY</td></tr>"),S=0;k>S;S++)Jt.push("<tr><td>"+(S+1)+"</td><td>"+et[S]+"</td><td>"+rt[S]+"</td><td>"+ot[S]+"</td><td>"+lt[S]+"</td></tr>");Jt.push("<tr><td>Sum</td><td>"+at+"</td><td>"+dt+"</td><td>"+nt+"</td><td>"+it+"</td></tr></table>"),document.getElementById("generate2").innerHTML=Jt.join("\n")}if(2==q){for(Jt=['<table class="generate-table"><h4>Table 1<h4>'],Jt.push("<tr><td></td><td>X</td><td>Y</td><td>X^2</td><td>X^3</td><td>X^4</td><td>X * Y</td> <td>X^2 * Y</td></tr>"),S=0;k>S;S++)Jt.push("<tr><td>"+(S+1)+"</td><td>"+C[S]+"</td><td>"+A[S]+"</td><td>"+Z[S]+"</td><td>"+st[S]+"</td><td>"+pt[S]+"</td><td>"+_[S]+"</td><td>"+ut[S]+"</td></tr>");Jt.push("<tr><td>Sum</td><td>"+Dt+"</td><td>"+Ct+"</td><td>"+$+"</td><td>"+ht+"</td><td>"+Ft+"</td><td>"+tt+"</td><td>"+bt+"</td></tr></table>"),document.getElementById("generate2").innerHTML=Jt.join("\n")}if(3==q){for(Jt=['<table class="generate-table"><h4>Table 1<h4>'],Jt.push("<tr><td></td><td>Y</td><td>1 / X</td><td>1 / X^2</td><td>Y / X</td></tr>"),S=0;k>S;S++)Jt.push("<tr><td>"+(S+1)+"</td><td>"+A[S]+"</td><td>"+ft[S]+"</td><td>"+mt[S]+"</td><td>"+gt[S]+"</td></tr>");Jt.push("<tr><td>Sum</td><td>"+Ct+"</td><td>"+ct+"</td><td>"+xt+"</td><td>"+vt+"</td></tr></table>"),document.getElementById("generate2").innerHTML=Jt.join("\n")}if(4==q){for(Jt=['<table class="generate-table"><h4>Table 1<h4>'],Jt.push("<tr><td></td><td>X</td><td>lnY</td><td>X^2</td><td>X * lnY</td></tr>"),S=0;k>S;S++)Jt.push("<tr><td>"+(S+1)+"</td><td>"+C[S]+"</td><td>"+rt[S]+"</td><td>"+Z[S]+"</td><td>"+Xt[S]+"</td></tr>");Jt.push("<tr><td>Sum</td><td>"+Dt+"</td><td>"+dt+"</td><td>"+$+"</td><td>"+Yt+"</td></tr></table>"),document.getElementById("generate2").innerHTML=Jt.join("\n")}if(5==q){for(Jt=['<table class="generate-table"><h4>Table 1<h4>'],Jt.push("<tr><td></td><td>Y</td><td>lnX</td><td>(lnX)^2</td><td>Y * lnX</td></tr>"),S=0;k>S;S++)Jt.push("<tr><td>"+(S+1)+"</td><td>"+A[S]+"</td><td>"+et[S]+"</td><td>"+ot[S]+"</td><td>"+Mt[S]+"</td></tr>");Jt.push("<tr><td>Sum</td><td>"+Ct+"</td><td>"+at+"</td><td>"+yt+"</td><td>"+wt+"</td></tr></table>"),document.getElementById("generate2").innerHTML=Jt.join("\n")}if(6==q){for(Jt=['<table class="generate-table"><h4>Table 1<h4>'],Jt.push("<tr><td></td><td>X</td><td>lnY</td><td>X^2</td><td>X * lnY</td></tr>"),S=0;k>S;S++)Jt.push("<tr><td>"+(S+1)+"</td><td>"+C[S]+"</td><td>"+rt[S]+"</td><td>"+Z[S]+"</td><td>"+Xt[S]+"</td></tr>");Jt.push("<tr><td>Sum</td><td>"+Dt+"</td><td>"+dt+"</td><td>"+$+"</td><td>"+Yt+"</td></tr></table>"),document.getElementById("generate2").innerHTML=Jt.join("\n")}if(1==q||2==q||3==q||4==q||5==q||6==q){for(Jt=['<table class="generate-table"><h4>Table 2<h4>'],Jt.push("<tr><td></td><td>Y</td><td>Ymod</td><td>(Y-Ymod)^2</td><td>(Y - Yaverage)^2</td></tr>"),S=0;k>S;S++)Jt.push("<tr><td>"+(S+1)+"</td><td>"+A[S]+"</td><td>"+At[S]+"</td><td>"+It[S]+"</td><td>"+Lt[S]+"</td></tr> ");Jt.push("<tr><td>Sum</td><td>"+Ct+"</td><td></td><td>"+Ht+"</td><td>"+Rt+"</td></tr>"),Jt.push("<tr><td>Average</td><td>"+Nt+"</td><td></td><td></td><td></td></tr></table>"),document.getElementById("generate4").innerHTML=Jt.join("\n"),Kt=["<h3>Lets calculate the correlation index by the formula:<br><br>R = &radic;<span> 1 - (∑(Y - Ymod)^2) / ∑(Y - Yaverage)^2))</span><br><br>R = &radic;<span> 1 - ("+Ht+" / "+Rt+")</span> = "+Tt+"</h3><h3>To assess the relationship between X and Y, use the table 3:</h3>"],document.getElementById("generate5").innerHTML=Kt.join("\n")}Jt=['<table class="generate-table"><h4>Table 3<h4><tr><td>R = 0</td><td>No relationship</td></tr><tr><td>0 < R < 0.2</td><td>Very low relationship</td></tr><tr><td>0.2 < R < 0.3</td><td>Low relationship</td></tr><tr><td>0.3 < R < 0.5</td><td>Moderate relationship</td></tr><tr><td>0.5 < R < 0.7</td><td>Average relationship</td></tr><tr><td>0.7 < R < 0.9</td><td>High relationship</td></tr><tr><td>0.9 < R < 1</td><td>Very high relationship</td></tr><tr><td>R = 1</td><td>Functional relationship</td></tr></table>'],document.getElementById("generate6").innerHTML=Jt.join("\n"),Kt=["<div>"],0==Tt&&Kt.push("<h3>"+$t+" of correlation = "+Tt+" - The relationship between X and Y - no relationship</h3>"),Tt>0&&.2>Tt&&Kt.push("<h3>"+$t+" of correlation = "+Tt+" - The relationship between X and Y - very low</h3>"),Tt>=.2&&.3>Tt&&Kt.push("<h3>"+$t+" of correlation = "+Tt+" - The relationship between X and Y - low</h3>"),Tt>=.3&&.5>Tt&&Kt.push("<h3>"+$t+" of correlation = "+Tt+" - The relationship between X and Y - moderate</h3>"),Tt>=.5&&.7>Tt&&Kt.push("<h3>"+$t+" of correlation = "+Tt+" - The relationship between X and Y - average</h3>"),Tt>=.7&&.9>Tt&&Kt.push("<h3>"+$t+" of correlation = "+Tt+" - The relationship between X and Y - high</h3>"),Tt>=.9&&1>Tt&&Kt.push("<h3>"+$t+" of correlation = "+Tt+" - The relationship between X and Y - very high</h3>"),1==Tt&&Kt.push("<h3>"+$t+" of correlation = "+Tt+" - The relationship between X and Y - functional</h3>"),Kt.push("</div>"),document.getElementById("generate7").innerHTML=Kt.join("\n"),Kt=["<h3>Calculation "+$t+" of determination:<br><br>Since "+$t+" of determination is "+$t+" correlation to the second degree, then:<br><br>R^2 = "+kt+"</h3><h3>"+$t+" of determination = "+kt+" - By "+Vt+"% variation in Y is due to variation in X; "+zt+"% variation of other factors</h3>"],document.getElementById("generate8").innerHTML=Kt.join("\n"),Kt=["<h3>Calculation Fisher criterion by the formula:<br><br>F = (R^2 / (1 - R^2)) * (n - "+Ot+")<br><br>F = ("+kt+" / (1 - "+kt+")) * ("+k+" - "+Ot+") = "+jt+"<br><br>Fisher table value = "+qt+"</h3>"],document.getElementById("generate9").innerHTML=Kt.join("\n"),Kt=["<div>"],jt>qt&&Kt.push("<h3>Since "+jt+" > "+qt+", then "+$t+" of determination is statistically significant and the regression equation is significant in general</h3>"),qt>jt&&Kt.push("<h3>Since "+jt+" < "+qt+", then "+$t+" of determination is not statistically significant and the regression equation is not significant in general</h3>"),Kt.push("</div>"),document.getElementById("generate10").innerHTML=Kt.join("\n"),Kt=["<div>"],Kt.push("<h3>Сalculate the approximation error by the formula:<br><br>A% = (1 / n) * ∑((Y - Ymod) / Y) * 100<br><br>A% = "+Gt+"%</h3>"),7>Gt&&Kt.push("<h3>Since A% = "+Gt+" < 7%, then the model is of high quality</h3>"),7==Gt&&10>=Gt&&Kt.push("<h3>Since A% = "+Gt+" and is in the range from 7% to 10%, then the model is acceptable</h3>"),Gt>7&&Kt.push("<h3>Since A% = "+Gt+" > 10%, then the model is of low quality and this regression equation is not desirable to use</h3>"),Kt.push("</div>"),document.getElementById("generate11").innerHTML=Kt.join("\n")}}