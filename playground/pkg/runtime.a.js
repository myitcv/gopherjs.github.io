p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �L���runtimeruntimegithub.com/gopherjs/gopherjs/js�	epackage runtime
import js "github.com/gopherjs/gopherjs/js"
func @"".Breakpoint() ()
func @"".Caller(@"".skip int) (@"".pc uintptr, @"".file string, @"".line int, @"".ok bool)
const @"".Compiler = "gopherjs"
type @"".Error interface { @"".Error() (? string); @"".RuntimeError() () }
type @"".Func struct { @"".opaque struct {  } }
func (? *@"".Func) @"".Entry() (? uintptr)
func (? *@"".Func) @"".FileLine(@"".pc uintptr) (@"".file string, @"".line int)
func (? *@"".Func) @"".Name() (? string)
func @"".FuncForPC(@"".pc uintptr) (? *@"".Func)
func @"".GC() ()
const @"".GOARCH = "js"
func @"".GOMAXPROCS(@"".n int) (? int)
const @"".GOOS = "darwin"
func @"".GOROOT() (? string)
func @"".Goexit() ()
func @"".Gosched() ()
func @"".LockOSThread() ()
var @"".MemProfileRate int
type @"".MemStats struct { @"".Alloc uint64; @"".TotalAlloc uint64; @"".Sys uint64; @"".Lookups uint64; @"".Mallocs uint64; @"".Frees uint64; @"".HeapAlloc uint64; @"".HeapSys uint64; @"".HeapIdle uint64; @"".HeapInuse uint64; @"".HeapReleased uint64; @"".HeapObjects uint64; @"".StackInuse uint64; @"".StackSys uint64; @"".MSpanInuse uint64; @"".MSpanSys uint64; @"".MCacheInuse uint64; @"".MCacheSys uint64; @"".BuckHashSys uint64; @"".GCSys uint64; @"".OtherSys uint64; @"".NextGC uint64; @"".LastGC uint64; @"".PauseTotalNs uint64; @"".PauseNs [256]uint64; @"".PauseEnd [256]uint64; @"".NumGC uint32; @"".EnableGC bool; @"".DebugGC bool; @"".BySize [61]struct { @"".Size uint32; @"".Mallocs uint64; @"".Frees uint64 } }
func @"".NumCPU() (? int)
func @"".NumGoroutine() (? int)
func @"".ReadMemStats(@"".m *@"".MemStats) ()
func @"".SetBlockProfileRate(@"".rate int) ()
func @"".SetFinalizer(@"".x interface {  }, @"".f interface {  }) ()
func @"".Stack(@"".buf []byte, @"".all bool) (? int)
type @"".TypeAssertionError struct { @"".interfaceString string; @"".concreteString string; @"".assertedString string; @"".missingMethod string }
func (? *@"".TypeAssertionError) @"".Error() (? string)
func (? *@"".TypeAssertionError) @"".RuntimeError() ()
func @"".UnlockOSThread() ()
type @"".eface struct { @""._type *struct { @""._string *string } }
type @"".errorString string
func (? @"".errorString) @"".Error() (? string)
func (? @"".errorString) @"".RuntimeError() ()
func (? *@"".errorString) @"".Error() (? string)
func (? *@"".errorString) @"".RuntimeError() ()
type @"".stringer interface { @"".String() (? string) }
$$
5A/A=$packages["github.com/gopherjs/gopherjs/js"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} B��B=$pkg.eface=$newType(0,$kindStruct,"runtime.eface","eface","runtime",function(_type_){this.$val=this;if(arguments.length===0){this._type=AM.nil;return;}this._type=_type_;});BB.init([{prop:"_type",name:"_type",pkg:"runtime",typ:AM,tag:""}]);eface
runtime.AI
runtime.AL
runtime.AMruntime.eface M��M=$pkg.MemStats=$newType(0,$kindStruct,"runtime.MemStats","MemStats","runtime",function(Alloc_,TotalAlloc_,Sys_,Lookups_,Mallocs_,Frees_,HeapAlloc_,HeapSys_,HeapIdle_,HeapInuse_,HeapReleased_,HeapObjects_,StackInuse_,StackSys_,MSpanInuse_,MSpanSys_,MCacheInuse_,MCacheSys_,BuckHashSys_,GCSys_,OtherSys_,NextGC_,LastGC_,PauseTotalNs_,PauseNs_,PauseEnd_,NumGC_,EnableGC_,DebugGC_,BySize_){this.$val=this;if(arguments.length===0){this.Alloc=new $Uint64(0,0);this.TotalAlloc=new $Uint64(0,0);this.Sys=new $Uint64(0,0);this.Lookups=new $Uint64(0,0);this.Mallocs=new $Uint64(0,0);this.Frees=new $Uint64(0,0);this.HeapAlloc=new $Uint64(0,0);this.HeapSys=new $Uint64(0,0);this.HeapIdle=new $Uint64(0,0);this.HeapInuse=new $Uint64(0,0);this.HeapReleased=new $Uint64(0,0);this.HeapObjects=new $Uint64(0,0);this.StackInuse=new $Uint64(0,0);this.StackSys=new $Uint64(0,0);this.MSpanInuse=new $Uint64(0,0);this.MSpanSys=new $Uint64(0,0);this.MCacheInuse=new $Uint64(0,0);this.MCacheSys=new $Uint64(0,0);this.BuckHashSys=new $Uint64(0,0);this.GCSys=new $Uint64(0,0);this.OtherSys=new $Uint64(0,0);this.NextGC=new $Uint64(0,0);this.LastGC=new $Uint64(0,0);this.PauseTotalNs=new $Uint64(0,0);this.PauseNs=AN.zero();this.PauseEnd=AN.zero();this.NumGC=0;this.EnableGC=false;this.DebugGC=false;this.BySize=AP.zero();return;}this.Alloc=Alloc_;this.TotalAlloc=TotalAlloc_;this.Sys=Sys_;this.Lookups=Lookups_;this.Mallocs=Mallocs_;this.Frees=Frees_;this.HeapAlloc=HeapAlloc_;this.HeapSys=HeapSys_;this.HeapIdle=HeapIdle_;this.HeapInuse=HeapInuse_;this.HeapReleased=HeapReleased_;this.HeapObjects=HeapObjects_;this.StackInuse=StackInuse_;this.StackSys=StackSys_;this.MSpanInuse=MSpanInuse_;this.MSpanSys=MSpanSys_;this.MCacheInuse=MCacheInuse_;this.MCacheSys=MCacheSys_;this.BuckHashSys=BuckHashSys_;this.GCSys=GCSys_;this.OtherSys=OtherSys_;this.NextGC=NextGC_;this.LastGC=LastGC_;this.PauseTotalNs=PauseTotalNs_;this.PauseNs=PauseNs_;this.PauseEnd=PauseEnd_;this.NumGC=NumGC_;this.EnableGC=EnableGC_;this.DebugGC=DebugGC_;this.BySize=BySize_;});��M.init([{prop:"Alloc",name:"Alloc",pkg:"",typ:$Uint64,tag:""},{prop:"TotalAlloc",name:"TotalAlloc",pkg:"",typ:$Uint64,tag:""},{prop:"Sys",name:"Sys",pkg:"",typ:$Uint64,tag:""},{prop:"Lookups",name:"Lookups",pkg:"",typ:$Uint64,tag:""},{prop:"Mallocs",name:"Mallocs",pkg:"",typ:$Uint64,tag:""},{prop:"Frees",name:"Frees",pkg:"",typ:$Uint64,tag:""},{prop:"HeapAlloc",name:"HeapAlloc",pkg:"",typ:$Uint64,tag:""},{prop:"HeapSys",name:"HeapSys",pkg:"",typ:$Uint64,tag:""},{prop:"HeapIdle",name:"HeapIdle",pkg:"",typ:$Uint64,tag:""},{prop:"HeapInuse",name:"HeapInuse",pkg:"",typ:$Uint64,tag:""},{prop:"HeapReleased",name:"HeapReleased",pkg:"",typ:$Uint64,tag:""},{prop:"HeapObjects",name:"HeapObjects",pkg:"",typ:$Uint64,tag:""},{prop:"StackInuse",name:"StackInuse",pkg:"",typ:$Uint64,tag:""},{prop:"StackSys",name:"StackSys",pkg:"",typ:$Uint64,tag:""},{prop:"MSpanInuse",name:"MSpanInuse",pkg:"",typ:$Uint64,tag:""},{prop:"MSpanSys",name:"MSpanSys",pkg:"",typ:$Uint64,tag:""},{prop:"MCacheInuse",name:"MCacheInuse",pkg:"",typ:$Uint64,tag:""},{prop:"MCacheSys",name:"MCacheSys",pkg:"",typ:$Uint64,tag:""},{prop:"BuckHashSys",name:"BuckHashSys",pkg:"",typ:$Uint64,tag:""},{prop:"GCSys",name:"GCSys",pkg:"",typ:$Uint64,tag:""},{prop:"OtherSys",name:"OtherSys",pkg:"",typ:$Uint64,tag:""},{prop:"NextGC",name:"NextGC",pkg:"",typ:$Uint64,tag:""},{prop:"LastGC",name:"LastGC",pkg:"",typ:$Uint64,tag:""},{prop:"PauseTotalNs",name:"PauseTotalNs",pkg:"",typ:$Uint64,tag:""},{prop:"PauseNs",name:"PauseNs",pkg:"",typ:AN,tag:""},{prop:"PauseEnd",name:"PauseEnd",pkg:"",typ:AN,tag:""},{prop:"NumGC",name:"NumGC",pkg:"",typ:$Uint32,tag:""},{prop:"EnableGC",name:"EnableGC",pkg:"",typ:$Bool,tag:""},{prop:"DebugGC",name:"DebugGC",pkg:"",typ:$Bool,tag:""},{prop:"BySize",name:"BySize",pkg:"",typ:AP,tag:""}]);MemStats
runtime.AN
runtime.AO
runtime.APruntime.MemStats P��P=$pkg.Func=$newType(0,$kindStruct,"runtime.Func","Func","runtime",function(opaque_){this.$val=this;if(arguments.length===0){this.opaque=new AE.ptr();return;}this.opaque=opaque_;});��AH.methods=[{prop:"Entry",name:"Entry",pkg:"",typ:$funcType([],[$Uintptr],false)},{prop:"FileLine",name:"FileLine",pkg:"",typ:$funcType([$Uintptr],[$String,$Int],false)},{prop:"Name",name:"Name",pkg:"",typ:$funcType([],[$String],false)}];DP.init([{prop:"opaque",name:"opaque",pkg:"runtime",typ:AE,tag:""}]);Func
runtime.AE
runtime.AHruntime.Func VOV=$pkg.Error=$newType(8,$kindInterface,"runtime.Error","Error","runtime",null);��V.init([{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)},{prop:"RuntimeError",name:"RuntimeError",pkg:"",typ:$funcType([],[],false)}]);Errorruntime.Error W��W=$pkg.TypeAssertionError=$newType(0,$kindStruct,"runtime.TypeAssertionError","TypeAssertionError","runtime",function(interfaceString_,concreteString_,assertedString_,missingMethod_){this.$val=this;if(arguments.length===0){this.interfaceString="";this.concreteString="";this.assertedString="";this.missingMethod="";return;}this.interfaceString=interfaceString_;this.concreteString=concreteString_;this.assertedString=assertedString_;this.missingMethod=missingMethod_;});��AQ.methods=[{prop:"RuntimeError",name:"RuntimeError",pkg:"",typ:$funcType([],[],false)},{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];�FW.init([{prop:"interfaceString",name:"interfaceString",pkg:"runtime",typ:$String,tag:""},{prop:"concreteString",name:"concreteString",pkg:"runtime",typ:$String,tag:""},{prop:"assertedString",name:"assertedString",pkg:"runtime",typ:$String,tag:""},{prop:"missingMethod",name:"missingMethod",pkg:"runtime",typ:$String,tag:""}]);TypeAssertionError
runtime.AQruntime.TypeAssertionError Y^Y=$pkg.errorString=$newType(8,$kindString,"runtime.errorString","errorString","runtime",null);��Y.methods=[{prop:"RuntimeError",name:"RuntimeError",pkg:"",typ:$funcType([],[],false)},{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];errorStringruntime.errorString ZXZ=$pkg.stringer=$newType(8,$kindInterface,"runtime.stringer","stringer","runtime",null);QZ.init([{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}]);stringerruntime.stringer AEAE=$structType([]);AE AFAF=$chanType(AE,false,false);AF
runtime.AE AGAG=$funcType([],[],false);AG AHAH=$ptrType(P);AHruntime.Func AIAI=$ptrType($String);AI AJAJ=$ptrType(B);AJruntime.eface AKAK=$ptrType($emptyInterface);AK ALNAL=$structType([{prop:"_string",name:"_string",pkg:"runtime",typ:AI,tag:""}]);AL
runtime.AI AMAM=$ptrType(AL);AM
runtime.AL ANAN=$arrayType($Uint64,256);AN AO��AO=$structType([{prop:"Size",name:"Size",pkg:"",typ:$Uint32,tag:""},{prop:"Mallocs",name:"Mallocs",pkg:"",typ:$Uint64,tag:""},{prop:"Frees",name:"Frees",pkg:"",typ:$Uint64,tag:""}]);AO APAP=$arrayType(AO,61);AP
runtime.AO AQAQ=$ptrType(W);AQruntime.TypeAssertionError MemProfileRate ADbuildVersion      $pkg.MemProfileRate=524288;MemProfileRateruntime.MemProfileRate     AD="go1.4.2";buildVersionruntime.buildVersion runtime.initC�$C=function(){var $ptr,a,b;   �a=$packages[$externalize("github.com/gopherjs/gopherjs/js",$String)];  =$jsObjectPtr=a.Object.ptr;  |$jsErrorPtr=a.Error.ptr;  �$throwRuntimeError=(function(b){var $ptr,b;  $panic(new Y(b));    });  Fb=$ifaceNil;  Ob=new W.ptr("","","","");    };	    C();runtime.TypeAssertionErrorruntime.errorStringruntime.init runtime.GOROOTD��D=function(){var $ptr,a,b;  �a=$global.process;    if(a===undefined){  �return"/";    }  �b=a.env.GOROOT;    if(!(b===undefined)){  (return $internalize(b,$String);    }  Creturn"/usr/local/Cellar/go/1.4.2/libexec";    };$pkg.GOROOT=D;GOROOTruntime.GOROOT runtime.BreakpointE=E=function(){var $ptr;  pdebugger;    };$pkg.Breakpoint=E;
Breakpointruntime.Breakpoint runtime.CallerF�F=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;c="";d=0;e=false;  �f=new($global.Error)().stack.split($externalize("\n",$String))[(a+2>>0)];    if(f===undefined){    g=0;h="";i=0;j=false;b=g;c=h;d=i;e=j;return[b,c,d,e];    }  Uk=f.substring(($parseInt(f.indexOf($externalize("(",$String)))>>0)+1>>0,$parseInt(f.indexOf($externalize(")",$String)))>>0).split($externalize(":",$String));    l=0;m=$internalize(k[0],$String);n=$parseInt(k[1])>>0;o=true;b=l;c=m;d=n;e=o;return[b,c,d,e];    };$pkg.Caller=F;Callerruntime.Caller 
runtime.GCG'G=function(){var $ptr;    };$pkg.GC=G;GC
runtime.GC runtime.GoexitHnH=function(){var $ptr;  .$curGoroutine.exit=$externalize(true,$Bool);  `$throw(null);    };$pkg.Goexit=H;Goexitruntime.Goexit runtime.GOMAXPROCSI@I=function(a){var $ptr,a;  �return 1;    };$pkg.GOMAXPROCS=I;
GOMAXPROCSruntime.GOMAXPROCS runtime.GoschedJ�2J=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=[a];  �a[0]=new AF(0);  �$global.setTimeout($externalize((function(a){return function(){var $ptr;  �$close(a[0]);    };})(a),AG),0);  b=$recv(a[0]);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}b[0];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:J};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Gosched=J;Gosched
runtime.AE
runtime.AF
runtime.AGruntime.Gosched runtime.NumCPUK9K=function(){var $ptr;  )return 1;    };$pkg.NumCPU=K;NumCPUruntime.NumCPU runtime.NumGoroutineL\L=function(){var $ptr;  Preturn $parseInt($totalGoroutines)>>0;    };$pkg.NumGoroutine=L;NumGoroutineruntime.NumGoroutine runtime.ReadMemStatsN4N=function(a){var $ptr,a;    };$pkg.ReadMemStats=N;ReadMemStatsruntime.ReadMemStats runtime.SetFinalizerO8O=function(a,b){var $ptr,a,b;    };$pkg.SetFinalizer=O;SetFinalizerruntime.SetFinalizer (*runtime.Func).EntrywP.ptr.prototype.Entry=function(){var $ptr;  Creturn 0;    };P.prototype.Entry=function(){return this.$val.Entry();};Funcruntime.Func (*runtime.Func).FileLine��P.ptr.prototype.FileLine=function(a){var $ptr,a,b,c,d,e;b="";c=0;    d="";e=0;b=d;c=e;return[b,c];    };P.prototype.FileLine=function(a){return this.$val.FileLine(a);};Funcruntime.Func (*runtime.Func).NametP.ptr.prototype.Name=function(){var $ptr;  �return"";    };P.prototype.Name=function(){return this.$val.Name();};Funcruntime.Func runtime.FuncForPCQDQ=function(a){var $ptr,a;  
return AH.nil;    };$pkg.FuncForPC=Q;	FuncForPC
runtime.AHruntime.Funcruntime.FuncForPC runtime.SetBlockProfileRateR;R=function(a){var $ptr,a;    };$pkg.SetBlockProfileRate=R;SetBlockProfileRateruntime.SetBlockProfileRate runtime.StackS��S=function(a,b){var $ptr,a,b,c;  �c=new($global.Error)().stack;    if(c===undefined){  �return 0;    }  �return $copyString(a,$internalize(c.substr(($parseInt(c.indexOf($externalize("\n",$String)))>>0)+1>>0),$String));    };$pkg.Stack=S;Stackruntime.Stack runtime.LockOSThreadT1T=function(){var $ptr;    };$pkg.LockOSThread=T;LockOSThreadruntime.LockOSThread runtime.UnlockOSThreadU3U=function(){var $ptr;    };$pkg.UnlockOSThread=U;UnlockOSThreadruntime.UnlockOSThread *(*runtime.TypeAssertionError).RuntimeError~W.ptr.prototype.RuntimeError=function(){var $ptr;    };W.prototype.RuntimeError=function(){return this.$val.RuntimeError();};TypeAssertionErrorruntime.TypeAssertionError #(*runtime.TypeAssertionError).Error�W.ptr.prototype.Error=function(){var $ptr,a,b;  ra=this;  �b=a.interfaceString;    if(b===""){  �b="interface";    }    if(a.concreteString===""){   return"interface conversion: "+b+" is nil, not "+a.assertedString;    }    if(a.missingMethod===""){  nreturn"interface conversion: "+b+" is "+a.concreteString+", not "+a.assertedString;    }  �return"interface conversion: "+a.concreteString+" is not "+a.assertedString+": missing method "+a.missingMethod;    };W.prototype.Error=function(){return this.$val.Error();};TypeAssertionErrorruntime.TypeAssertionError runtime.newTypeAssertionErrorX�=X=function(a,b,c,d,e){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m;  �f="";g="";h="";i="";j=f;k=g;l=h;m=i;    if(!(a===AI.nil)){  �j=a.$get();    }    if(!(b===AI.nil)){  k=b.$get();    }    if(!(c===AI.nil)){  4l=c.$get();    }    if(!(d===AI.nil)){  Vm=d.$get();    }  he.$set(new W.ptr(j,k,l,m));    };newTypeAssertionError
runtime.AIruntime.TypeAssertionErrorruntime.newTypeAssertionError "(runtime.errorString).RuntimeError��Y.prototype.RuntimeError=function(){var $ptr,a;  a=this.$val;    };$ptrType(Y).prototype.RuntimeError=function(){return new Y(this.$get()).RuntimeError();};errorStringruntime.errorString (runtime.errorString).Error��Y.prototype.Error=function(){var $ptr,a;  *a=this.$val;  Kreturn"runtime error: "+a;    };$ptrType(Y).prototype.Error=function(){return new Y(this.$get()).Error();};errorStringruntime.errorString runtime.typestringAA��AA=function(a){var $ptr,a,b,c;  �c=$pointerOfStructConversion((b||(b=new AK(function(){return a;},function($v){a=$v;}))),AJ);  �return c._type._string.$get();    };
typestring
runtime.AJ
runtime.AKruntime.efaceruntime.typestring runtime.printanyAB��AB=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=a;if(b===$ifaceNil){$s=1;continue;}if($assertType(b,Z,true)[1]){$s=2;continue;}if($assertType(b,$error,true)[1]){$s=3;continue;}if($assertType(b,$Int,true)[1]){$s=4;continue;}if($assertType(b,$String,true)[1]){$s=5;continue;}$s=6;continue;  case 1:c=b;  console.log("nil");    $s=7;continue;  "case 2:d=b;  3e=d.String();$s=8;case 8:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}console.log(e);    $s=7;continue;  Fcase 3:f=b;  Tg=f.Error();$s=9;case 9:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}console.log(g);    $s=7;continue;  fcase 4:h=b.$val;  rconsole.log(h);    $s=7;continue;  |case 5:i=b.$val;  �console.log(i);    $s=7;continue;case 6:j=b;  �console.log("(",AA(a),") ",a);    case 7:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:AB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};printanyruntime.printanyruntime.stringerruntime.typestring runtime.panicwrapAC��AC=function(a,b,c){var $ptr,a,b,c;  $panic(new $String("value method "+a+"."+b+"."+c+" called using nil *"+b+" pointer"));    };	panicwrapruntime.panicwrap ��{"Base":7021,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/runtime/runtime.go","Base":1,"Size":4195,"Lines":[0,13,14,30,31,72,73,94,114,142,143,164,184,201,219,222,224,225,239,315,378,439,513,539,544,576,589,616,623,625,626,649,686,716,729,732,776,805,830,833,855,857,858,878,893,895,896,965,1052,1079,1104,1107,1227,1290,1292,1293,1305,1307,1308,1324,1374,1405,1407,1408,1437,1447,1449,1450,1467,1493,1547,1552,1554,1555,1575,1585,1587,1588,1614,1662,1664,1665,1688,1712,1767,1821,1892,1940,1980,2018,2019,2056,2113,2164,2208,2255,2304,2362,2363,2420,2449,2488,2541,2561,2601,2621,2662,2682,2733,2768,2816,2817,2851,2934,3011,3032,3140,3214,3235,3254,3273,3274,3310,3350,3371,3388,3405,3422,3425,3427,3428,3461,3463,3464,3502,3504,3505,3524,3585,3587,3588,3661,3738,3812,3813,3848,3860,3862,3863,3899,3900,3937,3939,3940,3979,4027,4051,4062,4065,4143,4145,4146,4169,4170],"Infos":null},{"Name":"/usr/local/go/src/runtime/error.go","Base":4197,"Size":2574,"Lines":[0,55,109,159,160,176,177,193,194,246,269,276,277,318,367,412,463,479,481,482,540,573,597,621,645,726,728,729,774,775,821,849,867,889,892,921,1000,1003,1031,1103,1134,1137,1223,1263,1265,1266,1289,1374,1403,1404,1421,1433,1436,1453,1465,1468,1485,1497,1500,1519,1535,1538,1584,1586,1587,1662,1686,1687,1726,1727,1765,1803,1805,1806,1832,1849,1851,1852,1892,1927,1952,1954,1955,1978,2017,2079,2155,2186,2210,2221,2236,2252,2272,2285,2304,2315,2326,2340,2351,2361,2398,2401,2403,2404,2434,2474,2572],"Infos":null},{"Name":"/usr/local/go/src/runtime/zgoos_darwin.go","Base":6772,"Size":77,"Lines":[0,34,35,51,52],"Infos":null},{"Name":"/usr/local/go/src/runtime/zversion.go","Base":6850,"Size":170,"Lines":[0,34,35,51,52,111,140],"Infos":null}]}
 