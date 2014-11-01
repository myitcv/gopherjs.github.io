0��snet/http/cookiejar�.package cookiejar
import errors "errors"
import fmt "fmt"
import net "net"
import http "net/http"
import url "net/url"
import sort "sort"
import strings "strings"
import sync "sync"
import time "time"
import utf8 "unicode/utf8"
type @"".Jar struct { @"".psList @"".PublicSuffixList; @"".mu @"sync".Mutex; @"".entries map[string]map[string]@"".entry; @"".nextSeqNum uint64 }
func (? *@"".Jar) @"".Cookies(@"".u *@"net/url".URL) (@"".cookies []*@"net/http".Cookie)
func (? *@"".Jar) @"".SetCookies(@"".u *@"net/url".URL, @"".cookies []*@"net/http".Cookie) ()
func (? *@"".Jar) @"".cookies(@"".u *@"net/url".URL, @"".now @"time".Time) (@"".cookies []*@"net/http".Cookie)
func (? *@"".Jar) @"".domainAndType(@"".host string, @"".domain string) (? string, ? bool, ? error)
func (? *@"".Jar) @"".newEntry(@"".c *@"net/http".Cookie, @"".now @"time".Time, @"".defPath string, @"".host string) (@"".e @"".entry, @"".remove bool, @"".err error)
func (? *@"".Jar) @"".setCookies(@"".u *@"net/url".URL, @"".cookies []*@"net/http".Cookie, @"".now @"time".Time) ()
func @"".New(@"".o *@"".Options) (? *@"".Jar, ? error)
type @"".Options struct { @"".PublicSuffixList @"".PublicSuffixList }
type @"".PublicSuffixList interface { @"".PublicSuffix(@"".domain string) (? string); @"".String() (? string) }
type @"".byPathLength []@"".entry
func (? @"".byPathLength) @"".Len() (? int)
func (? @"".byPathLength) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".byPathLength) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".byPathLength) @"".Len() (? int)
func (? *@"".byPathLength) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".byPathLength) @"".Swap(@"".i int, @"".j int) ()
type @"".entry struct { @"".Name string; @"".Value string; @"".Domain string; @"".Path string; @"".Secure bool; @"".HttpOnly bool; @"".Persistent bool; @"".HostOnly bool; @"".Expires @"time".Time; @"".Creation @"time".Time; @"".LastAccess @"time".Time; @"".seqNum uint64 }
func (? *@"".entry) @"".domainMatch(@"".host string) (? bool)
func (? *@"".entry) @"".id() (? string)
func (? *@"".entry) @"".pathMatch(@"".requestPath string) (? bool)
func (? *@"".entry) @"".shouldSend(@"".https bool, @"".host string, @"".path string) (? bool)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"net/url".URL struct { @"net/url".Scheme string; @"net/url".Opaque string; @"net/url".User *@"net/url".Userinfo; @"net/url".Host string; @"net/url".Path string; @"net/url".RawQuery string; @"net/url".Fragment string }
func (? *@"net/url".URL) @"net/url".IsAbs() (? bool)
func (? *@"net/url".URL) @"net/url".Parse(@"net/url".ref string) (? *@"net/url".URL, ? error)
func (? *@"net/url".URL) @"net/url".Query() (? @"net/url".Values)
func (? *@"net/url".URL) @"net/url".RequestURI() (? string)
func (? *@"net/url".URL) @"net/url".ResolveReference(@"net/url".ref *@"net/url".URL) (? *@"net/url".URL)
func (? *@"net/url".URL) @"net/url".String() (? string)
type @"net/http".Cookie struct { @"net/http".Name string; @"net/http".Value string; @"net/http".Path string; @"net/http".Domain string; @"net/http".Expires @"time".Time; @"net/http".RawExpires string; @"net/http".MaxAge int; @"net/http".Secure bool; @"net/http".HttpOnly bool; @"net/http".Raw string; @"net/http".Unparsed []string }
func (? *@"net/http".Cookie) @"net/http".String() (? string)
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
type @"net/url".Userinfo struct { @"net/url".username string; @"net/url".password string; @"net/url".passwordSet bool }
func (? *@"net/url".Userinfo) @"net/url".Password() (? string, ? bool)
func (? *@"net/url".Userinfo) @"net/url".String() (? string)
func (? *@"net/url".Userinfo) @"net/url".Username() (? string)
type @"net/url".Values map[string][]string
func (? @"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? @"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? @"net/url".Values) @"net/url".Encode() (? string)
func (? @"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? @"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? *@"net/url".Values) @"net/url".Encode() (? string)
func (? *@"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? *@"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
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
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciomathunicodeunicode/utf8bytessyscallstringstimeosstrconvreflectfmt	math/randsortnetbufiocompress/flatehash
hash/crc32
crypto/aesencoding/binary
crypto/desmath/bigcrypto/ellipticcrypto/ecdsacrypto/hmac
crypto/md5crypto/rand
crypto/rc4
crypto/rsacrypto/sha1
crypto/dsa
crypto/tlslogmime
sync:Mutex	time:Time 0�� 0O�<O=$pkg.entry=$newType(0,"Struct","cookiejar.entry","entry","net/http/cookiejar",function(Name_,Value_,Domain_,Path_,Secure_,HttpOnly_,Persistent_,HostOnly_,Expires_,Creation_,LastAccess_,seqNum_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Value=Value_!==undefined?Value_:"";this.Domain=Domain_!==undefined?Domain_:"";this.Path=Path_!==undefined?Path_:"";this.Secure=Secure_!==undefined?Secure_:false;this.HttpOnly=HttpOnly_!==undefined?HttpOnly_:false;this.Persistent=Persistent_!==undefined?Persistent_:false;this.HostOnly=HostOnly_!==undefined?HostOnly_:false;this.Expires=Expires_!==undefined?Expires_:new I.Time.Ptr();this.Creation=Creation_!==undefined?Creation_:new I.Time.Ptr();this.LastAccess=LastAccess_!==undefined?LastAccess_:new I.Time.Ptr();this.seqNum=seqNum_!==undefined?seqNum_:new $Uint64(0,0);});�*($ptrType(O)).methods=[["domainMatch","domainMatch","net/http/cookiejar",$funcType([$String],[$Bool],false),-1],["id","id","net/http/cookiejar",$funcType([],[$String],false),-1],["pathMatch","pathMatch","net/http/cookiejar",$funcType([$String],[$Bool],false),-1],["shouldSend","shouldSend","net/http/cookiejar",$funcType([$Bool,$String,$String],[$Bool],false),-1]];O.init([["Name","Name","",$String,""],["Value","Value","",$String,""],["Domain","Domain","",$String,""],["Path","Path","",$String,""],["Secure","Secure","",$Bool,""],["HttpOnly","HttpOnly","",$Bool,""],["Persistent","Persistent","",$Bool,""],["HostOnly","HostOnly","",$Bool,""],["Expires","Expires","",I.Time,""],["Creation","Creation","",I.Time,""],["LastAccess","LastAccess","",I.Time,""],["seqNum","seqNum","net/http/cookiejar",$Uint64,""]]);0entry0	time:Time 0� 0QkQ=$pkg.byPathLength=$newType(12,"Slice","cookiejar.byPathLength","byPathLength","net/http/cookiejar",null);�nQ.methods=[["Len","Len","",$funcType([],[$Int],false),-1],["Less","Less","",$funcType([$Int,$Int],[$Bool],false),-1],["Swap","Swap","",$funcType([$Int,$Int],[],false),-1]];($ptrType(Q)).methods=[["Len","Len","",$funcType([],[$Int],false),-1],["Less","Less","",$funcType([$Int,$Int],[$Bool],false),-1],["Swap","Swap","",$funcType([$Int,$Int],[],false),-1]];Q.init(O);0byPathLength0net/http/cookiejar:entry 0$ 0W  0errIllegalDomain0  0& 0X  0errMalformedDomain0  0! 0Y  0
errors:New#net/http/cookiejar:errIllegalDomain 0 0  =    X=A.New("cookiejar: malformed cookie domain attribute");0 03
errors:New%net/http/cookiejar:errMalformedDomain 0y 0  <    Y=A.New("cookiejar: no host name available (IP only)");0 0.
errors:New net/http/cookiejar:errNoHostname 0�� 0  L    Z=new I.Time.Ptr();$copy(Z,I.Date(9999,12,31,23,59,59,0,I.UTC),I.Time);0 0>net/http/cookiejar:endOfTime	time:Date	time:Timetime:UTC 0�Cnet/http/cookiejar.New0N��N=$pkg.New=function(a){var b;  	�b=new M.Ptr($ifaceNil,new H.Mutex.Ptr(),new $Map(),new $Uint64(0,0));  	�    if(!(a===($ptrType(L)).nil)){  	�b.psList=a.PublicSuffixList;    }  	�return[b,$ifaceNil];    }; 0New0@net/http/cookiejar:Jarnet/http/cookiejar:Options
sync:Mutex 0�M(*net/http/cookiejar.entry).id0 ��O.Ptr.prototype.id=function(){var a;  �a=this;  �return B.Sprintf("%s;%s;%s",new($sliceType($emptyInterface))([new $String(a.Domain),new $String(a.Path),new $String(a.Name)]));    };O.prototype.id=function(){return this.$val.id();}; 0entryid0'fmt:Sprintfnet/http/cookiejar:entry 0�n&(*net/http/cookiejar.entry).shouldSend0 ��O.Ptr.prototype.shouldSend=function(a,b,c){var d;  
shouldSend0Xnet/http/cookiejar:domainMatchnet/http/cookiejar:entrynet/http/cookiejar:pathMatch 0�e'(*net/http/cookiejar.entry).domainMatch0 ��O.Ptr.prototype.domainMatch=function(a){var b;  �b=this;  �    if(b.Domain===a){  �return true;    }  �return!b.HostOnly&&P(a,b.Domain);    };O.prototype.domainMatch=function(a){return this.$val.domainMatch(a);}; 0entrydomainMatch0;net/http/cookiejar:entrynet/http/cookiejar:hasDotSuffix 0��%(*net/http/cookiejar.entry).pathMatch0 ��O.Ptr.prototype.pathMatch=function(a){var b;  [b=this;  �    if(a===b.Path){  �return true;    }  �    if(G.HasPrefix(a,b.Path)){  �    if(b.Path.charCodeAt((b.Path.length-1>>0))===47){  return true;        }else if(a.charCodeAt(b.Path.length)===47){  qreturn true;    }    }  �return false;    };O.prototype.pathMatch=function(a){return this.$val.pathMatch(a);}; 0entry	pathMatch0-net/http/cookiejar:entrystrings:HasPrefix 0��net/http/cookiejar.hasDotSuffix0P��P=function(a,b){  return a.length>b.length&&(a.charCodeAt(((a.length-b.length>>0)-1>>0))===46)&&a.substring((a.length-b.length>>0))===b;    }; 0hasDotSuffix0  0��%(net/http/cookiejar.byPathLength).Len0 ��Q.prototype.Len=function(){var a;  >a=this;  Zreturn a.$length;    };$ptrType(Q).prototype.Len=function(){return this.$get().Len();}; 0byPathLength0!net/http/cookiejar:byPathLength 0�c&(net/http/cookiejar.byPathLength).Less0 ��Q.prototype.Less=function(a,b){var c,d,e;  qc=this;  �    if(!((((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Path.length===((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Path.length))){  �return((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Path.length>((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Path.length;    }  �    if(!((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Creation.Equal($clone(((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Creation,I.Time))){  return((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Creation.Before($clone(((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Creation,I.Time));    }  Ereturn(d=((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).seqNum,e=((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).seqNum,(d.$high<e.$high||(d.$high===e.$high&&d.$low<e.$low)));    };$ptrType(Q).prototype.Less=function(a,b){return this.$get().Less(a,b);}; 0byPathLength0,net/http/cookiejar:byPathLength	time:Time 0��&(net/http/cookiejar.byPathLength).Swap0 �%Q.prototype.Swap=function(a,b){var c,d,e;  oc=this;  �d=new O.Ptr();$copy(d,((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]),O);e=new O.Ptr();$copy(e,((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]),O);$copy(((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]),d,O);$copy(((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]),e,O);    };$ptrType(Q).prototype.Swap=function(a,b){return this.$get().Swap(a,b);}; 0byPathLength0;net/http/cookiejar:byPathLengthnet/http/cookiejar:entry 0�m!(*net/http/cookiejar.Jar).Cookies0 ��M.Ptr.prototype.Cookies=function(a){var b=($sliceType(($ptrType(D.Cookie)))).nil,c;  Ec=this;  }    b=c.cookies(a,$clone(I.Now(),I.Time));return b;    };M.prototype.Cookies=function(a){return this.$val.Cookies(a);}; 0Jar0Znet/http/cookiejar:Jarnet/http/cookiejar:cookiesnet/http:Cookietime:Now	time:Time 0��!(*net/http/cookiejar.Jar).cookies0 �iM.Ptr.prototype.cookies=function(a,b){var c=($sliceType(($ptrType(D.Cookie)))).nil,$deferred=[],$err=null,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;try{$deferFrames.push($deferred);  �d=this;  3    if(!(a.Scheme==="http")&&!(a.Scheme==="https")){  d    c=c;return c;    }  we=R(a.Host);f=e[0];g=e[1];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �    c=c;return c;    }  �h=T(f,d.psList);  �d.mu.Lock();  �$deferred.push([$methodVal(d.mu,"Unlock"),[]]);  j=(i=d.entries[h],i!==undefined?i.v:false);      if(j===false){  2    c=c;return c;    }  Fk=a.Scheme==="https";  dl=a.Path;  t    if(l===""){  �l="/";    }  �m=false;  �  �n=($sliceType(O)).nil;  �o=j;p=0;q=$keys(o);while(p<q.length){r=o[q[p]];        if(r===undefined){    p++;continue;    }s=r.k;t=new O.Ptr();$copy(t,r.v,O);  �    if(t.Persistent&&!t.Expires.After($clone(b,I.Time))){  delete j[s];  !m=true;  4p++;continue;    }  C    if(!t.shouldSend(k,f,l)){  lp++;continue;    }  {$copy(t.LastAccess,b,I.Time);  �u=s;(j||$throwRuntimeError("assignment to entry in nil map"))[u]={k:u,v:$clone(t,O)};  �n=$append(n,t);  �m=true;    p++;}  �    if(m){  �    if($keys(j).length===0){  �delete d.entries[h];    }else{  $v=h;(d.entries||$throwRuntimeError("assignment to entry in nil map"))[v]={k:v,v:j};    }    }  EF.Sort($subslice(new Q(n.$array),n.$offset,n.$offset+n.$length));  hw=n;x=0;while(x<w.$length){y=new O.Ptr();$copy(y,((x<0||x>=w.$length)?$throwRuntimeError("index out of range"):w.$array[w.$offset+x]),O);  �c=$append(c,new D.Cookie.Ptr(y.Name,y.Value,"","",new I.Time.Ptr(),"",0,false,false,"",($sliceType($String)).nil));    x++;}  �    c=c;return c;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return c;}};M.prototype.cookies=function(a,b){return this.$val.cookies(a,b);}; 0Jarcookies0��net/http/cookiejar:Jarnet/http/cookiejar:byPathLength net/http/cookiejar:canonicalHostnet/http/cookiejar:entrynet/http/cookiejar:jarKeynet/http/cookiejar:shouldSendnet/http:Cookie	sort:Sort	time:Time 0�=$(*net/http/cookiejar.Jar).SetCookies0 ��M.Ptr.prototype.SetCookies=function(a,b){var c;  zc=this;  �c.setCookies(a,b,$clone(I.Now(),I.Time));    };M.prototype.SetCookies=function(a,b){return this.$val.SetCookies(a,b);}; 0Jar0Lnet/http/cookiejar:Jarnet/http/cookiejar:setCookiestime:Now	time:Time 0��$(*net/http/cookiejar.Jar).setCookies0 ��M.Ptr.prototype.setCookies=function(a,b,c){var $deferred=[],$err=null,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae;try{$deferFrames.push($deferred);  ,d=this;  u    if(b.$length===0){  �return;    }  �    if(!(a.Scheme==="http")&&!(a.Scheme==="https")){  �return;    }  �e=R(a.Host);f=e[0];g=e[1];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  return;    }  h=T(f,d.psList);  5i=V(a.Path);  Vd.mu.Lock();  c$deferred.push([$methodVal(d.mu,"Unlock"),[]]);  yk=(j=d.entries[h],j!==undefined?j.v:false);  �l=false;  �m=b;n=0;while(n<m.$length){o=((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]);  �p=d.newEntry(o,$clone(c,I.Time),i,f);q=new O.Ptr();$copy(q,p[0],O);r=p[1];s=p[2];      if(!($interfaceIsEqual(s,$ifaceNil))){  n++;continue;    }  't=q.id();  6    if(r){  E    if(!(k===false)){  \  _u=(v=k[t],v!==undefined?[v.v,true]:[new O.Ptr(),false]);w=u[1];    if(w){  ~delete k[t];  �l=true;    }    }  �n++;continue;    }  �    if(k===false){  �k=new $Map();    }     x=(y=k[t],y!==undefined?[y.v,true]:[new O.Ptr(),false]);z=new O.Ptr();$copy(z,x[0],O);aa=x[1];    if(aa){  "$copy(q.Creation,z.Creation,I.Time);  ?q.seqNum=z.seqNum;    }else{  c$copy(q.Creation,c,I.Time);  wq.seqNum=d.nextSeqNum;  �  �d.nextSeqNum=(ab=d.nextSeqNum,ac=new $Uint64(0,1),new $Uint64(ab.$high+ac.$high,ab.$low+ac.$low));    }  �$copy(q.LastAccess,c,I.Time);  �ad=t;(k||$throwRuntimeError("assignment to entry in nil map"))[ad]={k:ad,v:$clone(q,O)};  �l=true;    n++;}  �    if(l){  �    if($keys(k).length===0){  delete d.entries[h];    }else{  0ae=h;(d.entries||$throwRuntimeError("assignment to entry in nil map"))[ae]={k:ae,v:k};    }    }    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};M.prototype.setCookies=function(a,b,c){return this.$val.setCookies(a,b,c);}; 0Jar
setCookies0��net/http/cookiejar:Jar net/http/cookiejar:canonicalHostnet/http/cookiejar:defaultPathnet/http/cookiejar:entrynet/http/cookiejar:idnet/http/cookiejar:jarKeynet/http/cookiejar:newEntry	time:Time 0�� net/http/cookiejar.canonicalHost0R�/R=function(a){var b,c;  �  �b=$ifaceNil;  �a=G.ToLower(a);      if(S(a)){  %c=C.SplitHostPort(a);a=c[0];b=c[2];  N    if(!($interfaceIsEqual(b,$ifaceNil))){  areturn["",b];    }    }  x    if(G.HasSuffix(a,".")){  �a=a.substring(0,(a.length-1>>0));    }  �return AD(a);    }; 0
return(a.charCodeAt(0)===91)&&G.Contains(a,"]:");    }; 0	hasPort0!strings:Contains
  2
fmt:Errorfnet/http/cookiejar:adaptnet/http/cookiejar:encodeDigit 0�net/http/cookiejar.encodeDigit0AB��AB=function(a){  <�  <�if(0<=a&&a<26){  <�return((a+97>>0)<<24>>>24);      <�}else if(26<=a&&a<36){  <�return((a+22>>0)<<24>>>24);    }  =$panic(new $String("cookiejar: internal error in punycode encoding"));    }; 0
 �