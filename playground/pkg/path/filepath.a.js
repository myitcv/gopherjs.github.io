0���
import errors "errors"
import os "os"
import runtime "runtime"
import sort "sort"
import strings "strings"
import utf8 "unicode/utf8"
import bytes "bytes"
func @"".Abs(@"".path string) (? string, ? error)
func @"".Base(@"".path string) (? string)
func @"".Clean(@"".path string) (? string)
func @"".Dir(@"".path string) (? string)
var @"".ErrBadPattern error
func @"".EvalSymlinks(@"".path string) (? string, ? error)
func @"".Ext(@"".path string) (? string)
func @"".FromSlash(@"".path string) (? string)
func @"".Glob(@"".pattern string) (@"".matches []string, @"".err error)
func @"".HasPrefix(@"".p string, @"".prefix string) (? bool)
func @"".IsAbs(@"".path string) (? bool)
func @"".Join(@"".elem ...string) (? string)
const @"".ListSeparator = '\u003a'
func @"".Match(@"".pattern string, @"".name string) (@"".matched bool, @"".err error)
func @"".Rel(@"".basepath string, @"".targpath string) (? string, ? error)
const @"".Separator = '\u002f'
var @"".SkipDir error
func @"".Split(@"".path string) (@"".dir string, @"".file string)
func @"".SplitList(@"".path string) (? []string)
func @"".ToSlash(@"".path string) (? string)
func @"".VolumeName(@"".path string) (@"".v string)
func @"".Walk(@"".root string, @"".walkFn @"".WalkFunc) (? error)
type @"".WalkFunc func (@"".path string, @"".info @"os".FileInfo, @"".err error) (? error)
type @"".lazybuf struct { @"".path string; @"".buf []byte; @"".w int; @"".volAndPath string; @"".volLen int }
func (? *@"".lazybuf) @"".append(@"".c byte) ()
func (? *@"".lazybuf) @"".index(@"".i int) (? byte)
func (? *@"".lazybuf) @"".string() (? string)
import time "time"
type @"os".FileInfo interface { @"os".IsDir() (? bool); @"os".ModTime() (? @"time".Time); @"os".Mode() (? @"os".FileMode); @"os".Name() (? string); @"os".Size() (? int64); @"os".Sys() (? interface {  }) }
type @"time".Time struct { @"time".sec int64; @"time".nsec uintptr; @"time".loc *@"time".Location }
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
type @"os".FileMode uint32
func (? @"os".FileMode) @"os".IsDir() (? bool)
func (? @"os".FileMode) @"os".IsRegular() (? bool)
func (? @"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? @"os".FileMode) @"os".String() (? string)
func (? *@"os".FileMode) @"os".IsDir() (? bool)
func (? *@"os".FileMode) @"os".IsRegular() (? bool)
func (? *@"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? *@"os".FileMode) @"os".String() (? string)
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
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytessyscallstringstimeossort0\0errorsA0osB0runtimeC0	sortD0stringsE0unicode/utf8F0
bytesG0�K�0�] 0O�gO=$pkg.lazybuf=$newType(0,"Struct","filepath.lazybuf","lazybuf","path/filepath",function(path_,buf_,w_,volAndPath_,volLen_){this.$val=this;this.path=path_!==undefined?path_:"";this.buf=buf_!==undefined?buf_:($sliceType($Uint8)).nil;this.w=w_!==undefined?w_:0;this.volAndPath=volAndPath_!==undefined?volAndPath_:"";this.volLen=volLen_!==undefined?volLen_:0;});��($ptrType(O)).methods=[["append","append","path/filepath",$funcType([$Uint8],[],false),-1],["index","index","path/filepath",$funcType([$Int],[$Uint8],false),-1],["string","string","path/filepath",$funcType([],[$String],false),-1]];O.init([["path","path","path/filepath",$String,""],["buf","buf","path/filepath",($sliceType($Uint8)),""],["w","w","path/filepath",$Int,""],["volAndPath","volAndPath","path/filepath",$String,""],["volLen","volLen","path/filepath",$Int,""]]);0	lazybuf0  0�� 0ZWZ=$pkg.WalkFunc=$newType(4,"Func","filepath.WalkFunc","WalkFunc","path/filepath",null);3Z.init([$String,B.FileInfo,$error],[$error],false);0
WalkFunc0
errors:Newpath/filepath:ErrBadPattern 0a 0  /    $pkg.SkipDir=A.New("skip this directory");0 0#
errors:Newpath/filepath:SkipDir 0E 0      AA=B.Lstat;0lstat0os:Lstatpath/filepath:lstat 0�`path/filepath.Match0H��H=$pkg.Match=function(a,b){var c=false,d=$ifaceNil,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;    Pattern:while(a.length>0){  4  8e=false;  D  Hf="";  Wg=I(a);e=g[0];f=g[1];a=g[2];  �    if(e&&f===""){  �    h=E.Index(b,"/")<0;i=$ifaceNil;c=h;d=i;return[c,d];    }  @j=J(f,b);k=j[0];l=j[1];m=j[2];      if(l&&((k.length===0)||a.length>0)){  3b=k;  ?continue;    }  N    if(!($interfaceIsEqual(m,$ifaceNil))){  a    n=false;o=m;c=n;d=o;return[c,d];    }  y    if(e){  �  �p=0;while(p<b.length&&!((b.charCodeAt(p)===47))){  q=J(f,b.substring((p+1>>0)));r=q[0];s=q[1];t=q[2];  1    if(s){      if((a.length===0)&&r.length>0){  �  �  �p=p+(1)>>0;continue;    }  �b=r;  �continue Pattern;    }  �    if(!($interfaceIsEqual(t,$ifaceNil))){  �    u=false;v=t;c=u;d=v;return[c,d];    }      �  �p=p+(1)>>0;}    }  	     w=false;x=$ifaceNil;c=w;d=x;return[c,d];    }  	6    y=b.length===0;z=$ifaceNil;c=y;d=z;return[c,d];    }; 0Match0Bpath/filepath:matchChunkpath/filepath:scanChunk
 while(a.length>0&&(a.charCodeAt(0)===42)){  
.a=a.substring(1);  
Fb=true;    }  
Ve=false;  
h  
lf=0;  
r  
y  
}f=0;Scan:while(f<a.length){  
�g=a.charCodeAt(f);  
�if(g===92){  
�      if((f+1>>0)<a.length){  9  9f=f+(1)>>0;    }          J}else if(g===91){  We=true;      h}else if(g===93){  ue=false;      �}else if(g===42){  �    if(!e){  �break Scan;    }    }      
�  
�f=f+(1)>>0;}  �    h=b;i=a.substring(0,f);j=a.substring(f);b=h;c=i;d=j;return[b,c,d];    }; 0	scanChunk0  0��path/filepath.matchChunk0J�ZJ=function(a,b){var c="",d=false,e=$ifaceNil,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;  �while(a.length>0){  
    if(b.length===0){  
f=a.charCodeAt(0);  
matchChunk0Tpath/filepath:ErrBadPatternpath/filepath:getEscunicode/utf8:DecodeRuneInString 0��path/filepath.getEsc0K�K=function(a){var b=0,c="",d=$ifaceNil,e,f;  �    if((a.length===0)||(a.charCodeAt(0)===45)||(a.charCodeAt(0)===93)){  �d=$pkg.ErrBadPattern;  
return[b,c,d];    }      if((a.charCodeAt(0)===92)&&true){  Ja=a.substring(1);  ^    if(a.length===0){  vd=$pkg.ErrBadPattern;  �return[b,c,d];    }    }  �e=F.DecodeRuneInString(a);b=e[0];f=e[1];  �    if((b===65533)&&(f===1)){  �d=$pkg.ErrBadPattern;    }  c=a.substring(f);      if(c.length===0){  -d=$pkg.ErrBadPattern;    }  Ereturn[b,c,d];    }; 0getEsc0>path/filepath:ErrBadPatternunicode/utf8:DecodeRuneInString 0�Jpath/filepath.Glob0L��L=$pkg.Glob=function(a){var b=($sliceType($String)).nil,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  �    if(!N(a)){  �  �d=B.Lstat(a);c=d[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  �    e=($sliceType($String)).nil;f=$ifaceNil;b=e;c=f;return[b,c];    }  �    g=new($sliceType($String))([a]);h=$ifaceNil;b=g;c=h;return[b,c];    }  i=T(a);j=i[0];k=i[1];  $l=j;  2if(l===""){  =j=".";      H}else if(l==="/"){    }else{  yj=j.substring(0,(j.length-1>>0));    }  �    if(!N(j)){  �    m=M(j,k,($sliceType($String)).nil);b=m[0];c=m[1];return[b,c];    }  �  �n=($sliceType($String)).nil;  �o=L(j);n=o[0];c=o[1];      if(!($interfaceIsEqual(c,$ifaceNil))){  #return[b,c];    }  .p=n;q=0;while(q<p.$length){r=((q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q]);  Fs=M(r,k,b);b=s[0];c=s[1];  n    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }    q++;}  �return[b,c];    }; 0Glob0Jos:Lstatpath/filepath:Splitpath/filepath:globpath/filepath:hasMeta 0�wpath/filepath.glob0M�M=function(a,b,c){var d=($sliceType($String)).nil,e=$ifaceNil,$deferred=[],$err=null,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;try{$deferFrames.push($deferred);  �d=c;  �f=B.Stat(a);g=f[0];h=f[1];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[d,e];    }      if(!g.IsDir()){  return[d,e];    }   i=B.Open(a);j=i[0];h=i[1];  8    if(!($interfaceIsEqual(h,$ifaceNil))){  Jreturn[d,e];    }  U$deferred.push([$methodVal(j,"Close"),[]]);  gk=j.Readdirnames(-1);l=k[0];h=k[1];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[d,e];    }  �D.Strings(l);  �m=l;n=0;while(n<m.$length){o=((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]);  �p=H(b,o);q=p[0];r=p[1];  �    if(!($interfaceIsEqual(r,$ifaceNil))){      s=d;t=r;d=s;e=t;return[d,e];    }  #    if(q){  3d=$append(d,U(new($sliceType($String))([a,o])));    }    n++;}  Wreturn[d,e];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[d,e];}}; 0glob0Ios:Openos:Statpath/filepath:Joinpath/filepath:Matchsort:Strings 0zpath/filepath.hasMeta0N8N=function(a){  !return E.IndexAny(a,"*?[")>=0;    }; 0	hasMeta0strings:IndexAny 0��(*path/filepath.lazybuf).index0 �:O.Ptr.prototype.index=function(a){var b,c;  *b=this;  K    if(!(b.buf===($sliceType($Uint8)).nil)){  _return(c=b.buf,((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]));    }  sreturn b.path.charCodeAt(a);    };O.prototype.index=function(a){return this.$val.index(a);}; 0lazybufindex0path/filepath:lazybuf 0�Y(*path/filepath.lazybuf).append0 �O.Ptr.prototype.append=function(a){var b,c,d;  �b=this;  �    if(b.buf===($sliceType($Uint8)).nil){  �    if(b.w<b.path.length&&(b.path.charCodeAt(b.w)===a)){  �  �b.w=b.w+(1)>>0;  �return;    }  b.buf=($sliceType($Uint8)).make(b.path.length);  '$copyString(b.buf,b.path.substring(0,b.w));    }  E(c=b.buf,d=b.w,(d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]=a);  U  Ub.w=b.w+(1)>>0;    };O.prototype.append=function(a){return this.$val.append(a);}; 0lazybufappend0path/filepath:lazybuf 0��(*path/filepath.lazybuf).string0 �8O.Ptr.prototype.string=function(){var a;  da=this;  �    if(a.buf===($sliceType($Uint8)).nil){  �return a.volAndPath.substring(0,(a.volLen+a.w>>0));    }  �return a.volAndPath.substring(0,a.volLen)+$bytesToString($subslice(a.buf,0,a.w));    };O.prototype.string=function(){return this.$val.string();}; 0lazybufstring0path/filepath:lazybuf 0��path/filepath.Clean0P�P=$pkg.Clean=function(a){var b,c,d,e,f,g,h,i,j,k,l;  $b=a;  $+c=AI(a);  $Ja=a.substring(c);  $`    if(a===""){  $r    if(c>1&&!((b.charCodeAt(1)===58))){  $�return R(b);    }  $�return b+".";    }  $�d=B.IsPathSeparator(a.charCodeAt(0));  &e=a.length;  &.f=new O.Ptr(a,($sliceType($Uint8)).nil,0,b,c);  &tg=0;h=0;i=g;j=h;  &�    if(d){  &�f.append(47);  &�k=1;l=1;i=k;j=l;    }  &�while(i<e){  &�  &�if(B.IsPathSeparator(a.charCodeAt(i))){  '  'i=i+(1)>>0;      ' }else if((a.charCodeAt(i)===46)&&(((i+1>>0)===e)||B.IsPathSeparator(a.charCodeAt((i+1>>0))))){  'w  'wi=i+(1)>>0;      '}}else if((a.charCodeAt(i)===46)&&(a.charCodeAt((i+1>>0))===46)&&(((i+2>>0)===e)||B.IsPathSeparator(a.charCodeAt((i+2>>0))))){  (i=i+(2)>>0;  (
errors:Newpath/filepath:Cleanpath/filepath:VolumeName
VolumeName0path/filepath:volumeNameLen 0��path/filepath.IsAbs0AH@AH=$pkg.IsAbs=function(a){  Pureturn E.HasPrefix(a,"/");    }; 0IsAbs0strings:HasPrefix 0apath/filepath.volumeNameLen0AI$AI=function(a){  Q%return 0;    }; 0
errors:Newos:Lstatos:Readlinkpath/filepath:Cleanpath/filepath:IsAbsstrings:IndexRune 0 ��{"Base":22414,"Files":[{"Name":"/usr/local/go/src/pkg/path/filepath/match.go","Base":1,"Size":6988,"Lines":[0,55,109,159,160,177,178,187,197,203,214,222,233,249,251,252,313,371,372,439,465,468,480,493,502,567,626,666,718,781,817,820,840,898,934,988,991,1061,1128,1145,1148,1213,1232,1235,1296,1305,1329,1345,1364,1408,1435,1494,1552,1556,1597,1637,1702,1772,1792,1839,1851,1863,1867,1885,1906,1910,1922,1963,1984,2044,2092,2104,2169,2211,2226,2233,2247,2269,2275,2295,2318,2324,2329,2333,2353,2356,2384,2386,2387,2461,2493,2558,2603,2627,2641,2644,2662,2673,2679,2715,2737,2750,2784,2839,2867,2876,2882,2887,2899,2917,2929,2948,2960,2977,2992,2997,3001,3004,3044,3046,3047,3110,3169,3244,3313,3335,3354,3364,3368,3388,3400,3422,3460,3473,3494,3555,3601,3625,3649,3660,3665,3688,3718,3734,3756,3761,3784,3802,3817,3826,3883,3906,3917,3923,3943,3995,4007,4013,4025,4050,4107,4120,4127,4133,4161,4179,4185,4198,4203,4228,4239,4244,4245,4257,4283,4294,4299,4337,4350,4371,4372,4385,4419,4441,4466,4491,4503,4509,4514,4529,4530,4541,4566,4577,4582,4595,4616,4620,4623,4644,4646,4647,4726,4789,4849,4871,4880,4883,4935,4955,4978,5001,5011,5015,5018,5058,5094,5116,5119,5139,5162,5184,5187,5195,5197,5198,5261,5329,5397,5447,5450,5508,5532,5578,5597,5601,5633,5636,5637,5666,5680,5690,5702,5727,5740,5750,5809,5812,5813,5833,5863,5866,5867,5883,5903,5920,5929,5932,5955,5995,6013,6023,6027,6030,6038,6040,6041,6106,6165,6225,6260,6333,6346,6371,6388,6397,6400,6418,6427,6430,6454,6471,6480,6483,6500,6501,6535,6552,6561,6564,6585,6586,6613,6649,6667,6684,6688,6703,6734,6738,6741,6749,6751,6752,6821,6845,6878,6943,6986],"Infos":null},{"Name":"/usr/local/go/src/pkg/path/filepath/path.go","Base":6990,"Size":13261,"Lines":[0,55,109,159,160,240,316,333,334,343,353,359,367,378,380,381,431,489,555,612,634,653,672,688,707,723,725,726,764,783,801,804,822,824,825,860,879,924,933,943,947,983,1011,1014,1030,1037,1039,1040,1076,1095,1132,1135,1189,1191,1192,1200,1234,1272,1274,1275,1334,1399,1455,1458,1519,1585,1656,1710,1764,1828,1861,1864,1941,1985,1988,2047,2074,2077,2133,2161,2213,2246,2268,2299,2321,2338,2382,2402,2436,2440,2468,2471,2510,2511,2527,2586,2640,2702,2767,2783,2853,2872,2885,2909,2928,2931,2932,2945,2956,2992,3017,3024,3094,3110,3117,3207,3250,3260,3272,3296,3317,3329,3395,3408,3414,3431,3494,3513,3540,3546,3566,3586,3605,3610,3621,3646,3672,3726,3752,3757,3776,3830,3854,3859,3863,3866,3867,3898,3915,3933,3936,3937,3969,3971,3972,4040,4105,4138,4173,4196,4210,4213,4271,4273,4274,4346,4415,4442,4479,4502,4516,4519,4577,4579,4580,4657,4715,4802,4841,4865,4867,4868,4932,4991,5055,5080,5143,5188,5213,5233,5286,5292,5295,5326,5328,5329,5398,5464,5498,5533,5559,5574,5633,5637,5640,5651,5653,5654,5707,5765,5822,5833,5864,5935,5957,5976,5980,5983,5994,5996,5997,6072,6082,6159,6221,6270,6297,6299,6300,6351,6417,6486,6548,6588,6606,6632,6635,6658,6675,6692,6695,6723,6725,6726,6803,6865,6942,7012,7064,7141,7216,7270,7303,7336,7361,7386,7405,7423,7426,7454,7482,7500,7512,7515,7580,7634,7688,7743,7819,7822,7896,7913,7930,7954,7961,8002,8010,8014,8055,8063,8067,8101,8110,8114,8129,8137,8141,8156,8164,8168,8178,8188,8191,8217,8293,8296,8311,8366,8422,8443,8459,8482,8486,8514,8537,8567,8589,8614,8624,8628,8644,8666,8696,8700,8726,8729,8752,8754,8755,8824,8896,8928,8976,8977,9051,9124,9195,9270,9339,9342,9420,9496,9572,9650,9724,9802,9820,9887,9888,9924,9925,9971,10037,10069,10086,10124,10138,10142,10155,10158,10159,10179,10192,10195,10196,10230,10247,10280,10283,10284,10314,10345,10380,10398,10475,10490,10495,10506,10548,10567,10612,10628,10634,10639,10643,10646,10658,10660,10661,10737,10816,10891,10962,11008,11048,11096,11125,11142,11174,11177,11210,11212,11213,11278,11317,11371,11399,11416,11434,11437,11471,11482,11499,11517,11520,11541,11560,11562,11563,11605,11681,11724,11805,11837,11854,11867,11870,11898,11960,11991,11994,12021,12058,12084,12104,12150,12156,12159,12172,12192,12195,12234,12251,12278,12281,12294,12296,12297,12378,12448,12472,12514,12594,12676,12707,12732,12752,12805,12811,12814,12850,12872,12920,12939,12942,12958,12970,12973,12991,12993,12994,13037,13090,13145,13182,13224,13259],"Infos":null},{"Name":"/usr/local/go/src/pkg/path/filepath/path_unix.go","Base":20252,"Size":818,"Lines":[0,55,109,159,160,229,230,247,248,265,266,313,344,381,383,384,455,482,520,530,532,533,606,646,683,685,686,725,742,762,765,816],"Infos":null},{"Name":"/usr/local/go/src/pkg/path/filepath/symlink.go","Base":21071,"Size":1342,"Lines":[0,55,109,159,160,179,180,197,198,207,216,226,232,243,245,246,295,316,338,394,452,472,503,522,598,602,603,636,678,693,708,730,741,775,779,780,795,816,845,872,877,889,893,894,932,950,968,972,1009,1029,1048,1075,1080,1092,1096,1097,1146,1189,1207,1225,1229,1248,1261,1265,1306,1309,1340],"Infos":null}]}
 �