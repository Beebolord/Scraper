(window.dullscriptWebpackJsonp=window.dullscriptWebpackJsonp||[]).push([[38],{1384:function(C,F,b){function a(W){var G=fa.call(this)||this;G.$=W;G.Yb();return G}function e(W){switch(W){case 1:return"Edit";case 2:return"View";case 3:return"InstantView";default:return"Unknown"}}function d(W){switch(W){case 3:return"Word";case 2:return"PowerPoint";case 1:return"Excel";default:return"Unknown"}}function l(W,G,N,Y,V,da){var U=this;Y=void 0===Y?!1:Y;V=void 0===V?null:V;da=void 0===da?null:da;this.KBa=this.JBa=
0;this.Hvb=this.HOb=!1;this.Woa=null;this.pgb=!0;this.hSb=null;t.ULS.sendTraceTag(26019598,378,100,"Initializing SafeLinksManager.");this.vb=W;this.Ng=G;this.vMb=N;l.jh=da;this.mmg=Y?this.vb.Ta("SafeLinksHandlerWebServiceBase"):this.vb.Ta("WebServiceBase");this.Wlg=this.vb.Ta("SafeLinksHashedUserId");this.nDj=this.vb.Ta("SafeLinksWorkloadIdHeaderValue");this.$Pb=this.vb.xd("SafeLinksMaxGetPolicyBootRetries",2);this.aQb=this.vb.xd("SafeLinksMaxGetPolicyOnLinkClickRetries",1);this.jPb=this.isSafeLinksEnabledForUser();
this.iPb=this.T5h();t.ULS.sendTraceTag(26019599,378,50,"SafeLinksManager _isEnabledForUser={0}, _isEnabledForBrowser={1}",this.jPb,this.iPb);if(this.jPb&&this.iPb){W=(G=this.s0a())?G.IsSafeLinksEnabled.toLowerCase():"";N=this.fjd();t.ULS.sendTraceTag(36231312,378,50,"Cached values for IsSafeLinksEnabled: {0}, IsPolicyCookieExpired: {1}.",W,N);var Z=!G||"unknown"===W||G.WasServiceDown||N;if(G=this.fs())G.set("shouldGetSafeLinksDataFromServer",Z.toString()),G.set("isSafeLinksEnabledCacheValue",W.toString());
J.Health.instance.recordKpiUsage("SafeLinksGetPolicy1",0,"jpittsdirects",G);this.vb.Yx("LicensingForSafeLinksIsEnabled")&&this.vb.sa("LicensingForSafeLinksIsEnabled")&&V?(this.pgb=!1,V.execute(function(ca){ca.isFeatureEnabled("MsoUrlreputation",!0).then(function(ra){U.pgb=ra;U.pgb&&Z&&U.A8b(!0);return null})})):Z&&this.A8b(!0)}}function n(W,G,N,Y){this.vb=W;this.Ng=G;this.hdg=N;n.jh=Y}function r(W,G){this.Wtc=W;this.stopwatch=G}function h(W,G,N,Y,V,da){this.PolicyCookie=this.WebAffinitizedUrl=this.IsSafeLinksEnabled=
null;this.PolicyCookieTTL=0;this.WasServiceDown=!1;this.AffinitizedUrl=null;this.IsSafeLinksEnabled=W;this.WebAffinitizedUrl=G;this.PolicyCookie=N;this.PolicyCookieTTL=Y;this.WasServiceDown=V;this.AffinitizedUrl=da}b.r(F);var v=b(12);C=b(0);var w=b(5);F=b(212);var t=b(15),B=b(37);Object(C.a)(h,"SafeLinksData",null,[]);Object(C.a)(r,"SafeLinksGetUrlReputationRequestData",null,[]);var z=b(41),x=b(48);n.prototype.Aza=function(W,G,N){try{var Y=null;n.jh&&(Y=n.jh.Dc("WebServiceCall","SafeLinksGetUrlReputation"));
var V=new r(G,Y);Y={};Y.AffinitizedUrl=W;Y.TargetUrl=G;Y.PolicyCookie=N;var da=z.c(Y);this.Ng.Jl(this.hdg,2,da,null,!1,2,Object(B.a)(this,this.fui,"onGetUrlReputationSuccessCallback"),Object(B.a)(this,this.eui,"onGetUrlReputationFailureCallback"),V,void 0,void 0,3E3,3E3,"36");return!0}catch(U){t.ULS.sendTraceTag(588788033,378,10,U.message)}return!1};n.prototype.fui=function(W){var G="OnGetUrlReputationSuccessCallback: ",N=10,Y=W.data.state;try{var V=z.b(W.data.ae).reputationResults[0],da=V.navigateUrl.length,
U=Y.Wtc.length,Z=V.navigateUrl===Y.Wtc;V.navigateUrl&&0<V.navigateUrl.length&&(Y.Wtc=V.navigateUrl);G+=String.format("HttpStatus {0}, verdict {1}, clickedUrlLength = {2} navigateUrlLength {3}, navigateUrlSameAsClickedUrl {4}",W.data.httpStatus,V.verdict,U.toString(),da.toString(),Z.toString());N=50}catch(ca){G+=String.format("Exception {0}",ca.message)}this.MXe(Y,G,N)};n.prototype.eui=function(W){var G="OnGetUrlReputationFailureCallback: ",N=W.data.state;try{G+=String.format("HttpStatus {0}",W.data.httpStatus)}catch(Y){G+=
String.format("Exception {0}",Y.message)}this.MXe(N,G,10)};n.prototype.MXe=function(W,G,N){W.stopwatch&&(W.stopwatch.stop(),W.stopwatch=null);t.ULS.sendTraceTag(588788034,378,N,G);x.a.lf(W.Wtc,void 0,"noopener,noreferrer","SafeLinksNav")};n.jh=null;Object(C.a)(n,"SafeLinksNavigationHelper",null,[]);var y;(function(W){W[W.enabledByPolicy=0]="enabledByPolicy";W[W.disabledByPolicy=1]="disabledByPolicy";W[W.disabled_GetPolicyFailure=2]="disabled_GetPolicyFailure";W[W.disabled_PendingGetPolicyRequest=
3]="disabled_PendingGetPolicyRequest"})(y||(y={}));Object(C.b)("SafeLinksNavigationState",y);var J=b(93),E=b(935),A=b(279),H=b(231),S=b(789),Q=b(23),L=b(196),aa=b(177);l.prototype.Aza=function(W){if(!W)return t.ULS.sendTraceTag(593367827,378,10,"SafeLinksManager.TryNavigate: Null/Empty targetUrl"),!1;var G=this.J2h(W);t.ULS.sendTraceTag(594830615,378,50,"SafeLinksManager.TryNavigate: isSupportedHyperLinkType={0},_isEnabledForUser={1},_isEnabledForBrowser={2},_isUserLicensedForSafeLinks={3}",G,this.jPb,
this.iPb,this.pgb);if(!(G&&this.jPb&&this.iPb&&this.pgb))return!1;var N=this.afj();G=N.state;N=N.returnValue;t.ULS.sendTraceTag(595079385,378,50,"ShouldTryUsingSafeLinksService returned NavigationState={0}",y[G]);var Y=this.fs();Y&&Y.set("SafeLinksNavigationState",y[G]);J.Health.instance.recordKpiUsage("SafeLinksNavigations",0,"jpittsdirects",Y);if(!N)return 2!==G&&3!==G||J.Health.instance.recordKpiFailure("SafeLinksNavigations",y[G],!1,!0,null),!1;t.ULS.sendTraceTag(26019601,378,50,"Using safelinks to navigate hyperlink");
if(this.ifj())return this.fjd()?!1:this.pki.Aza(this.Ath(),W,this.uTe());if(!this.fjd())return this.b0f(W),!0;this.Woa=W;t.ULS.sendTraceTag(24462627,378,50,"Refreshing the cache as policy cookie expired.");this.Hvb=!1;this.A8b();return!0};l.prototype.J2h=function(W){W=W.toLowerCase();var G=this.vb.Uw("SafeLinksUnsupportedProtocols");if(G)for(var N=0;N<G.length;N++)if(W.startsWith(G[N]))return!1;return!0};l.prototype.A8b=function(W){W=void 0===W?!1:W;var G=this.fs();G&&G.set("isOnBootRequest",W.toString());
J.Health.instance.recordKpiUsage("SafeLinksGetPolicySuccessfulRequest",1,"jpittsdirects",G);J.Health.instance.recordKpiUsage("SafeLinksGetPolicyFailedRequest",0,"jpittsdirects",G);G=this.JYc("SafeLinksGetPolicy");this.Ng.Jl(this.gFh,1,null,null,!0,2,Object(B.a)(this,this.oHh,"getSafeLinksDataFromServer_OnSuccessCallback"),Object(B.a)(this,this.nHh,"getSafeLinksDataFromServer_OnFailureCallback"),G,void 0,void 0,void 0,void 0,"23");this.Hvb=W;this.HOb=!0;W?this.JBa++:this.KBa++};l.prototype.oHh=function(W){var G=
H.a.oli,N="";try{this.HOb=this.Hvb=!1;var Y=this.jtc(W.data.state).returnValue,V=Object.assign(new aa.a,{durationMs:Y});J.Health.instance.recordKpiSuccess("SafeLinksGetPolicySuccessfulRequest",V);t.ULS.sendTraceTag(594830614,378,50,"GetSafeLinksDataFromServer_OnSuccessCallback: HttpStatus {0}, data length {1}, Duration {2}",W.data.httpStatus,W.data.ae.length,Y);if(W.data.httpStatus!==H.a.JN)N="Unexpected httpStatus: "+W.data.httpStatus.toString();else{Y=null;try{Y=z.b(W.data.ae)}catch(xa){N="Exception:"+
xa.toString()+" deserializing response";return}if(Y){var da=Y.IsSafeLinksEnabled;if(void 0===da||null===da||0>=da.length)N="Invalid isSafeLinksEnabledString";else{t.ULS.sendTraceTag(594830613,378,50,"Retrieved isSafeLinksEnabledString {0}",da);var U=l.Xvd(da);if(void 0===Y.WebAffinitizedUrl||null===Y.WebAffinitizedUrl||0>=Y.WebAffinitizedUrl.length)N="Invalid WebAffinitizedUrl";else if(void 0===Y.PolicyCookie||null===Y.PolicyCookie||0>=Y.PolicyCookie.length)N="Invalid PolicyCookie";else if(void 0===
Y.PolicyCookieTTL||null===Y.PolicyCookieTTL)N="Invalid PolicyCookieTTL";else{var Z=Y.WebAffinitizedUrl,ca=Y.PolicyCookie,ra=Y.AffinitizedUrl,La=new Date;La.setMinutes(La.getMinutes()+(5<Y.PolicyCookieTTL?Y.PolicyCookieTTL-5:0));var na=La.getTime(),ma=new h(da,Z,ca,na,!1,ra);this.lNf(ma);G=W.data.httpStatus;this.Woa&&(U?(this.b0f(this.Woa),this.KBa=this.JBa=0):(t.ULS.sendTraceTag(26019602,378,50,"SafeLinks is disabled by admin; Navigating without SafeLinks"),J.Health.instance.recordKpiFailure("SafeLinksNavigations",
"disabledByPolicy",!0,!0,null),x.a.lY(this.Woa)),this.Woa=null)}}}else N="Error when serializing response into SafeLinksData. SafeLinksData is null."}}catch(xa){N="GetSafeLinksDataFromServer_OnSuccessCallback: Exception:  "+xa.toString()}finally{G!==H.a.JN&&this.LXe(G,N)}};l.prototype.nHh=function(W){this.HOb=!1;var G=500,N="";try{var Y=this.jtc(W.data.state).returnValue,V=Object.assign(new aa.a,{durationMs:Y});G=W.data.httpStatus;J.Health.instance.recordKpiFailure("SafeLinksGetPolicyFailedRequest",
"HttpStatusCode_"+G.toString(),!1,!0,V);N="Request Failed, Status="+S.a[W.data.status]+" Duration: "+Y}catch(da){N="GetSafeLinksDataFromServer_OnFailureCallback Exception: "+da.toString()}finally{this.LXe(G,N)}};l.prototype.LXe=function(W,G){G=void 0===G?"":G;try{if(t.ULS.sendTraceTag(594830612,378,10,"HandleGetPolicyRequestError: HttpStatus {0}, Error {1}",W,G),this.JBa<this.$Pb&&this.KBa<this.aQb)this.A8b(this.Hvb);else{this.Hvb=!1;t.ULS.sendTraceTag(24462656,378,10,"Exhausted all retries for SafeLinks GetPolicy call. OnBootRetries: {0}, OnClickRetries: {1}, HttpStatus: {2}, Error: {3}",
this.JBa,this.KBa,W,G);G=null;var N=this.fs();N&&(N.set("HttpStatus",W.toString()),G=Object.assign(new aa.a,{extendedProperties:N}));J.Health.instance.recordKpiFailure("SafeLinksGetPolicy1","GetPolicyRequestError",!1,!0,G);var Y=new h("false","","",0,!0,"");this.lNf(Y);this.Woa&&(t.ULS.sendTraceTag(26019603,378,50,"Error occurred during at-click GetPolicy call, NavigationState = {0}","disabled_GetPolicyFailure"),J.Health.instance.recordKpiFailure("SafeLinksNavigations","disabled_GetPolicyFailure",
!1,!0,null),x.a.lY(this.Woa),this.Woa=null)}}catch(V){t.ULS.sendTraceTag(594830611,378,10,"HandleGetPolicyRequestError: Exception {0}",V.toString())}};l.prototype.b0f=function(W){var G=this.uTe(),N=this.hLh(),Y={};Y.Url=W;Y.SafeLinksCookie=G;Y.CorrelationId=L.a.create().toString();Y.WorkloadId=this.nDj;Y.UserAgentInfo=Q.a.iXa+"|"+this.appName;t.ULS.sendTraceTag(23900187,378,50,"Validating hyperlink with request correlation: {0}",Y.CorrelationId);x.a.Rkc(x.a.pW(4),N,Y)};l.prototype.isSafeLinksEnabledForUser=
function(){var W=this.vb.Ta("IsSafeLinksEnabledForUser");return W?l.Xvd(W):!1};l.prototype.T5h=function(){var W=this.vb.Uw("SafeLinksDisabledBrowsers");if(Q.a.$z){if(this.vb.Yx("SafeLinksForTeamsIsEnabled")&&this.vb.sa("SafeLinksForTeamsIsEnabled"))return!0;if(Array.contains(W,"Electron"))return!1}else if(Array.contains(W,Q.a.iXa))return!1;return"officecomhwa"===(this.vb.Ta(w.AFrameworkApplication.Bza)||"").toLowerCase()?!1:!0};l.prototype.ifj=function(){return-1!==window.location.href.indexOf("&wd_slnh=1")?
!0:Q.a.$z};l.prototype.afj=function(){var W=0;var G=this.s0a(),N=G?G.IsSafeLinksEnabled:"";if(""!==N)return G.WasServiceDown?(t.ULS.sendTraceTag(51663971,378,50,"Failed to retrieve policy data"),{returnValue:!1,state:2}):"false"===N.toLowerCase()?(t.ULS.sendTraceTag(51664E3,378,50,"SafeLinks disabled for the user"),{returnValue:!1,state:1}):{returnValue:l.Xvd(N),state:W};if(this.HOb)return W=3,t.ULS.sendTraceTag(595079384,378,50,"Currently getting SafeLinks policy"),{returnValue:!1,state:W};if(this.JBa>=
this.$Pb||this.KBa>=this.aQb)return W=2,t.ULS.sendTraceTag(51664001,378,50,"Exhausted all retries- Failure in GetPolicy for SafeLinks ({0}/{1} boot, {2}/{3} onClick)",this.JBa,this.$Pb,this.KBa,this.aQb),{returnValue:!1,state:W};t.ULS.sendTraceTag(23900182,378,10,"Inconsistent SafeLinks state: SafeLinks cache data is null with no on boot request pending, and {0} retries left over. Perhaps LocalStorage is inaccessable.",this.$Pb+this.aQb-(this.JBa+this.KBa));return{returnValue:!0,state:W}};l.prototype.uTe=
function(){var W=this.s0a();return W?W.PolicyCookie:""};l.prototype.hLh=function(){var W=this.s0a();return W?W.WebAffinitizedUrl:""};l.prototype.Ath=function(){var W=this.s0a();return W?W.AffinitizedUrl:""};l.prototype.mzh=function(){var W=new Date;try{var G=this.s0a();W.setTime(G?G.PolicyCookieTTL:0)}catch(N){t.ULS.sendTraceTag(24462658,378,10,"Exception occured while fetching expiration time from cache: {0}",N)}return W};l.prototype.fjd=function(){var W=this.mzh();return!!W&&W.getTime()<Date.now()};
l.prototype.s0a=function(){if(!this.hSb){var W=E.a.instance.getItem(this.userId);if(!W||""===W)return null;this.hSb=JSON.parse(W)}return this.hSb};l.prototype.lNf=function(W){if(void 0===W||null===W)throw Error.argumentNull("safeLinksData");if(void 0===W.IsSafeLinksEnabled||null===W.IsSafeLinksEnabled||0>=W.IsSafeLinksEnabled.length)throw Error.argumentNull("safeLinksData.IsSafeLinksEnabled");this.hSb=W;W.WasServiceDown||this.vDj(W)};l.prototype.vDj=function(W){W=JSON.stringify(W);E.a.instance.setItem(this.userId,
W)};l.prototype.JYc=function(W){return void 0!==l.jh&&null!==l.jh?l.jh.Dc("WebServiceCall",W):null};l.prototype.jtc=function(W){if(void 0!==W&&null!==W){var G=W.Cc;W.stop();return{returnValue:G,stopwatch:null}}return{returnValue:null,stopwatch:W}};l.prototype.fs=function(){try{return new Map}catch(W){return null}};l.Xvd=function(W){return"false"!==W.toLowerCase()?!0:!1};Ll.Object.defineProperties(l.prototype,{appName:{configurable:!0,enumerable:!0,get:function(){return this.vMb}},nxc:{configurable:!0,
enumerable:!0,get:function(){return this.mmg}},userId:{configurable:!0,enumerable:!0,get:function(){return this.Wlg}},gFh:{configurable:!0,enumerable:!0,get:function(){var W=this.nxc?this.nxc+"/":"",G=new A.QueryStringBuilder("SafeLinksHandler.ashx");G.Xj("app",this.appName);this.vb.sa("SafeLinksUseDebugHeader")&&G.Xj("action","debug");return String.format("{0}{1}&{2}",W,G.toString(),w.AFrameworkApplication.Xi)}},xKh:{configurable:!0,enumerable:!0,get:function(){var W=this.nxc?this.nxc+"/":"",G=new A.QueryStringBuilder("SafeLinksHandler.ashx");
G.Xj("app",this.appName);this.vb.sa("SafeLinksUseDebugHeader")&&G.Xj("action","debug");G.Xj("slrt","GetUrlReputation");return String.format("{0}{1}&{2}",W,G.toString(),w.AFrameworkApplication.Xi)}},pki:{configurable:!0,enumerable:!0,get:function(){l.BKc||(l.BKc=new n(this.vb,this.Ng,this.xKh,l.jh));return l.BKc}}});l.jh=null;l.BKc=null;Object(C.a)(l,"SafeLinksManager",null,[315]);var fa=F.a;Em(a,fa);a.prototype.create=function(){this.Eb(this.$.ea.Ba(269)||new l(w.AFrameworkApplication.ha,w.AFrameworkApplication.Cd,
String.format("{0}-{1}",d(w.AFrameworkApplication.xa.Xa.Tk),e(w.AFrameworkApplication.xa.Xa.dMa))))};a.ja=function(W){W.ea.Ia(270,new a(W))};Object(C.a)(a,"SafeLinksManagerFactory",F.a,[]);Type.registerNamespace("_Ewa");Type.registerNamespace("Common.App.SafeLinks");(function(){v.a.Ga(function(W){a.ja(W)})})()}}]);

//# sourceMappingURL=EwaDS.safelinks.js.map