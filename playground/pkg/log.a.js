p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �����loglogfmt#github.com/gopherjs/gopherjs/nosyncioosruntimetime�&Hpackage log
import fmt "fmt"
import io "io"
import os "os"
import runtime "runtime"
import nosync "github.com/gopherjs/gopherjs/nosync"
import time "time"
func @"".Fatal(@"".v ...interface {  }) ()
func @"".Fatalf(@"".format string, @"".v ...interface {  }) ()
func @"".Fatalln(@"".v ...interface {  }) ()
func @"".Flags() (? int)
const @"".Ldate = 0x1
const @"".Llongfile = 0x8
const @"".Lmicroseconds = 0x4
type @"".Logger struct { @"".mu @"github.com/gopherjs/gopherjs/nosync".Mutex; @"".prefix string; @"".flag int; @"".out @"io".Writer; @"".buf []byte }
func (? *@"".Logger) @"".Fatal(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Fatalf(@"".format string, @"".v ...interface {  }) ()
func (? *@"".Logger) @"".Fatalln(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Flags() (? int)
func (? *@"".Logger) @"".Output(@"".calldepth int, @"".s string) (? error)
func (? *@"".Logger) @"".Panic(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Panicf(@"".format string, @"".v ...interface {  }) ()
func (? *@"".Logger) @"".Panicln(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Prefix() (? string)
func (? *@"".Logger) @"".Print(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Printf(@"".format string, @"".v ...interface {  }) ()
func (? *@"".Logger) @"".Println(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".SetFlags(@"".flag int) ()
func (? *@"".Logger) @"".SetPrefix(@"".prefix string) ()
func (? *@"".Logger) @"".formatHeader(@"".buf *[]byte, @"".t @"time".Time, @"".file string, @"".line int) ()
const @"".Lshortfile = 0x10
const @"".LstdFlags = 0x3
const @"".Ltime = 0x2
func @"".New(@"".out @"io".Writer, @"".prefix string, @"".flag int) (? *@"".Logger)
func @"".Panic(@"".v ...interface {  }) ()
func @"".Panicf(@"".format string, @"".v ...interface {  }) ()
func @"".Panicln(@"".v ...interface {  }) ()
func @"".Prefix() (? string)
func @"".Print(@"".v ...interface {  }) ()
func @"".Printf(@"".format string, @"".v ...interface {  }) ()
func @"".Println(@"".v ...interface {  }) ()
func @"".SetFlags(@"".flag int) ()
func @"".SetOutput(@"".w @"io".Writer) ()
func @"".SetPrefix(@"".prefix string) ()
type @"github.com/gopherjs/gopherjs/nosync".Mutex struct { @"github.com/gopherjs/gopherjs/nosync".locked bool }
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
-AA=$packages["fmt"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E3E=$packages["github.com/gopherjs/gopherjs/nosync"];a    $r=E.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["io"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["os"];a    $r=C.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["runtime"];a    $r=D.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["time"];a    $r=F.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} G�=G=$pkg.Logger=$newType(0,$kindStruct,"log.Logger","Logger","log",function(mu_,prefix_,flag_,out_,buf_){this.$val=this;if(arguments.length===0){this.mu=new E.Mutex.ptr();this.prefix="";this.flag=0;this.out=$ifaceNil;this.buf=Y.nil;return;}this.mu=mu_;this.prefix=prefix_;this.flag=flag_;this.out=out_;this.buf=buf_;});�CAC.methods=[{prop:"formatHeader",name:"formatHeader",pkg:"log",typ:$funcType([AA,F.Time,$String,$Int],[],false)},{prop:"Output",name:"Output",pkg:"",typ:$funcType([$Int,$String],[$error],false)},{prop:"Printf",name:"Printf",pkg:"",typ:$funcType([$String,AB],[],true)},{prop:"Print",name:"Print",pkg:"",typ:$funcType([AB],[],true)},{prop:"Println",name:"Println",pkg:"",typ:$funcType([AB],[],true)},{prop:"Fatal",name:"Fatal",pkg:"",typ:$funcType([AB],[],true)},{prop:"Fatalf",name:"Fatalf",pkg:"",typ:$funcType([$String,AB],[],true)},{prop:"Fatalln",name:"Fatalln",pkg:"",typ:$funcType([AB],[],true)},{prop:"Panic",name:"Panic",pkg:"",typ:$funcType([AB],[],true)},{prop:"Panicf",name:"Panicf",pkg:"",typ:$funcType([$String,AB],[],true)},{prop:"Panicln",name:"Panicln",pkg:"",typ:$funcType([AB],[],true)},{prop:"Flags",name:"Flags",pkg:"",typ:$funcType([],[$Int],false)},{prop:"SetFlags",name:"SetFlags",pkg:"",typ:$funcType([$Int],[],false)},{prop:"Prefix",name:"Prefix",pkg:"",typ:$funcType([],[$String],false)},{prop:"SetPrefix",name:"SetPrefix",pkg:"",typ:$funcType([$String],[],false)}];�G.init([{prop:"mu",name:"mu",pkg:"log",typ:E.Mutex,tag:""},{prop:"prefix",name:"prefix",pkg:"log",typ:$String,tag:""},{prop:"flag",name:"flag",pkg:"log",typ:$Int,tag:""},{prop:"out",name:"out",pkg:"log",typ:B.Writer,tag:""},{prop:"buf",name:"buf",pkg:"log",typ:Y,tag:""}]);Logger)github.com/gopherjs/gopherjs/nosync.Mutex	io.Writerlog.AAlog.ABlog.AC
log.Loggerlog.Y	time.Time YY=$sliceType($Uint8);Y ZZ=$arrayType($Uint8,32);Z AAAA=$ptrType(Y);AAlog.Y ABAB=$sliceType($emptyInterface);AB ACAC=$ptrType(G);AC
log.Logger Istd     I=H(C.Stderr,"",3);log.Newlog.std	os.Stderr log.NewHhH=function(a,b,c){var $ptr,a,b,c;  	�return new G.ptr(new E.Mutex.ptr(),b,c,a,Y.nil);    };$pkg.New=H;New)github.com/gopherjs/gopherjs/nosync.Mutex
log.Loggerlog.Newlog.Y log.itoaJ�5J=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h;  
�d=(b>>>0);    if((d===0)&&c<=1){  
�a.$set($append(a.$get(),48));  
�return;    }  4e=$clone(Z.zero(),Z);  @f=32;  Nwhile(true){if(!(d>0||c>0)){break;}  rf=f-(1)>>0;  yc=c-(1)>>0;  �((f<0||f>=e.length)?$throwRuntimeError("index out of range"):e[f]=((g=d%10,g===g?g:$throwRuntimeError("integer divide by zero"))<<24>>>24)+48<<24>>>24);  fd=(h=d/(10),(h===h&&h!==1/0&&h!==-1/0)?h>>>0:$throwRuntimeError("integer divide by zero"));    }  �a.$set($appendSlice(a.$get(),$subslice(new Y(e),f)));    };itoalog.Ylog.Zlog.itoa (*log.Logger).formatHeader��G.ptr.prototype.formatHeader=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �e=this;  �b=$clone(b,F.Time);  a.$set($appendSlice(a.$get(),new Y($stringToBytes(e.prefix))));  4if(!(((e.flag&7)===0))){$s=1;continue;}$s=2;continue;    case 1:  cif(!(((e.flag&1)===0))){$s=3;continue;}$s=4;continue;    case 3:  }g=b.Date();$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[0];i=f[1];j=f[2];  �J(a,h,4);  �a.$set($append(a.$get(),47));  �J(a,(i>>0),2);  �a.$set($append(a.$get(),47));  J(a,j,2);  a.$set($append(a.$get(),32));    case 4:  ;if(!(((e.flag&6)===0))){$s=6;continue;}$s=7;continue;    case 6:  el=b.Clock();$s=8;case 8:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;m=k[0];n=k[1];o=k[2];  �J(a,m,2);  �a.$set($append(a.$get(),58));  �J(a,n,2);  �a.$set($append(a.$get(),58));  �J(a,o,2);    if(!(((e.flag&4)===0))){  a.$set($append(a.$get(),46));  <J(a,(p=b.Nanosecond()/1000,(p===p&&p!==1/0&&p!==-1/0)?p>>0:$throwRuntimeError("integer divide by zero")),6);    }  ea.$set($append(a.$get(),32));    case 7:    case 2:    if(!(((e.flag&24)===0))){    if(!(((e.flag&16)===0))){  �q=c;  �r=c.length-1>>0;while(true){if(!(r>0)){break;}    if(c.charCodeAt(r)===47){  "q=c.substring((r+1>>0));  :break;    }  �r=r-(1)>>0;    }  Nc=q;    }  aa.$set($appendSlice(a.$get(),new Y($stringToBytes(c))));  �a.$set($append(a.$get(),58));  �J(a,d,-1);  �a.$set($appendSlice(a.$get(),new Y($stringToBytes(": "))));    }    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.formatHeader};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.formatHeader=function(a,b,c,d){return this.$val.formatHeader(a,b,c,d);};LoggerformatHeader~
log.Loggerlog.Ylog.itoa	time.Time (*log.Logger).Output��G.ptr.prototype.Output=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  Ic=this;  }d=$clone(F.Now(),F.Time);  �e="";  �f=0;  �c.mu.Lock();  �$deferred.push([$methodVal(c.mu,"Unlock"),[]]);    if(!(((c.flag&24)===0))){  Lc.mu.Unlock();  `g=false;  jh=D.Caller(a);e=h[1];f=h[2];g=h[3];    if(!g){  �e="???";  �f=0;    }  �c.mu.Lock();    }  �c.buf=$subslice(c.buf,0,0);  �$r=c.formatHeader((c.$ptr_buf||(c.$ptr_buf=new AA(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c))),d,e,f);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  c.buf=$appendSlice(c.buf,new Y($stringToBytes(b)));    if(b.length>0&&!((b.charCodeAt((b.length-1>>0))===10))){  Wc.buf=$append(c.buf,10);    }  wj=c.out.Write(c.buf);$s=2;case 2:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;k=i[1];  �return k;    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:G.ptr.prototype.Output};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};G.prototype.Output=function(a,b){return this.$val.Output(a,b);};Loggerlog.AA
log.Loggerlog.Ylog.formatHeader~runtime.Callertime.Now	time.Time (*log.Logger).Printf��G.ptr.prototype.Printf=function(a,b){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  c=this;  Fd=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;f=c.Output(2,e);$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Printf};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Printf=function(a,b){return this.$val.Printf(a,b);};Loggerfmt.Sprintf
log.Logger (*log.Logger).Print��G.ptr.prototype.Print=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;   c=A.Sprint(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Print};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Print=function(a){return this.$val.Print(a);};Logger
fmt.Sprint
log.Logger (*log.Logger).Println��G.ptr.prototype.Println=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;  �c=A.Sprintln(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Println};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Println=function(a){return this.$val.Println(a);};Loggerfmt.Sprintln
log.Logger (*log.Logger).Fatal��G.ptr.prototype.Fatal=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &b=this;  Lc=A.Sprint(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  kC.Exit(1);    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Fatal};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Fatal=function(a){return this.$val.Fatal(a);};Logger
fmt.Sprint
log.Loggeros.Exit (*log.Logger).Fatalf��G.ptr.prototype.Fatalf=function(a,b){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=this;  �d=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;f=c.Output(2,e);$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;  %C.Exit(1);    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Fatalf};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Fatalf=function(a,b){return this.$val.Fatalf(a,b);};Loggerfmt.Sprintf
log.Loggeros.Exit (*log.Logger).Fatalln��G.ptr.prototype.Fatalln=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;  �c=A.Sprintln(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  �C.Exit(1);    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Fatalln};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Fatalln=function(a){return this.$val.Fatalln(a);};Loggerfmt.Sprintln
log.Loggeros.Exit (*log.Logger).Panic��G.ptr.prototype.Panic=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #b=this;  Ic=A.Sprint(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  `e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  p$panic(new $String(d));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Panic};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Panic=function(a){return this.$val.Panic(a);};Logger
fmt.Sprint
log.Logger (*log.Logger).Panicf��G.ptr.prototype.Panicf=function(a,b){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=this;  �d=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  f=c.Output(2,e);$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;  -$panic(new $String(e));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Panicf};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Panicf=function(a,b){return this.$val.Panicf(a,b);};Loggerfmt.Sprintf
log.Logger (*log.Logger).Panicln��G.ptr.prototype.Panicln=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;  �c=A.Sprintln(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  �e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  �$panic(new $String(d));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Panicln};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Panicln=function(a){return this.$val.Panicln(a);};Loggerfmt.Sprintln
log.Logger (*log.Logger).Flags��G.ptr.prototype.Flags=function(){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  a=this;  5a.mu.Lock();  B$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  Wreturn a.flag;    }catch(err){$err=err;return 0;}finally{$callDeferred($deferred,$err);}};G.prototype.Flags=function(){return this.$val.Flags();};Logger
log.Logger (*log.Logger).SetFlags��G.ptr.prototype.SetFlags=function(a){var $ptr,a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  �b=this;  �b.mu.Lock();  �$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  �b.flag=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};G.prototype.SetFlags=function(a){return this.$val.SetFlags(a);};Logger
log.Logger (*log.Logger).Prefix��G.ptr.prototype.Prefix=function(){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  .a=this;  La.mu.Lock();  Y$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  nreturn a.prefix;    }catch(err){$err=err;return"";}finally{$callDeferred($deferred,$err);}};G.prototype.Prefix=function(){return this.$val.Prefix();};Logger
log.Logger (*log.Logger).SetPrefix��G.ptr.prototype.SetPrefix=function(a){var $ptr,a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  �b=this;  �b.mu.Lock();  �$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  b.prefix=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};G.prototype.SetPrefix=function(a){return this.$val.SetPrefix(a);};Logger
log.Logger log.SetOutputK�BK=function(a){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  zI.mu.Lock();  �$deferred.push([$methodVal(I.mu,"Unlock"),[]]);  �I.out=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};$pkg.SetOutput=K;	SetOutputlog.SetOutputlog.std 	log.FlagsL@L=function(){var $ptr;  �return I.Flags();    };$pkg.Flags=L;Flags	log.Flagslog.std log.SetFlagsMCM=function(a){var $ptr,a;  jI.SetFlags(a);    };$pkg.SetFlags=M;SetFlagslog.SetFlagslog.std 
log.PrefixNBN=function(){var $ptr;  �return I.Prefix();    };$pkg.Prefix=N;Prefix
log.Prefixlog.std log.SetPrefixOEO=function(a){var $ptr,a;  JI.SetPrefix(a);    };$pkg.SetPrefix=O;	SetPrefixlog.SetPrefixlog.std 	log.PrintP� P=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  !b=A.Sprint(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:P};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Print=P;Print
fmt.Sprint	log.Printlog.std 
log.PrintfQ�6Q=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=I.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:Q};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Printf=Q;Printffmt.Sprintf
log.Printflog.std log.PrintlnR�$R=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:   �b=A.Sprintln(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:R};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Println=R;Printlnfmt.Sprintlnlog.Printlnlog.std 	log.FatalS�/S=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  !)b=A.Sprint(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  !JC.Exit(1);    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:S};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Fatal=S;Fatal
fmt.Sprint	log.Fatallog.stdos.Exit 
log.FatalfT�ET=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  !�c=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=I.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  !�C.Exit(1);    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:T};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Fatalf=T;Fatalffmt.Sprintf
log.Fatalflog.stdos.Exit log.FatallnU�3U=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  "pb=A.Sprintln(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  "�C.Exit(1);    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:U};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Fatalln=U;Fatallnfmt.Sprintlnlog.Fatallnlog.stdos.Exit 	log.PanicV�AV=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #b=A.Sprint(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  #d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  #+$panic(new $String(c));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:V};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Panic=V;Panic
fmt.Sprint	log.Paniclog.std 
log.PanicfW�WW=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #�c=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  #�e=I.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  #�$panic(new $String(d));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:W};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Panicf=W;Panicffmt.Sprintf
log.Panicflog.std log.PaniclnX�EX=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  $Ob=A.Sprintln(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  $hd=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  $z$panic(new $String(c));    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:X};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Panicln=X;Paniclnfmt.Sprintlnlog.Paniclnlog.std ��{"Base":9350,"Files":[{"Name":"/usr/local/go/src/log/log.go","Base":1,"Size":9348,"Lines":[0,55,109,159,160,239,314,390,463,532,559,629,694,706,707,716,723,729,735,746,754,762,764,765,851,859,939,1016,1084,1139,1194,1247,1338,1419,1523,1596,1598,1599,1671,1745,1817,1890,1911,1986,2050,2083,2128,2181,2183,2184,2241,2291,2358,2411,2470,2524,2526,2527,2567,2568,2661,2695,2736,2758,2783,2810,2819,2822,2823,2862,2878,2892,2927,2934,2942,2969,2972,3004,3006,3007,3088,3122,3168,3193,3225,3247,3275,3303,3331,3352,3380,3384,3425,3456,3478,3506,3527,3555,3576,3610,3639,3676,3681,3709,3713,3716,3757,3787,3804,3844,3868,3892,3903,3909,3914,3930,3934,3965,3992,4014,4045,4048,4050,4051,4123,4191,4259,4325,4395,4418,4475,4513,4530,4544,4557,4578,4619,4681,4697,4711,4759,4770,4786,4798,4802,4816,4819,4838,4879,4908,4948,4978,4981,5011,5023,5025,5026,5075,5129,5188,5228,5230,5231,5279,5332,5407,5408,5458,5513,5592,5593,5663,5706,5737,5749,5751,5752,5824,5883,5923,5935,5937,5938,6012,6057,6090,6102,6104,6105,6172,6215,6238,6254,6264,6266,6267,6336,6395,6427,6443,6453,6455,6456,6527,6572,6597,6613,6623,6625,6626,6676,6707,6720,6741,6756,6758,6759,6809,6847,6860,6881,6896,6898,6899,6951,6986,6999,7020,7037,7039,7040,7092,7136,7149,7170,7189,7191,7192,7258,7288,7303,7326,7339,7341,7342,7401,7420,7440,7442,7443,7502,7528,7548,7550,7551,7612,7635,7656,7658,7659,7720,7752,7775,7777,7778,7827,7828,7883,7936,7967,8000,8002,8003,8059,8113,8160,8202,8204,8205,8262,8317,8350,8385,8387,8388,8456,8487,8520,8532,8534,8535,8605,8652,8694,8706,8708,8709,8781,8814,8849,8861,8863,8864,8929,8960,8983,9001,9011,9013,9014,9081,9128,9160,9178,9188,9190,9191,9260,9293,9318,9336,9346],"Infos":null}]}
 